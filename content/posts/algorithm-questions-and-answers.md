---
title: "Top 11 Core Algorithm Questions for Backend Developers"
categories: [ Interview ]
tags: [Algorithm, Interview, Java]
description: "A curated list of the most important algorithm and data structure questions for backend developers, with business use cases from the healthcare insurance domain."
date: 2026-03-17T08:00:00+05:30
images: ["images/2026/03/algorithm-interview.jpg"]
author: ahmad
---

### Core Algorithm & Data Structure Questions

Here is a curated list of the most important algorithm and data structure questions that are practical for backend developers, especially in domains like healthcare insurance.

**1. What is an algorithm?**
**Business Use Case:** "In our claims processing system, we need a consistent way to determine if a claim is a duplicate. How would you define the steps to do this?"

**Answer:** An algorithm is a step-by-step procedure or a set of rules for solving a specific problem. For duplicate claim detection, the algorithm might be:
1.  Extract key identifiers from the new claim (e.g., `memberId`, `serviceDate`, `procedureCode`, `billedAmount`).
2.  Query the database for existing claims from the same `memberId` within a 30-day window of the `serviceDate`.
3.  For each potential match, compare the `procedureCode` and `billedAmount`.
4.  If all key identifiers match an existing claim, flag the new claim as a potential duplicate.

**2. What is Big O notation?**
**Business Use Case:** "Our API to search for member claims is fast with 100 members but times out with 1 million members. How do you explain and measure this slowdown?"

**Answer:** Big O notation is a way to describe how the runtime or memory usage of an algorithm grows as the input size grows. It helps us understand an algorithm's scalability.
*   **O(1) - Constant Time:** The operation takes the same amount of time regardless of input size (e.g., looking up a claim by its unique ID in a hash map).
*   **O(n) - Linear Time:** The time taken grows linearly with the input size (e.g., searching for a claim by iterating through a list of all claims). This is likely what's happening with the slow API.
*   **O(log n) - Logarithmic Time:** The time taken grows very slowly. The algorithm's efficiency increases with larger datasets (e.g., finding a member in a sorted list via binary search).

**3. Explain the difference between an Array and a Linked List.**
**Business Use Case:** "We need to store the line items for a medical claim. The number of lines can vary from 1 to over 50. Which data structure would you consider and why?"

**Answer:**
*   **Array:** An array stores elements in a contiguous block of memory. It's fast for accessing elements by index (O(1)). However, its size is fixed. If we need to add a new line item and the array is full, we have to create a new, larger array and copy everything over, which is slow.
*   **Linked List:** A linked list stores elements as nodes, where each node points to the next one. It's very efficient for adding or removing elements (O(1)) because you just update pointers. However, accessing an element by index is slow (O(n)) because you have to traverse the list from the beginning.

For claim line items, where we might frequently add or remove lines during adjudication, a **Linked List** (or an `ArrayList` in Java, which is a dynamic array that handles resizing automatically) is more flexible than a simple array.

**4. Explain the difference between a Stack and a Queue.**
**Business Use Case:** "How would you manage claim processing tasks? Some need to be processed in the order they arrive, while others involve nested calculations."

**Answer:**
*   **Queue (FIFO - First-In, First-Out):** A queue works like a line of people. The first item added is the first one to be processed. This is perfect for a **claims processing pipeline**, where claims are handled in the order they are received to ensure fairness.
*   **Stack (LIFO - Last-In, First-Out):** A stack works like a pile of plates. The last item added is the first one to be removed. This is useful for parsing nested logic, like calculating benefits where a procedure's coverage depends on a parent benefit rule. You'd evaluate the most nested rule first.

**5. What is a Hash Table (or HashMap)?**
**Business Use Case:** "Our claim adjudication service needs to fetch member eligibility data instantly using the `memberId`. The database call is too slow. How can we speed this up?"

**Answer:** A hash table (or `HashMap` in Java) is a data structure that stores key-value pairs. It uses a hash function to compute an index into an array of buckets from which the desired value can be found. This allows for incredibly fast lookups, insertions, and deletions—on average **O(1)** or constant time.

For the use case, we could cache member eligibility data in a `HashMap` with the `memberId` as the key. This would provide near-instant access to the data, avoiding slow database queries for every claim.

**6. What is the difference between a Tree and a Graph?**
**Business Use Case:** "How would you model a member's relationship with their dependents versus a network of healthcare providers where doctors can be affiliated with multiple hospitals?"

**Answer:**
*   **Tree:** A tree is a hierarchical data structure with a root node and parent-child relationships. It cannot have cycles. This is perfect for modeling a **member and their dependents**, where the primary subscriber is the root and dependents are child nodes.
*   **Graph:** A graph is a collection of nodes (vertices) and edges that connect them. It can have cycles. This is ideal for modeling a **provider network**. Doctors and hospitals are nodes, and the edges represent their affiliations. A doctor can be linked to multiple hospitals, creating a complex network, not a simple hierarchy.

**7. What is a Binary Search Tree (BST)?**
**Business Use Case:** "We have a large, sorted list of medical procedure codes with their standard costs. How can we quickly find the cost for a specific code?"

**Answer:** A Binary Search Tree (BST) is a tree where for each node, all nodes in its left subtree are smaller, and all nodes in its right subtree are larger. This property allows for very fast searching, insertion, and deletion (O(log n) on average for a balanced tree).

A BST would be much more efficient than a linear scan (O(n)) for finding a procedure code. By starting at the root and comparing the target code, we can eliminate half of the remaining codes at each step.

**8. Explain the difference between Linear Search and Binary Search.**
**Business Use Case:** "A user is searching for a specific claim from their history. If the claim list is unsorted, how would you find it? What if it's sorted by date?"

**Answer:**
*   **Linear Search:** Checks every item in a list one by one until it finds the target. It's simple but slow (O(n)). This is the only option for an **unsorted list** of claims.
*   **Binary Search:** Only works on a **sorted list**. It repeatedly divides the search interval in half. It compares the target value to the middle element. If they don't match, the half in which the target cannot lie is eliminated. This is extremely fast (O(log n)). If the claims are sorted by date, we can use binary search to find a claim from a specific date very quickly.

**9. What is the difference between Merge Sort and Quick Sort?**
**Business Use Case:** "A nightly batch job needs to sort millions of claims by provider ID before generating a payment report. Which sorting algorithm would you consider?"

**Answer:** Both are efficient "Divide and Conquer" algorithms with an average time complexity of O(n log n).
*   **Quick Sort:** Generally faster in practice and uses less memory (in-place sorting). However, its worst-case performance is O(n^2), which can occur if the data is already sorted.
*   **Merge Sort:** Its performance is always a consistent O(n log n), making it more predictable. However, it requires extra memory to hold the merged subarrays.

For a critical batch job where predictability is important and memory is not a major constraint, **Merge Sort** is a safer choice to avoid the worst-case scenario of Quick Sort.

**10. Explain the concept of recursion.**
**Business Use Case:** "In our system, a member's benefit plan can have nested sub-plans, each with its own rules. How would you calculate the final benefit for a service that is affected by this nested structure?"

**Answer:** Recursion is when a function calls itself to solve a smaller version of the same problem. It's a powerful way to handle hierarchical or nested structures.

To calculate the benefit, I would write a function `calculateBenefit(plan, service)`.
1.  The function first applies the rules of the current `plan`.
2.  If the `plan` has a sub-plan, the function would then **call itself** (`calculateBenefit(sub-plan, service)`) to process the nested rules.
3.  It stops when it reaches a plan with no sub-plans (the "base case"). The results are then combined up the call stack to get the final benefit amount.

**11. What is memoization?**
**Business Use Case:** "During the adjudication of a single large hospital claim with many line items, our system repeatedly calls an external service to verify the same member's eligibility, slowing down the process. How can we optimize this?"

**Answer:** Memoization is an optimization technique where you cache the results of expensive function calls and return the cached result when the same inputs occur again. It's a specific form of caching.

In this scenario, I would wrap the eligibility check function with memoization logic. The first time the function is called for a specific `memberId`, it would call the external service and store the result in a temporary in-memory map. For all subsequent calls with the same `memberId` *within the same claim transaction*, it would instantly return the cached result without making another slow network call.

**12. What is Dynamic Programming?**
**Business Use Case:** "When calculating a member's out-of-pocket maximum for a benefit year, the calculation for the current claim depends on the accumulated totals from previous claims. How would you design this to avoid re-calculating the same totals for every new claim?"

**Answer:** Dynamic Programming is an approach to solve complex problems by breaking them down into simpler, overlapping subproblems. You solve each subproblem only once and store its result (memoization). When the same subproblem occurs again, you retrieve the stored result instead of re-computing it.

For the out-of-pocket calculation, I would store the accumulated deductible and co-insurance paid after each claim is processed. When a new claim comes in, I can use these stored values to quickly calculate the new totals without having to re-process all previous claims from the start of the year.

**13. Explain Dijkstra's Algorithm.**
**Business Use Case:** "We need to build a referral system that finds the 'best' path from a Primary Care Physician (PCP) to a specialist. The 'best' path could be the one with the lowest total cost, shortest distance, or highest patient ratings. How would you model this to find the optimal referral path?"

**Answer:** Dijkstra's algorithm is used to find the shortest path between nodes in a weighted graph. For this referral system:
1.  I would model the healthcare network as a **graph**, where doctors and hospitals are **nodes**.
2.  The connections between them are **edges**, and each edge has a **weight** (or "cost"). This cost could be distance, average wait time, or an inverse of patient ratings.
3.  Dijkstra's algorithm starts at the source node (the PCP) and explores neighbors, always choosing the path with the lowest cumulative cost. It guarantees finding the most optimal path from the PCP to every other specialist in the network.

**14. What is a Trie (Prefix Tree)?**
**Business Use Case:** "In our provider portal, we want to implement an autocomplete feature for searching medical procedure codes (like CPT codes) or drug names. As the user types 'proc...', we need to instantly suggest codes like 'PROC001', 'PROC002', etc., from a list of thousands. Which data structure is ideal for this?"

**Answer:** A **Trie**, also known as a prefix tree, is the perfect data structure for this. A Trie stores characters of a string in a tree-like structure. Each node represents a character, and paths from the root to a node represent a prefix.

For the autocomplete feature, as the user types, we can traverse the Trie based on their input. All the words (procedure codes) that descend from the node corresponding to the user's prefix are the suggestions we can show. This is much faster than iterating through a list and checking `startsWith()` for every code.

**15. What is a Heap data structure?**
**Business Use Case:** "Our real-time monitoring dashboard needs to display the 'Top 10 Most Expensive Claims' currently being processed across the system. With thousands of claims flowing in per minute, how can we efficiently maintain this list?"

**Answer:** A **Heap** is the ideal data structure for this. Specifically, I would use a **Min-Heap** of a fixed size (k=10).
1.  The heap will store the 10 most expensive claims found so far. The root of the Min-Heap will always be the *smallest* of these top 10 claims.
2.  For each new claim that comes in, I compare its value to the value of the root element.
3.  If the new claim's value is *smaller* than the root, I ignore it.
4.  If the new claim's value is *larger*, I remove the root and insert the new claim into the heap. The heap property is then restored.

This approach is very efficient (O(log k)) for each claim, as we never need to sort the entire list of claims.

**16. Explain the concept of a Greedy Algorithm.**
**Business Use Case:** "We are building a system to schedule patient appointments in a single examination room. Given a list of requested appointments, each with a start and end time, we want to schedule the maximum number of non-overlapping appointments. What algorithmic approach would you take?"

**Answer:** This is a classic problem that can be solved efficiently using a **Greedy Algorithm**. A greedy algorithm makes the locally optimal choice at each step with the hope of finding a global optimum.

For the appointment scheduling problem, the greedy strategy is:
1.  Sort all requested appointments by their **end times** in ascending order.
2.  Select the first appointment in the sorted list and add it to our schedule.
3.  Iterate through the rest of the sorted appointments. For each one, if its start time is after or at the same time as the previously scheduled appointment's end time, select it and add it to the schedule.

This greedy choice of always picking the next compatible appointment that finishes earliest guarantees that we will fit the maximum number of appointments possible.
