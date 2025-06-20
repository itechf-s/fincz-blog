---
title: "8.2 Checked vs Unchecked Exceptions"
categories: [ Java, Course]
tags: [Basic]
description: "Checked vs Unchecked Exceptions in Java"
date: 2025-06-01T07:00:35+05:30
author: ahmad
type: docs
---

# 📘 **Module 8: Exception Handling in Java**

Java में exceptions को दो categories में बाँटा गया है — **Checked Exception** और **Unchecked Exception** — और ये इंटरव्यू में अक्सर पूछा जाने वाला सवाल भी है।

चलिए इसे **detail में, आसान भाषा** में समझते हैं:

---

# 🔶 Checked vs Unchecked Exceptions in Java

---

## ✅ 1. **Checked Exceptions**

### 📌 Definition:

> ऐसी exceptions जिन्हें **compile-time पर check किया जाता है**।
> अगर आप इन्हें handle नहीं करते (try-catch या throws से), तो **compilation error** मिलेगा।

---

### 🔹 Examples:

| Exception Name           | Situation                    |
| ------------------------ | ---------------------------- |
| `IOException`            | File input/output problem    |
| `SQLException`           | Database access problem      |
| `FileNotFoundException`  | File मौजूद नहीं है           |
| `ClassNotFoundException` | Class को load नहीं कर पा रहा |

---

### 🔹 Example Code:

```java
import java.io.*;

public class FileExample {
    public static void main(String[] args) throws IOException {
        FileReader fr = new FileReader("data.txt");
        // Compile-time error मिलेगा अगर throws नहीं लगाया
    }
}
```

➡️ यहाँ compiler कहेगा कि **handle this exception**, क्योंकि यह checked है।

---

### 🔹 कैसे Handle करें?

```java
try {
    FileReader fr = new FileReader("data.txt");
} catch (IOException e) {
    System.out.println("File not found");
}
```

---

## ✅ 2. **Unchecked Exceptions**

### 📌 Definition:

> ये exceptions **run-time पर आती हैं**, compile-time पर कोई error नहीं होता।
> ये mostly logic या programming mistake की वजह से होती हैं।

---

### 🔹 Examples:

| Exception Name                   | Situation           |
| -------------------------------- | ------------------- |
| `ArithmeticException`            | Divide by zero      |
| `NullPointerException`           | Null object access  |
| `ArrayIndexOutOfBoundsException` | Invalid array index |
| `NumberFormatException`          | गलत number format   |

---

### 🔹 Example Code:

```java
public class Test {
    public static void main(String[] args) {
        int a = 10 / 0;  // ArithmeticException (unchecked)
    }
}
```

➡️ यह code compile हो जाएगा, लेकिन **run-time पर crash** करेगा।

---

## 📊 Comparison Table:

| Feature             | Checked Exception                                   | Unchecked Exception                           |
| ------------------- | --------------------------------------------------- | --------------------------------------------- |
| Handle करना ज़रूरी? | ✔️ हाँ (try-catch या throws)                        | ❌ नहीं ज़रूरी (optional)                      |
| Compile-time Error? | ✔️ Yes                                              | ❌ No                                          |
| Class Type          | Subclass of `Exception` (except `RuntimeException`) | Subclass of `RuntimeException`                |
| Example             | `IOException`, `SQLException`                       | `NullPointerException`, `ArithmeticException` |
| कब होती है?         | Compile time                                        | Run time                                      |

---

## 🧠 Interview में पूछे जाने वाले सवाल:

1. Checked और Unchecked exception में क्या फर्क है?
2. क्या RuntimeException को handle करना ज़रूरी है?
3. क्या आप खुद की custom checked exception बना सकते हैं?
4. क्या finally block unchecked exception आने पर भी चलेगा?

---

## 🎯 Extra Tip:

> Java में best practice यह मानी जाती है कि:
>
> * Checked Exceptions को proper way से **handle** किया जाए
> * और Unchecked Exceptions को **code logic सुधार कर** avoid किया जाए
