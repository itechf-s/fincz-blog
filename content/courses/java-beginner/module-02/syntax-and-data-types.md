---
title: "2.1 Syntax and Data Types"
categories: [ Java, Course]
tags: [Basic]
description: "Module 2: Java Syntax और Data Types"
date: 2025-06-01T07:00:56+05:30
images: ["images/2025/06/syntax-and-data-types.webp"]
author: ahmad
type: docs
---

## 🎓 **Module 2: Java Syntax और Data Types**

| वीडियो नंबर | विषय                           | अवधि    |
| ----------- | ------------------------------ | ------- |
| 1           | Java Program Structure         | 8 मिनट  |
| 2           | Variables और Data Types        | 10 मिनट |
| 3           | Type Casting और Type Promotion | 9 मिनट  |
| 4           | Comments और Code Documentation | 6 मिनट  |
| 5           | User Input (Scanner class)     | 10 मिनट |

---

### 🎥 **वीडियो 1: Java Program Structure**

#### 📜 स्क्रिप्ट:

> हर Java प्रोग्राम एक `class` से शुरू होता है।
> उस class के अंदर एक विशेष method होता है – `main()` – जहाँ से प्रोग्राम की शुरुआत होती है।
> Java के हर statement के अंत में `;` (semicolon) आता है।
> Code को `{ }` curly brackets के अंदर लिखा जाता है।

#### 🧑‍💻 कोड:

```java
public class MyProgram {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}
```

---

### 🎥 **वीडियो 2: Variables और Data Types**

#### 📜 स्क्रिप्ट:

> Java में डेटा को store करने के लिए variables का उपयोग किया जाता है।
> हर variable को declare करते समय हमें उसका data type देना होता है।
> Java में primitive data types होते हैं जैसे `int`, `float`, `char`, `boolean` आदि।

#### 📋 टेबल:

| Data Type | Example | Size    |
| --------- | ------- | ------- |
| int       | 10      | 4 bytes |
| float     | 3.14f   | 4 bytes |
| char      | 'A'     | 2 bytes |
| boolean   | true    | 1 byte  |

#### 🧑‍💻 कोड:

```java
int age = 30;
float pi = 3.14f;
char grade = 'A';
boolean isPassed = true;
```

---

### 🎥 **वीडियो 3: Type Casting और Type Promotion**

#### 📜 स्क्रिप्ट:

> जब हम एक data type को दूसरे में बदलते हैं तो उसे **type casting** कहते हैं।
> Java में छोटे data type को बड़े में अपने-आप convert कर दिया जाता है, इसे **type promotion** कहते हैं।
> लेकिन अगर हमें बड़े type को छोटे में बदलना हो तो हमें manually cast करना पड़ता है।

#### 🧑‍💻 कोड:

```java
int a = 10;
double b = a; // type promotion

double x = 9.99;
int y = (int)x; // type casting (value becomes 9)
```

---

### 🎥 **वीडियो 4: Comments और Code Documentation**

#### 📜 स्क्रिप्ट:

> Comments का प्रयोग कोड को समझाने के लिए किया जाता है।
> Java में दो प्रकार के comments होते हैं:
>
> 1. Single-line comment: `//`
> 2. Multi-line comment: `/* */`

#### 🧑‍💻 कोड:

```java
// यह एक single-line comment है

/*
    यह एक multi-line comment है
    जो कई लाइनों में लिखा जा सकता है
*/
```

---

### 🎥 **वीडियो 5: User Input using Scanner class**

#### 📜 स्क्रिप्ट:

> अगर हमें user से input लेना हो तो हम Java की `Scanner` class का उपयोग करते हैं।
> इसके लिए हमें `java.util.Scanner` package को import करना पड़ता है।

#### 🧑‍💻 कोड:

```java
import java.util.Scanner;

public class InputExample {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("अपना नाम दर्ज करें: ");
        String name = sc.nextLine();
        System.out.println("नमस्ते, " + name);
    }
}
```

---

## 📘 **PDF Notes (Module 2)**

```
✅ Java Program Structure:
- class, main method, statements, brackets

✅ Data Types और Variables:
- int, float, char, boolean

✅ Type Casting:
- automatic promotion और manual casting

✅ Comments:
- कोड को पढ़ने-समझने में सहायक

✅ Scanner से user input लेना
```

---

## 🧪 **अभ्यास और क्विज़**

### ✅ Quiz (प्रश्नोत्तरी):

1. Java में दशमलव संख्या को store करने के लिए कौन सा data type उपयोग होता है?
2. Type casting और type promotion में क्या अंतर है?
3. Scanner class किस package में होती है?

### ✅ Practice Exercise:

* एक प्रोग्राम बनाइए जो user से नाम और आयु पूछे और उन्हें print करे।