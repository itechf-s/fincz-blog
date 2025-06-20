---
title: "6.2 Class और Object"
categories: [ Java, Course]
tags: [Basic]
description: "Class और 👉 Object"
date: 2025-06-01T07:00:45+05:30
author: ahmad
type: docs
---

# 📘 Module 6: Object Oriented Programming (OOP) Concepts in Java

अब हम Java के दो सबसे *core concepts* को **detail में** समझते हैं —
👉 **Class** और 👉 **Object**

---

## 🔷 1. **Class** क्या होती है?

### 🔹 Definition:

> Class एक **blueprint (नक्शा)** होती है, जिससे हम objects बनाते हैं।
> यह बताती है कि object में कौन-कौन से **data (variables)** और **actions (methods)** होंगे।

### 🎯 एक Real Example से समझो:

**मान लो** आपको गाड़ियाँ बनानी हैं।
आप पहले एक **design plan (class)** बनाओगे — जिसमें ये तय होगा कि:

* हर गाड़ी का रंग क्या होगा?
* उसमें कितने गियर होंगे?
* वो कैसे चलेगी?

यह plan **सिर्फ एक नक्शा है**, खुद से गाड़ी नहीं है — लेकिन इसी से आप **कई गाड़ियाँ (objects)** बना सकते हो।

---

### 🔸 Java में Class कैसे बनती है?

```java
class Car {
    // properties (state)
    String color;
    int speed;

    // methods (behavior)
    void drive() {
        System.out.println("Car is driving");
    }

    void stop() {
        System.out.println("Car has stopped");
    }
}
```

---

## 🔷 2. **Object** क्या होता है?

### 🔹 Definition:

> Object एक **असल entity (वास्तविक वस्तु)** है जो class के blueprint से बनता है।

Class = Design
Object = असली चीज़

---

### 🎯 Real Life से Comparison:

| Concept | Real Example       |
| ------- | ------------------ |
| Class   | Car का design plan |
| Object  | आपकी खुद की कार    |

Class केवल idea है,
Object उस idea का **असल रूप** है।

---

### 🔸 Java में Object कैसे बनाते हैं?

```java
Car myCar = new Car();  // object बन गया
myCar.color = "Red";
myCar.speed = 100;
myCar.drive();
```

अब `myCar` एक असली object है — उसके पास class में दिए गए सभी variables और methods हैं।

---

## 🧠 Class vs Object – Table से समझो

| Class                                | Object                                           |
| ------------------------------------ | ------------------------------------------------ |
| Blueprint होती है                    | Blueprint से बना असली item होता है               |
| Memory में जगह नहीं लेती             | Object को बनाते ही memory मिलती है               |
| Declare करने से structure तय होता है | Create करने से data और behavior इस्तेमाल होता है |
| Ex: `class Car {}`                   | Ex: `Car myCar = new Car();`                     |

---

## 🔧 Code Example (Class + Object)

```java
class Student {
    String name;
    int age;

    void study() {
        System.out.println(name + " is studying.");
    }
}

public class Main {
    public static void main(String[] args) {
        Student s1 = new Student();
        s1.name = "Kaunain";
        s1.age = 20;

        s1.study();  // Output: Kaunain is studying.
    }
}
```

---

## ✅ Object के कितने हो सकते हैं?

एक ही class से **कई objects** बनाए जा सकते हैं:

```java
Student s1 = new Student();
Student s2 = new Student();
Student s3 = new Student();
```

हर object का **अपना data होता है**।

---

## 📌 Important बातें:

* Java में `new` keyword से object बनता है
* Class सिर्फ structure देती है — object में ही असली data होता है
* एक object में बदलाव दूसरे object को affect नहीं करता

---

## 🧭 Summary

| Term       | मतलब                                                           |
| ---------- | -------------------------------------------------------------- |
| **Class**  | Blueprint या Template जो बताता है कि object में क्या-क्या होगा |
| **Object** | असली चीज़ जो class से बनी होती है, और memory में मौजूद होती है |
| **Use**    | Code को organize, reuse और manage करने में मदद मिलती है        |

---

## 🔷 1. **Constructor क्या होता है?**

### 📌 Definition:

> Constructor एक **special method** होता है जो object बनने पर **automatically call** होता है।

इसका काम object को **initial values** देना होता है।

---

### 🔹 कैसा दिखता है Constructor?

```java
class Car {
    String color;

    // Constructor
    Car(String c) {
        color = c;
    }
}
```

> ध्यान दें:

* Constructor का नाम class के नाम जैसा होता है
* इसमें **return type नहीं होता** (na void, na kuch aur)
* इसे `new` keyword के साथ object बनाते समय call किया जाता है

---

### 🎯 Example:

```java
class Student {
    String name;
    int age;

    // Constructor
    Student(String n, int a) {
        name = n;
        age = a;
    }

    void display() {
        System.out.println(name + " - " + age);
    }
}

public class Main {
    public static void main(String[] args) {
        Student s1 = new Student("Kaunain", 20); // constructor called
        s1.display();  // Output: Kaunain - 20
    }
}
```

---

## 🧩 Constructor के प्रकार

| प्रकार                                                  | विवरण                                   |
| ------------------------------------------------------- | --------------------------------------- |
| **Default Constructor**                                 | बिना parameter का constructor           |
| **Parameterized Constructor**                           | arguments लेने वाला constructor         |
| **Copy Constructor** (Java में manually बनाना पड़ता है) | एक object की values से नया object बनाना |

### ✅ Default Constructor Example:

```java
class Demo {
    Demo() {
        System.out.println("Default Constructor Called");
    }
}
```

---

## 🔷 2. `this` Keyword

### 📌 Definition:

> `this` keyword current object को **refer** करता है।

जब method या constructor के अंदर **local variable** और **instance variable** का नाम एक जैसा होता है, तब `this` काम आता है।

---

### 🔹 क्यों ज़रूरी है?

```java
class Person {
    String name;

    Person(String name) {
        this.name = name;  // यहां this.name = instance variable, name = local parameter
    }
}
```

अगर आप `this.name = name;` नहीं लिखते और बस `name = name;` लिखते, तो वो सिर्फ local parameter को assign करता — object के variable को नहीं।

---

### ✅ `this` के अन्य uses:

| Use             | Description                                         |
| --------------- | --------------------------------------------------- |
| `this.variable` | current object के variable को refer करता है         |
| `this.method()` | current object का method call करता है               |
| `this()`        | एक constructor से दूसरे constructor को call करता है |
| `return this`   | current object को return करता है                    |

---

## 🔷 3. Static Members (Static Variables & Methods)

### 📌 Definition:

> जब किसी variable या method को `static` keyword से declare किया जाता है, तो वह class level पर होता है — object level पर नहीं।

---

### 🔹 Static Variable:

```java
class Counter {
    static int count = 0;

    Counter() {
        count++;
        System.out.println(count);
    }
}
```

> हर object के लिए count **नया नहीं बनता**, बल्कि shared रहता है।

---

### 🔹 Static Method:

```java
class MyClass {
    static void show() {
        System.out.println("Static Method Called");
    }
}
```

> इसे object से नहीं, बल्कि class से call किया जाता है:

```java
MyClass.show();  // सही तरीका
```

---

## 🧠 Static vs Non-Static

| Feature        | Static                            | Non-Static                       |
| -------------- | --------------------------------- | -------------------------------- |
| Memory         | एक बार class load पर              | हर object के लिए अलग             |
| Call कैसे करें | `ClassName.method()`              | `object.method()`                |
| Use कब करें    | जब data सभी objects में common हो | जब हर object का अपना अलग data हो |

---

## ✅ Summary (Table Form)

| Concept        | काम                           | Example                  |
| -------------- | ----------------------------- | ------------------------ |
| Constructor    | Object बनते समय values देना   | `new Student("Ali", 22)` |
| this keyword   | Current object को refer करना  | `this.name = name`       |
| Static Members | Class level variables/methods | `static int count`       |

---

## 🔶 Java Class & Object से जुड़े अन्य महत्वपूर्ण Concepts

---

## 1. **Instance Block & Static Block**

### 🔹 Static Block:

> यह block class load होते ही **सिर्फ एक बार execute** होता है।

```java
class Test {
    static {
        System.out.println("Static Block");
    }
}
```

**Use Case:** Static variable को initialize करने के लिए।

---

### 🔹 Instance Block:

> हर बार object बनने पर यह block **constructor से पहले execute** होता है।

```java
class Test {
    {
        System.out.println("Instance Block");
    }

    Test() {
        System.out.println("Constructor");
    }
}
```

---

## 2. **Constructor Overloading**

> एक ही class में **multiple constructors** हो सकते हैं, जो अलग-अलग parameters से काम करें।

```java
class Student {
    Student() {
        System.out.println("Default");
    }

    Student(String name) {
        System.out.println("Name: " + name);
    }
}
```

---

## 3. **Anonymous Object**

> जब object बनाया जाता है लेकिन उसे किसी variable में **store नहीं किया जाता**।

```java
new Student("Ali").display();
```

Use case – सिर्फ एक बार use होने वाले object के लिए।

---

## 4. **Garbage Collection & finalize() Method**

> Java खुद से memory clear कर देता है — जिसे **Garbage Collection** कहते हैं।

### 🔸 `finalize()`:

> जब object destroy होने वाला होता है, उससे पहले Java इस method को call करता है।

```java
protected void finalize() throws Throwable {
    System.out.println("Object destroyed");
}
```

⚠️ Note: Java 9 के बाद से यह deprecated है।

---

## 5. **Object Class के Methods** (सबसे ज़्यादा पूछे जाने वाले Interview Qs)

Java में हर class, एक base class से implicitly extend होती है — `Object class`

| Method       | काम                                  |
| ------------ | ------------------------------------ |
| `toString()` | Object को String में convert करता है |
| `equals()`   | दो objects को compare करता है        |
| `hashCode()` | Object का unique number देता है      |
| `clone()`    | Object की copy बनाता है              |

---

## 6. **Immutable Class (Like String)**

> एक बार value set हो गई, तो object को बदला नहीं जा सकता।

### कैसे बनाते हैं?

```java
final class Book {
    private final String title;

    Book(String title) {
        this.title = title;
    }

    public String getTitle() {
        return title;
    }
}
```

**Use Case:** Secure और thread-safe classes के लिए।

---

## 7. **Encapsulation**

> जब आप variables को `private` बनाते हो और उनके लिए `getters/setters` provide करते हो।

```java
class Account {
    private int balance;

    public void setBalance(int b) {
        balance = b;
    }

    public int getBalance() {
        return balance;
    }
}
```

### Benefit:

* Control on data access
* सुरक्षित (secure) programming
* Code maintain करना आसान

---

## 8. **Difference: Reference vs Object vs Instance vs Class**

| Term      | मतलब                                          |
| --------- | --------------------------------------------- |
| Class     | Blueprint                                     |
| Object    | Actual memory block                           |
| Instance  | Object का दूसरा नाम                           |
| Reference | Object को access करने का तरीका (`Student s1`) |

---

## 9. **Nested Classes (Inner Classes)**

> जब एक class दूसरी class के अंदर define हो।

| Type                | Use                              |
| ------------------- | -------------------------------- |
| Member Inner Class  | एक object के अंदर logic          |
| Static Nested Class | Outer class से loosely connected |
| Anonymous Class     | एक बार use होने वाला class       |
| Local Inner Class   | Method के अंदर class             |

---

## 10. **Final Keyword – Class/Object से Related Use**

| Use              | मतलब                                 |
| ---------------- | ------------------------------------ |
| `final class`    | इस class को extend नहीं किया जा सकता |
| `final variable` | इसकी value बदल नहीं सकती             |
| `final method`   | इसे override नहीं किया जा सकता       |

---

## ✅ Bonus: Interview Point of View – Most Important Topics

| Concept                                                   | ज़रूर Prepare करें |
| --------------------------------------------------------- | ------------------ |
| Difference between `==` and `equals()`                    | Very common        |
| Why Constructor has no return type                        | Logic based        |
| How memory is allocated in object                         | Diagrammatically   |
| Difference between static & instance variables            | Memory level       |
| Why Java doesn't support multiple inheritance (via class) | OOP Theory         |
| Shallow vs Deep Copy                                      | Clone concepts     |