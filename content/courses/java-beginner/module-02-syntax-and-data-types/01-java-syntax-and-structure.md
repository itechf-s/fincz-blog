---
title: "2.1 Java Syntax और Program Structure"
categories: [ Java, Course ]
tags: [Java, Syntax, Structure, Comments]
description: "Java प्रोग्राम का ढांचा, मुख्य भाग, स्टेटमेंट्स, सेमीकोलन और कॉमेंट्स के प्रकार।"
date: 2026-09-20T08:00:00+05:30
lastmod: 2026-09-20T08:00:00+05:30
images: ["images/2025/06/syntax-and-data-types.webp"]
author: ahmad
type: docs
weight: 1
---

## 🎯 **Lesson Objectives**
- Java प्रोग्राम के बुनियादी ढांचे (Anatomy of a Class) को समझना।
- स्टेटमेंट्स, सेमीकोलन (`;`), और कोड ब्लॉक्स (`{ }`) के नियम सीखना।
- सिंगल-लाइन, मल्टी-लाइन और Javadoc कॉमेंट्स का सही उपयोग करना।

---

## 💡 **Real-Life Analogy**
जैसे हर कानूनी दस्तावेज में एक शीर्षक (Title), अनुच्छेद (Paragraphs) और विराम चिह्न (Punctuation) का फिक्स नियम होता है ताकि कोई गलतफहमी न हो; उसी प्रकार Java में हर प्रोग्राम एक **Class** के रूप में लिखा जाता है, और हर निर्देश (Statement) के अंत में सेमीकोलन (`;`) लगाना अनिवार्य होता है।

---

## ⚙️ **Anatomy of a Java Program**

```java
// पैकेज डिक्लेरेशन (वैकल्पिक / Optional)
package com.fincz.basics;

// ज़रूरी लाइब्रेरीज़ इम्पोर्ट करना
import java.time.LocalDate;

// मुख्य क्लास डेफिनिशन
public class ProgramStructure {

    // प्रोग्राम का शुरुआती बिंदु (Entry Point)
    public static void main(String[] args) {
        // स्टेटमेंट 1: स्क्रीन पर टेक्स्ट दिखाना
        System.out.println("Java सिंटैक्स सीखना बेहद आसान है!");

        // स्टेटमेंट 2: आज की तारीख प्रिंट करना
        System.out.println("आज की तारीख: " + LocalDate.now());
    }
}
```

### 🔍 मुख्य तत्व (Key Elements):
1. **Class Header**: `public class ProgramStructure` — Java पूरी तरह क्लास-बेस्ड भाषा है।
2. **Main Method**: `public static void main(String[] args)` — JVM इसी मेथड को खोजकर कोड का निष्पादन शुरू करता है।
3. **Block Scope**: `{ ... }` कर्ली ब्रैकेट्स से तय होता है कि कौन सा कोड किस क्लास या मेथड के अंदर है।
4. **Statement Terminator**: `;` सेमीकोलन Java कंपाइलर को बताता है कि यह निर्देश यहाँ समाप्त हो गया है।

---

## 📝 **Comments in Java (कोड दस्तावेज़ीकरण)**

Java में 3 तरह के कॉमेंट्स होते हैं:

```java
// 1. Single-line Comment: सिर्फ एक लाइन की टिप्पणी के लिए

/*
 * 2. Multi-line Comment:
 * जब आपको कोई बड़ा लॉजिक या
 * कई लाइनों का विवरण लिखना हो।
 */

/**
 * 3. Javadoc Documentation Comment:
 * यह टूल्स द्वारा ऑटोमैटिक HTML डॉक्यूमेंटेशन बनाने के काम आता है।
 * @author Ahmad
 * @version 1.0
 */
```

---

## ⚠️ **Common Mistakes & Pro Tips**
- ❌ **Semicolon भूल जाना**: शुरुआती डेवलपर्स अक्सर लाइन के अंत में `;` लगाना भूल जाते हैं, जिससे कंपाइलर `';' expected` एरर देता है।
- ❌ **Brackets का मिसमैच**: जितने `{` खुलेंगे, उतने ही `}` बंद होने चाहिए।
- 💡 **Indent Your Code**: कोड को हमेशा 4 स्पेसेज या Tab के साथ सही इंडेंटेशन में लिखें ताकि कोड साफ और पढ़ने में आसान लगे।

---

## 📌 **Quick Revision Summary**
- Java प्रोग्राम क्लास के अंदर ही लिखा जाता है।
- हर निर्देश का अंत `;` (semicolon) से होता है।
- कॉमेंट्स कोड की पठनीयता (readability) बढ़ाते हैं और कंपाइलर द्वारा अनदेखा किए जाते हैं।

---

## 🧭 **Navigation**
- **⬅️ पिछला मॉड्यूल**: [Module 1: Introduction, Architecture & Setup](../module-01-introduction-and-setup/)
- **अगला चैप्टर ➡️**: [2.2 Variables & 8 Primitive Data Types](./02-variables-and-data-types/)
