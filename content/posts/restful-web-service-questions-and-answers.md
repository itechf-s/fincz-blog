---
title: "Advanced REST API Interview Questions for Senior Developers"
categories: [ Spring ]
tags: [RESTful Web Service]
description: "A curated list of the 27 most important RESTful web service interview questions for experienced developers, with business use cases from the healthcare insurance domain."
date: 2023-05-18T08:00:00+05:30
lastmod: 2026-07-11T08:00:00+05:30
images: ["images/2023/05/RESTful-web-service.jpg"]
author: ahmad
---

## Top 25 REST API Questions for Experienced Developers

### 1. What are the key principles of REST?
**Business Use Case:** "When designing a new set of APIs for our claims processing system, what core principles guide your design to ensure it's scalable and maintainable?"

**Answer:** REST (Representational State Transfer) is an architectural style guided by several principles:
*   **Statelessness:** Each request from a client must contain all the information needed to understand and process it. The server does not store any client context between requests. This is crucial for scalability.
*   **Client-Server:** The client and server are separated, allowing them to evolve independently.
*   **Uniform Interface:** Using standard HTTP methods (GET, POST, PUT, DELETE), URIs for resources, and a consistent data format like JSON.
*   **Resource-Based:** Everything is a resource (e.g., a claim, a member, a policy), identified by a unique URI.

### 2. What are the most important HTTP methods you've used?
**Business Use Case:** "In our insurance platform, how would you map the core operations—like creating a claim, viewing it, updating it, and deleting it—to HTTP methods?"

**Answer:** I map them to standard CRUD operations:
*   `GET`: To retrieve a resource (e.g., `GET /api/claims/{id}` to fetch a specific claim).
*   `POST`: To create a new resource (e.g., `POST /api/claims` to submit a new claim).
*   `PUT`: To replace/update an entire resource (e.g., `PUT /api/members/{id}` to update a member's entire profile).
*   `DELETE`: To delete a resource (e.g., `DELETE /api/claims/{id}`).
*   `PATCH`: For partial updates (e.g., `PATCH /api/claims/{id}` to only update a claim's status).

### 3. What is the significance of HTTP status codes?
**Business Use Case:** "How does your API inform the client application whether a claim submission was successful, if the client sent bad data, or if a server error occurred?"

**Answer:** HTTP status codes are essential for clear communication.
*   `2xx` (Success): `200 OK` for a successful GET, `201 Created` for a successful POST.
*   `4xx` (Client Error): `400 Bad Request` for validation errors, `401 Unauthorized` for missing credentials, `403 Forbidden` for insufficient permissions, `404 Not Found` when a resource doesn't exist.
*   `5xx` (Server Error): `500 Internal Server Error` for unexpected exceptions in my backend logic.

### 4. How do you design a REST endpoint in Spring Boot?
**Business Use Case:** "How do you set up a new controller in Spring Boot to handle requests for member data?"

**Answer:** I use the `@RestController` annotation on a class. This combines `@Controller` and `@ResponseBody`, telling Spring that this class will handle web requests and that its methods will return JSON/XML directly, not a view. I then use mapping annotations like `@GetMapping` on methods to define the specific endpoints.

### 5. How do you handle dynamic data in the URL?
**Business Use Case:** "How would you design an API to fetch a specific claim using its unique claim ID from the URL?"

**Answer:** I use the `@PathVariable` annotation. For an endpoint like `/api/claims/{claimId}`, I would annotate a method parameter with `@PathVariable("claimId")` to capture the ID from the URL and use it to query the database.

### 6. How do you process incoming JSON data?
**Business Use Case:** "When a provider submits a new dental claim, the claim details are sent as a JSON object. How does your service receive and process this?"

**Answer:** I use the `@RequestBody` annotation on a method parameter. Spring Boot's Jackson library automatically deserializes the incoming JSON from the request body into a Java object (e.g., a `ClaimDTO`), which I can then process.

### 7. How do you handle URL query parameters?
**Business Use Case:** "We need an API to search for members. How would you allow clients to filter by last name and city, like `/api/members?lastName=Smith&city=NewYork`?"

**Answer:** I use the `@RequestParam` annotation on method parameters. For example, `public List<Member> searchMembers(@RequestParam String lastName, @RequestParam(required = false) String city)`. This binds the URL query parameters to the method variables.

### 8. How do you control the HTTP response status and headers?
**Business Use Case:** "After creating a new member via a POST request, how do you return a `201 Created` status and include a `Location` header pointing to the new member's URL?"

**Answer:** I use the `ResponseEntity` class as the return type of my controller method. It gives me full control over the response, allowing me to set the status code, headers, and the response body.

### 9. What is your strategy for handling exceptions?
**Business Use Case:** "If a request comes in for a claim that doesn't exist, or if the database is down, how do you ensure the API returns a clean, standardized error message instead of a stack trace?"

**Answer:** I use a centralized exception handler. I create a class annotated with `@RestControllerAdvice` and define methods annotated with `@ExceptionHandler`. Each method handles a specific exception (e.g., `ClaimNotFoundException`) and returns a custom error DTO with a clear message and the appropriate HTTP status code.

### 10. What is idempotency and why is it important?
**Business Use Case:** "If a client's network connection times out while submitting a payment and they retry the request, how do we prevent charging the member twice?"

**Answer:** Idempotency means that making the same request multiple times has the same effect as making it once. This is crucial for `PUT` and `DELETE` operations, and very important for `POST` in financial systems. To handle this, I would require the client to send a unique `Idempotency-Key` in the header. My service would track processed keys for a short period and, if a duplicate request comes in, return the original response without reprocessing the payment.

### 11. How do you handle partial updates of a resource?
**Business Use Case:** "A user wants to update only their phone number, not their entire member profile. Should we use PUT or PATCH?"

**Answer:** For this scenario, `PATCH` is the correct and more efficient choice. Here's a detailed breakdown:
*   **`PUT` is for complete replacement.** When you use `PUT`, you are telling the server to replace the entire resource at the given URI with the new representation you are sending. If you only send the phone number in a `PUT` request to `/api/members/{id}`, the server would replace the existing member object, likely nullifying other fields like name and address. `PUT` is naturally idempotent because sending the same complete payload multiple times has the same result.

*   **`PATCH` is for partial modification.** When you use `PATCH`, you are sending a set of instructions on how to change the resource. The request body only needs to contain the fields you want to update. For example, a request with `{"phoneNumber": "555-1234"}` would instruct the server to only change the phone number field, leaving all other fields intact.

While `PATCH` is not guaranteed to be idempotent (e.g., a request to increment a value), a simple update like this one is. Using `PATCH` is more network-efficient and less error-prone for partial updates.

### 12. How do you implement versioning for your REST APIs?
**Business Use Case:** "We need to add a new required field to our claim submission API. How can we do this without breaking existing client applications that haven't been updated yet?"

**Answer:** API versioning is essential for this. A common approach is URI versioning, where the version is included in the URL (e.g., `/api/v1/claims` and `/api/v2/claims`). This allows us to maintain the old `v1` endpoint for legacy clients while new clients can use the `v2` endpoint with the new field.

### 13. How do you secure your REST APIs?
**Business Use Case:** "How do you ensure that only an authenticated provider can submit a claim and that a member can only view their own claim history?"

**Answer:** I use Spring Security with a token-based approach like JWT (JSON Web Tokens).
*   **Authentication:** The user logs in and receives a JWT. This token is sent in the `Authorization` header of every subsequent request.
*   **Authorization:** The token contains the user's ID and roles (e.g., 'MEMBER', 'PROVIDER'). My service validates the token and uses method-level security (`@PreAuthorize`) to check if the user has the right role and if the resource they are trying to access belongs to them.

### 14. What is HATEOAS?
**Business Use Case:** "After a client fetches a claim, how can we make our API 'self-discoverable' so the client knows it can also fetch the member details or the associated EOB without hard-coding URLs?"

HATEOAS (Hypermedia as the Engine of Application State) is a principle of RESTful web services that involves including hypermedia links in the API responses. These links allow clients to discover and navigate the available resources and actions dynamically.

### 15. How do you handle file uploads?
**Business Use Case:** "When submitting a claim, a provider might need to upload a supporting document (like a PDF or image). How does your API handle this?"

**Answer:** I would create a multipart endpoint using `@PostMapping`. The method parameter would be annotated with `@RequestParam("file") MultipartFile`. Spring Boot handles the complexities of parsing the multipart request, and I can then process the file's input stream to save it to a service like Amazon S3.

### 16. What is your approach to validating incoming requests?
**Business Use Case:** "How do you ensure that a new claim submission contains all the required fields, like `memberId` and `serviceDate`, before it hits your business logic?"

**Answer:** I use the Bean Validation API. I annotate the fields in my DTO (Data Transfer Object) with constraints like `@NotNull`, `@Size`, and `@Pattern`. Then, in my controller method, I annotate the `@RequestBody` parameter with `@Valid`. Spring Boot will automatically validate the incoming object and throw an exception if the constraints are not met, which my global exception handler can catch.

### 17. How do you implement pagination?
**Business Use Case:** "An API to fetch a member's claim history could return hundreds of records. How do you design it to be efficient and not overload the client?"

**Answer:** I implement pagination using query parameters like `page` and `size`. In Spring Data JPA, I can pass a `Pageable` object to my repository method. It automatically adds the necessary `LIMIT` and `OFFSET` clauses to the SQL query. The API then returns a `Page` object, which includes the list of claims for the current page and metadata like the total number of pages.

### 18. What is CORS and how do you manage it?
**Business Use Case:** "Our new single-page web application, running on a different domain, needs to call our backend APIs. How do you allow this securely?"

**Answer:** This requires CORS (Cross-Origin Resource Sharing). In Spring Boot, I can manage this globally in my security configuration or on a per-controller basis using the `@CrossOrigin` annotation. This allows me to whitelist the specific domains, methods, and headers that are allowed to access my API.

### 19. How do you improve API performance with caching?
**Business Use Case:** "Our API to fetch PBO (Plan Benefit Option) configurations is called frequently, but the data rarely changes. How can we reduce the load on the database?"

**Answer:** I would implement caching. With Spring Boot, I can add the `@EnableCaching` annotation and then annotate the service method that fetches the PBO data with `@Cacheable("pbo-configs")`. The first time the method is called, it will fetch the data from the database and store it in a cache. Subsequent calls will return the data directly from the cache, which is much faster.

### 20. How do you handle long-running asynchronous operations?
**Business Use Case:** "When a user requests a large EOB (Explanation of Benefits) report for the entire year, generating it can take a long time. How do you prevent the API request from timing out?"

**Answer:** For long-running tasks, I would use an asynchronous approach. The controller would immediately return a `202 Accepted` response with a link to a status endpoint. The report generation task would be pushed to a message queue (like Kafka or RabbitMQ) and processed by a separate worker service. The client can then poll the status endpoint to check when the report is ready for download.

### 21. What is Content Negotiation?
**Business Use Case:** "Some of our clients want to receive claim data as JSON, while a legacy client needs it in XML format. How can the same endpoint support both?"

**Answer:** This is handled by Content Negotiation. The client specifies its desired format in the `Accept` header of the request (e.g., `Accept: application/json` or `Accept: application/xml`). If I have the necessary libraries (like Jackson for JSON and JAXB for XML) on my classpath, Spring Boot can automatically serialize the response object into the format requested by the client.

### 22. How do you implement rate limiting?
**Business Use Case:** "To prevent abuse, we want to limit a single user to 100 API requests per minute. How would you implement this?"

**Answer:** I would implement rate limiting at the API Gateway level. Services like Spring Cloud Gateway can be configured with filters (e.g., using Redis as a backend) to track the number of requests per user or IP address and return a `429 Too Many Requests` status if the limit is exceeded.

### 23. What is your strategy for logging API requests and responses?
**Business Use Case:** "A client is reporting an error with a claim submission, but we can't reproduce it. How can we get the information needed to debug the issue in production?"

**Answer:** I implement structured logging using a library like Logback. I would use an `HandlerInterceptor` or a `Filter` to log key details for every request and response, such as the HTTP method, URL, status code, and response time. For error-level logs, I would also include a unique correlation ID to trace the request across different microservices. I would be careful to mask any sensitive PHI data in the logs.

### 24. How do you handle conditional requests using ETags?
**Business Use Case:** "A mobile app frequently fetches a member's profile. How can we avoid re-sending the same data if it hasn't changed, to save bandwidth?"

**Answer:** I would use ETags (Entity Tags). When the client first requests the member profile, the server includes an `ETag` header in the response, which is a hash of the data. For the next request, the client sends this ETag value in the `If-None-Match` header. The server can then quickly check if the data has changed. If it hasn't, the server returns a `304 Not Modified` status with an empty body, saving bandwidth.

### 25. How do you document your REST APIs?
**Business Use Case:** "How do you ensure that the frontend team and other service teams know exactly how to use the new Member API you've built, including all the endpoints, request formats, and response codes?"

**Answer:** I use the OpenAPI specification (formerly Swagger). By adding the `springdoc-openapi` dependency and annotating my controllers and DTOs, I can automatically generate interactive API documentation. This documentation serves as a live contract, is always in sync with the code, and allows other developers to try out the API directly from their browser.

### 26. What are the best practices for REST API security?
**Business Use Case:** "Our APIs handle sensitive Protected Health Information (PHI). What key security measures would you implement to protect this data from unauthorized access and attacks?"

**Answer:** Securing APIs, especially those handling PHI, is critical. My approach involves a defense-in-depth strategy:
1.  **Always Use HTTPS (TLS):** All communication must be encrypted to prevent man-in-the-middle attacks. There are no exceptions for this.
2.  **Strong Authentication with OAuth 2.0 and JWTs:** I would use a standard like OAuth 2.0 to handle authentication. Once authenticated, the client receives a short-lived JSON Web Token (JWT) which must be sent with every request.
3.  **Granular Authorization:** Authentication isn't enough. Every endpoint must perform authorization checks. For example, a member should only be able to access their own claims (`/api/members/{memberId}/claims`). This is enforced by checking the `memberId` from the JWT against the one in the URL.
4.  **Input Validation:** I would validate all incoming data to prevent injection attacks (like SQL Injection or XSS). This includes checking data types, lengths, and formats.
5.  **Principle of Least Privilege:** API tokens should have the minimum scopes necessary. A read-only client should not have a token that allows write access.
6.  **Rate Limiting and Throttling:** To protect against Denial-of-Service (DoS) attacks and brute-force attempts, I would implement rate limiting at the API gateway level.
7.  **Secure Logging:** I would log all important events but ensure that no sensitive PHI is ever written to the logs. I would mask fields like Social Security Numbers or diagnosis codes.

### 27. What is the difference between Authentication and Authorization?
**Business Use Case:** "In our insurance portal, a doctor needs to log in and view their patients' claims, but they should not be able to see claims from other doctors. How do you distinguish between the two security concepts at play here?"

**Answer:** This scenario perfectly illustrates the difference between Authentication and Authorization.

*   **Authentication (AuthN) is about identity.** It's the process of verifying who a user is. When the doctor logs in with their username and password, the system is **authenticating** them to confirm they are a valid user. It answers the question: "Are you really Dr. Smith?"

*   **Authorization (AuthZ) is about permissions.** This happens *after* authentication. It's the process of determining what a verified user is allowed to do. When Dr. Smith tries to access `/api/claims`, the system checks if they have the permission to view claims. Furthermore, it checks if they are authorized to view the *specific* claims of their own patients, but not others. It answers the question: "Now that I know you are Dr. Smith, what are you allowed to see and do?"

In short, Authentication is the key to get into the building, while Authorization determines which doors you can open inside.