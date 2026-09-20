---
title: "6.6 Abstraction & Interfaces"
categories: [ Java, Course ]
tags: [Java, Abstraction, Interfaces, AbstractClass, DefaultMethods]
description: "Abstract Classes vs Interfaces, implements कीवर्ड, और Modern Java 8+ Default/Static Methods।"
date: 2026-09-20T08:00:00+05:30
lastmod: 2026-09-20T08:00:00+05:30
images: ["images/2025/06/class-and-object.webp"]
author: ahmad
type: docs
---

## 🎯 **Lesson Objectives**
- **Abstraction** का सिद्धांत (What to do vs How to do)।
- **Abstract Class** और **Interface** के बीच का अंतर और कब किसका उपयोग करें।
- Java 8+ में इंटरफ़ेस के अंदर `default` और `static` मेथड्स का उपयोग।

---

## 📋 **Abstract Class vs Interface (स्पष्ट तुलना)**

| गुण (Feature) | Abstract Class | Interface |
| :--- | :--- | :--- |
| **कीवर्ड** | `abstract class` | `interface` |
| **मल्टीपल इनहेरिटेंस** | नहीं (एक क्लास सिर्फ एक को `extends` कर सकती है) | हाँ (एक क्लास कई इंटरफेसेस को `implements` कर सकती है) |
| **वेरिएबल्स** | इंस्टेंस और स्टैटिक दोनों हो सकते हैं | डिफ़ॉल्ट रूप से `public static final` (Constants) होते हैं |
| **उपयोग कब करें** | जब संबंधित क्लासेस में कोड शेयर करना हो | जब पूरी तरह अलग क्लासेस के बीच कॉन्ट्रैक्ट सेट करना हो |

---

## ⚙️ **Code: Cloud Storage Interface Contract**

```java
// इंटरफ़ेस (Contract)
interface CloudStorageService {
    void uploadFile(String fileName);
    void deleteFile(String fileName);

    // Java 8 Default Method (सबको ऑटोमैटिक मिलेगा)
    default void logActivity(String action) {
        System.out.println("[AUDIT LOG] Action performed: " + action);
    }
}

class AWS_S3_Storage implements CloudStorageService {
    @Override
    public void uploadFile(String fileName) {
        System.out.println("Uploading " + fileName + " to AWS S3 Bucket...");
        logActivity("S3_UPLOAD");
    }

    @Override
    public void deleteFile(String fileName) {
        System.out.println("Deleting " + fileName + " from AWS S3 Bucket...");
    }
}

public class AbstractionDemo {
    public static void main(String[] args) {
        CloudStorageService cloud = new AWS_S3_Storage();
        cloud.uploadFile("resume.pdf");
    }
}
```

---

## 📌 **Quick Revision Summary**
- Abstract क्लास का ऑब्जेक्ट कभी सीधे `new` से नहीं बनाया जा सकता।
- Interface एक अनुबंध (Contract) होता है जिसके सारे मेथड्स चाइल्ड को लागू करने होते हैं।

---

## 🧭 **Navigation**
- **⬅️ पिछला चैप्टर**: [6.5 Polymorphism & Dynamic Dispatch](./05-polymorphism/)
- **अगला मॉड्यूल ➡️**: [Module 7: Packages & Access Modifiers](../module-07-packages-and-access-modifiers/)
