---
title: "2.2 Variables & 8 Primitive Data Types"
categories: [ Java, Course ]
tags: [Java, Variables, Data-Types, Memory]
description: "Java के 8 प्रिमिटिव डेटा टाइप्स, उनकी मेमोरी साइज़, रेंज, और वेरिएबल्स के नामकरण के नियम।"
date: 2026-09-20T08:00:00+05:30
lastmod: 2026-09-20T08:00:00+05:30
images: ["images/2025/06/syntax-and-data-types.webp"]
author: ahmad
type: docs
weight: 2
---

## 🎯 **Lesson Objectives**
- वेरिएबल (Variable) की अवधारणा और मेमोरी में इसका महत्व समझना।
- Java के सभी **8 Primitive Data Types** की साइज़ और रेंज जानना।
- Naming Conventions (camelCase) का सही इस्तेमाल करना।

---

## 💡 **Real-Life Analogy**
वेरिएबल को किचन के अलग-अलग डिब्बों (Containers) जैसा समझिए:
- नमक के लिए छोटा डिब्बा चाहिए (`byte` या `short`)।
- चावल या दाल के लिए बड़ा डिब्बा चाहिए (`int` या `long`)।
- तेल या पानी (तरल पदार्थ) के लिए मापने वाला जग चाहिए (`float` या `double`)।
- लेबल के लिए सिर्फ एक अक्षर का स्टीकर चाहिए (`char`)।
- लाइट का स्विच ऑन/ऑफ के लिए दो ही अवस्थाएं हैं (`boolean`)।

---

## 📊 **Java के 8 Primitive Data Types (विस्तृत तालिका)**

Java एक **Statically-Typed** भाषा है, यानी हर वेरिएबल को बनाते समय उसका डेटा टाइप बताना अनिवार्य होता है।

| डेटा टाइप | साइज़ (Bytes / Bits) | डिफ़ॉल्ट वैल्यू | रेंज (Range) | उदाहरण |
| :--- | :--- | :--- | :--- | :--- |
| `byte` | 1 Byte (8 bits) | `0` | -128 से 127 | `byte age = 25;` |
| `short` | 2 Bytes (16 bits) | `0` | -32,768 से 32,767 | `short score = 5000;` |
| `int` | 4 Bytes (32 bits) | `0` | -2^31 से 2^31 - 1 | `int salary = 75000;` |
| `long` | 8 Bytes (64 bits) | `0L` | -2^63 से 2^63 - 1 | `long population = 1400000000L;` |
| `float` | 4 Bytes (32 bits) | `0.0f` | ~6-7 दशमलव अंक | `float pi = 3.1415f;` |
| `double` | 8 Bytes (64 bits) | `0.0d` | ~15-16 दशमलव अंक (High precision) | `double price = 999.99;` |
| `char` | 2 Bytes (16 bits) | `'\u0000'` | 0 से 65,535 (Unicode Characters) | `char grade = 'A';` |
| `boolean`| 1 Bit (JVM-dependent)| `false` | `true` या `false` | `boolean isActive = true;` |

---

## 💻 **कोड उदाहरण (Live Code Example)**

```java
public class VariablesDemo {
    public static void main(String[] args) {
        // पूर्ण संख्याएं (Integers)
        byte studentAge = 19;
        int employeeId = 10452;
        long bankBalance = 5820000000L; // नोट: long के अंत में 'L' लगाएं

        // दशमलव संख्याएं (Decimals)
        float temperature = 36.6f;      // नोट: float के अंत में 'f' लगाएं
        double marketIndex = 24350.75;

        // कैरेक्टर और बूलियन
        char section = 'B';
        boolean isEnrolled = true;

        System.out.println("Student Age: " + studentAge);
        System.out.println("Employee ID: " + employeeId);
        System.out.println("Bank Balance: " + bankBalance);
        System.out.println("Temperature: " + temperature + " °C");
        System.out.println("Section: " + section + ", Enrolled: " + isEnrolled);
    }
}
```

---

## 🏷️ **Naming Conventions (नामकरण के नियम)**
1. **camelCase**: वेरिएबल्स और मेथड्स के नाम camelCase में रखें (उदा. `userAge`, `totalAccountBalance`)।
2. **सार्थक नाम (Meaningful Names)**: `int x = 10;` के बजाय `int userCount = 10;` लिखें।
3. **अमान्य नाम**: नाम नंबर से शुरू नहीं हो सकते (उदा. `1user` गलत है), और बीच में स्पेस या स्पेशल कैरेक्टर्स (सिवाय `_` और `$`) नहीं आ सकते।

---

## ⚠️ **Common Mistakes**
- ❌ `float f = 3.14;` लिखना: Java में डिफ़ॉल्ट दशमलव संख्या `double` होती है। `float` के लिए `3.14f` लिखना ज़रूरी है।
- ❌ `char c = "A";`: सिंगल कैरेक्टर के लिए हमेशा सिंगल कोट्स `'A'` का इस्तेमाल करें। डबल कोट्स `"A"` स्ट्रिंग (String) के लिए होता है।

---

## 📌 **Quick Revision Summary**
- Java में 8 प्रिमिटिव डेटा टाइप्स होते हैं।
- संख्याओं के लिए सबसे ज़्यादा इस्तेमाल `int` और `double` का होता है।
- Java के `char` का साइज़ 2 बाइट्स होता है क्योंकि यह पूरे विश्व की भाषाओं के **Unicode (UTF-16)** को सपोर्ट करता है।

---

## 🧭 **Navigation**
- **⬅️ पिछला चैप्टर**: [2.1 Java Syntax और Program Structure](./01-java-syntax-and-structure/)
- **अगला चैप्टर ➡️**: [2.3 Type Casting & Type Promotion](./03-type-casting-and-promotion/)
