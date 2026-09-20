---
title: "4.2 Method Overloading"
categories: [ Java, Course ]
tags: [Java, MethodOverloading, Polymorphism]
description: "Compile-Time Polymorphism, पैरामीटर्स के प्रकार/संख्या में बदलाव, और ओवरलोडिंग के नियम।"
date: 2026-09-20T08:00:00+05:30
lastmod: 2026-09-20T08:00:00+05:30
images: ["images/2025/06/functions-and-methods.webp"]
author: ahmad
type: docs
---

## 🎯 **Lesson Objectives**
- **Method Overloading** क्या है और इसका उद्देश्य क्या है।
- ओवरलोडिंग के 3 वैध नियम (Valid Rules)।
- केवल Return Type बदलने से ओवरलोडिंग क्यों संभव नहीं है।

---

## 💡 **Real-Life Analogy**
जैसे Google Pay या PhonePe में **"Pay"** बटन एक ही नाम का है, लेकिन:
- आप `pay(mobileNumber, amount)` कर सकते हैं,
- या `pay(upiId, amount)` कर सकते हैं,
- या `pay(bankAccountNumber, ifscCode, amount)` कर सकते हैं।
काम एक ही है (भुगतान करना), लेकिन इनपुट पैरामीटर्स अलग-अलग हैं। इसे ही **Method Overloading** कहते हैं।

---

## ⚙️ **Rules of Method Overloading**

एक ही क्लास में एक ही नाम के कई मेथड्स बनाए जा सकते हैं, बशर्ते उनका **Method Signature** अलग हो:
1. पैरामीटर्स की **संख्या** में अंतर हो (Number of parameters).
2. पैरामीटर्स के **डेटा टाइप** में अंतर हो (Data types of parameters).
3. पैरामीटर्स के **क्रम** में अंतर हो (Sequence of parameters).

```java
public class CalculatorService {

    // 1. दो पूर्णांकों का जोड़
    public static int add(int a, int b) {
        return a + b;
    }

    // 2. तीन पूर्णांकों का जोड़ (पैरामीटर्स की संख्या बदली)
    public static int add(int a, int b, int c) {
        return a + b + c;
    }

    // 3. दो दशमलव संख्याओं का जोड़ (डेटा टाइप बदला)
    public static double add(double a, double b) {
        return a + b;
    }

    public static void main(String[] args) {
        System.out.println("Sum of 2 ints: " + add(10, 20));
        System.out.println("Sum of 3 ints: " + add(10, 20, 30));
        System.out.println("Sum of 2 doubles: " + add(12.5, 7.5));
    }
}
```

---

## ⚠️ **The Return Type Myth (महत्वपूर्ण नियम)**

> ❌ **सिर्फ Return Type बदलकर ओवरलोडिंग नहीं की जा सकती!**

```java
public int calculate(int x) { return x * 2; }
public double calculate(int x) { return x * 2.0; } // ❌ Compilation Error!
```
**कारण**: जब आप कोड में `calculate(5)` कॉल करेंगे, तो कंपाइलर तय नहीं कर पाएगा कि आप `int` वाला या `double` वाला मेथड कॉल करना चाहते हैं।

---

## 📌 **Quick Revision Summary**
- Method Overloading को **Compile-Time (Static) Polymorphism** भी कहा जाता है।
- नाम समान रहता है, लेकिन पैरामीटर्स की लिस्ट (Signature) अलग होनी चाहिए।
- यह कोड की सरलता और पठनीयता बढ़ाता है।

---

## 🧭 **Navigation**
- **⬅️ पिछला चैप्टर**: [4.1 Functions & Methods in Java](./01-functions-and-methods/)
- **अगला चैप्टर ➡️**: [4.3 Method Overriding](./03-method-overriding/)
