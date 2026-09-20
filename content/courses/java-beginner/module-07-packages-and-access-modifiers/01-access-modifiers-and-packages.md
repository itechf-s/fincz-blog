---
title: "7.1 Packages & Access Modifier Matrix"
categories: [ Java, Course ]
tags: [Java, Packages, AccessModifiers, Security]
description: "Built-in vs User-defined packages, import, और 4 एक्सेस मॉडिफायर्स की संपूर्ण विजिबिलिटी मैट्रिक्स।"
date: 2026-09-20T08:00:00+05:30
lastmod: 2026-09-20T08:00:00+05:30
images: ["images/2025/06/access-modifiers-packages.webp"]
author: ahmad
type: docs
weight: 1
---

## 🎯 **Lesson Objectives**
- पैकेज क्या हैं और रिवर्स डोमेन नेमिंग (`com.company.module`) क्यों अपनाई जाती है।
- `import` और `import static` के नियम।
- चारों एक्सेस मॉडिफायर्स की विजिबिलिटी मैट्रिक्स को कंठस्थ करना।

---

## 📊 **Access Modifier Visibility Matrix (सबसे महत्वपूर्ण तालिका)**

| मॉडिफायर (Modifier) | Same Class | Same Package | Subclass (Diff Package) | World (Everywhere) |
| :--- | :---: | :---: | :---: | :---: |
| **`public`** | ✅ हाँ | ✅ हाँ | ✅ हाँ | ✅ हाँ |
| **`protected`** | ✅ हाँ | ✅ हाँ | ✅ हाँ (via inheritance) | ❌ नहीं |
| **`default` (नो कीवर्ड)**| ✅ हाँ | ✅ हाँ | ❌ नहीं | ❌ नहीं |
| **`private`** | ✅ हाँ | ❌ नहीं | ❌ नहीं | ❌ नहीं |

---

## ⚙️ **Packages का उपयोग**
```java
// फ़ाइल का सबसे पहला स्टेटमेंट
package com.fincz.banking.security;

// अन्य पैकेजों से क्लासेस इम्पोर्ट करना
import java.util.List;
import java.util.ArrayList;

public class AuthToken {
    private String token; // सिर्फ इसी क्लास में दिखेगा
    String packageId;     // डिफ़ॉल्ट: इसी पैकेज में दिखेगा
    protected int level;  // चाइल्ड क्लास को मिलेगा
    public boolean active;// हर जगह उपलब्ध
}
```

---

## 📌 **Quick Revision Summary**
- **`private`**: उच्चतम सुरक्षा (सिर्फ अपनी क्लास)।
- **`default`**: पैकेज स्तर की सुरक्षा।
- **`protected`**: परिवार (पैकेज + संतान क्लासेस) के लिए।
- **`public`**: पूरी दुनिया के लिए खुला।

---

## 🧭 **Navigation**
- **⬅️ पिछला मॉड्यूल**: [Module 6: Object-Oriented Programming (OOPs)](../module-06-oops-fundamentals/)
- **अगला चैप्टर ➡️**: [7.2 Real-World Banking System Architecture](./02-real-world-bank-domain-example/)
