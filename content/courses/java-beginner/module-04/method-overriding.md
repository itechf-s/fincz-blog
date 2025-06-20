---
title: "4.3 Method Overriding"
categories: [ Java, Course]
tags: [Basic]
description: "Java Method Overriding – Flowchart"
date: 2025-06-01T07:00:51+05:30
author: ahmad
type: docs
---

# 📘 **Module 4: Functions & Methods in Java**

## 📊 **Java Method Overriding – Flowchart (Text Form)**

```
┌────────────────────────┐
│     Parent Class       │
│------------------------│
│ methodName()           │
│ → Default implementation│
└──────────┬─────────────┘
           │
           ▼
┌────────────────────────────┐
│   Child Class extends Parent│
│-----------------------------│
│ @Override                   │
│ methodName()               │
│ → New implementation       │
└──────────┬─────────────────┘
           │
           ▼
┌──────────────────────────────┐
│ Parent reference = new Child(); │
│ reference.methodName();        │
└──────────┬────────────────────┘
           ▼
     Runtime Decision:
     Executes Child’s method
```

---

### 📘 **Quick Reference Table: Overriding vs Overloading**

| Feature           | Method Overriding                    | Method Overloading         |
| ----------------- | ------------------------------------ | -------------------------- |
| Class             | Parent-child classes (Inheritance)   | Same class                 |
| Parameters        | Same                                 | Different                  |
| Return Type       | Same (or covariant)                  | Can be different           |
| Polymorphism Type | Runtime                              | Compile-time               |
| Annotation        | Uses `@Override` (recommended)       | कोई annotation नहीं ज़रूरी |
| Access Modifier   | Cannot be more restrictive           | कोई restriction नहीं       |
| Static Methods    | ❌ Static methods can't be overridden | ✅ Can be overloaded        |

---

### ✅ Important Rules for Overriding:

* Method name, parameters और return type same होने चाहिए
* Access modifier equal या ज़्यादा accessible होना चाहिए (public > protected > default > private)
* Overriding only works with instance methods (non-static)
* Private methods, static methods, और constructors override नहीं हो सकते