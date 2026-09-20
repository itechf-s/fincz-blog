---
title: "1.3 Java Keywords & Compilation Lifecycle"
categories: [ Java, Course ]
tags: [Java, Keywords, JVM, Bytecode]
description: "Java के 50+ रिज़र्व्ड कीवर्ड्स, उनकी श्रेणियां, और बाइटकोड एक्ज़ीक्यूशन लाइफसाइकिल।"
date: 2026-09-20T08:00:00+05:30
lastmod: 2026-09-20T08:00:00+05:30
images: ["images/2025/06/introduction.webp"]
author: ahmad
type: docs
---

## 🎯 **Lesson Objectives**
- Java भाषा के सभी **50+ Reserved Keywords** को श्रेणीबद्ध (categorized) रूप में समझना।
- कीवर्ड्स के उपयोग के नियम और रिस्ट्रिक्शन्स जानना।
- Java के अंदरूनी **Class Loading, Bytecode Verification, और Execution Lifecycle** को समझना।

---

## 💡 **Real-Life Analogy**
ट्रैफिक सिग्नल पर **RED**, **YELLOW**, और **GREEN** लाइट्स का एक पूर्व-निर्धारित (Reserved) मतलब होता है। आप अपनी मर्जी से RED लाइट का मतलब "तेज गाड़ी चलाओ" नहीं बना सकते। इसी तरह, Java में कुछ शब्द प्रोग्रामिंग भाषा के सिंटैक्स के लिए आरक्षित (Reserved) होते हैं, जिन्हें आप वेरिएबल या क्लास के नाम के रूप में उपयोग नहीं कर सकते।

---

## 📋 **Java Keywords Chart (By Category)**

Java में 50 से अधिक आरक्षित कीवर्ड्स हैं। ये सभी **lowercase** में होते हैं:

| श्रेणी (Category) | कीवर्ड्स (Keywords) | मुख्य कार्य |
| :--- | :--- | :--- |
| **डेटा टाइप्स (Primitive Types)** | `byte`, `short`, `int`, `long`, `float`, `double`, `char`, `boolean`, `void` | मेमोरी में डेटा का प्रकार तय करना |
| **कंट्रोल फ़्लो (Control Flow)** | `if`, `else`, `switch`, `case`, `default`, `while`, `do`, `for`, `break`, `continue`, `return` | प्रोग्राम के चलने की दिशा तय करना |
| **एक्सेस मॉडिफायर्स (Modifiers)** | `public`, `protected`, `private`, `static`, `final`, `abstract`, `synchronized`, `transient`, `volatile`, `native`, `strictfp` | विजिबिलिटी और बिहेवियर नियंत्रित करना |
| **OOPs & क्लास डेफिनिशन** | `class`, `interface`, `enum`, `record`, `extends`, `implements`, `package`, `import`, `new`, `this`, `super`, `instanceof` | ऑब्जेक्ट-ओरिएंटेड संरचना बनाना |
| **एक्सेप्शन हैंडलिंग** | `try`, `catch`, `finally`, `throw`, `throws`, `assert` | रनटाइम एरर्स को सुरक्षित रूप से संभालना |
| **रिज़र्व्ड (Unused / Literals)** | `goto`, `const` (आरक्षित हैं पर उपयोग नहीं होते), `true`, `false`, `null` (लिटेरल्स) | भविष्य के लिए आरक्षित |

---

## ⚙️ **JVM Execution Lifecycle (अंदरूनी प्रक्रिया)**

जब आप `java MyClass` चलाते हैं, तो JVM के अंदर निम्नलिखित 3 मुख्य चरण होते हैं:

```text
+-------------------------------------------------------------+
| 1. ClassLoader Subsystem                                    |
|    - Loading (Bootstrap, Extension, Application ClassLoader)|
|    - Linking (Verification, Preparation, Resolution)        |
|    - Initialization (Static variables & blocks)             |
+-------------------------------------------------------------+
                              |
                              v
+-------------------------------------------------------------+
| 2. Runtime Data Areas (JVM Memory)                          |
|    - Method Area (Class metadata, static vars)              |
|    - Heap Area (Objects & instance vars)                    |
|    - Stack Area (Method frames, local vars)                 |
|    - PC Registers & Native Method Stacks                    |
+-------------------------------------------------------------+
                              |
                              v
+-------------------------------------------------------------+
| 3. Execution Engine                                         |
|    - Interpreter (लाइन-दर-लाइन कोड पढ़ना)                   |
|    - JIT Compiler (Hotspots को मशीन कोड में बदलना)         |
|    - Garbage Collector (अप्रयुक्त मेमोरी को साफ़ करना)       |
+-------------------------------------------------------------+
```

---

## ⚠️ **Important Rules & Gotchas**
- ❌ **कीवर्ड्स का गलत उपयोग**: आप `int class = 10;` या `double for = 3.5;` नहीं लिख सकते। कंपाइलर तुरंत सिंटैक्स एरर देगा।
- ❌ **Case-Sensitivity**: Java में `main` और `Main` अलग-अलग हैं। `class` एक कीवर्ड है, लेकिन `Class` (कैपिटल C) एक प्री-बिल्ट जावा क्लास है।
- 💡 **`const` और `goto`**: ये C++ से आए कीवर्ड्स हैं जो Java में रिज़र्व तो हैं, लेकिन इस्तेमाल नहीं होते। Constant बनाने के लिए Java में `final` का उपयोग किया जाता है।

---

## 📌 **Quick Revision Summary**
- Java में 50+ Reserved Keywords हैं जो हमेशा लोअरकेस में लिखे जाते हैं।
- `final` कीवर्ड से कॉन्स्टेंट और अन-मॉडिफ़िएबल क्लासेस/मेथड्स बनते हैं।
- JVM का **JIT (Just-In-Time) Compiler** बार-बार चलने वाले कोड (Hotspots) को सीधे नेटिव मशीन कोड में बदलकर Java की स्पीड को C++ के करीब पहुंचा देता है।

---

## 🧭 **Navigation**
- **⬅️ पिछला चैप्टर**: [1.2 Java Installation & Environment Setup](./02-java-installation/)
- **अगला मॉड्यूल ➡️**: [Module 2: Java Syntax, Variables & Data Types](../module-02-syntax-and-data-types/)
