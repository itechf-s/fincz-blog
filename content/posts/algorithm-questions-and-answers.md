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

*   **Answer:** Simple steps to solve a problem. Think of it like a **recipe** for cooking: step 1, step 2, step 3 to get the result.

**2. Explain the difference between linear search and binary search.**

*   **Answer:**
    *   **Linear Search:** Checking items **one by one**, like reading every page of a book to find a word. Works on any list.
    *   **Binary Search:** Only works on **sorted** lists. You open the book in the middle; if the word is before, you ignore the second half and repeat. It cuts the search area in half every time.

**3. What is the time complexity of linear search and binary search?**

*   **Answer:**
    *   **Linear Search:** O(n) - Slow for large lists (checks everything).
    *   **Binary Search:** O(log n) - Very fast (cuts problem in half repeatedly).

**4. Describe the bubble sort algorithm.**

*   **Answer:** It compares two items side-by-side. If the first is bigger than the second, it **swaps** them. It repeats this process until the biggest items "bubble" to the top (end) of the list.

**5. What is the time complexity of bubble sort?**

*   **Answer:** O(n^2). It's slow because it uses nested loops (loop inside a loop).

**6. Explain the concept of recursion.**

*   **Answer:** When a function **calls itself**. Think of Russian nesting dolls; you open one to find a smaller one inside, until you reach the smallest one (the base case) where you stop.

**7. What are the advantages and disadvantages of recursion?**

*   **Answer:**
    *   **Advantages:** Makes code cleaner and shorter for problems like trees or math formulas.
    *   **Disadvantages:** Can be slower and use more memory (stack memory) because it keeps adding layers of calls.

**8. What is a data structure?**

*   **Answer:** A way to **organize and store data** so we can use it efficiently. Like choosing between a box, a folder, or a rack to store files depending on how you want to access them.

**9. Explain the difference between a stack and a queue.**

*   **Answer:**
    *   **Stack (LIFO):** Like a stack of plates. You put one on top and take from the top. Last In, First Out.
    *   **Queue (FIFO):** Like a line of people. The first person to join the line is the first served. First In, First Out.

**10. What is a hash table?**

*   **Answer:** A data structure that stores **Key-Value pairs**. Think of it like a real-world dictionary: you look up a word (Key) to instantly find its definition (Value), without reading every page.

**11. What is the time complexity of operations in a hash table?**

*   **Answer:** Usually **O(1)** (Very Fast/Instant) for adding or finding items.

**12. Explain the concept of Depth-First Search (DFS).**

*   **Answer:** A way to explore a graph/tree. You go **as deep as possible** down one path before backing up. Like solving a maze by following one wall until you hit a dead end, then backtracking.

**13. Explain the concept of Breadth-First Search (BFS).**

*   **Answer:** A way to explore a graph/tree. You check **all immediate neighbors** first before moving further away. Like ripples in water expanding outward layer by layer.

**14. What is the difference between a tree and a graph?**

*   **Answer:**
    *   **Tree:** Has a hierarchy (Parent-Child), one root, and **no loops** (cycles).
    *   **Graph:** A network of connected nodes. Can have loops and no clear start or end (like a road map).

**15. What is dynamic programming?**

*   **Answer:** Solving a problem by breaking it down and **remembering the answers** to the small parts so you don't have to solve them again. It trades memory for speed.

**16. Explain the concept of a greedy algorithm.**

*   **Answer:** Making the **best choice right now** without worrying about the future. Like always taking the largest coin available to make change. It's fast but doesn't always give the perfect solution.

**17. What is the time complexity of Quick Sort?**

*   **Answer:**
    *   **Average:** O(n log n) - Fast.
    *   **Worst case:** O(n^2) - Slow (happens if the list is already sorted and we pick bad pivots).

**18. What is the difference between Merge Sort and Quick Sort?**

*   **Answer:**
    *   **Merge Sort:** Always consistent speed (O(n log n)) but needs extra memory space.
    *   **Quick Sort:** Usually faster and uses less memory, but can be slow in worst cases.

**19. What is Big O notation?**

*   **Answer:** A scorecard for code performance. It tells you **how much slower** an algorithm gets as the data grows (e.g., if data doubles, does time double?).

**20. What is a linked list?**

*   **Answer:** A chain of nodes. Each node holds data and a **pointer** (address) to the next node. Unlike arrays, they don't need to be next to each other in memory.

**21. What is the difference between an array and a linked list?**

*   **Answer:**
    *   **Array:** Fixed size, fast to read (by index), slow to insert/delete (have to shift items).
    *   **Linked List:** Dynamic size (can grow), slow to read (must walk the chain), fast to insert/delete.

**22. What is a Binary Search Tree (BST)?**

*   **Answer:** A tree where for every node:
    *   **Left** child is **smaller**.
    *   **Right** child is **bigger**.
    *   This makes searching very fast (like Binary Search).

**23. What is the time complexity for search, insert, and delete operations in a balanced BST?**

*   **Answer:** **O(log n)**. It's fast because you skip half the tree at every step.

**24. What is a heap data structure?**

*   **Answer:** A special tree used to quickly find the **Highest** (Max-Heap) or **Lowest** (Min-Heap) value. The root always has the max or min value.

**25. Explain Dijkstra's algorithm.**

*   **Answer:** Like Google Maps. It finds the **shortest path** from Point A to Point B by always checking the closest unvisited node first.

**26. What is the difference between Divide and Conquer and Dynamic Programming?**

*   **Answer:**
    *   **Divide and Conquer:** Breaking a problem into separate parts, solving them, and combining (e.g., Merge Sort).
    *   **Dynamic Programming:** Breaking a problem into parts that **overlap**, so we save the answers to avoid doing the same work twice.

**27. What is memoization?**

*   **Answer:** A fancy word for **caching** or "remembering". If a function takes a long time to calculate `5 + 5`, we store the answer `10`. Next time someone asks for `5 + 5`, we just give `10` instantly.

**28. What is a stable sorting algorithm?**

*   **Answer:** If you have two items with the **same value**, a stable sort keeps them in their **original order**.

**29. What is a Trie (Prefix Tree)?**

*   **Answer:** A tree used for storing words efficiently. It's like **autocomplete** on your phone. It stores common prefixes (like "Ap" in "Apple" and "App") together to save space and search fast.
