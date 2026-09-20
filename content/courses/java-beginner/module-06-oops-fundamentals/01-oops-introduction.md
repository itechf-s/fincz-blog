---
title: "6.1 OOPs Fundamentals & Core Pillars"
categories: [ Java, Course ]
tags: [Java, OOPs, Concepts, Pillars]
description: "Procedural vs Object-Oriented Programming, और OOPs के 4 मुख्य स्तंभ (Pillars) का संपूर्ण परिचय।"
date: 2026-09-20T08:00:00+05:30
lastmod: 2026-09-20T08:00:00+05:30
images: ["images/2025/06/class-and-object.webp"]
author: ahmad
type: docs
weight: 1
---

## 🎯 **Lesson Objectives**
- पारंपरिक Procedural Programming (उदा. C भाषा) और OOPs का अंतर समझना।
- OOPs के **4 मुख्य स्तंभ (4 Pillars)** का मानसिक मॉडल बनाना।
- वास्तविक दुनिया की वस्तुओं (Real-world Entities) को कोड में क्लास व ऑब्जेक्ट के रूप में मॉडल करना।

---

## 💡 **Real-Life Analogy**
- **Procedural (प्रक्रियात्मक)**: जैसे एक रेसिपी डायरी, जिसमें सिर्फ स्टेप्स लिखे हैं: "कढ़ाई चढ़ाओ -> तेल डालो -> सब्जी काटो"। डेटा और स्टेप्स अलग-अलग बिखरे होते हैं।
- **Object-Oriented (ऑब्जेक्ट-ओरिएंटेड)**: जैसे एक आधुनिक स्मार्ट किचन, जहाँ हर उपकरण (Microwave, Refrigerator) का अपना डेटा (तापमान, क्षमता) और अपने काम (Start, Stop) एक ही यूनिट के अंदर सुरक्षित रूप से पैक होते हैं।

---

## 🏛️ **OOPs के 4 मुख्य स्तंभ (The 4 Pillars)**

```text
                  +-------------------------------------------------------+
                  |         Object-Oriented Programming (OOPs)            |
                  +-------------------------------------------------------+
                                              |
      +--------------------+------------------+-------------------+--------------------+
      |                    |                                      |                    |
      v                    v                                      v                    v
+---------------+  +---------------+                      +---------------+    +---------------+
| Encapsulation |  |  Inheritance  |                      | Polymorphism  |    |  Abstraction  |
| (डेटा सुरक्षा)|  | (पुनः उपयोग)  |                      | (अनेकरूपता)   |    | (जटिलता छुपाना)|
+---------------+  +---------------+                      +---------------+    +---------------+
```

1. **Encapsulation (कैप्सूलीकरण)**: डेटा (Variables) और उसके मेथड्स को एक कैप्सूल में बांधना और बाहरी गलत छेड़छाड़ से बचाना (Data Hiding)।
2. **Inheritance (विरासत / उत्तराधिकार)**: पैरेंट क्लास के फीचर्स को चाइल्ड क्लास में पुनः उपयोग करना (`IS-A` संबंध)।
3. **Polymorphism (बहुरूपता)**: एक ही नाम के मेथड का अलग-अलग परिस्थितियों में अलग-अलग व्यवहार करना।
4. **Abstraction (अमूर्तीकरण)**: आंतरिक जटिलताओं (Internal complexity) को छुपाकर केवल ज़रूरी इंटरफ़ेस बाहर दिखाना।

---

## 📌 **Quick Revision Summary**
- OOPs सॉफ्टवेयर को मेंटेन और स्केल करना आसान बनाता है।
- सब कुछ **Objects** के इर्द-गिर्द घूमता है जिसमें **State (Variables)** और **Behavior (Methods)** होते हैं।

---

## 🧭 **Navigation**
- **⬅️ पिछला मॉड्यूल**: [Module 5: Arrays & Strings in Java](../module-05-arrays-and-strings/)
- **अगला चैप्टर ➡️**: [6.2 Class, Object & Constructors](./02-class-and-object/)
