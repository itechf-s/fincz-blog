---
title: "4.1 Functions & Methods in Java"
categories: [ Java, Course]
tags: [Basic]
description: "Module 4: Functions & Methods in Java"
date: 2025-06-01T07:00:53+05:30
images: ["images/2025/06/functions-and-methods.webp"]
author: ahmad
type: docs
---

## 🔶 इस Module में आप सीखेंगे:

* Function और Method में अंतर
* Java में method कैसे बनाया जाता है
* Method parameters और return values
* Method overloading
* Static और Non-static methods का फ़र्क
* `main()` method की भूमिका

---

## 🔹 Function vs Method

| Term         | अर्थ                                                                                                                                                                  |
| ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Function** | कोई भी block जो कुछ task करता है और call किया जा सकता है (general term)                                                                                               |
| **Method**   | जब function किसी class के अंदर होता है, तो उसे Java में **method** कहते हैं। Java में सभी functions methods ही होते हैं क्योंकि Java पूरी तरह **object-oriented** है। |

---

## 🔹 Java में Method कैसे बनाते हैं?

### ➤ Syntax:

```java
returnType methodName(parameters) {
    // code block
    return value; // अगर returnType void नहीं है
}
```

### ✅ Example:

```java
public class MyClass {

    // Method without return
    void greetUser(String name) {
        System.out.println("Hello, " + name + "!");
    }

    // Method with return
    int add(int a, int b) {
        return a + b;
    }
}
```

### ✅ Method Call:

```java
MyClass obj = new MyClass();
obj.greetUser("Amit");               // Output: Hello, Amit!
int result = obj.add(10, 20);        // result = 30
```

---

## 🔹 Static vs Non-static Methods

| Type              | विशेषता                                                    |
| ----------------- | ---------------------------------------------------------- |
| Static Method     | Class के नाम से call किया जा सकता है, object की जरूरत नहीं |
| Non-static Method | Call करने के लिए object बनाना जरूरी                        |

### ✅ Static Method Example:

```java
public class MathUtils {
    static int square(int x) {
        return x * x;
    }
}

// Call
int result = MathUtils.square(5); // result = 25
```

---

## 🔹 Method Parameters

### ✅ Single & Multiple Parameters:

```java
void greet(String name, int age) {
    System.out.println("Hello " + name + ", your age is " + age);
}
```

### ✅ Return Types:

* `void` – कुछ return नहीं करता
* `int`, `String`, `boolean`, etc. – value return करता है

---

## 🔹 Method Overloading

**एक ही नाम के method को multiple versions में बनाना, अलग-अलग parameters के साथ**

### ✅ Example:

```java
void display() {
    System.out.println("No arguments");
}

void display(String name) {
    System.out.println("Name: " + name);
}
```
---

## 🔷 **Method Overriding in Java**

---

### 🔶 क्या है Method Overriding?

जब **parent class** का कोई method **subclass (child class)** में **same नाम, same parameters** के साथ फिर से define किया जाता है — उसे **Method Overriding** कहते हैं।

यह **Run-time Polymorphism** का उदाहरण है।

---

### ✅ क्यों करते हैं Method Override?

* Parent class का default behavior बदलने के लिए
* किसी method को अपनी जरूरत के मुताबिक नए तरीके से implement करने के लिए

---

### 🔸 Basic Syntax:

```java
class Parent {
    void showMessage() {
        System.out.println("Message from Parent");
    }
}

class Child extends Parent {
    @Override
    void showMessage() {
        System.out.println("Message from Child");
    }
}
```

### ✅ Output:

```java
Parent obj = new Child();
obj.showMessage();   // Output: Message from Child
```

---

## 🔸 @Override Annotation

* यह Java को बताता है कि आप **overriding** कर रहे हैं।
* अगर method सही से override नहीं हो रहा है, तो **compile-time error** देगा।
* यह एक **optional**, लेकिन **best practice** annotation है।

---

## 🔸 Method Overloading vs Overriding

| Feature             | Method Overloading        | Method Overriding                     |
| ------------------- | ------------------------- | ------------------------------------- |
| Class Type          | एक ही class में           | दो classes में (inheritance में)      |
| Parameters          | अलग-अलग parameters        | parameters बिल्कुल same होते हैं      |
| Return Type         | बदल भी सकता है            | ideally same, या covariant होना चाहिए |
| Runtime or Compile? | Compile-time              | Run-time                              |
| Polymorphism Type   | Compile-time Polymorphism | Run-time Polymorphism                 |

---

## 🔸 Real-world Example

**Bank System**

```java
class Bank {
    double getInterestRate() {
        return 5.0;
    }
}

class SBI extends Bank {
    @Override
    double getInterestRate() {
        return 6.5;
    }
}

class ICICI extends Bank {
    @Override
    double getInterestRate() {
        return 7.0;
    }
}
```

### ✅ Usage:

```java
Bank b1 = new SBI();
System.out.println(b1.getInterestRate()); // Output: 6.5

Bank b2 = new ICICI();
System.out.println(b2.getInterestRate()); // Output: 7.0
```

---

## 🧠 अभ्यास (Practice)

1. एक parent class बनाइए — `Vehicle` और उसमें method हो `startEngine()`
2. दो child classes बनाइए — `Car`, `Bike` — और इस method को override कीजिए
3. Parent class का reference लेकर दोनों को call कीजिए

---

## ❓ Quiz

1. Method overriding में parameters same होने ज़रूरी हैं या नहीं?
2. क्या हम static method को override कर सकते हैं?
3. `@Override` annotation का क्या फायदा है?
4. Method overloading और overriding में runtime और compile time का क्या फर्क है?

---

## 🔹 `main()` Method

```java
public static void main(String[] args) {
    // Program starts from here
}
```

यह Java का entry point होता है। इसमें से object बनाए जाते हैं और methods को call किया जाता है।

---

## 🧠 अभ्यास (Exercises)

1. एक method बनाइए जो दो numbers को जोड़कर result return करे।
2. एक method बनाइए जो user's नाम और उम्र लेकर message print करे।
3. एक method overload कीजिए जिसमें एक version में सिर्फ नाम और दूसरे में नाम व उम्र दोनों लिए जाएँ।

---

## ❓ Quiz

1. Java में method और function में क्या फर्क है?
2. `static` और `non-static` method में क्या अंतर है?
3. `return` statement का क्या उपयोग है?
4. क्या हम एक ही नाम के multiple methods बना सकते हैं?