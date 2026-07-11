---
title: "Scenario-Based System Design Interview Questions for Senior Developers"
categories: [ Interview ]
tags: ["System Design", "Scenario-Based Questions", "Interview", "Microservices", "Scalability"]
description: "A comprehensive list of scenario-based system design and project-related interview questions for senior developers, covering real-world challenges in high-throughput APIs, microservices, caching, and database optimization."
date: 2023-06-26T08:00:00+05:30
lastmod: 2026-07-05T08:00:00+05:30
images: ["images/2023/06/Previous-Project-Questions.jpg"]
author: ahmad
---

## Scenario-Based System Design Questions
💡 Remember: Interviewers are looking for practical thinking, trade-offs, and experience—not just textbook answers.

---

### 🔹 How would you design a high-throughput REST API that handles millions of requests?
**Business Use Case:** "Our new real-time eligibility check API will be used by thousands of provider offices, and we expect it to handle millions of requests per day with low latency. How would you design it to be highly available and scalable?"

**Answer:** "To design a high-throughput API, I'd focus on several key areas:
1.  **Stateless Architecture:** The API must be stateless, allowing any server instance to handle any request. This is crucial for horizontal scaling behind a load balancer.
2.  **Asynchronous Processing:** For non-critical, long-running tasks (like sending an email or generating a report), I would use a message queue like Kafka or RabbitMQ. The API would accept the request, push a job to the queue, and immediately return a `202 Accepted` response to the client.
3.  **Efficient Caching:** I'd implement a multi-layer caching strategy. Frequently accessed, static data would be cached in a distributed cache like Redis. For data specific to a single server, an in-memory cache could be used.
4.  **Database Scaling:** I'd start with a well-indexed database and use connection pooling. For read-heavy workloads, I would implement read replicas to distribute the load.
5.  **Lightweight Data Formats:** While JSON is standard for external APIs, for internal service-to-service communication, I might use more efficient binary formats like Protocol Buffers (Protobuf) to reduce serialization overhead and network latency."

### 🔹 A service is responding slowly in production. How would you identify the root cause?
**Business Use Case:** "During month-end, our claim adjudication service is responding slowly, causing a backlog and delaying payments. What is your step-by-step process to diagnose and fix this production performance issue?"

**Answer:** "My approach would be systematic, starting from the top and drilling down:
1.  **APM Tools:** First, I'd check our Application Performance Monitoring (APM) tool like Datadog or New Relic. I'd look at the transaction traces for the slow endpoints to see which specific span or method call is taking the most time. This often points directly to a slow database query or a call to a downstream service.
2.  **Log Analysis:** I'd correlate the slow requests with application logs. I'd search for errors, warnings, or any unusually long processing times logged for specific transactions.
3.  **Database Metrics:** If the APM points to the database, I'd check the database's monitoring dashboard for slow query logs, high CPU usage, or lock contention. I'd analyze the execution plan of any slow queries.
4.  **Infrastructure Health:** I'd also check the health of the underlying infrastructure—CPU, memory, and network I/O on the servers or containers running the service. High garbage collection activity, for instance, can cause significant pauses."

### 🔹 How do you prevent duplicate data when multiple users submit the same request simultaneously?
**Business Use Case:** "A provider's office system retries a claim submission request due to a network timeout. How do you design the API to prevent creating a duplicate claim in our system?"

**Answer:** "This is a classic concurrency problem that can be solved at different layers:
1.  **Idempotency Key:** The best approach is to require the client to generate a unique key (e.g., `Idempotency-Key: <UUID>`) for each transaction. The server would cache this key for a short period. If a request with the same key arrives, the server returns the original response without reprocessing the transaction.
2.  **Database Constraints:** As a safeguard, I would enforce a `UNIQUE` constraint on the relevant columns in the database. If two concurrent requests try to insert the same data, one will succeed, and the other will fail with a database error, which the application can handle gracefully.
3.  **Distributed Locking:** For highly critical sections where idempotency keys aren't feasible, I might use a distributed lock (e.g., using Redis). However, this adds complexity and can become a performance bottleneck, so I would use it as a last resort."

### 🔹 Which caching strategy would you use, and when would you invalidate the cache?
**Business Use Case:** "Our claim adjudication service frequently needs to look up Plan Benefit Option (PBO) rules, which are read-heavy and rarely change. What caching strategy would you implement to reduce database load, and how would you handle updates when a PBO configuration does change?"

**Answer:** "The strategy depends on the data's access patterns and volatility.
*   **Strategy:** For most read operations, I prefer the **Cache-Aside (Lazy Loading)** strategy. The application first checks the cache. If it's a cache miss, it queries the database, populates the cache with the result, and then returns the data. This keeps the cache populated only with data that is actually requested.
*   **Invalidation:**
    *   **Write-Through:** For data that must be consistent, I'd use a write-through approach where any write to the database also updates the cache simultaneously. This is simple but can add latency to write operations.
    *   **Cache Invalidation:** A more common approach is to explicitly invalidate the cache entry whenever the corresponding data is updated in the database. The next read will then trigger a cache miss and fetch the fresh data.
    *   **Time-To-Live (TTL):** For data that can be slightly stale (e.g., a user's profile name), setting a TTL (e.g., 5-10 minutes) is a simple and effective invalidation strategy."

### 🔹 How would you handle concurrent updates to the same database record?
**Business Use Case:** "Two different claims adjusters are trying to update the notes on the same complex claim simultaneously. How do you prevent one adjuster's changes from overwriting the other's without locking the record and hurting performance?"

**Answer:** "I would use **Optimistic Locking**. Instead of locking the record, which hurts concurrency, I'd add a `version` column to the database table.
1.  When the application reads a record, it also fetches the `version` number.
2.  When it attempts to update the record, the `UPDATE` statement includes a `WHERE` clause that checks if the `version` is still the same (`WHERE id = ? AND version = ?`).
3.  If the record was updated by another transaction, the version number will have changed, and the `WHERE` clause won't match. The update will affect zero rows.
4.  The application can then catch this, inform the user that the data has changed, and ask them to reload and try again. This is much more scalable than pessimistic locking."

### 🔹 What approach would you use to ensure transactional consistency across multiple microservices?
**Business Use Case:** "When a new claim is submitted, our system needs to orchestrate calls to three microservices: the `ClaimService` to create the claim, the `MemberService` to validate eligibility, and the `PaymentService` to reserve funds. How do you ensure data consistency across these services if one of them fails?"

**Answer:** "True distributed transactions (like two-phase commit) are complex and create tight coupling, so I avoid them. Instead, I would use the **Saga Pattern**.

A Saga is a sequence of local transactions. If one transaction fails, the Saga executes a series of compensating transactions to undo the preceding work.

For example, in a claim submission flow:
1.  **Claim Service:** Creates a claim with status `PENDING` and publishes a `ClaimReceived` event.
2.  **Member Service:** Consumes the `ClaimReceived` event, validates the member's eligibility, and publishes a `MemberValidated` event.
3.  **Adjudication Service:** Consumes the `MemberValidated` event, processes the claim rules, and updates the claim status to `ADJUDICATED`.

If member validation fails, the Member Service publishes a `MemberIneligible` event. The Claim Service consumes this and runs a compensating transaction to set the claim status to `DENIED`. This ensures eventual consistency without distributed locks."

### 🔹 How would you optimize a SQL query that suddenly becomes slow in production?
**Business Use Case:** "A report that generates a summary of all claims for a large client group, which used to run in minutes, is now timing out. What steps would you take to optimize the underlying SQL query?"

**Answer:** "My first step is to get the **execution plan** for the slow query from the production database. The plan reveals how the database is actually retrieving the data. I'd look for:
1.  **Full Table Scans:** This is a major red flag. It means the database is reading the entire table because it can't find a suitable index. The solution is usually to add an index on the columns used in the `WHERE` clause.
2.  **Inefficient Joins:** The plan might show a bad join strategy (e.g., a nested loop join on a large table). Rewriting the join or ensuring the join columns are indexed can fix this.
3.  **Outdated Statistics:** Sometimes, the database statistics are stale, causing the query planner to make a bad decision. Running `ANALYZE` on the table can update the statistics and often fixes the issue immediately."

### 🔹 How do you make an API idempotent?
**Business Use Case:** "Our nightly payment batch job sends payment instructions to a bank via a REST API. If the job fails and is restarted, how do you ensure it doesn't send the same payment instruction twice, causing a duplicate payment?"

**Answer:** "An idempotent API is one where making the same request multiple times has the same effect as making it once. This is crucial for `POST`, `PUT`, and `DELETE` operations.

The most robust way is to use an **Idempotency-Key**. The client generates a unique identifier (like a UUID) and includes it in the request header (e.g., `Idempotency-Key: <uuid>`).

On the server-side:
1.  When a request comes in, the server checks if it has seen this idempotency key before.
2.  If it's a new key, the server processes the request, then stores the key and the resulting status code/response body in a cache (like Redis) with a short TTL (e.g., 24 hours).
3.  If the same key is received again, the server immediately returns the cached response without re-processing the logic. This prevents duplicate actions, like charging a credit card twice."

### 🔹 What logging and monitoring strategy do you use to debug production issues?
**Business Use Case:** "A user reports an intermittent error when submitting a claim, but we can't reproduce it. What logging and monitoring strategy would you use to capture enough information to debug this kind of issue in production?"

**Answer:** "My strategy is built on the 'Three Pillars of Observability':
1.  **Logs:** I use a structured logging format (like JSON) that includes a `trace_id` for every request. All logs (application, database, etc.) are shipped to a centralized logging platform like Splunk or the ELK Stack. This allows me to search and filter logs for a specific transaction across all microservices.
2.  **Metrics:** I monitor key application and system metrics: CPU/memory usage, garbage collection frequency, database connection pool size, and business metrics like orders per minute. These are collected in a time-series database like Prometheus and visualized in Grafana. Alerts are set up for abnormal thresholds.
3.  **Traces:** I use distributed tracing (via OpenTelemetry) to get a complete picture of a request's lifecycle as it travels through different services. This is invaluable for identifying bottlenecks in a microservices architecture."

### 🔹 A downstream service is unavailable. How would your application handle the failure gracefully?
**Business Use Case:** "Our `ClaimService` calls an external `ProviderValidation` service to verify a doctor's credentials. If this external service is down, how do you prevent our `ClaimService` from becoming unresponsive and causing cascading failures?"

**Answer:** "I would implement the **Circuit Breaker pattern**.
1.  The circuit breaker wraps the call to the downstream service. It maintains a count of failures.
2.  If the number of failures exceeds a threshold, the circuit 'opens,' and all subsequent calls to the service fail immediately without even making a network request. This prevents the calling service from wasting resources on a known-unresponsive dependency.
3.  While the circuit is open, my application would execute a **fallback** logic. This could be returning a default value, serving data from a stale cache, or returning a user-friendly error message.
4.  After a timeout, the circuit moves to a 'half-open' state, allowing a single test request through. If it succeeds, the circuit closes; if it fails, it remains open."

### 🔹 How do you secure REST APIs using authentication and authorization?
**Business Use Case:** "In our portal, a member should only be able to see their own claims, while a provider should be able to see claims for all their patients. How would you design the API security to handle these different roles and ownership rules?"

**Answer:** "I use a standard, token-based approach:
1.  **Authentication:** I use **OAuth 2.0** with the **OpenID Connect (OIDC)** layer. The client authenticates with an identity provider (like Okta, Auth0, or Keycloak), which issues a short-lived **JWT (JSON Web Token)** access token. The client then includes this JWT in the `Authorization: Bearer <token>` header of every API request.
2.  **Authorization:** The API gateway or the service itself validates the JWT's signature, expiry, and issuer. The token's payload contains 'scopes' or 'roles' (e.g., `read:claims`, `admin`). The API then checks if the token has the required scope to access the requested endpoint. For example, a `DELETE /claims/{id}` endpoint would require the `delete:claims` scope, which only admin users would have."

### 🔹 What is your deployment strategy to achieve zero or minimal downtime?
**Business Use Case:** "We need to deploy a new version of the critical `ClaimAdjudication` service during business hours without interrupting the flow of incoming claims. What deployment strategy would you use to achieve this with zero downtime?"

**Answer:** "My preferred strategy is **Blue-Green Deployment**.
1.  We have two identical production environments: 'Blue' (the current live version) and 'Green' (the new version).
2.  We deploy the new version of the application to the Green environment. We can run smoke tests and health checks against it without affecting live traffic.
3.  Once we're confident the Green environment is stable, we switch the load balancer to route all incoming traffic from the Blue environment to the Green one. This switch is instantaneous.
4.  The Blue environment is kept on standby. If any critical issues are found in the Green environment, we can immediately switch traffic back to Blue, providing a near-instant rollback. This strategy minimizes risk and eliminates downtime."

### 🔹 What is your database indexing strategy?
**Business Use Case:** "Our claims search feature, which allows users to filter by member last name, date of service, and claim status, is performing poorly. What would be your strategy for adding database indexes to speed this up, and what trade-offs would you consider?"

**Answer:** "My strategy for database indexing is to be deliberate and data-driven, focusing on improving query performance without unnecessarily slowing down write operations. Here's my approach:
1.  **Analyze Query Patterns:** I start by identifying slow queries using APM tools or the database's slow query log. I focus on columns that are frequently used in `WHERE` clauses, `JOIN` conditions, and `ORDER BY` clauses, as these are the primary candidates for indexing.
2.  **Use the Right Type of Index:**
    *   **B-Tree Index:** This is the default and most common type. It's highly effective for a wide range of queries, including equality (`=`), range (`>`, `<`, `BETWEEN`), and prefix `LIKE` searches.
    *   **Composite Indexes:** For queries that filter on multiple columns, I create composite (multi-column) indexes. The order of columns in the index is critical; I place the column with the highest cardinality (most unique values) first.
3.  **Create Covering Indexes:** To maximize performance, I aim to create 'covering indexes.' This is an index that includes all the columns required by a query (both in the `WHERE` clause and the `SELECT` list). This allows the database to answer the query using only the index, without ever having to read the actual table data, which is much faster.
4.  **Understand the Trade-offs:** I'm mindful that indexes are not free. While they speed up `SELECT` queries, they slow down write operations (`INSERT`, `UPDATE`, `DELETE`) because the index itself must also be updated. Therefore, I avoid over-indexing write-heavy tables.
5.  **Regularly Review and Maintain:** I use `EXPLAIN` plans to verify that my indexes are being used correctly and to identify missing ones. I also periodically review and drop unused indexes to reduce storage overhead and improve write performance."

### 🔹 How would you explain the CAP theorem in the context of microservices?
**Business Use Case:** "In our insurance platform, we have a `PaymentService` and a `MemberProfileService`. How would the CAP theorem influence your design choices for each? Which would you prioritize for Consistency (CP) vs. Availability (AP), and why?"

**Answer:** "The CAP theorem states that a distributed system can only provide two out of three guarantees: **C**onsistency, **A**vailability, and **P**artition Tolerance.

In a microservices architecture, we are dealing with a distributed system, so **Partition Tolerance (P)** is a must-have. Network failures between services will happen, and the system must be able to handle them. This means we are always forced to make a trade-off between Consistency and Availability.

*   **Choosing CP (Consistency over Availability):**
    *   **What it means:** If a network partition occurs, the system will return an error or time out rather than providing potentially stale data. It prioritizes data correctness.
    *   **Example Microservice:** A **Payment Service**. For financial transactions, it's critical to have the exact, up-to-the-minute balance. It's better to fail the transaction than to process a payment based on stale data.

*   **Choosing AP (Availability over Consistency):**
    *   **What it means:** If a network partition occurs, the system will continue to operate and respond with the best data it has, even if it might be slightly out of date. This leads to **eventual consistency**.
    *   **Example Microservice:** A **Member Profile Service**. If the service can't fetch the absolute latest phone number for a member, it's acceptable to show a slightly older one from a cache. It's better to keep the profile page available than to show an error for non-critical data.

So, the choice isn't for the entire system, but rather for each individual microservice based on its specific business requirements."

### 🔹 How would you design a URL shortener service?
**Business Use Case:** "We need to generate secure, short, and temporary links for members to download their EOB (Explanation of Benefits) documents. How would you design a service to create and manage these short links?"

**Answer:** "Designing a URL shortener like TinyURL involves two main flows: creating a short URL and redirecting a short URL to the original one. My design would prioritize high availability and low-latency redirection.

**1. Core Requirements:**
*   **Functional:** Users can submit a long URL and receive a much shorter one. When users access the short URL, they are redirected to the original URL.
*   **Non-Functional:** The service must be highly available and scalable. Redirection must happen with very low latency.

**2. High-Level Design & API:**
*   **URL Shortening (`POST /api/v1/shorten`):**
    1.  The client sends a `POST` request with the long URL.
    2.  The system generates a unique 6-8 character short key. A common way to do this is to take a unique, auto-incrementing 64-bit integer (from a dedicated ID generator service) and convert it to a **Base62** string (`[a-zA-Z0-9]`). Base62 is great because it's URL-safe.
    3.  We store the mapping (`short_key`, `long_url`) in a database. A NoSQL database like DynamoDB or Cassandra is an excellent choice here because of its high-speed key-value lookups and horizontal scalability.
    4.  Return the short URL (e.g., `https://short.ly/short_key`) to the client.
*   **URL Redirection (`GET /{short_key}`):**
    1.  The user clicks the short URL. The request hits our service.
    2.  The service extracts the `short_key` from the URL.
    3.  It looks up the `short_key` in the database to find the corresponding `long_url`.
    4.  If found, the server returns a `301 Moved Permanently` HTTP redirect response to the client's browser, which then navigates to the `long_url`.
    5.  If not found, it returns a `404 Not Found`.

**3. Scaling the System (Read-Heavy Workload):**
The redirection flow will be far more frequent than the creation flow, so the system must be optimized for reads.
*   **Caching:** This is the most critical optimization. I would implement a distributed cache like **Redis** or **Memcached**.
    *   When a redirect request comes in, we first check the cache for the `short_key`.
    *   If it's a **cache hit**, we return the redirect immediately without touching the database. This will be extremely fast.
    *   If it's a **cache miss**, we query the database, store the result in the cache for future requests, and then perform the redirect.
*   **Stateless Web Servers:** The application servers that handle requests will be stateless. This allows us to run many instances behind a **Load Balancer** to distribute traffic and scale horizontally.
*   **Database Scaling:** For a massive scale, the database can be scaled using **read replicas** to handle the high read traffic. We can also **shard** the database based on the `short_key` to distribute the write load across multiple database instances."
