---
title: "1.2 Java Installation & Environment Setup"
categories: [ Java, Course ]
tags: [Java, Installation, JDK21, EnvironmentVariables]
description: "Windows, Linux और macOS पर OpenJDK / Oracle JDK 21 सेटअप और IDE कॉन्फ़िगरेशन गाइड।"
date: 2026-09-20T08:00:00+05:30
lastmod: 2026-09-20T08:00:00+05:30
images: ["images/2025/06/introduction.webp"]
author: ahmad
type: docs
---

## 🎯 **Lesson Objectives**
- अपने ऑपरेटिंग सिस्टम (Windows / Linux / macOS) पर आधुनिक **JDK 21 (LTS)** इंस्टॉल करना।
- `JAVA_HOME` और `PATH` एनवायरनमेंट वेरिएबल्स को सही तरीके से सेट करना।
- VS Code या IntelliJ IDEA जैसे प्रोफेशनल कोड एडिटर्स को Java के लिए कॉन्फ़िगर करना।

---

## 💡 **Real-Life Analogy**
जब आप नया गैजेट या किचन उपकरण लाते हैं, तो सबसे पहले उसे बिजली के सही सॉकेट से जोड़ना होता है और उसके टूल्स को अपनी पहुँच में रखना होता है। वैसे ही, कंप्यूटर के ऑपरेटिंग सिस्टम को बताना पड़ता है कि Java के टूल्स (जैसे `javac`) किस फ़ोल्डर में रखे हैं, ताकि आप किसी भी फ़ोल्डर से टर्मिनल में Java कमांड्स चला सकें। इसे ही **PATH Variable** सेट करना कहते हैं।

---

## 🔧 **1. Windows पर JDK 21 इंस्टॉलेशन**

### स्टेप 1: JDK 21 डाउनलोड करें
- आधिकारिक वेबसाइट [Oracle JDK Downloads](https://www.oracle.com/java/technologies/javase-downloads.html) या [Adoptium Eclipse Temurin](https://adoptium.net/) पर जाएं।
- **Windows x64 Installer** (`.exe` या `.msi`) डाउनलोड करें।

### स्टेप 2: इंस्टॉलर चलाएं
- डाउनलोड की गई फ़ाइल को चलाएं और डिफ़ॉल्ट पाथ (उदा. `C:\Program Files\Eclipse Adoptium\jdk-21.x.x-hotspot\` या `C:\Program Files\Java\jdk-21`) पर इंस्टॉल करें।

### स्टेप 3: `JAVA_HOME` और `PATH` सेट करें
1. Start Menu में **"Environment Variables"** सर्च करें और खोलें।
2. **System Variables** सेक्शन में **New** पर क्लिक करें:
   - **Variable name**: `JAVA_HOME`
   - **Variable value**: `C:\Program Files\Java\jdk-21` (आपका JDK इंस्टॉलेशन पाथ)
3. System Variables में **Path** चुनें और **Edit** पर क्लिक करें:
   - **New** दबाएं और लिखें: `%JAVA_HOME%\bin`
4. **OK** दबाकर सेटिंग्स सेव करें।

---

## 🐧 **2. Linux (Ubuntu / Debian) पर इंस्टॉलेशन**

टर्मिनल खोलें और नीचे दिए गए कमांड्स चलाएं:

```bash
# 1. पैकेज लिस्ट अपडेट करें
sudo apt update

# 2. OpenJDK 21 इंस्टॉल करें
sudo apt install -y openjdk-21-jdk

# 3. इन्स्टॉलेशन पाथ चेक करें
which java
```

अगर आपको मैन्युअली `JAVA_HOME` सेट करना हो, तो अपनी `~/.bashrc` या `~/.zshrc` में जोड़ें:
```bash
export JAVA_HOME=/usr/lib/jvm/java-21-openjdk-amd64
export PATH=$JAVA_HOME/bin:$PATH
```
इसके बाद `source ~/.bashrc` चलाएं।

---

## 🍎 **3. macOS पर इंस्टॉलेशन (Homebrew)**

```bash
# Homebrew की मदद से OpenJDK 21 इंस्टॉल करें
brew install openjdk@21

# सिम्बॉलिक लिंक बनाएं
sudo ln -sfn /opt/homebrew/opt/openjdk@21/libexec/openjdk.jdk /Library/Java/JavaVirtualMachines/openjdk-21.jdk
```

---

## ✅ **4. इन्स्टॉलेशन की जांच (Verification)**

एक नया टर्मिनल / Command Prompt विंडो खोलें और चलाएं:

```bash
java -version
javac -version
```

**अपेक्षित आउटपुट (Expected Output):**
```text
openjdk version "21.0.x" 2024-xx-xx
OpenJDK Runtime Environment (build 21.0.x+xx)
OpenJDK 64-Bit Server VM (build 21.0.x+xx, mixed mode, sharing)
```

---

## 💻 **5. Recommended Code Editor (IDE)**
- **IntelliJ IDEA Community Edition (अनुशंसित / Recommended)**: Java डेवलपमेंट के लिए दुनिया का सबसे बेहतरीन और इंटेलिजेंट टूल।
- **VS Code**: अगर आप हल्का एडिटर चाहते हैं, तो VS Code में **"Extension Pack for Java" (by Microsoft)** इंस्टॉल करें।

---

## ⚠️ **Common Gotchas**
- ⚠️ **पुराना टर्मिनल खुला रहना**: एनवायरनमेंट वेरिएबल बदलने के बाद पहले से खुला Command Prompt / Terminal बंद करके दोबारा खोलना ज़रूरी होता है।
- ⚠️ **JRE vs JDK**: सिर्फ JRE इंस्टॉल करने पर `java` कमांड तो काम करेगा, लेकिन `javac` (Compiler) गायब रहेगा। हमेशा **JDK** ही इंस्टॉल करें।

---

## 📌 **Quick Revision Summary**
- **JDK 21 (LTS)** लॉन्ग-टर्म सपोर्टेड मॉडर्न Java वर्शन है।
- `JAVA_HOME` मुख्य JDK फ़ोल्डर को पॉइंट करता है, और `%JAVA_HOME%/bin` बाइनरी टूल्स को ग्लोबल पाथ में जोड़ता है।
- `javac -version` से कंपाइलर की मौजूदगी सुनिश्चित होती है।

---

## 🧭 **Navigation**
- **⬅️ पिछला चैप्टर**: [1.1 Java का परिचय और आर्किटेक्चर](./01-introduction-to-java/)
- **अगला चैप्टर ➡️**: [1.3 Java Keywords & Compilation Lifecycle](./03-keywords-and-architecture/)
