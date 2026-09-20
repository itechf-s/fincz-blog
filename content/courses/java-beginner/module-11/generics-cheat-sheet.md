---
title: "11.2 Generics Cheat Sheet"
categories: [ Java, Course]
tags: [Basic]
description: "Generics Syntax Cheat Sheet for Java"
date: 2025-06-01T07:00:22+05:30
author: ahmad
type: docs
---

नीचे दिया गया है एक आसान और शॉर्ट **Generics Syntax Cheat Sheet** –
जो Java के Generics को जल्दी से revise करने और समझने के लिए बहुत उपयोगी है:

---

## 📄 **Generics Syntax Cheat Sheet (Java)**

---

## 🔹 1. Generic Class

```java
class Box<T> {
    T value;
    void set(T value) { this.value = value; }
    T get() { return value; }
}
```

**Usage:**

```java
Box<Integer> intBox = new Box<>();
Box<String> strBox = new Box<>();
```

---

## 🔹 2. Generic Method

```java
public <T> void printArray(T[] array) {
    for (T item : array) {
        System.out.println(item);
    }
}
```

---

## 🔹 3. Generic Interface

```java
interface Pair<K, V> {
    K getKey();
    V getValue();
}

class MyPair<K, V> implements Pair<K, V> {
    private K key;
    private V value;

    // constructor, getter, setter
}
```

---

## 🔹 4. Bounded Type Parameters

```java
class NumberBox<T extends Number> {
    T value;
}
```

➡️ `T` अब सिर्फ `Number` या उसकी subclass (Integer, Double...) ही हो सकती है।

---

## 🔹 5. Multiple Bounds

```java
class Demo<T extends Number & Comparable<T>> {
    T value;
}
```

➡️ `T` को `Number` भी होना होगा और `Comparable` भी implement करना होगा।

---

## 🔹 6. Wildcards in Generics

| Syntax          | Meaning                 |
| --------------- | ----------------------- |
| `<?>`           | Unknown type (any type) |
| `<? extends T>` | Any subclass of T       |
| `<? super T>`   | Any superclass of T     |

### ✅ Example:

```java
List<?> list1;               // Any type
List<? extends Number> list2; // Integer, Double, etc.
List<? super Integer> list3;  // Integer, Number, Object
```

---

## 🔹 7. Generic ArrayList Declaration

```java
List<String> names = new ArrayList<>();
List<Integer> numbers = new ArrayList<>();
```

---

## 🔹 8. Raw Type (❌ Avoid this)

```java
List list = new ArrayList();   // Raw type, unsafe
list.add("Hello");
list.add(123);                 // Compile-time error नहीं आएगा
```

➡️ ❌ Recommended नहीं है — Type Safety ख़त्म हो जाती है।

---

## ✅ Bonus Tip: Type Erasure

> Java में Compile time पर generics की type information हटा दी जाती है — इसे कहते हैं **Type Erasure**।
> इसलिए runtime पर generic type की जानकारी उपलब्ध नहीं होती।

---

## 🔚 Summary: जब Use करें —

| Situation                                  | Generics Use            |
| ------------------------------------------ | ----------------------- |
| Collection में specific type store करना हो | `List<String>`          |
| Type-safe utility class बनानी हो           | `class Box<T>`          |
| Generic method बनानी हो                    | `<T> void print(T val)` |
| Flexibility चाहिए लेकिन control भी         | Wildcards (`?`)         |
