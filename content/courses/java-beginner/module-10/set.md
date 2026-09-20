---
title: "10.3 Set"
categories: [ Java, Course]
tags: [Basic]
description: "Set in Java"
date: 2025-06-01T07:00:26+05:30
author: ahmad
type: docs
---

## 📘 **Set Interface in Java**

---

## 🔷 1. Set क्या है?

> `Set` एक ऐसा collection है जो **duplicate elements को allow नहीं करता**, यानी हर element **unique** होना चाहिए।

➡️ और unlike `List`, Set में elements की **position/index** नहीं होती।

---

## 🔍 Set का Use कहाँ होता है?

| Situation           | Example                                   |
| ------------------- | ----------------------------------------- |
| Unique values चाहिए | जैसे – student roll numbers, email IDs    |
| Fast lookup चाहिए   | जैसे – किसी चीज़ का exist करना check करना |

---

## ✅ 2. Set के मुख्य Implementations

| Class Name      | Description                            |
| --------------- | -------------------------------------- |
| `HashSet`       | Fastest, no order guarantee            |
| `LinkedHashSet` | Insertion order preserved              |
| `TreeSet`       | Sorted elements (ascending by default) |

---

## 📘 Text-Based Set Hierarchy

```
          Set (Interface)
             ↓
       ┌────────────┬──────────────┐
   HashSet     LinkedHashSet     TreeSet
  (Fast)     (Insertion Order)  (Sorted Set)
```

---

## ✅ 3. HashSet Example (Most Common)

```java
import java.util.*;

public class HashSetDemo {
    public static void main(String[] args) {
        Set<String> fruits = new HashSet<>();

        fruits.add("Apple");
        fruits.add("Banana");
        fruits.add("Apple");  // Duplicate

        System.out.println(fruits);  // Unordered, no duplicates
    }
}
```

➡️ Output में `"Apple"` एक बार ही आएगा।

---

## ✅ 4. LinkedHashSet Example (Order preserved)

```java
Set<String> cities = new LinkedHashSet<>();
cities.add("Delhi");
cities.add("Mumbai");
cities.add("Chennai");
System.out.println(cities);  // [Delhi, Mumbai, Chennai]
```

➡️ Elements उसी order में रहेंगे जिस order में add किए गए।

---

## ✅ 5. TreeSet Example (Sorted Set)

```java
Set<Integer> numbers = new TreeSet<>();
numbers.add(5);
numbers.add(2);
numbers.add(8);
System.out.println(numbers);  // [2, 5, 8]
```

➡️ TreeSet elements को **ascending order** में automatically sort कर देता है।

---

## ✅ 6. Common Set Methods

| Method        | Description        |
| ------------- | ------------------ |
| `add(E)`      | Element जोड़ना     |
| `remove(E)`   | Element हटाना      |
| `contains(E)` | मौजूद है या नहीं   |
| `size()`      | कितने elements हैं |
| `clear()`     | Set को खाली करना   |
| `isEmpty()`   | खाली है या नहीं    |

---

## 🔁 Iterating over a Set

```java
Set<String> names = new HashSet<>();
names.add("A");
names.add("B");

for (String name : names) {
    System.out.println(name);
}
```

या

```java
Iterator<String> it = names.iterator();
while (it.hasNext()) {
    System.out.println(it.next());
}
```

---

## 📊 Comparison Table:

| Feature            | HashSet | LinkedHashSet     | TreeSet       |
| ------------------ | ------- | ----------------- | ------------- |
| Duplicate Allowed? | ❌ No    | ❌ No              | ❌ No          |
| Order Maintained?  | ❌ No    | ✅ Insertion order | ✅ Sorted      |
| Null Allowed?      | ✅ One   | ✅ One             | ❌ Not allowed |
| Performance        | Fastest | Medium            | Slowest       |

---

## 🧪 Practice Assignments:

1. `HashSet<String>` में 5 student names add कीजिए, दो बार वही नाम add कर के देखिए
2. `LinkedHashSet<Integer>` में 10 नंबर add कीजिए और उनकी order को print कीजिए
3. `TreeSet<Integer>` में random numbers add कीजिए और output को ascending order में देखिए
4. एक Set में user से input लेकर duplicates को automatically हटाइए

---

## 🧠 Interview Questions:

* Set और List में क्या फ़र्क है?
* HashSet और TreeSet में कौन तेज़ है और क्यों?
* क्या Set null allow करता है?
* TreeSet sorting कैसे करता है?