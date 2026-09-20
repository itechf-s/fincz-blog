---
title: "8.2 Checked vs Unchecked Exceptions"
categories: [ Java, Course ]
tags: [Java, CheckedExceptions, UncheckedExceptions, RuntimeException]
description: "Checked (Compile-time) vs Unchecked (Runtime) exceptions और सामान्य रनटाइम गलतियां।"
date: 2026-09-20T08:00:00+05:30
lastmod: 2026-09-20T08:00:00+05:30
images: ["images/2025/06/exception-handling.webp"]
author: ahmad
type: docs
---

## 🎯 **Lesson Objectives**
- **Checked Exceptions** (कम्पाइलर द्वारा अनिवार्य जांच) को समझना।
- **Unchecked Exceptions** (`RuntimeException`) और प्रोग्रामिंग बग्स।
- सामान्य अपवाद: `NullPointerException`, `ArrayIndexOutOfBoundsException`, `IOException`।

---

## 📋 **Checked vs Unchecked Exceptions (तुलना)**

| गुण | Checked Exceptions | Unchecked Exceptions |
| :--- | :--- | :--- |
| **सुपर क्लास** | सीधे `java.lang.Exception` को इनहेरिट करते हैं | `java.lang.RuntimeException` को इनहेरिट करते हैं |
| **जांच का समय** | Compile-Time (कम्पाइलर कोड लिखने के समय ही हैंडल करने को मजबूर करता है) | Run-Time (रन होने पर ही पता चलता है) |
| **कारण** | बाहरी रिसोर्स की विफलता (फ़ाइल न मिलना, नेटवर्क कटना) | डेवलपर के लॉजिक की गलती (Null चेक न करना, गलत इंडेक्स) |
| **उदाहरण** | `IOException`, `SQLException`, `ClassNotFoundException` | `NullPointerException`, `ArithmeticException` |

---

## 📌 **Quick Revision Summary**
- Checked exceptions को `try-catch` या `throws` से हैंडल करना अनिवार्य है।
- Unchecked exceptions खराब कोडिंग लॉजिक के कारण आते हैं, जिन्हें सही कोड लिख कर ठीक किया जाना चाहिए।

---

## 🧭 **Navigation**
- **⬅️ पिछला चैप्टर**: [8.1 Exception Handling Basics](./01-exception-handling-basics/)
- **अगला चैप्टर ➡️**: [8.3 Try-with-Resources (AutoCloseable)](./03-try-with-resources/)
