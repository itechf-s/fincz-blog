---
title: "8.1 Exception Handling "
categories: [ Java, Course]
tags: [Basic]
description: "Module 8: Exception Handling in Java"
date: 2025-06-01T07:00:36+05:30
images: ["images/2025/06/exception-handling.webp"]
author: ahmad
type: docs
---

## 🔷 1. Exception Handling क्या होता है?

### 📌 Definition:

> Java में **exception** एक ऐसा situation होता है जो **program के execution को रोक देती है**, जैसे – divide by zero, null value access करना, file ना मिलना आदि।

➡️ Java हमें एक structured तरीका देता है ताकि हम इन situations को **handle** कर सकें — जिसे कहते हैं: **Exception Handling**

---

## 🎯 Real-Life Example:

मान लीजिए आप ATM से पैसे निकाल रहे हैं:

* अगर account में balance नहीं है तो?
* अगर server down है तो?

👉 ये सब exceptions हैं — जिन्हें system को **crash किए बिना** handle करना चाहिए।

---

## 🔧 Java में Exception Handling कैसे किया जाता है?

Java में exception handle करने के लिए हम ये keywords use करते हैं:

### ✅ Keywords:

| Keyword   | Use                                     |
| --------- | --------------------------------------- |
| `try`     | risky code यहाँ लिखा जाता है            |
| `catch`   | exception आने पर क्या करना है           |
| `finally` | code जो हर हाल में चले                  |
| `throw`   | manually exception फेंकने के लिए        |
| `throws`  | method से exception declare करने के लिए |

---

### 🔹 Basic Syntax:

```java
try {
    // Risky code
} catch (ExceptionType e) {
    // Handle error
} finally {
    // Clean-up code
}
```

---

## ✅ Example:

```java
public class Test {
    public static void main(String[] args) {
        try {
            int a = 10 / 0;  // Risky line
        } catch (ArithmeticException e) {
            System.out.println("Divide by zero not allowed");
        } finally {
            System.out.println("This will always run");
        }
    }
}
```

---

## 🔷 2. Common Exceptions in Java

| Exception Type                   | Occurs When            |
| -------------------------------- | ---------------------- |
| `ArithmeticException`            | Divide by zero         |
| `NullPointerException`           | Accessing null object  |
| `ArrayIndexOutOfBoundsException` | Invalid array index    |
| `NumberFormatException`          | Wrong string to number |
| `IOException`                    | File or input error    |

---

## 🔹 Multiple Catch Blocks:

```java
try {
    // Risky code
} catch (ArithmeticException e) {
    System.out.println("Math Error");
} catch (NullPointerException e) {
    System.out.println("Null Error");
}
```

---

## 🔷 3. `throw` और `throws` में अंतर

### 🔹 `throw` – खुद से exception फेंकना

```java
throw new ArithmeticException("Manually thrown");
```

### 🔹 `throws` – method बताता है कि ये exception फेंक सकता है

```java
void readFile() throws IOException {
    // risky file code
}
```

---

## ✅ Best Practices:

* हर method में exception को properly handle करें
* कभी भी empty `catch` block न रखें
* Reusable custom exception class बनाएँ
* Resource clean-up के लिए `finally` या `try-with-resources` use करें

---

## 🧾 Summary Table:

| Feature     | Example                         |
| ----------- | ------------------------------- |
| `try-catch` | Handle runtime exception        |
| `finally`   | Clean-up (file close, db close) |
| `throw`     | Custom exception throw          |
| `throws`    | Method declaration              |

---

## 🧪 Practice Exercise Ideas:

1. Divide by zero handle करना
2. File ना मिलने पर message print कराना
3. Array index bound exception handle करना
4. Custom exception बनाना जैसे: `InsufficientBalanceException`

---

## 📘 Interview Questions:

* What is exception handling?
* Difference between checked & unchecked exceptions?
* Can you have multiple catch blocks?
* What is finally? Can it be skipped?
* Difference between throw and throws?

---

## 🖼 Text-Based Flow Diagram:

```
 try {
     → risky code
 } 
 catch (Exception) {
     → if error occurs, handle here
 }
 finally {
     → always executes
 }
```
