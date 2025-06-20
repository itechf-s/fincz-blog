---
title: "5.1 Arrays & Strings"
categories: [ Java, Course]
tags: [Basic]
description: "Module 5: Arrays & Strings in Java"
date: 2025-06-01T07:00:50+05:30
images: ["images/2025/06/java-beginner-course-syllabus.webp"]
author: ahmad
type: docs
---

**Java Beginner Course का Module 5: Arrays & Strings**
यह Java का एक **मूलभूत लेकिन बहुत महत्वपूर्ण** टॉपिक है, जो हर beginner को अच्छे से समझना चाहिए।

---

# 📘 **Module 5: Arrays & Strings in Java**

---

## 🔶 इस Module में आप सीखेंगे:

* Array क्या होता है, और इसे क्यों इस्तेमाल करते हैं
* Array कैसे declare, initialize और access किया जाता है
* 1D और 2D Arrays
* String क्या है और उससे जुड़ी ज़रूरी methods
* String vs StringBuilder vs StringBuffer

---

## 🔹 **Array क्या होता है?**

> **Array** एक data structure है जो **एक ही type** के multiple values को **single variable** में store करता है।

### ✅ उदाहरण:

```java
int[] numbers = {10, 20, 30, 40};
```

यहाँ `numbers` एक integer array है जो 4 values को hold कर रहा है।

---

## 🔹 Array Declaration और Initialization

### ➤ Declaration:

```java
int[] a;     // recommended
int a[];     // भी सही है
```

### ➤ Memory Allocation:

```java
a = new int[5];  // 5 elements वाला array (default values = 0)
```

### ➤ Initialization:

```java
a[0] = 10;
a[1] = 20;
```

या सीधे:

```java
int[] a = {1, 2, 3, 4, 5};
```

---

## 🔹 Array Access और Loop से Traversal

```java
for (int i = 0; i < a.length; i++) {
    System.out.println(a[i]);
}
```

या:

```java
for (int val : a) {
    System.out.println(val);
}
```

---

## 🔹 2D Arrays (Matrix)

```java
int[][] matrix = {
    {1, 2, 3},
    {4, 5, 6}
};
```

Access:

```java
System.out.println(matrix[1][2]); // Output: 6
```

---

## 🧵 **Strings in Java**

> Java में **String** एक **class** है जो characters का sequence store करती है।

```java
String name = "Amit";
```

### ✅ Important Points:

* Strings **immutable** होती हैं (बदलती नहीं हैं)
* Java में `+` operator से strings को जोड़ सकते हैं

---

## 🔹 Common String Methods

| Method                  | उपयोग                    |
| ----------------------- | ------------------------ |
| `length()`              | String की लंबाई          |
| `charAt(index)`         | Index पर character       |
| `toUpperCase()`         | Capital में              |
| `toLowerCase()`         | Small में                |
| `equals(s2)`            | Content compare          |
| `equalsIgnoreCase(s2)`  | Case ignore करके compare |
| `substring(start, end)` | Part of string           |
| `contains("abc")`       | Substring check          |
| `replace("a", "b")`     | Replace characters       |

### ✅ उदाहरण:

```java
String str = "Hello World";
System.out.println(str.length());           // 11
System.out.println(str.charAt(0));          // H
System.out.println(str.substring(6));       // World
System.out.println(str.toUpperCase());      // HELLO WORLD
```

---

## 🔹 String vs StringBuilder vs StringBuffer

| Feature     | String            | StringBuilder  | StringBuffer          |
| ----------- | ----------------- | -------------- | --------------------- |
| Mutability  | Immutable         | Mutable        | Mutable               |
| Thread-safe | ❌ No              | ❌ No           | ✅ Yes                 |
| Performance | Slow (new object) | Fast (no lock) | Slower (synchronized) |

### ✅ Use case:

* यदि आपको बार-बार string को modify करना है (e.g. loop में) → `StringBuilder` का उपयोग करें।

---

## 🧠 अभ्यास (Practice):

1. एक array बनाइए जिसमें 5 numbers हों, और उनका average निकलिए।
2. एक 2D matrix बनाइए और उसमें सभी elements को print कीजिए।
3. एक string में vowels की संख्या गिनने वाला प्रोग्राम लिखिए।
4. StringBuilder का उपयोग करके reverse string प्रोग्राम बनाइए।

---

## ❓ Quiz

1. Array का index कहाँ से शुरू होता है?
2. `String` class immutable क्यों होती है?
3. 2D array में कोई element कैसे access करते हैं?
4. `equals()` और `==` में क्या अंतर है?

---

अगर आप चाहें, तो मैं इसका:

* **PDF Notes**
* **String functions chart**
* **Array flow diagram**
* **Practice assignment worksheet**

भी तैयार कर सकता हूँ।

क्या मैं वो सभी materials दूँ या आप अगला Module 6: Object Oriented Concepts शुरू करना चाहेंगे?
