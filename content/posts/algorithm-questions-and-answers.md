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

**10. What is a hash table?**

*   **Answer:** A hash table is a data structure that implements an associative array abstract data type, a structure that can map keys to values. It uses a hash function to compute an index into an array of buckets or slots, from which the desired value can be found.

**11. What is the time complexity of operations in a hash table?**

*   **Answer:** On average, insertion, deletion, and lookup operations take O(1) time. In the worst case (due to collisions), these operations can take O(n) time.

**12. Explain the concept of Depth-First Search (DFS).**

*   **Answer:** DFS is an algorithm for traversing or searching tree or graph data structures. The algorithm starts at the root node (selecting some arbitrary node as the root in the case of a graph) and explores as far as possible along each branch before backtracking. It usually uses a stack data structure.

**13. Explain the concept of Breadth-First Search (BFS).**

*   **Answer:** BFS is an algorithm for traversing or searching tree or graph data structures. It starts at the tree root (or some arbitrary node of a graph) and explores all of the neighbor nodes at the present depth prior to moving on to the nodes at the next depth level. It uses a queue data structure.

**14. What is the difference between a tree and a graph?**

*   **Answer:** A tree is a hierarchical structure where one node is the root and other nodes are children, with no cycles. A graph is a set of nodes connected by edges, which can have cycles and doesn't necessarily have a root. A tree is essentially a connected graph with no cycles.

**15. What is dynamic programming?**

*   **Answer:** Dynamic programming is a method for solving complex problems by breaking them down into simpler subproblems. It stores the results of these subproblems to avoid computing them again (memoization). It is used when a problem has overlapping subproblems and optimal substructure.

**16. Explain the concept of a greedy algorithm.**

*   **Answer:** A greedy algorithm is an algorithmic strategy that makes the locally optimal choice at each stage with the hope of finding a global optimum. It is simple and efficient but doesn't always provide the best solution for every problem.

**17. What is the time complexity of Quick Sort?**

*   **Answer:** The average time complexity of Quick Sort is O(n log n). However, in the worst case (e.g., when the array is already sorted or reverse sorted and the pivot is chosen poorly), the time complexity is O(n^2).

**18. What is the difference between Merge Sort and Quick Sort?**

*   **Answer:** Merge Sort is a stable sorting algorithm with a guaranteed time complexity of O(n log n) but requires extra space. Quick Sort is an in-place sorting algorithm (requires little extra space) that is often faster in practice but has a worst-case time complexity of O(n^2) and is not stable.

**19. What is Big O notation?**

*   **Answer:** Big O notation is used in computer science to describe the performance or complexity of an algorithm. It specifically describes the worst-case scenario, or the upper bound, of the execution time or space used by an algorithm as the input size approaches infinity.

**20. What is a linked list?**

*   **Answer:** A linked list is a linear data structure where elements are not stored at contiguous memory locations. The elements in a linked list are linked using pointers. Each element (node) consists of two parts: data and a pointer to the next node.

**21. What is the difference between an array and a linked list?**

*   **Answer:**
    *   **Array:** Stores elements in contiguous memory locations. Its size is fixed upon creation. Accessing an element by index is fast (O(1)). Insertion and deletion can be slow (O(n)) as it may require shifting elements.
    *   **Linked List:** Stores elements with pointers, so they can be anywhere in memory. Its size is dynamic. Accessing an element requires traversing the list from the beginning (O(n)). Insertion and deletion are faster (O(1)) if you have a pointer to the node before the insertion/deletion point.

**22. What is a Binary Search Tree (BST)?**

*   **Answer:** A Binary Search Tree is a node-based binary tree data structure with the following properties:
    *   The left subtree of a node contains only nodes with keys lesser than the node's key.
    *   The right subtree of a node contains only nodes with keys greater than the node's key.
    *   Both the left and right subtrees must also be binary search trees.
    *   There are no duplicate keys.

**23. What is the time complexity for search, insert, and delete operations in a balanced BST?**

*   **Answer:** For a balanced Binary Search Tree, the time complexity for search, insertion, and deletion is O(log n) on average and in the worst case. For an unbalanced tree, the worst-case time complexity can degrade to O(n).

**24. What is a heap data structure?**

*   **Answer:** A heap is a specialized tree-based data structure that satisfies the heap property. In a max-heap, the parent node is always greater than or equal to its children. In a min-heap, the parent node is always less than or equal to its children. Heaps are commonly used to implement priority queues.

**25. Explain Dijkstra's algorithm.**

*   **Answer:** Dijkstra's algorithm is a greedy algorithm used to find the shortest path from a single source node to all other nodes in a weighted graph with non-negative edge weights. It maintains a set of visited nodes and iteratively selects the unvisited node with the smallest known distance, updating the distances of its neighbors.

**26. What is the difference between Divide and Conquer and Dynamic Programming?**

*   **Answer:** Both are problem-solving paradigms that break a problem into subproblems.
    *   **Divide and Conquer:** Subproblems are independent of each other. It solves subproblems recursively and combines their solutions. Example: Merge Sort.
    *   **Dynamic Programming:** Subproblems are overlapping. It solves each subproblem only once and stores the result (memoization or tabulation) to avoid re-computation. Example: Calculating Fibonacci numbers.

**27. What is memoization?**

*   **Answer:** Memoization is an optimization technique used to speed up programs by storing the results of expensive function calls and returning the cached result when the same inputs occur again. It is a top-down approach to dynamic programming.

**28. What is a stable sorting algorithm?**

*   **Answer:** A sorting algorithm is considered stable if it maintains the relative order of records with equal keys. In other words, if two items have equal keys, they appear in the same order in the sorted output as they appear in the input. Merge Sort and Insertion Sort are stable, whereas Quick Sort and Heap Sort are not.

**29. What is a Trie (Prefix Tree)?**

*   **Answer:** A Trie, also known as a prefix tree, is a tree-like data structure that is efficient for retrieving a key in a large set of strings. Nodes in the trie do not store keys themselves; instead, a node's position in the tree defines the key it's associated with. Tries are often used for implementing autocomplete and spell-checking features.