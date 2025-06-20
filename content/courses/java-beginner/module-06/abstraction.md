---
title: "6.3 Abstraction"
categories: [ Java, Course]
tags: [Basic]
description: "Abstraction"
date: 2025-06-01T07:00:44+05:30
author: ahmad
type: docs
---

# 📘 Module 6: Object Oriented Programming (OOP) Concepts in Java

चलिए अब OOP का अगला important concept — **Abstraction** — detail में आसान हिंदी में समझते हैं, ताकि आपको इसके **what, why, how** और real-life examples, Java syntax और interview questions पूरी तरह समझ में आ जाएँ।

---

## 🔷 Abstraction क्या होता है?

### 📌 Definition:

> **Abstraction** का मतलब है — किसी चीज़ की **सिर्फ ज़रूरी जानकारी को दिखाना** और **बाकी details को छिपा देना।**

➡️ Java में abstraction से हम complex logic को छिपाकर users को सिर्फ simple interface देते हैं।

---

## 🎯 Real-Life Example:

जब आप मोबाइल पर कोई call करते हैं:

* आप सिर्फ **Call** बटन दबाते हैं।
* आपको ये जानने की ज़रूरत नहीं कि internally नेटवर्क कैसे connect होता है, signal कैसे भेजे जाते हैं।

👉 यानि, **complex implementation छुपाई गई**, और सिर्फ ज़रूरी part **(call करना)** दिखाया गया — यही है **abstraction**।

---

## 🔧 Java में Abstraction कैसे implement करते हैं?

Java में abstraction को achieve किया जाता है:

1. **Abstract Class** के ज़रिए (`abstract` keyword)
2. **Interface** के ज़रिए

---

## ✅ Abstract Class in Java

### 🔹 क्या है?

> एक ऐसा class जिसमें कुछ methods के **implementation नहीं होते**, सिर्फ **structure** होता है।

### 🔹 Syntax:

```java
abstract class Animal {
    abstract void sound();  // सिर्फ declaration

    void sleep() {
        System.out.println("Sleeping...");
    }
}
```

### 🔹 Use:

```java
class Dog extends Animal {
    void sound() {
        System.out.println("Barks");
    }
}
```

---

## ✅ Interface in Java

> Interface एक **pure abstraction** देता है — इसमें **सिर्फ method declaration** होते हैं (Java 8+ में default methods भी हो सकते हैं)।

```java
interface Vehicle {
    void start();  // no body
}
```

```java
class Car implements Vehicle {
    public void start() {
        System.out.println("Car Started");
    }
}
```

---

## 🤔 Abstract Class vs Interface

| Feature              | Abstract Class      | Interface           |
| -------------------- | ------------------- | ------------------- |
| Keywords             | `abstract class`    | `interface`         |
| Method body allowed? | हाँ (कुछ methods)   | Java 8 से पहले ❌    |
| Constructor allowed? | ✔️                  | ❌                   |
| Multiple inheritance | ❌                   | ✔️ (via interfaces) |
| Use case             | Partial abstraction | Full abstraction    |

---

## ❓ Abstraction क्यों ज़रूरी है?

| कारण                                            | विवरण |
| ----------------------------------------------- | ----- |
| 🔒 Complex logic को छुपाने के लिए               |       |
| 🎛️ User को simple interface देने के लिए        |       |
| ♻️ Code reuse और structure maintain करने के लिए |       |
| 💡 Maintainability और readability बढ़ाने के लिए |       |

---

## 📛 Important Notes:

* Abstract class का object **नहीं बनाया जा सकता**।
* लेकिन उसका reference किसी child class को hold कर सकता है:

```java
Animal a = new Dog();  // Allowed
```

* Interface के सभी methods **by default public और abstract** होते हैं।

---

## 📘 Interview में पूछे जाने वाले सवाल:

1. Abstraction क्या है और कैसे implement करते हैं?
2. Interface vs Abstract Class — कब क्या use करना चाहिए?
3. क्या abstract class का constructor होता है?
4. क्या interface में variables हो सकते हैं?
5. Interface के अंदर default और static method का use?

---

## 🧾 Summary Table:

| Feature         | Description                           |
| --------------- | ------------------------------------- |
| Main Purpose    | Complex logic छुपाना                  |
| Achieved By     | Abstract Class, Interface             |
| Abstract Class  | Partial abstraction                   |
| Interface       | Full abstraction                      |
| Object Allowed? | ❌ नहीं, केवल subclass का object बनेगा |
| Use Case        | Framework, API design, plugin system  |

---

## 🖼 Text-Based Diagram:

```
  Abstract Class / Interface
            ↓
      Child Class (implements)
            ↓
        Object (run-time)
```

---

## 🧪 Bonus Assignment Ideas:

* Abstract class बनाइए `Shape`, जिसमें `area()` method abstract हो।
* Interface बनाइए `Printable`, और class बनाइए `Document` जो इसे implement करे।
* Interface से Multiple Inheritance वाला Example तैयार करें।
