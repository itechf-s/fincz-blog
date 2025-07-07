---
title: "7.1 Access Modifiers & Packages"
categories: [ Java, Course]
tags: [Basic]
description: "Module 7: Access Modifiers & Packages"
date: 2025-06-01T07:00:39+05:30
images: ["images/2025/06/access-modifiers-packages.webp"]
author: ahmad
type: docs
---

# 📘 **Module 7: Access Modifiers & Packages**

Java में security, visibility और code organization के लिए दो बड़े टूल्स होते हैं:

1. 🔐 **Access Modifiers** – कौन सा variable या method कहाँ से access किया जा सकता है
2. 📦 **Packages** – Java files को logically organize करने का तरीका

---

## 🔷 Part 1: Access Modifiers

### 📌 Definition:

> Access modifiers वो keywords होते हैं जो यह तय करते हैं कि **कोई class, method, या variable कहाँ से access किया जा सकता है**।

---

### ✅ Types of Access Modifiers:

| Modifier    | Same Class | Same Package | Subclass (Different Package) | Other Class |
| ----------- | ---------- | ------------ | ---------------------------- | ----------- |
| `public`    | ✔️         | ✔️           | ✔️                           | ✔️          |
| `protected` | ✔️         | ✔️           | ✔️                           | ❌           |
| (default)   | ✔️         | ✔️           | ❌                            | ❌           |
| `private`   | ✔️         | ❌            | ❌                            | ❌           |

---

### 🧠 Real Use Case:

* `private` → sensitive data (e.g., password)
* `public` → API methods
* `protected` → methods जो subclasses access कर सकें
* `default` → internal package-level use

---

### 🔹 Example:

```java
class Example {
    public int x = 10;
    private int y = 20;
    protected int z = 30;
    int a = 40; // default
}
```

---

## 🔷 Part 2: Packages

### 📌 Definition:

> Package Java में classes को **group करने का तरीका** है ताकि code organized और manageable बना रहे।

Java में दो तरह के packages होते हैं:

| Type         | Examples                            |
| ------------ | ----------------------------------- |
| Built-in     | `java.util`, `java.io`, `java.lang` |
| User-defined | आप खुद बना सकते हैं                 |

---

### ✅ Built-in Package Example:

```java
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
    }
}
```

---

### ✅ User-defined Package Example:

**Step 1: Package बनाइए**

```java
package mypack;

public class Message {
    public void show() {
        System.out.println("Hello from package");
    }
}
```

**Step 2: Use कीजिए**

```java
import mypack.Message;

public class Test {
    public static void main(String[] args) {
        Message m = new Message();
        m.show();
    }
}
```

---

## ✅ Package बनाते समय ध्यान रखने वाली बातें:

* Java file का पहला line: `package mypack;`
* Package folder structure: `mypack/Message.java`
* Compile: `javac -d . Message.java`
* Run: `java mypack.Message`

---

## 📘 Summary Table

### 🔐 Access Modifiers

| Modifier              | Scope                 |
| --------------------- | --------------------- |
| `public`              | सब जगह accessible     |
| `private`             | सिर्फ class के अंदर   |
| `protected`           | package + subclasses  |
| default (no modifier) | सिर्फ package के अंदर |

---

### 📦 Packages

| Type         | Description                                     |
| ------------ | ----------------------------------------------- |
| Built-in     | Java-provided classes (e.g., `Scanner`)         |
| User-defined | Developer-created, जैसे `com.mycompany.project` |

---

## 🧪 Practice:

1. एक class में 4 variables बनाइए — हर access modifier के साथ
2. एक user-defined package बनाकर 2 classes को अलग-अलग package में रखिए
3. एक method को protected रखिए और subclass में use करके देखिए
