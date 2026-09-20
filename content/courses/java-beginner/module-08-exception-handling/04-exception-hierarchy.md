---
title: "8.4 Exception Hierarchy & Catch Rules"
categories: [ Java, Course ]
tags: [Java, Hierarchy, Throwable, MultiCatch]
description: "Throwable क्लास पदानुक्रम, Multiple Catch ब्लॉक्स का सही क्रम और Multi-Catch ऑपरेटर।"
date: 2026-09-20T08:00:00+05:30
lastmod: 2026-09-20T08:00:00+05:30
images: ["images/2025/06/exception-handling.webp"]
author: ahmad
type: docs
weight: 4
---

## 🎯 **Lesson Objectives**
- `Throwable` क्लास पदानुक्रम (Hierarchy Tree)।
- Multiple Catch ब्लॉक्स में चाइल्ड-पैरेंट क्रम के नियम।
- Java 7 का **Multi-Catch Block (`|`)** सिंटैक्स।

---

## 🌳 **Java Exception Hierarchy Diagram**

```text
                       +-------------------+
                       |  java.lang.Object |
                       +-------------------+
                                 |
                                 v
                       +-------------------+
                       |     Throwable     |
                       +-------------------+
                                 |
            +--------------------+--------------------+
            |                                         |
            v                                         v
   +-----------------+                       +-----------------+
   |      Error      |                       |    Exception    |
   | (Unrecoverable) |                       |  (Recoverable)  |
   +-----------------+                       +-----------------+
     - OutOfMemoryError                               |
     - StackOverflowError            +----------------+----------------+
                                     |                                 |
                                     v                                 v
                            +-----------------+               +-----------------+
                            | RuntimeException|               | Checked Except. |
                            |   (Unchecked)   |               | (Compile-time)  |
                            +-----------------+               +-----------------+
                              - NullPointerEx                   - IOException
                              - ArithmeticEx                    - SQLException
```

---

## ⚠️ **Multiple Catch Rule: Specific to General**

हमेशा चाइल्ड (विशिष्ट) एक्सेप्शन को ऊपर और पैरेंट (`Exception`) को सबसे नीचे रखें:

```java
try {
    // कोड
} catch (ArithmeticException e) {
    // सबसे विशिष्ट
} catch (NullPointerException e) {
    // विशिष्ट
} catch (Exception e) {
    // सबसे सामान्य (Generic Fallback)
}
```

---

## 🧭 **Navigation**
- **⬅️ पिछला चैप्टर**: [8.3 Try-with-Resources (AutoCloseable)](./03-try-with-resources/)
- **अगला चैप्टर ➡️**: [8.5 Custom Exceptions (throw vs throws)](./05-custom-exceptions/)
