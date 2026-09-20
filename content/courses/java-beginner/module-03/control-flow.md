---
title: "3.1 Control Flow"
categories: [ Java, Course]
tags: [Basic]
description: "Module 3: Control Flow (if-else, loops)"
date: 2025-06-01T07:00:55+05:30
images: ["images/2025/06/control-flow.webp"]
author: ahmad
type: docs
---

## 🔶 इस Module में आप सीखेंगे:

* Control flow का मतलब क्या होता है
* `if`, `else if`, `else` conditions का इस्तेमाल
* Switch-case का उपयोग
* Loops: `for`, `while`, `do-while` का प्रयोग
* `break`, `continue` जैसे statements

---

## 🔹 Control Flow क्या होता है?

Control Flow का मतलब है — **प्रोग्राम के Execution के क्रम को नियंत्रित करना**, यानी किस block को कब execute करना है, ये conditions और loops से तय किया जाता है।

---

## 🔸 1. `if`, `else if`, `else` Statements

### ➤ Syntax:

```java
if (condition) {
    // code जब condition true हो
} else if (anotherCondition) {
    // code जब दूसरा condition true हो
} else {
    // code जब कोई condition true न हो
}
```

### ✅ Example:

```java
int age = 18;

if (age < 18) {
    System.out.println("You are a minor.");
} else if (age == 18) {
    System.out.println("You just became an adult!");
} else {
    System.out.println("You are an adult.");
}
```

---

## 🔸 2. `switch-case` Statement

जब आपके पास कई options हों और एक ही variable की कई values चेक करनी हो — तब switch-case इस्तेमाल होता है।

### ➤ Syntax:

```java
switch (expression) {
    case value1:
        // code
        break;
    case value2:
        // code
        break;
    default:
        // code
}
```

### ✅ Example:

```java
int day = 3;

switch (day) {
    case 1:
        System.out.println("Monday");
        break;
    case 2:
        System.out.println("Tuesday");
        break;
    case 3:
        System.out.println("Wednesday");
        break;
    default:
        System.out.println("Invalid day");
}
```

---

## 🔸 3. Loops in Java

### 🌀 Loop का मतलब है — **कोई काम बार-बार करना जब तक कोई condition पूरी न हो जाए।**

---

### ✅ `for` Loop

जब आपको पता हो कि कितनी बार loop चलाना है।

```java
for (int i = 1; i <= 5; i++) {
    System.out.println("Count: " + i);
}
```

---

### ✅ `while` Loop

जब तक condition true है, तब तक code चलेगा।

```java
int i = 1;
while (i <= 5) {
    System.out.println("Count: " + i);
    i++;
}
```

---

### ✅ `do-while` Loop

पहले कम से कम एक बार चलेगा, फिर condition चेक करेगा।

```java
int i = 1;
do {
    System.out.println("Count: " + i);
    i++;
} while (i <= 5);
```

---

## 🔸 4. `break` और `continue` का प्रयोग

| Keyword    | उपयोग                                                                          |
| ---------- | ------------------------------------------------------------------------------ |
| `break`    | Loop या switch-case को तुरंत रोकता है                                          |
| `continue` | Loop के अंदर से current iteration को skip करता है और next iteration पर जाता है |

### ✅ Example – `break`:

```java
for (int i = 1; i <= 5; i++) {
    if (i == 3) {
        break;
    }
    System.out.println(i);
}
```

**Output:** 1, 2

### ✅ Example – `continue`:

```java
for (int i = 1; i <= 5; i++) {
    if (i == 3) {
        continue;
    }
    System.out.println(i);
}
```

**Output:** 1, 2, 4, 5

---

## 🧠 अभ्यास (Practice)

1. एक प्रोग्राम लिखिए जो user की उम्र लेकर बताए कि वह minor, adult या senior citizen है।
2. 1 से 100 तक के numbers में से सिर्फ 5 के multiples को print कीजिए (for loop + continue).
3. एक प्रोग्राम लिखिए जो 1 से 10 तक की गिनती को `while` loop से print करे।

---

## ❓ Quiz

1. `if` और `switch` में क्या अंतर है?
2. कौन सा loop पहले execute करता है फिर condition चेक करता है?
3. `break` और `continue` में क्या फर्क है?
4. क्या `for` loop में initialization optional होता है?