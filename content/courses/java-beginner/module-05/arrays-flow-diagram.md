---
title: "5.3 Arrays Flow Diagram"
categories: [ Java, Course]
tags: [Basic]
description: "Java Arrays Flow Diagram (Text Format)"
date: 2025-06-01T07:00:48+05:30
author: ahmad
type: docs
---

## 📊 **Java Arrays Flow Diagram (Text Format)**

```
┌────────────────────────────┐
│  Step 1: Declare Array     │
│  ──────────────────────── │
│  int[] arr;               │
└────────────┬──────────────┘
             │
             ▼
┌────────────────────────────┐
│  Step 2: Allocate Memory   │
│  ──────────────────────── │
│  arr = new int[5];        │
└────────────┬──────────────┘
             │
             ▼
┌────────────────────────────┐
│  Step 3: Initialize Values │
│  ──────────────────────── │
│  arr[0] = 10;              │
│  arr[1] = 20;              │
│  ...                       │
└────────────┬──────────────┘
             │
             ▼
┌────────────────────────────┐
│  Step 4: Access Elements   │
│  ──────────────────────── │
│  System.out.println(arr[0])│
└────────────┬──────────────┘
             │
             ▼
┌────────────────────────────┐
│  Step 5: Traverse with Loop│
│  ──────────────────────── │
│  for(int i=0; i<arr.length;│
│      i++) {                │
│    System.out.println(arr[i]);│
│  }                         │
└────────────────────────────┘
```

---

### 📘 Bonus: Array Lifecycle (1D)

```java
int[] marks;                 // Declaration
marks = new int[3];          // Memory Allocation
marks[0] = 85;               // Initialization
System.out.println(marks[0]); // Access
```

---

### 🔹 2D Array Flow (Simple View)

```
int[][] matrix = new int[2][3];

┌────────────┐
│ matrix[0][0] │ matrix[0][1] │ matrix[0][2] │
│ matrix[1][0] │ matrix[1][1] │ matrix[1][2] │
└────────────┘
```

Traverse:

```java
for (int i = 0; i < 2; i++) {
  for (int j = 0; j < 3; j++) {
    System.out.print(matrix[i][j] + " ");
  }
}
```