---
title: "10.2 List"
categories: [ Java, Course]
tags: [Basic]
description: "List in Java"
date: 2025-06-01T07:00:27+05:30
author: ahmad
type: docs
---

# 📘 **Module 10: Java Collections Framework (JCF)**

## 📘 **List Interface in Java**

---

## 🔷 1. List क्या है?

> Java में `List` एक **ordered collection** है जिसमें हम **duplicate elements** भी store कर सकते हैं, और हर element की position (index) होती है।

➡️ आप इसे Python की List या C++ की Vector की तरह समझ सकते हैं।

---

## 📦 List Interface के Main Implementations:

| Class Name   | Description                         |
| ------------ | ----------------------------------- |
| `ArrayList`  | Fast access, dynamic array          |
| `LinkedList` | Fast insertion/deletion             |
| `Vector`     | Thread-safe (legacy, rarely used)   |
| `Stack`      | Subclass of Vector (LIFO structure) |

---

## 📌 2. ArrayList – सबसे ज़्यादा use होने वाली List

```java
import java.util.*;

public class Example {
    public static void main(String[] args) {
        List<String> names = new ArrayList<>();

        names.add("Ram");
        names.add("Shyam");
        names.add("Ram");  // duplicate allowed

        System.out.println(names);  // [Ram, Shyam, Ram]

        System.out.println("First element: " + names.get(0));
        System.out.println("Size: " + names.size());

        names.remove("Ram");
        System.out.println("After removal: " + names);
    }
}
```

---

## 📌 3. LinkedList – जब frequent insertion/delete करना हो

```java
List<String> fruits = new LinkedList<>();
fruits.add("Apple");
fruits.add("Banana");
fruits.addFirst("Mango"); // Only in LinkedList
```

---

## ✅ 4. List Methods Summary

| Method              | Description                     |
| ------------------- | ------------------------------- |
| `add(E e)`          | Element add करना                |
| `add(int index, E)` | Particular position पर add करना |
| `get(int index)`    | Element fetch करना              |
| `set(int index, E)` | Element update करना             |
| `remove(int)`       | Element remove करना             |
| `indexOf(E)`        | First index of element          |
| `lastIndexOf(E)`    | Last index                      |
| `isEmpty()`         | खाली है या नहीं                 |
| `size()`            | Size return करता है             |

---

## 🔁 Iterating over List

### ✅ For-each Loop:

```java
for (String name : names) {
    System.out.println(name);
}
```

### ✅ Using Iterator:

```java
Iterator<String> itr = names.iterator();
while (itr.hasNext()) {
    System.out.println(itr.next());
}
```

---

## 🔍 ArrayList vs LinkedList

| Feature            | ArrayList   | LinkedList         |
| ------------------ | ----------- | ------------------ |
| Data Store         | Array       | Doubly Linked List |
| Access Speed       | Fast (O(1)) | Slow (O(n))        |
| Insertion/Deletion | Slow        | Fast               |
| Memory Use         | Compact     | More               |

---

## 📘 Vector & Stack (Legacy Classes)

* `Vector` — synchronized, लेकिन slow
* `Stack` — LIFO (Last In First Out)

```java
Stack<Integer> stack = new Stack<>();
stack.push(10);
stack.push(20);
System.out.println(stack.pop());  // 20
```

---

## 🧪 Practice Assignment

1. एक `ArrayList` में 5 छात्रों के नाम डालिए और उन्हें print कीजिए
2. एक `LinkedList` में 3 cities add कीजिए, बीच में एक और city insert कीजिए
3. `List<Integer>` में 10 से 1 तक के numbers डालिए और फिर उन्हें reverse कीजिए
4. Duplicate names के साथ List बनाईए और उनमें से केवल unique names print कीजिए (using Set)

---

## 🧠 Interview में पूछे जाने वाले सवाल

* List vs Set में क्या फ़र्क है?
* ArrayList और LinkedList में कौन fast है और कब use करें?
* क्या List null values को allow करता है?
* क्या List synchronized है?
