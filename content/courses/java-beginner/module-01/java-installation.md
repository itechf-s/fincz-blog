---
title: "1.2 Installation Guide"
categories: [ Java, Course]
tags: [Basic]
description: "Java Installation Guide"
date: 2025-06-01T07:00:58+05:30
author: ahmad
type: docs
---

# 🎓 **Module 1: Java का परिचय और सेटअप**

## 📘 **Java Installation Guide – Windows और Linux के लिए**

## 🔧 Windows Installation Guide (JDK 21 के लिए)

### स्टेप 1: Oracle वेबसाइट से JDK डाउनलोड करें

* साइट खोलें: [https://www.oracle.com/java/technologies/javase-downloads.html](https://www.oracle.com/java/technologies/javase-downloads.html)
* Java SE Development Kit 21 (या latest version) को Windows x64 Installer के रूप में डाउनलोड करें।

### स्टेप 2: JDK को इंस्टॉल करें

* `.exe` फाइल को डबल क्लिक करें और Default settings के साथ Installation पूरा करें।
* ध्यान दें: Installation path आमतौर पर होता है:
  `C:\Program Files\Java\jdk-21`

### स्टेप 3: Environment Variables सेट करें

1. **JAVA\_HOME** Variable बनाएँ:

   * Control Panel → System → Advanced system settings → Environment Variables
   * नया variable बनाएँ:
     Name: `JAVA_HOME`
     Value: `C:\Program Files\Java\jdk-21`

2. **PATH** Variable में जोड़ें:

   * PATH को edit करें और ये जोड़ें:
     `%JAVA_HOME%\bin`

### स्टेप 4: Installation Verify करें

Command Prompt (cmd) खोलें और नीचे दिए गए कमांड चलाएँ:

```bash
java -version
javac -version
```

✅ Output में Java version दिखेगा, जैसे:

```
java version "21.0.1"  
javac 21.0.1
```

---

## 🐧 Ubuntu (Linux) Installation Guide

### स्टेप 1: Terminal खोलें और नीचे दिए गए commands चलाएँ:

```bash
sudo apt update
sudo apt install openjdk-21-jdk
```

### स्टेप 2: Installation Verify करें

```bash
java -version
javac -version
```

✅ Output में Java version कुछ इस प्रकार दिखेगा:

```
openjdk version "21.0.1"  
OpenJDK Runtime Environment  
OpenJDK 64-Bit Server VM
```

---

## 🎯 अब आप Java Code लिखने और चलाने के लिए पूरी तरह तैयार हैं!
