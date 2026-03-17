---
title: "Basic Algorithm Interview Questions"
categories: [ Interview ]
tags: [Algorithm, Interview]
description: "Basic algorithm interview questions and answers for coding interviews."
date: 2026-03-17T08:00:00+05:30
images: ["images/2026/03/algorithm-interview.jpg"]
author: ahmad
---

### Basic Algorithm Interview Questions and Answers

**1. What is an algorithm?**

*   **Answer:** An algorithm is a step-by-step procedure or a set of rules to solve a problem. It should be clear, finite, and effective.

**2. Explain the difference between linear search and binary search.**

*   **Answer:**
    *   **Linear Search:** It sequentially checks each element in the list until the target element is found or the end of the list is reached. It works on both sorted and unsorted lists.
    *   **Binary Search:** It works on sorted lists. It repeatedly divides the search interval in half. If the middle element is the target, the search is successful. If the target is less than the middle element, the search continues in the left half; otherwise, in the right half.

**3. What is the time complexity of linear search and binary search?**

*   **Answer:**
    *   **Linear Search:** O(n) in the worst case and average case, O(1) in the best case.
    *   **Binary Search:** O(log n) in the worst case and average case, O(1) in the best case.

**4. Describe the bubble sort algorithm.**

*   **Answer:** Bubble sort repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order. The pass through the list is repeated until no swaps are needed, which indicates that the list is sorted.

**5. What is the time complexity of bubble sort?**

*   **Answer:** O(n^2) in the worst case and average case, O(n) in the best case.

**6. Explain the concept of recursion.**

*   **Answer:** Recursion is a programming technique where a function calls itself in order to solve a problem. Each recursive call breaks the problem down into smaller subproblems until a base case is reached, which can be solved directly.

**7. What are the advantages and disadvantages of recursion?**

*   **Answer:**
    *   **Advantages:**
        *   Elegant and concise solutions for problems that can be naturally defined recursively.
        *   Easier to read and understand for certain types of problems.
    *   **Disadvantages:**
        *   Can be less efficient due to the overhead of function calls.
        *   Risk of stack overflow if the recursion depth is too large (no base case or poorly defined base case).

**8. What is a data structure?**

*   **Answer:** A data structure is a particular way of organizing and storing data in a computer so that it can be used efficiently. Examples include arrays, linked lists, stacks, queues, trees, and graphs.

**9. Explain the difference between a stack and a queue.**

*   **Answer:**
    *   **Stack:** Follows the Last-In-First-Out (LIFO) principle. Elements are added and removed from the top.
    *   **Queue:** Follows the First-In-First-Out (FIFO) principle. Elements are added to the rear and removed from the front.