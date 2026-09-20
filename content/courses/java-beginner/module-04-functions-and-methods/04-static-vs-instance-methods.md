---
title: "4.4 Static vs Instance Methods"
categories: [ Java, Course ]
tags: [Java, Static, Methods, Memory, Metaspace]
description: "Static methods vs Non-static methods, main() का static होना, और static memory allocation।"
date: 2026-09-20T08:00:00+05:30
lastmod: 2026-09-20T08:00:00+05:30
images: ["images/2025/06/functions-and-methods.webp"]
author: ahmad
type: docs
weight: 4
---

## 🎯 **Lesson Objectives**
- `static` कीवर्ड का सटीक अर्थ और मेमोरी आवंटन (Metaspace / Class Area)।
- स्टैटिक मेथड्स और इंस्टेंस (Non-static) मेथड्स के बीच अंतर।
- `main()` मेथड को हमेशा `static` क्यों बनाया जाता है।

---

## 💡 **Real-Life Analogy**
- **Static Member**: सोसाइटी का मुख्य पानी का टैंक या जिम। यह पूरी सोसाइटी (पूरी Class) के लिए सिर्फ एक ही है और हर घर (हर Object) इसे साझा करता है।
- **Instance Member**: हर फ्लैट के अंदर का अपना पर्सनल फ्रिज या सोफा। हर फ्लैट का अपना अलग सामान (अलग Object State) होता है।

---

## ⚙️ **Code Comparison**

```java
public class StudentTracker {
    // 1. Static Variable (पूरी क्लास के लिए एक साझा काउंटर)
    public static int totalStudents = 0;

    // 2. Instance Variable (हर छात्र का अलग डेटा)
    public String studentName;

    // कंस्ट्रक्टर
    public StudentTracker(String name) {
        this.studentName = name;
        totalStudents++; // जब भी नया छात्र बनेगा, ग्लोबल काउंटर बढ़ेगा
    }

    // Static Method (क्लास के नाम से कॉल होता है)
    public static void displayTotalCount() {
        System.out.println("कुल पंजीकृत छात्र: " + totalStudents);
        // नोट: स्टैटिक मेथड के अंदर 'this.studentName' एक्सेस नहीं कर सकते!
    }

    // Instance Method (ऑब्जेक्ट के नाम से कॉल होता है)
    public void printDetails() {
        System.out.println("छात्र का नाम: " + this.studentName);
    }

    public static void main(String[] args) {
        StudentTracker s1 = new StudentTracker("Rahul");
        StudentTracker s2 = new StudentTracker("Pooja");

        s1.printDetails();
        s2.printDetails();

        // सीधे क्लास के नाम से स्टैटिक मेथड कॉल करें
        StudentTracker.displayTotalCount();
    }
}
```

---

## 🔍 **main() मेथड Static क्यों होता है?**
जब JVM आपके प्रोग्राम को शुरू करता है, तब तक आपकी क्लास का कोई भी ऑब्जेक्ट मेमोरी में नहीं बना होता। अगर `main()` स्टैटिक न होता, तो JVM को `main()` को कॉल करने से पहले उस क्लास का ऑब्जेक्ट बनाना पड़ता—जो कि शुरुआत में असंभव था। इसलिए JVM सीधे `ClassName.main(args)` चला सके, इसके लिए इसे `static` रखा गया है।

---

## 📌 **Quick Revision Summary**
- `static` मेथड क्लास से संबंधित होते हैं, ऑब्जेक्ट से नहीं।
- स्टैटिक मेथड सीधे नॉन-स्टैटिक (इंस्टेंस) वेरिएबल्स को एक्सेस नहीं कर सकते।
- यूटिलिटी मेथड्स (जैसे `Math.sqrt()`, `Arrays.sort()`) हमेशा `static` होते हैं।

---

## 🧭 **Navigation**
- **⬅️ पिछला चैप्टर**: [4.3 Method Overriding](./03-method-overriding/)
- **अगला मॉड्यूल ➡️**: [Module 5: Arrays & Strings in Java](../module-05-arrays-and-strings/)
