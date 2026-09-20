---
title: "6.5 Inheritance"
categories: [ Java, Course]
tags: [Basic]
description: "Inheritance"
date: 2025-06-01T07:00:42+05:30
author: ahmad
type: docs
---

चलिए अब हम Object-Oriented Programming (OOP) का अगला और बहुत ही ज़रूरी concept **Inheritance** को detail में, आसान हिंदी में समझते हैं — with real-life example, Java syntax, benefits, types, और diagram।

---

## 🔷 Inheritance क्या होता है?

### 📌 Definition:

> जब एक **class दूसरी class की properties (variables + methods)** को **use या extend** करती है, तो इसे **Inheritance** कहा जाता है।

Java में inheritance से हम **code reuse** कर सकते हैं और classes में एक **parent-child relationship** बना सकते हैं।

---

## 🎯 Real-Life Example:

मान लीजिए आपके पास एक class है `Vehicle`, जिसमें common features हैं जैसे:

* `speed`
* `start()`
* `stop()`

अब आप `Car`, `Bike`, `Bus` जैसी अलग-अलग classes बनाना चाहते हैं, जो इन features को use कर सकें।
तो आप बार-बार वही code नहीं लिखेंगे — बल्कि आप `Vehicle` class को **inherit** करेंगे।

---

## 🔧 Java में Inheritance कैसे लिखा जाता है?

```java
class Vehicle {
    int speed = 60;

    void start() {
        System.out.println("Vehicle Started");
    }
}

// Child class inheriting from Vehicle
class Car extends Vehicle {
    void horn() {
        System.out.println("Car horn: Beep Beep!");
    }
}

public class Main {
    public static void main(String[] args) {
        Car c = new Car();
        c.start();      // inherited method
        System.out.println(c.speed);  // inherited variable
        c.horn();       // own method
    }
}
```

---

# 📌 Java में `extends` keyword का use होता है:

```java
class Child extends Parent {
    // Parent class का data यहाँ मिल जाता है
}
```

---

## ✅ Inheritance के फायदे

| Benefit                  | Explanation                                       |
| ------------------------ | ------------------------------------------------- |
| 🔁 Code Reusability      | एक बार लिखा हुआ code बार-बार use कर सकते हैं      |
| 🔧 Easy Maintenance      | Common code एक ही जगह maintain होता है            |
| 🏷 Logical Structure     | Real world जैसी class hierarchy बनती है           |
| 🔄 Polymorphism possible | Overriding वगैरह inheritance के बिना नहीं हो सकता |

---

## 🧠 Types of Inheritance in Java

| Type                         | Diagram          |
| ---------------------------- | ---------------- |
| **Single Inheritance**       | `A → B`          |
| **Multilevel Inheritance**   | `A → B → C`      |
| **Hierarchical Inheritance** | `A → B`, `A → C` |

⚠️ Note:
Java में **Multiple Inheritance (via class)** को **support नहीं** किया जाता (Ambiguity की वजह से) लेकिन इसे **interface** के ज़रिये achieve किया जाता है।

---

## 🔍 Example: Multilevel Inheritance

```java
class Animal {
    void eat() {
        System.out.println("I can eat");
    }
}

class Dog extends Animal {
    void bark() {
        System.out.println("I can bark");
    }
}

class Puppy extends Dog {
    void weep() {
        System.out.println("I can weep");
    }
}
```

---

## 📛 Access Control: क्या inherit होता है?

| Modifier    | Inherit होता है?    |
| ----------- | ------------------- |
| `public`    | ✔ होता है           |
| `protected` | ✔ होता है           |
| `default`   | ✔ (same package)    |
| `private`   | ❌ inherit नहीं होता |

---

## 📌 Method Overriding in Inheritance:

> जब child class parent class के method को अपने हिसाब से बदलती है, उसे **overriding** कहते हैं।

```java
class Vehicle {
    void run() {
        System.out.println("Vehicle is running");
    }
}

class Bike extends Vehicle {
    void run() {
        System.out.println("Bike is running safely");
    }
}
```

---

## 🧠 Interview Questions:

1. Inheritance क्यों ज़रूरी है?
2. Java में multiple inheritance क्यों नहीं है?
3. Constructor inherit होता है क्या?
4. Inheritance और composition में क्या फर्क है?
5. Overriding कब use करना चाहिए?

---

## 🧾 Summary Table:

| Feature       | Inheritance                               |
| ------------- | ----------------------------------------- |
| Keyword       | `extends`                                 |
| Base Class    | Super / Parent                            |
| Derived Class | Sub / Child                               |
| Access        | public, protected, default (private नहीं) |
| Benefit       | Code reuse, Structure, Overriding         |
| Types         | Single, Multilevel, Hierarchical          |

---

## 🖼 Text-Based Diagram (Single Inheritance)

```
   Vehicle (Parent)
      ↑
     Car (Child)
```