---
title: "6.6 Polymorphism"
categories: [ Java, Course]
tags: [Basic]
description: "Polymorphism"
date: 2025-06-01T07:00:41+05:30
author: ahmad
type: docs
---

# 📘 Module 6: Object Oriented Programming (OOP) Concepts in Java

चलिए अब Object-Oriented Programming (OOP) का अगला और सबसे ज़्यादा interview में पूछा जाने वाला concept **Polymorphism** को detail में, आसान हिंदी में समझते हैं — examples, types, Java syntax और practical use के साथ।

---

## 🔷 Polymorphism क्या होता है?

### 📌 Definition:

> **Polymorphism** का मतलब होता है:
> "**Many Forms**" यानी **एक चीज़ का कई रूप होना**।

➡️ Java में इसका मतलब है कि **एक method या object अलग-अलग तरीक़े से behave कर सकता है**, depending on context (compile-time या run-time पर)।

---

## 🎯 Real-Life Example:

मान लीजिए आपके पास एक method है `draw()`

* अगर इसे `Circle` class call करे तो वो circle बनाए,
* अगर `Rectangle` call करे तो rectangle बनाए।

👉 Method तो वही `draw()` है, लेकिन उसका काम context के हिसाब से बदलता है — **यही है Polymorphism।**

---

## 🔠 Java में Polymorphism के प्रकार:

| Type | Name                      | Description        |
| ---- | ------------------------- | ------------------ |
| 1️⃣  | Compile-time Polymorphism | Method Overloading |
| 2️⃣  | Run-time Polymorphism     | Method Overriding  |

---

## ✅ 1. Compile-Time Polymorphism (Method Overloading)

### जब एक ही class में **एक से ज़्यादा method same name** से होते हैं, लेकिन उनके **parameters अलग** होते हैं।

### 🔹 Example:

```java
class Calculator {
    int add(int a, int b) {
        return a + b;
    }

    double add(double a, double b) {
        return a + b;
    }

    int add(int a, int b, int c) {
        return a + b + c;
    }
}
```

➡️ यहां `add()` method तीन बार define हुआ है लेकिन अलग-अलग parameter से।

📌 इसे **Early Binding / Static Binding** भी कहते हैं।

---

## ✅ 2. Run-Time Polymorphism (Method Overriding)

### जब child class parent class के method को **अपने तरीके से override** करती है, तो उसे **method overriding** कहते हैं।

### 🔹 Example:

```java
class Animal {
    void sound() {
        System.out.println("Animal makes a sound");
    }
}

class Dog extends Animal {
    void sound() {
        System.out.println("Dog barks");
    }
}
```

```java
public class Main {
    public static void main(String[] args) {
        Animal a = new Dog();  // Upcasting
        a.sound();  // Output: Dog barks
    }
}
```

📌 इसे **Late Binding / Dynamic Binding** भी कहते हैं।

---

## 🧠 Why Use Polymorphism?

| Benefit       | Description                           |
| ------------- | ------------------------------------- |
| ✅ Flexibility | एक interface, कई implementation       |
| ✅ Reusability | Common method name, specific behavior |
| ✅ Readability | Code readable और manageable बनता है   |
| ✅ Scalability | नया class जोड़ना आसान                 |

---

## 🖼 Text-Based Diagram (Run-time Polymorphism)

```
        Animal (Parent)
            ↑
        Dog, Cat (Child)

Reference: Animal a = new Dog();
Call:      a.sound();  → Runtime decides
```

---

## 🧾 Summary Table:

| Feature               | Compile-Time (Overloading) | Run-Time (Overriding) |
| --------------------- | -------------------------- | --------------------- |
| Binding               | Early / Static             | Late / Dynamic        |
| Class                 | Same class                 | Parent-child class    |
| Method                | Same name, diff params     | Same method, new body |
| Inheritance Required? | ❌ No                       | ✅ Yes                 |
| Keyword               | -                          | `@Override`           |

---

## 📘 Interview में पूछा जाता है:

1. What is polymorphism in Java?
2. Types of polymorphism?
3. Difference between overloading and overriding?
4. Can we override static methods?
5. Can constructor be overloaded?

---

## 🧪 Practice Assignments:

* Method overloading करके एक calculator class बनाइए
* Parent class `Vehicle` बनाकर उसे `Car`, `Bike` से override कराइए
* `Animal` class का reference बना कर `Dog`, `Cat` object से polymorphism दिखाइए

---

## 🔍 Extra Concept:

### ❓ Static Methods Overriding होते हैं?

> ❌ नहीं — Static methods को override नहीं किया जा सकता क्योंकि वो class से belong करते हैं, object से नहीं।
