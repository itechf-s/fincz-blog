---
title: "6.1 OOPs Introduction"
categories: [ Java, Course]
tags: [Basic]
description: "Module 6: Object Oriented Programming (OOP)"
date: 2025-06-01T07:00:46+05:30
images: ["images/2025/06/oops-introduction.webp"]
author: ahmad
type: docs
---

Java एक **Pure Object Oriented Programming Language** नहीं है, लेकिन इसमें OOP के सारे प्रमुख principles follow होते हैं।

OOP का मतलब है —

> "ऐसा code लिखना जो असली दुनिया की तरह काम करे, यानी सब कुछ **object** के रूप में imagine करना।"


OOP (Object Oriented Programming) की **शुरुआत क्यों हुई**, **जरूरत क्यों पड़ी**, ये समझना बहुत ज़रूरी है — ताकि हम केवल syntax न रटें, बल्कि उस सोच को समझें जिसने इसे जन्म दिया।

---

## 🔙 पहले क्या था? – **Procedural Programming (जैसे C language)**

इसमें code को functions और procedures में बाँटा जाता था। सब कुछ एक के बाद एक चलता था।

### 🔧 उदाहरण (C language style):

```c
int speed = 50;
void drive() {
    printf("Car is driving at %d", speed);
}
```

लेकिन जैसे-जैसे प्रोग्राम **बड़े और complex** होने लगे — जैसे:

* Operating Systems
* Games
* Web Apps
* ATM software
  तो procedural code में दिक्कतें आने लगीं।

---

## ⚠️ क्या-क्या Problems आने लगीं?

| समस्या                  | समझाइए आसान भाषा में                                  |
| ----------------------- | ----------------------------------------------------- |
| ❌ Code का repetition    | हर बार variables और logic को अलग-अलग संभालना पड़ता था |
| ❌ Data expose हो जाता   | कोई भी function किसी भी variable को बदल सकता          |
| ❌ Debugging मुश्किल     | Code लंबा और उलझा हुआ होता                            |
| ❌ Maintain करना मुश्किल | एक part बदलो तो सब बिगड़ जाता                         |
| ❌ Reusability नहीं थी   | एक बार लिखा code बार-बार नहीं चल पाता                 |

---

## ✅ तब आया समाधान – **Object Oriented Programming (OOP)**

OOP का idea पहली बार **1970s** में आया।
**Simula** language (1967) को पहली OOP language माना जाता है।
बाद में **C++ (1980s)** और फिर **Java (1995)** ने इसको mass adoption में ला दिया।

---

## 🎯 OOP क्यों आया?

> ताकि software को **वैसे ही design किया जाए**, जैसे असली दुनिया में चीज़ें होती हैं — Objects की form में।

OOP कहता है:

> "Code को functions में मत बाँटो — **Objects में बाँटो**।"

---

## 🤖 एक Example से Clear करते हैं:

### Procedural Approach:

```java
String name = "Ram";
int age = 38;
void showDetails(String name, int age) {
    System.out.println(name + " - " + age);
}
```

### OOP Approach:

```java
class Person {
    String name;
    int age;

    void showDetails() {
        System.out.println(name + " - " + age);
    }
}
```

अब हम simply करते हैं:

```java
Person p = new Person();
p.name = "Ram";
p.age = 38;
p.showDetails();
```

> ऐसा लगता है जैसे हम इंसान की profile बना रहे हों, बिलकुल real-world जैसा।

---

## 🎁 OOP के फायदे क्या मिले?

| Feature            | फायदा                              |
| ------------------ | ---------------------------------- |
| Encapsulation      | Data सुरक्षित रहा                  |
| Inheritance        | Code reuse हुआ                     |
| Polymorphism       | Code flexible बना                  |
| Abstraction        | Complex चीज़ें simple लगीं         |
| Modularity         | Code छोटे-छोटे हिस्सों में बँट गया |
| Real-world mapping | Software को समझना आसान हो गया      |

---

## 🔚 संक्षेप में:

OOP की शुरुआत इसलिए हुई क्योंकि:

* पुराने तरीके (procedural) से code लिखना बड़े प्रोजेक्ट्स में कठिन हो रहा था।
* software को इंसानों जैसी सोच से model करने की ज़रूरत थी।
* maintainable, scalable और secure systems बनाना ज़रूरी हो गया था।


## 🔶 इस Module में आप सीखेंगे:

* Class और Object क्या होते हैं
* Constructor क्या होता है और इसके प्रकार
* `this` keyword
* Static members
* 4 Main OOP Concepts:

  1. Encapsulation
  2. Inheritance
  3. Polymorphism (Overloading & Overriding)
  4. Abstraction

---

## 🔹 Class और Object

### ✅ Class:

Class एक **template** होती है जिससे objects बनते हैं। इसमें data members (variables) और methods (functions) होते हैं।

```java
class Car {
    String color;
    void drive() {
        System.out.println("Car is driving");
    }
}
```

### ✅ Object:

Object class का **instance** होता है।

```java
Car myCar = new Car();
myCar.color = "Red";
myCar.drive();
```

---

## 🔹 Constructor

Constructor एक **special method** है जो object create होने पर call होता है।

### ➤ Types:

* Default Constructor
* Parameterized Constructor

```java
class Student {
    String name;
    Student(String n) {
        name = n;
    }
}
```

---

## 🔹 `this` keyword

`this` keyword current object को refer करता है।

```java
class Student {
    String name;
    Student(String name) {
        this.name = name;
    }
}
```

---

## 🔹 static keyword

* `static` methods और variables class से जुड़े होते हैं, object से नहीं।
* `main()` method भी static होता है।

```java
class MathUtil {
    static int square(int x) {
        return x * x;
    }
}
```

Usage: `MathUtil.square(5);`

---

## 🔶 4 Main Pillars of OOP

---

### 1️⃣ **Encapsulation** (Data Hiding)

> [Encapsulation]({{< ref "/courses/java-beginner/module-06/encapsulation" >}}) Data और Methods को एक class में group करना और fields को private रखना।

```java
class BankAccount {
    private int balance = 1000;
    public int getBalance() {
        return balance;
    }
}
```

---

### 2️⃣ **Inheritance** (Code Reuse)

> एक class दूसरी class की properties को inherit कर सकती है।

```java
class Animal {
    void sound() {
        System.out.println("Animal makes sound");
    }
}

class Dog extends Animal {
    void bark() {
        System.out.println("Dog barks");
    }
}
```

---

### 3️⃣ **Polymorphism** (Many Forms)

#### ➤ Method Overloading (Compile Time)

```java
class Math {
    int add(int a, int b) { return a + b; }
    double add(double a, double b) { return a + b; }
}
```

#### ➤ Method Overriding (Runtime)

```java
class Animal {
    void sound() {
        System.out.println("Animal sound");
    }
}

class Dog extends Animal {
    @Override
    void sound() {
        System.out.println("Dog barks");
    }
}
```

---

### 4️⃣ **Abstraction** (Hiding Complexity)

#### ➤ Abstract Class:

```java
abstract class Shape {
    abstract void draw();
}
```

#### ➤ Interface:

```java
interface Drawable {
    void draw();
}
```

---

## 🧠 Practice Questions:

1. एक class `Book` बनाइए और उसका object create कीजिए।
2. Constructor का प्रयोग करके `Student` object में नाम सेट कीजिए।
3. एक class `Employee` बनाइए जिसमें encapsulated salary हो और getter method से access हो।
4. एक class `Vehicle` बनाइए और `Bike` उससे inherit कराइए।
5. `Method Overloading` और `Overriding` के लिए अलग-अलग program लिखिए।
