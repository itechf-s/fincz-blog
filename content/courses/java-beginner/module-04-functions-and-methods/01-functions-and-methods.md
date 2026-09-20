---
title: "4.1 Functions & Methods in Java"
categories: [ Java, Course ]
tags: [Java, Methods, Functions, Parameters, PassByValue]
description: "Java मेथड का ढांचा, रिटर्न टाइप्स, पैरामीटर्स और Java में Pass-by-Value का वास्तविक नियम।"
date: 2026-09-20T08:00:00+05:30
lastmod: 2026-09-20T08:00:00+05:30
images: ["images/2025/06/functions-and-methods.webp"]
author: ahmad
type: docs
---

## 🎯 **Lesson Objectives**
- Function और Method में क्या अंतर है।
- Method का डिक्लेरेशन, पैरामीटर्स और Return Type को समझना।
- Java में **"Pass-by-Value"** कैसे काम करता है।

---

## 💡 **Real-Life Analogy**
मेथड को एक जूसर-मिक्सर (Juicer Machine) समझिए:
- **इनपुट (Parameters)**: आप फल (जैसे सेब/संतरा) और चीनी डालते हैं।
- **प्रोसेसिंग (Method Body)**: मिक्सर फलों को पीसता है।
- **आउटपुट (Return Value)**: आपको ताजा जूस का गिलास मिलता है।
अगर मशीन केवल साफ करने का काम करती है और कोई जूस नहीं देती, तो उसे `void` रिटर्न टाइप कहेंगे।

---

## ⚙️ **1. Anatomy of a Java Method**

```text
[Access Modifier] [Static/Non-Static] [Return Type] [Method Name]([Parameters]) {
    // Method Body (Logic)
    return [Value]; // यदि Return Type void नहीं है
}
```

```java
public class MethodBasics {

    // 1. वैल्यू रिटर्न करने वाला मेथड
    public static int calculateTax(int salary, double taxRate) {
        double taxAmount = salary * taxRate;
        return (int) taxAmount;
    }

    // 2. Void मेथड (कोई वैल्यू रिटर्न नहीं करता)
    public static void greetUser(String userName) {
        System.out.println("नमस्ते, " + userName + "! Fincz Learn में आपका स्वागत है।");
    }

    public static void main(String[] args) {
        greetUser("Ahmad");
        int myTax = calculateTax(60000, 0.15);
        System.out.println("कैलकुलेटेड टैक्स: ₹" + myTax);
    }
}
```

---

## 🧠 **2. Java is ALWAYS Pass-by-Value**

Java में आर्गुमेंट्स पास करते समय **हमेशा वैल्यू की कॉपी** पास होती है:
1. **Primitive Types**: वेरिएबल की मूल वैल्यू की कॉपी मेथड के स्टैक फ्रेम में जाती है। मेथड के अंदर किए गए बदलाव मुख्य वेरिएबल को प्रभावित नहीं करते।
2. **Object References**: ऑब्जेक्ट के मेमोरी एड्रेस (Reference) की कॉपी पास होती है।

```java
public class PassByValueDemo {
    public static void modifyValue(int num) {
        num = num + 10; // यह सिर्फ लोकल कॉपी को बदल रहा है
    }

    public static void main(String[] args) {
        int original = 50;
        modifyValue(original);
        System.out.println("Original Value: " + original); // अभी भी 50 ही रहेगा!
    }
}
```

---

## 📌 **Quick Revision Summary**
- Java पूरी तरह ऑब्जेक्ट-ओरिएंटेड है, इसलिए हर फंक्शन क्लास के अंदर होता है और उसे **Method** कहा जाता है।
- `void` का अर्थ है कोई वैल्यू वापस नहीं लौटना।
- Java हमेशा **Pass-by-Value** पर काम करता है।

---

## 🧭 **Navigation**
- **⬅️ पिछला मॉड्यूल**: [Module 3: Control Flow Statements](../module-03-control-flow/)
- **अगला चैप्टर ➡️**: [4.2 Method Overloading](./02-method-overloading/)
