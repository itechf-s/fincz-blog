---
title: "4.2 Method Overloading"
categories: [ Java, Course]
tags: [Basic]
description: "Java Method Overloading – Flowchart"
date: 2025-06-01T07:00:52+05:30
author: ahmad
type: docs
---

## 📊 **Java Method Overloading – Flowchart (Text Form)**

```
┌───────────────────────────┐
│      Class MyCalculator   │
│---------------------------│
│ add(int a, int b)         │
│ → returns a + b           │
│                           │
│ add(double a, double b)   │
│ → returns a + b           │
│                           │
│ add(int a, int b, int c)  │
│ → returns a + b + c       │
└────────────┬──────────────┘
             │
             ▼
Call Based on Arguments:
-------------------------
add(2, 3);            → 2-param int version
add(2.5, 3.5);        → 2-param double version
add(1, 2, 3);         → 3-param version
```

---

## 🧠 **Quick Reference Table: Method Overloading**

| Feature                  | Method Overloading                          |
| ------------------------ | ------------------------------------------- |
| Class                    | एक ही class में                             |
| Parameters               | अलग-अलग (number, type या order)             |
| Return Type              | अलग हो सकता है (optional)                   |
| Name                     | Same method name                            |
| Access Modifier          | कोई विशेष नियम नहीं                         |
| Static / Instance Method | दोनों को overload किया जा सकता है           |
| Polymorphism Type        | Compile-time Polymorphism                   |
| Overloading Use Case     | Code readability, flexibility बढ़ाने के लिए |

---

## ✅ Method Overloading के तरीके

Method Overloading तब होता है जब:

1. **Parameters की संख्या अलग हो**

   ```java
   void display(int a)
   void display(int a, int b)
   ```

2. **Parameter का type अलग हो**

   ```java
   void display(int a)
   void display(String a)
   ```

3. **Parameter का order अलग हो**

   ```java
   void display(int a, String b)
   void display(String b, int a)
   ```

---

## ✅ Example:

```java
public class Calculator {

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

### Method Calls:

```java
Calculator c = new Calculator();
c.add(2, 3);           // Uses int version
c.add(2.5, 3.5);       // Uses double version
c.add(1, 2, 3);        // Uses 3-int version
```

---

## ⚠️ Important Rules:

* सिर्फ return type बदलने से method overload नहीं होता:

  ```java
  int add(int a)      // OK
  double add(int a)   // ❌ Error – Duplicate method
  ```

* `static`, `private`, और `final` methods भी overload किए जा सकते हैं।