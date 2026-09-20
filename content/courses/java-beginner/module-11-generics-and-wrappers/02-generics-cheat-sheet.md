---
title: "11.2 Generics Cheat Sheet & Wildcards"
categories: [ Java, Course ]
tags: [Java, Generics, Wildcards, PECS]
description: "Wildcards (<?>), Bounded Wildcards (? extends T, ? super T), और PECS सिद्धांत।"
date: 2026-09-20T08:00:00+05:30
lastmod: 2026-09-20T08:00:00+05:30
images: ["images/2025/06/generics-autoboxing-wrapper-classes.webp"]
author: ahmad
type: docs
---

## 📋 **Wildcard Reference**

- `<?>`: Unbounded Wildcard (किसी भी प्रकार की लिस्ट स्वीकार्य है)।
- `<? extends Number>`: Upper Bounded (केवल `Number` या उसके सबक्लासेस जैसे `Integer`, `Double` स्वीकार्य हैं - Read Only).
- `<? super Integer>`: Lower Bounded (केवल `Integer` या उसके सुपरक्लासेस स्वीकार्य हैं - Write Friendly).

> 💡 **PECS Rule:** **P**roducer **E**xtends, **C**onsumer **S**uper!

---

## 🧭 **Navigation**
- **⬅️ पिछला चैप्टर**: [11.1 Generics & Autoboxing](./01-generics-autoboxing-wrapper-classes/)
- **अगला मॉड्यूल ➡️**: [Module 12: Multithreading & Concurrency](../module-12-multithreading-and-concurrency/)
