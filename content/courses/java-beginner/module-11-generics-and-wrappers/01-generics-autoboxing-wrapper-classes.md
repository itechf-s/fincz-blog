---
title: "11.1 Generics & Autoboxing"
categories: [ Java, Course ]
tags: [Java, Generics, Autoboxing, WrapperClasses]
description: "Type Safety, जेनेरिक मेथड्स/क्लासेस, और प्रिमिटिव रैपर क्लासेस (Integer, Double)।"
date: 2026-09-20T08:00:00+05:30
lastmod: 2026-09-20T08:00:00+05:30
images: ["images/2025/06/generics-autoboxing-wrapper-classes.webp"]
author: ahmad
type: docs
---

## 🎯 **Lesson Objectives**
- **Generics** की आवश्यकता (Compile-time Type Safety).
- **Wrapper Classes** (`Integer`, `Double`, `Boolean` etc.).
- **Autoboxing** और **Unboxing** की स्वचालित प्रक्रिया।

---

## ⚙️ **Code Example: Generic Box**

```java
// Generic Class (T = Type Placeholder)
public class Box<T> {
    private T item;

    public void setItem(T item) {
        this.item = item;
    }

    public T getItem() {
        return item;
    }

    public static void main(String[] args) {
        // 1. String Box
        Box<String> stringBox = new Box<>();
        stringBox.setItem("Java 21");
        System.out.println("String Item: " + stringBox.getItem());

        // 2. Integer Box (Autoboxing: primitive 100 -> Integer object)
        Box<Integer> intBox = new Box<>();
        intBox.setItem(100); 
        int val = intBox.getItem(); // Unboxing: Integer -> int
        System.out.println("Integer Item: " + val);
    }
}
```

---

## 🧭 **Navigation**
- **⬅️ पिछला मॉड्यूल**: [Module 10: Java Collections Framework](../module-10-collections-framework/)
- **अगला चैप्टर ➡️**: [11.2 Generics Cheat Sheet & Wildcards](./02-generics-cheat-sheet/)
