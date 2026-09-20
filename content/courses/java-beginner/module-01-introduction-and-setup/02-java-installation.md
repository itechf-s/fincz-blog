---
title: "1.2 Java Installation & Environment Setup (Latest LTS)"
categories: [ Java, Course ]
tags: [Java, Installation, JavaLTS, JDK25, JDK21, EnvironmentVariables]
description: "Windows, Linux और macOS पर Latest Java LTS (Java 25 / 21) सेटअप, JAVA_HOME और IDE कॉन्फ़िगरेशन गाइड।"
date: 2026-09-20T08:00:00+05:30
lastmod: 2026-09-20T08:00:00+05:30
images: ["images/2025/06/introduction.webp"]
author: ahmad
type: docs
weight: 2
---

## 🎯 **Lesson Objectives**
- अपने कंप्यूटर पर **Latest Java LTS (Long-Term Support - जैसे Java 25 / 21 LTS)** इंस्टॉल करना।
- यह समझना कि प्रोडक्शन प्रोजेक्ट्स और कोडिंग के लिए हमेशा **LTS वर्शन** ही क्यों चुनना चाहिए।
- `JAVA_HOME` और `PATH` एनवायरनमेंट वेरिएबल्स को सही तरीके से सेट करना।
- VS Code या IntelliJ IDEA जैसे प्रोफेशनल कोड एडिटर्स को Java के लिए तैयार करना।

---

## 💡 **Real-Life Analogy**
जब आप नया फोन या ऑपरेटिंग सिस्टम खरीदते हैं, तो आप "Beta" या "Experimental" वर्शन के बजाय सबसे स्थिर और लंबे समय तक सपोर्ट मिलने वाले (Long-Term Stable) वर्शन को चुनते हैं ताकि कोई अचानक बग न आए। Java की दुनिया में भी Oracle और OpenJDK हर 2 साल में एक **LTS (Long Term Support)** वर्शन रिलीज़ करते हैं, जिसे 5 से 8 साल तक सुरक्षा और परफ़ॉर्मेंस अपडेट्स मिलते हैं।

---

## 🌟 **💡 प्रो-टिप: हमेशा Latest LTS वर्शन ही क्यों चुनें? (LTS Recommendation)**

> [!IMPORTANT]
> **Production & Learning Best Practice:**
> 1. **Stability & Security:** नॉन-एलटीएस (Non-LTS) वर्शन्स सिर्फ 6 महीने तक सपोर्ट होते हैं, जबकि **LTS (जैसे Java 25 LTS / Java 21 LTS)** को सालों तक सिक्योरिटी पैच और स्थिरता मिलती है।
> 2. **Industry Standard:** Google, Amazon, Netflix और बड़े बैंकिंग सिस्टम्स हमेशा लेटेस्ट **LTS वर्शन्स** पर ही अपने बैकएंड सिस्टम्स चलाते हैं।
> 3. **Latest Features:** Java के आधुनिक फीचर्स (Virtual Threads, Pattern Matching, Record Patterns, Sequenced Collections, Fast Garbage Collectors) आपको लेटेस्ट LTS में पूरी स्थिरता के साथ मिलते हैं।

---

## 🔧 **1. Windows पर Latest Java LTS इंस्टॉलेशन**

### स्टेप 1: JDK LTS डाउनलोड करें
- आधिकारिक वेबसाइट [Oracle JDK Downloads](https://www.oracle.com/java/technologies/javase-downloads.html) या [Adoptium Eclipse Temurin](https://adoptium.net/) पर जाएं।
- **Latest LTS Version (Java 25 / 21)** के लिए **Windows x64 Installer** (`.exe` / `.msi`) डाउनलोड करें।

### स्टेप 2: इंस्टॉलर चलाएं
- डाउनलोड की गई फ़ाइल को चलाएं और डिफ़ॉल्ट पाथ पर इंस्टॉल करें:
  - उदा. `C:\Program Files\Java\jdk-25` (या `jdk-21`)

### स्टेप 3: `JAVA_HOME` और `PATH` सेट करें
1. Windows Start Menu में **"Environment Variables"** सर्च करें और खोलें।
2. **System Variables** सेक्शन में **New** पर क्लिक करें:
   - **Variable name**: `JAVA_HOME`
   - **Variable value**: `C:\Program Files\Java\jdk-25` (आपका इंस्टॉल्ड JDK पाथ)
3. System Variables में **Path** चुनें और **Edit** पर क्लिक करें:
   - **New** दबाएं और लिखें: `%JAVA_HOME%\bin`
4. **OK** दबाकर सेटिंग्स सुरक्षित (Save) करें।

---

## 🐧 **2. Linux (Ubuntu / Debian) पर इंस्टॉलेशन**

टर्मिनल खोलें और नीचे दिए गए कमांड्स चलाएं:

```bash
# 1. पैकेज लिस्ट अपडेट करें
sudo apt update

# 2. Latest OpenJDK LTS इंस्टॉल करें (जैसे OpenJDK 25 / 21)
sudo apt install -y openjdk-25-jdk || sudo apt install -y openjdk-21-jdk

# 3. इन्स्टॉलेशन पाथ चेक करें
which java
```

यदि आपको मैन्युअली `JAVA_HOME` सेट करना हो, तो अपनी `~/.bashrc` या `~/.zshrc` फ़ाइल में जोड़ें:
```bash
export JAVA_HOME=$(dirname $(dirname $(readlink -f $(which javac))))
export PATH=$JAVA_HOME/bin:$PATH
```
इसके बाद `source ~/.bashrc` चलाएं।

---

## 🍎 **3. macOS पर इंस्टॉलेशन (Homebrew)**

```bash
# Homebrew की मदद से Latest OpenJDK LTS इंस्टॉल करें
brew install openjdk@25 || brew install openjdk@21

# सिम्बॉलिक लिंक बनाएं
sudo ln -sfn /opt/homebrew/opt/openjdk/libexec/openjdk.jdk /Library/Java/JavaVirtualMachines/openjdk.jdk
```

---

## ✅ **4. इन्स्टॉलेशन की जांच (Verification)**

एक नया टर्मिनल / Command Prompt विंडो खोलें और वर्जन चेक करें:

```bash
java -version
javac -version
```

**अपेक्षित आउटपुट (Expected Output):**
```text
openjdk version "25.0.x" (or "21.0.x") LTS
OpenJDK Runtime Environment (build 25.0.x+xx)
OpenJDK 64-Bit Server VM (build 25.0.x+xx, mixed mode, sharing)
```

---

## 💻 **5. Recommended Code Editor (IDE)**
- **IntelliJ IDEA Community Edition (सर्वाधिक अनुशंसित / Strongly Recommended)**: Java डेवलपमेंट के लिए दुनिया का सबसे बेहतरीन और इंटेलिजेंट IDE।
- **VS Code**: अगर आप हल्का एडिटर चाहते हैं, तो VS Code में **"Extension Pack for Java" (by Microsoft)** इंस्टॉल करें।

---

## ⚠️ **Common Gotchas**
- ⚠️ **पुराना टर्मिनल खुला रहना**: एनवायरनमेंट वेरिएबल सेट करने के बाद पहले से खुला Command Prompt / Terminal बंद करके दोबारा खोलना ज़रूरी होता है।
- ⚠️ **JRE vs JDK**: सिर्फ JRE इंस्टॉल करने पर `javac` (Compiler) गायब रहेगा। हमेशा पूरा **JDK (Java Development Kit)** ही इंस्टॉल करें।

---

## 📌 **Quick Revision Summary**
- हमेशा **Latest Java LTS (जैसे Java 25 / 21 LTS)** का उपयोग करें।
- `JAVA_HOME` मुख्य JDK फ़ोल्डर को इंगित करता है, और `%JAVA_HOME%/bin` बाइनरी टूल्स को ग्लोबल पाथ में जोड़ता है।
- `javac -version` से सुनिश्चित करें कि कंपाइलर सफलतापूर्वक काम कर रहा है।

---

## 🧭 **Navigation**
- **⬅️ पिछला चैप्टर**: [1.1 Java का परिचय और आर्किटेक्चर](./01-introduction-to-java/)
- **अगला चैप्टर ➡️**: [1.3 Java Keywords & Compilation Lifecycle](./03-keywords-and-architecture/)
