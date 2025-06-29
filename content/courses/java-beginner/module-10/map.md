---
title: "10.4 Map"
categories: [ Java, Course]
tags: [Basic]
description: "Map in Java"
date: 2025-06-01T07:00:25+05:30
author: ahmad
type: docs
---

# 📘 **Module 10: Java Collections Framework (JCF)**

बहुत बढ़िया! अब हम Java Collections Framework का तीसरा और सबसे real-world-friendly हिस्सा सीखते हैं —

# 📘 **Module 10.3: Map Interface in Java**

---

## 🔷 1. Map क्या होता है?

> Java में `Map` एक ऐसा collection है जो **key-value pair** में data को store करता है।
> हर `key` **unique** होती है, लेकिन values duplicate हो सकती हैं।

➡️ ये Dictionary, HashTable या JSON की तरह काम करता है।

---

## 📦 Map का Real-Life Use:

| Use Case       | Example          |
| -------------- | ---------------- |
| Student Marks  | `("Rahul", 85)`  |
| Product Price  | `("Soap", 25.5)` |
| Word Frequency | `("the", 14)`    |

---

## 🔁 Map Interface और इसकी Main Classes

```
        Map (Interface)
         ↓
 ┌────────────┬──────────────┐
HashMap   LinkedHashMap   TreeMap
```

| Class           | Order             | Sorting | Null Key      |
| --------------- | ----------------- | ------- | ------------- |
| `HashMap`       | ❌ No              | ❌ No    | ✅ 1 allowed   |
| `LinkedHashMap` | ✅ Yes (insertion) | ❌ No    | ✅ 1 allowed   |
| `TreeMap`       | ✅ Sorted by key   | ✅ Yes   | ❌ Not allowed |

---

## ✅ 2. HashMap Example

```java
import java.util.*;

public class MapExample {
    public static void main(String[] args) {
        Map<String, Integer> marks = new HashMap<>();

        marks.put("Aman", 85);
        marks.put("Ravi", 90);
        marks.put("Aman", 88);  // Overwrites previous value

        System.out.println(marks); // {Ravi=90, Aman=88}

        System.out.println("Aman's marks: " + marks.get("Aman"));  // 88
    }
}
```

---

## ✅ 3. LinkedHashMap (Order preserved)

```java
Map<String, String> capitals = new LinkedHashMap<>();
capitals.put("India", "Delhi");
capitals.put("USA", "Washington");
System.out.println(capitals); // {India=Delhi, USA=Washington}
```

---

## ✅ 4. TreeMap (Sorted by keys)

```java
Map<Integer, String> map = new TreeMap<>();
map.put(3, "Three");
map.put(1, "One");
map.put(2, "Two");
System.out.println(map);  // {1=One, 2=Two, 3=Three}
```

---

## 🧠 Common Map Methods

| Method                 | Description                   |
| ---------------------- | ----------------------------- |
| `put(key, value)`      | Add/update value              |
| `get(key)`             | Get value by key              |
| `remove(key)`          | Remove entry                  |
| `containsKey(key)`     | Key मौजूद है या नहीं          |
| `containsValue(value)` | Value मौजूद है या नहीं        |
| `keySet()`             | सभी keys का Set               |
| `values()`             | सभी values का Collection      |
| `entrySet()`           | key-value pair set (for loop) |

---

## 🔁 Iterating Over Map

```java
for (Map.Entry<String, Integer> entry : marks.entrySet()) {
    System.out.println(entry.getKey() + " => " + entry.getValue());
}
```

या

```java
marks.forEach((key, value) -> {
    System.out.println(key + " => " + value);
});
```

---

## 📘 Summary Comparison

| Feature     | HashMap         | LinkedHashMap     | TreeMap       |
| ----------- | --------------- | ----------------- | ------------- |
| Order       | ❌ No            | ✅ Insertion Order | ✅ Sorted      |
| Performance | ✅ Fastest       | Medium            | ❌ Slowest     |
| Null Keys   | ✅ Allowed (1)   | ✅ Allowed (1)     | ❌ Not Allowed |
| Use Case    | General purpose | Maintain order    | Sorted lookup |

---

## 🧪 Practice Assignments

1. एक `HashMap<String, Integer>` में 5 students के नाम और उनके marks store कीजिए
2. `TreeMap<String, String>` में countries और capitals डालिए और output check कीजिए
3. एक `LinkedHashMap<Integer, String>` में 3 roll numbers और नाम जोड़िए और insertion order print कीजिए
4. Map के सभी keys और values को अलग-अलग print कीजिए
5. किसी String में हर character की frequency count कर के एक Map में store कीजिए

---

## 🧠 Interview Questions

* Map और List में क्या फर्क है?
* HashMap और TreeMap में क्या अंतर है?
* क्या HashMap null keys allow करता है?
* Map में duplicate values हो सकती हैं?
