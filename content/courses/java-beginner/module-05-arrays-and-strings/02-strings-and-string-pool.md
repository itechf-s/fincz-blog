---
title: "5.2 Strings & String Constant Pool (SCP)"
categories: [ Java, Course ]
tags: [Java, Strings, StringPool, Immutability, StringBuilder]
description: "String Immutability, String Constant Pool (SCP) vs Heap, == vs .equals(), और StringBuilder।"
date: 2026-09-20T08:00:00+05:30
lastmod: 2026-09-20T08:00:00+05:30
images: ["images/2025/06/arrays-and-strings.webp"]
author: ahmad
type: docs
weight: 2
---

## 🎯 **Lesson Objectives**
- Java में **String Immutability** का क्या अर्थ है।
- **Heap Memory** और **String Constant Pool (SCP)** का अंतर।
- `==` (रेफरेंस कम्पेरिजन) vs `.equals()` (कंटेंट कम्पेरिजन)।
- कब `String`, कब `StringBuilder`, और कब `StringBuffer` का उपयोग करें।

---

## 💡 **Real-Life Analogy**
पत्थर पर की गई नक्काशी (Engraving) की तरह समझें। एक बार पत्थर पर नाम लिख दिया, तो उसे बदला नहीं जा सकता (**Immutable**)। अगर आपको दूसरा नाम चाहिए, तो नया पत्थर लाना होगा। मेमोरी बचाने के लिए राजा एक ही पत्थर को कई लोगों को दिखाता है (**String Constant Pool**)।

---

## ⚙️ **1. String Constant Pool (SCP) vs Heap**

```text
               HEAP MEMORY
+---------------------------------------------+
|                                             |
|   +-------------------------------------+   |
|   |   String Constant Pool (SCP)        |   |
|   |                                     |   |
|   |   "Hello" <------- s1               |   |
|   |      ^             s2               |   |
|   +------|------------------------------+   |
|          |                                  |
|     s3 (new String)                         |
|     [ Holds "Hello" reference ]             |
+---------------------------------------------+
```

```java
public class StringPoolDemo {
    public static void main(String[] args) {
        // 1. String Literal (SCP में एक ही ऑब्जेक्ट को पॉइंट करेंगे)
        String s1 = "Hello";
        String s2 = "Hello";

        // 2. new कीवर्ड (हीप में नया अलग ऑब्जेक्ट बनेगा)
        String s3 = new String("Hello");

        System.out.println(s1 == s2);      // true  (दोनों SCP के एक ही एड्रेस को पॉइंट कर रहे हैं)
        System.out.println(s1 == s3);      // false (s3 हीप में अलग ऑब्जेक्ट है)
        System.out.println(s1.equals(s3)); // true  (दोनों का टेक्स्ट कंटेंट बिल्कुल एक समान है)
    }
}
```

---

## ⚙️ **2. StringBuilder vs StringBuffer (म्यूटेबल स्ट्रिंग्स)**

जब आपको लूप के अंदर बार-बार स्ट्रिंग जोड़नी (concatenate) हो, तो `String` के बजाय `StringBuilder` इस्तेमाल करना चाहिए, ताकि हीप में हज़ारों फालतू ऑब्जेक्ट्स न बनें:

```java
public class StringBuilderDemo {
    public static void main(String[] args) {
        StringBuilder sb = new StringBuilder("Fincz");
        sb.append(" Learn");
        sb.append(" - Java Masterclass");

        System.out.println("Result: " + sb.toString());
    }
}
```

- **`StringBuilder`**: नॉन-सिंक्रोनाइज़्ड और बहुत तेज़ (सिंगल थ्रेड में अनुशंसित)।
- **`StringBuffer`**: थ्रेड-सेफ (Thread-safe) और सिंक्रोनाइज़्ड।

---

## 📌 **Quick Revision Summary**
- Java में `String` ऑब्जेक्ट्स **Immutable** (अपरिवर्तनीय) होते हैं।
- स्ट्रिंग्स की तुलना हमेशा `.equals()` से करें, `==` से नहीं।
- भारी स्ट्रिंग मॉडिफिकेशन्स के लिए `StringBuilder` का उपयोग करें।

---

## 🧭 **Navigation**
- **⬅️ पिछला चैप्टर**: [5.1 Arrays in Java (1D & 2D)](./01-arrays-in-java/)
- **अगला चैप्टर ➡️**: [5.3 String Methods Cheat Sheet](./03-string-functions-reference/)
