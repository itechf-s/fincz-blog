---
title: "10.1 Java Collections Framework"
categories: [ Java, Course]
tags: [Basic]
description: "Java Collections Framework (JCF)"
date: 2025-06-01T07:00:28+05:30
images: ["images/2025/06/collections-framework.webp"]
author: ahmad
type: docs
---

## 🔷 1. Java Collections Framework क्या है?

### 📌 Definition:

> Java Collections Framework (JCF) एक **architecture** है जो हमें **objects को group** करने, **manage** करने और उन पर operations करने की सुविधा देता है — जैसे list, set, map, आदि।

👉 इसे आप “**Objects की दुनिया के लिए Array की upgraded version**” कह सकते हैं।

---

## 🔎 क्यों ज़रूरी है?

| कारण                                                                        | Explanation                    |
| --------------------------------------------------------------------------- | ------------------------------ |
| Static array की limitation                                                  | fixed size, fixed type         |
| Real-world में dynamic data आता है                                          | students, products, files, आदि |
| हमें search, sort, remove जैसे operation जल्दी और efficiently करने होते हैं |                                |

---

## ✅ 2. Collections का टॉप लेवल Structure

### 📦 Main Interfaces:

```
java.util.Collection
    ├── List
    ├── Set
    └── Queue

java.util.Map (Not part of Collection interface, but part of framework)
```

---

## 📊 Hierarchy Diagram (Text-based):

```
         Collection (Interface)
         /      |         \
     List     Set       Queue
     |         |           |
 ArrayList   HashSet     PriorityQueue
 LinkedList  LinkedHashSet
 Vector      TreeSet

         Map (Interface)
          |
     HashMap
     LinkedHashMap
     TreeMap
```

---

## 🔷 3. List Interface (Ordered, Duplicates Allowed)

| Class        | Use                        |
| ------------ | -------------------------- |
| `ArrayList`  | Fast access, dynamic array |
| `LinkedList` | Fast insertion/deletion    |
| `Vector`     | Thread-safe (legacy)       |

```java
List<String> list = new ArrayList<>();
list.add("A");
list.add("B");
System.out.println(list.get(0)); // Output: A
```

---

## 🔷 4. Set Interface (No Duplicates Allowed)

| Class           | Use                       |
| --------------- | ------------------------- |
| `HashSet`       | Fast, no order            |
| `LinkedHashSet` | Maintains insertion order |
| `TreeSet`       | Sorted set                |

```java
Set<Integer> set = new HashSet<>();
set.add(10);
set.add(20);
set.add(10);  // Duplicate, won't be added
```

---

## 🔷 5. Map Interface (Key-Value Pair)

| Class           | Use                       |
| --------------- | ------------------------- |
| `HashMap`       | Fast, no order            |
| `LinkedHashMap` | Maintains insertion order |
| `TreeMap`       | Sorted keys               |

```java
Map<String, Integer> map = new HashMap<>();
map.put("A", 100);
map.put("B", 200);
System.out.println(map.get("A"));  // Output: 100
```

---

## 🛠 Common Methods:

| Collection Method | Description                  |
| ----------------- | ---------------------------- |
| `add()`           | Add element                  |
| `remove()`        | Remove element               |
| `contains()`      | Check if element exists      |
| `size()`          | Number of elements           |
| `clear()`         | Remove all elements          |
| `isEmpty()`       | Check if collection is empty |
| `get(index)`      | For List only                |

---

## 🧠 Important Concepts:

### 🔹 Generics:

```java
List<String> names = new ArrayList<>();
```

### 🔹 Iteration:

```java
for (String item : list) {
    System.out.println(item);
}

Iterator<Integer> it = set.iterator();
while (it.hasNext()) {
    System.out.println(it.next());
}
```

---

## 🧾 Summary Table:

| Interface | Class     | Order Maintained? | Allows Duplicates?   |
| --------- | --------- | ----------------- | -------------------- |
| List      | ArrayList | ✅ Yes             | ✅ Yes                |
| Set       | HashSet   | ❌ No              | ❌ No                 |
| Map       | HashMap   | ❌ No              | ❌ (Only unique keys) |

---

## 🧪 Practice Assignments:

1. एक `ArrayList` में 5 names जोड़िए और alphabetically sort कीजिए
2. एक `HashSet` बनाइए और देखें duplicate add होने पर क्या होता है
3. एक `HashMap` बनाइए जिसमें Student Name को Roll Number से map करें
4. एक `LinkedHashMap` बनाइए और उसे iteration के साथ print करें

---

## 📘 Interview Questions:

* List vs Set में क्या फ़र्क है?
* HashMap और TreeMap में क्या अंतर है?
* ArrayList और LinkedList में कौन fast है और कब use करें?
* Collection vs Collections (class vs interface) में क्या अंतर है?
