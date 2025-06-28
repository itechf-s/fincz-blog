---
title: "8.4 Exception Hierarchy"
categories: [ Java, Course]
tags: [Basic]
description: "Java Exception Hierarchy"
date: 2025-06-01T07:00:33+05:30
author: ahmad
type: docs
---

# 📘 **Module 8: Exception Handling in Java**

अब हम Java में exceptions की **hierarchy (वंशवृक्ष)** को समझेंगे, जिससे आपको पता चलेगा कि कौन सी exception कहाँ फिट होती है — और कैसे Java में exception handling structured है।

---

## 📘 Java Exception Hierarchy

Java में सभी exceptions और errors की जड़ (root) है:
👉 `java.lang.Throwable` class

इससे दो main branches बनती हैं:

1. **Exception**
2. **Error**

---

## 🔷 1. Throwable (Parent Class)

```
java.lang.Object
      ↓
 java.lang.Throwable
```

`Throwable` के दो direct subclasses होते हैं:

* **Exception** → recoverable situation (जैसे file ना मिलना, divide by zero)
* **Error** → non-recoverable (जैसे JVM crash, OutOfMemory)

---

## ✅ 2. Exception की Hierarchy

```
Throwable
   ├── Exception             ← Checked & Unchecked
   │    ├── IOException      ← Checked
   │    │    ├── FileNotFoundException
   │    │    └── EOFException
   │    ├── SQLException     ← Checked
   │    ├── ClassNotFoundException
   │    └── RuntimeException ← Unchecked
   │         ├── ArithmeticException
   │         ├── NullPointerException
   │         ├── ArrayIndexOutOfBoundsException
   │         ├── NumberFormatException
   │         └── IllegalArgumentException
```

---

## ✅ 3. Error की Hierarchy

```
Throwable
   └── Error
        ├── OutOfMemoryError
        ├── StackOverflowError
        ├── VirtualMachineError
        └── AssertionError
```

➡️ ये ऐसी समस्याएँ होती हैं जिनसे program **recover नहीं कर सकता**, इसलिए इन्हें handle करने की ज़रूरत नहीं होती।

---

## 🧠 अब इसको एक **Text-Based Diagram** में देखें:

```
Object
  |
Throwable
  ├── Exception (Checked)
  |     ├── IOException
  |     |     └── FileNotFoundException
  |     ├── SQLException
  |     └── ClassNotFoundException
  |
  └── RuntimeException (Unchecked)
        ├── ArithmeticException
        ├── NullPointerException
        ├── ArrayIndexOutOfBoundsException
        ├── NumberFormatException
        └── IllegalArgumentException

  └── Error (Unchecked, not handled)
        ├── OutOfMemoryError
        ├── StackOverflowError
        └── VirtualMachineError
```

---

## 📘 Summary Table:

| Category               | Class                                         | Checked? | Example                       |
| ---------------------- | --------------------------------------------- | -------- | ----------------------------- |
| ✅ Checked Exception    | `IOException`, `SQLException`                 | ✔️ Yes   | File not found, DB error      |
| ⚠️ Unchecked Exception | `NullPointerException`, `ArithmeticException` | ❌ No     | Divide by 0, null access      |
| ❌ Error                | `OutOfMemoryError`, `StackOverflowError`      | ❌ No     | JVM crash, infinite recursion |

---

## 📌 Interview में पूछे जाने वाले सवाल:

1. Java exception hierarchy explain कीजिए
2. `Exception` और `Error` में क्या फ़र्क है?
3. `RuntimeException` और `IOException` में अंतर क्या है?
4. क्या हम Error को catch कर सकते हैं?
