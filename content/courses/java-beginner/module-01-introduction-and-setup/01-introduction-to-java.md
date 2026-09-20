---
title: "1.1 Java का परिचय और आर्किटेक्चर"
categories: [ Java, Course ]
tags: [Java, Architecture, JVM, JDK, JRE]
description: "Java का इतिहास, WORA सिद्धांत, JDK vs JRE vs JVM का अंतर, और पहला Java प्रोग्राम।"
date: 2026-09-20T08:00:00+05:30
lastmod: 2026-09-20T08:00:00+05:30
images: ["images/2025/06/introduction.webp"]
author: ahmad
type: docs
---

## 🎯 **Lesson Objectives (सीखने के लक्ष्य)**
- Java क्या है और इसे दुनिया भर के बैकएंड सिस्टम्स में क्यों चुना जाता है।
- **WORA (Write Once, Run Anywhere)** का वास्तविक मतलब क्या है।
- **JDK**, **JRE**, और **JVM** के बीच के अंतर को समझना।
- अपना पहला Java प्रोग्राम लिखना और उसे टर्मिनल से कंपाइल व रन करना।

---

## 💡 **Real-Life Analogy (दैनिक जीवन का उदाहरण)**
मान लीजिए आपको अलग-अलग देशों (जैसे फ्रांस, जापान, जर्मनी) के लोगों को एक संदेश भेजना है। 
- अगर आप सीधे हिंदी या अंग्रेजी में लिखेंगे, तो शायद वे समझ न पाएं।
- लेकिन अगर आपके पास एक यूनिवर्सल भाषा (जैसे **Musical Notes** या **Morse Code**) हो और हर देश के पास एक स्थानीय अनुवादक (Translator) हो जो उस कोड को समझकर अपनी भाषा में सुना सके, तो आपका काम आसान हो जाएगा।
- Java में आपका लिखा कोड (`.java`) यूनिवर्सल **Bytecode** (`.class`) में बदलता है, और हर ऑपरेटिंग सिस्टम का **JVM** उस बाइटकोड को अपनी मशीन भाषा में चलाता है!

---

## 📖 **Glossary (तकनीकी शब्दकोश)**

| शब्द (Term) | सरल अर्थ (Meaning) |
| :--- | :--- |
| **Source Code** | वह कोड जो इंसान (डेवलपर) लिखता है (`.java` फ़ाइल)। |
| **Bytecode** | Java कंपाइलर द्वारा तैयार किया गया इंटरमीडिएट कोड (`.class` फ़ाइल)। |
| **JVM (Java Virtual Machine)** | वह इंजन जो बाइटकोड को मशीन कोड में बदलकर रन करता है। |
| **JRE (Java Runtime Environment)** | JVM + जरूरी लाइब्रेरीज़, जो प्रोग्राम को चलाने के लिए काफी हैं। |
| **JDK (Java Development Kit)** | संपूर्ण टूलकिट (Compiler + Debugger + JRE) जो डेवलपर्स के काम आती है। |
| **Platform Independent** | ऐसा कोड जो बिना बदले किसी भी OS (Windows, Linux, macOS) पर चल सके। |

---

## ⚙️ **Core Concepts: Java Architecture**

Java को 1995 में **James Gosling** और Sun Microsystems (अब Oracle) की टीम ने बनाया था। इसका सबसे क्रांतिकारी फीचर था **WORA**।

### 1. Java Compilation & Execution Flow

```text
+------------------------+
|  Your Source Code      |  (HelloWorld.java)
+------------------------+
            |
            | javac HelloWorld.java  [Java Compiler]
            v
+------------------------+
|    Java Bytecode       |  (HelloWorld.class - Platform Neutral)
+------------------------+
            |
     +------+------+
     |             |
     v             v
+----------+ +----------+ +----------+
| JVM for  | | JVM for  | | JVM for  |
| Windows  | | Linux    | | macOS    |
+----------+ +----------+ +----------+
     |             |             |
     v             v             v
[Windows OS]  [Linux OS]    [macOS]
```

### 2. JDK vs JRE vs JVM (The Onion Structure)

```text
+--------------------------------------------------------+
| JDK (Java Development Kit)                             |
|  - javac (Compiler), jdb (Debugger), javadoc, jar      |
|                                                        |
|  +--------------------------------------------------+  |
|  | JRE (Java Runtime Environment)                   |  |
|  |  - Standard Class Libraries (java.lang, util)    |  |
|  |                                                  |  |
|  |  +--------------------------------------------+  |  |
|  |  | JVM (Java Virtual Machine)                 |  |  |
|  |  |  - ClassLoader                             |  |  |
|  |  |  - Execution Engine (JIT Compiler + Interp)|  |  |
|  |  |  - Garbage Collector                       |  |  |
|  |  +--------------------------------------------+  |  |
|  +--------------------------------------------------+  |
+--------------------------------------------------------+
```

---

## 💻 **पहला Java प्रोग्राम (Hello World)**

एक फ़ाइल बनाएं जिसका नाम रखें: `HelloWorld.java`

```java
// HelloWorld.java
public class HelloWorld {
    // प्रोग्राम का एंट्री पॉइंट (Entry Point)
    public static void main(String[] args) {
        System.out.println("Hello, World! Welcome to Java Masterclass.");
    }
}
```

### 🔍 कोड का लाइन-बाय-लाइन विश्लेषण:
1. `public class HelloWorld`: Java में हर कोड किसी क्लास के अंदर होता है। फ़ाइल का नाम और `public` क्लास का नाम बिल्कुल एक समान होना चाहिए।
2. `public static void main(String[] args)`:
   - `public`: इसे JVM कहीं से भी एक्सेस कर सकता है।
   - `static`: इस मेथड को कॉल करने के लिए क्लास का ऑब्जेक्ट बनाने की जरूरत नहीं होती।
   - `void`: यह मेथड कोई वैल्यू वापस (return) नहीं करता।
   - `main`: प्रोग्राम की शुरुआत का फिक्स्ड नाम।
   - `String[] args`: कमांड लाइन से इनपुट लेने के लिए एरे।
3. `System.out.println(...)`: कंसोल पर टेक्स्ट प्रिंट करके नई लाइन पर जाने के लिए उपयोग होता है।

### 🛠️ कंपाइल और रन करने के कमांड्स:
```bash
# स्टेप 1: कोड को बाइटकोड में कंपाइल करें
javac HelloWorld.java

# स्टेप 2: JVM पर बाइटकोड को रन करें (नोट: .class एक्सटेंशन न लगाएं)
java HelloWorld
```

**आउटपुट:**
```text
Hello, World! Welcome to Java Masterclass.
```

---

## ⚠️ **Common Mistakes & Pro Tips**
- ❌ **फ़ाइल नाम और क्लास नाम में अंतर**: अगर आपकी क्लास `public class Main` है, तो फ़ाइल का नाम `Main.java` ही होना चाहिए, `main.java` या `test.java` नहीं (Java Case-Sensitive है)।
- ❌ `java HelloWorld.class` चलाना: `java` कमांड के साथ कभी `.class` नहीं लिखा जाता, सिर्फ क्लास का नाम `java HelloWorld` दिया जाता है।
- 💡 **Pro Tip**: Java 11 के बाद से अगर आपका प्रोग्राम सिंगल फ़ाइल का है, तो आप बिना अलग से कंपाइल किए सीधे `java HelloWorld.java` चला सकते हैं!

---

## 📝 **अभ्यास प्रश्न (Practice Exercise)**
1. एक Java प्रोग्राम लिखें जो आपके नाम, आपके पसंदीदा प्रोग्रामिंग लक्ष्य और आज की तारीख को अलग-अलग लाइन्स में प्रिंट करे।
2. अपने टर्मिनल में `java -version` और `javac -version` चलाकर चेक करें कि आपके सिस्टम में कौन सा JDK वर्शन एक्टिव है।

---

## 📌 **Quick Revision Summary**
- Java **Platform-Independent** है क्योंकि यह सीधे मशीन कोड के बजाय **Bytecode** बनाती है।
- **JVM** बाइटकोड को मशीन-विशिष्ट कोड में बदलता है।
- कोड लिखने और कंपाइल करने के लिए **JDK** की जरूरत होती है।
- `main()` मेथड Java प्रोग्राम का स्टार्टिंग गेटवे (Entry Point) है।

---

## 🧭 **Navigation**
- **अगला चैप्टर ➡️**: [1.2 Java Installation & Environment Setup](./02-java-installation/)
