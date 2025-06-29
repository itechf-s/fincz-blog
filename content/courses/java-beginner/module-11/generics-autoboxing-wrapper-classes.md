---
title: "11.1 Generics, Autoboxing & Wrapper Classes"
categories: [ Java, Course]
tags: [Basic]
description: "Generics, Autoboxing & Wrapper Classes"
date: 2025-06-01T07:00:23+05:30
images: ["images/2025/06/java-beginner-course-syllabus.webp"]
author: ahmad
type: docs
---

# 📘 **Module 11: Generics, Autoboxing & Wrapper Classes**

---

## 🔷 1. **Generics in Java**

### 📌 क्या है?

> Generics का मतलब है – **type को parameterize करना**, यानी code को reusable बनाना **बिना data type fix किए**।

➡️ जैसे: `List<String>` या `List<Integer>` — एक ही `List` class को कई data types के साथ use करना।

---

### ✅ Generic का Simple Example:

```java
List<String> names = new ArrayList<>();
names.add("Aman");
names.add("Ravi");

// names.add(123); ❌ Error, क्योंकि यह सिर्फ String accept करेगा
```

🔑 यहां `List<String>` का मतलब है कि list **सिर्फ String ही store कर सकती है**।

---

## 🔎 Generics क्यों ज़रूरी हैं?

| बिना Generics               | Generics के साथ         |
| --------------------------- | ----------------------- |
| Type safety नहीं            | Compile-time type check |
| Casting manually करना पड़ता | No casting required     |
| Runtime error possible      | Compile-time error      |

---

### ✅ Custom Generic Class:

```java
class Box<T> {
    T value;

    void set(T value) {
        this.value = value;
    }

    T get() {
        return value;
    }
}

Box<Integer> intBox = new Box<>();
intBox.set(10);

Box<String> strBox = new Box<>();
strBox.set("Hello");
```

➡️ यहां `T` एक placeholder है, जो compile time पर Integer या String बन जाता है।

---

## 🔷 2. Autoboxing & Unboxing

Java में primitive types (`int`, `double`) और उनकी object versions (`Integer`, `Double`) के बीच automatic conversion को कहते हैं —
**Autoboxing** (primitive → object)
**Unboxing** (object → primitive)

---

### ✅ Example:

```java
int a = 10;
Integer obj = a;         // 🔁 Autoboxing
int b = obj;             // 🔁 Unboxing
```

➡️ Java खुद ही conversion कर देता है।

---

## 📦 Wrapper Classes

| Primitive | Wrapper Class |
| --------- | ------------- |
| `int`     | `Integer`     |
| `char`    | `Character`   |
| `double`  | `Double`      |
| `boolean` | `Boolean`     |
| `float`   | `Float`       |
| `long`    | `Long`        |
| `short`   | `Short`       |
| `byte`    | `Byte`        |

---

### ✅ Wrapper का Use क्यों?

| वजह                                                 | फायदा                                      |
| --------------------------------------------------- | ------------------------------------------ |
| Collection framework primitive को support नहीं करता | तो wrapper use करते हैं                    |
| null values की ज़रूरत हो                            | wrapper allow करता है                      |
| Utility methods चाहिए                               | जैसे `Integer.parseInt()`                  |
| Autoboxing-unboxing के लिए                          | Collection + Generics के साथ compatibility |

---

## 🔁 Example: List with primitive vs wrapper

```java
List<Integer> list = new ArrayList<>();
list.add(10);     // Autoboxing
int x = list.get(0); // Unboxing
```

➡️ List में `int` सीधे add नहीं कर सकते, इसलिए `Integer` wrapper use होता है।

---

## 📘 Summary Table:

| Concept         | Description                  | Example             |
| --------------- | ---------------------------- | ------------------- |
| Generics        | Type safety                  | `List<String>`      |
| Autoboxing      | `int` → `Integer`            | `Integer a = 10;`   |
| Unboxing        | `Integer` → `int`            | `int b = a;`        |
| Wrapper Classes | Object version of primitives | `Double`, `Boolean` |

---

## 🧪 Practice Questions

1. एक generic class `Box<T>` बनाइए जो किसी भी type की value store करे
2. `List<Double>` बनाइए और उसमें autoboxed values डालिए
3. `Map<String, Integer>` में student name और marks store कीजिए
4. Wrapper class `Integer` की static method `parseInt()` का use करके String को int में convert कीजिए

---

## 🧠 Interview में पूछे जाने वाले सवाल:

* Generics क्यों ज़रूरी है?
* Raw type और generic type में क्या फर्क है?
* Autoboxing क्या है और इसका real use कहाँ होता है?
* क्या Java में primitive types को collections में store कर सकते हैं?
