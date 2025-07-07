---
title: "1.1 Introduction"
categories: [ Java, Course]
tags: [Basic]
description: "Introduction: Java का परिचय और सेटअप"
date: 2025-06-01T07:00:59+05:30
images: ["images/2025/06/introduction.webp"]
author: ahmad
type: docs
---

## 🎓 **Module 1: Java का परिचय और सेटअप**

| 🎥 वीडियो | विषय                                    | अनुमानित अवधि |
| --------- | --------------------------------------- | ------------- |
| 1         | Java क्या है और इसका इतिहास             | 10 मिनट       |
| 2         | Java की विशेषताएँ (Features)            | 10 मिनट       |
| 3         | Java कैसे काम करता है – JDK, JRE, JVM   | 12 मिनट       |
| 4         | Java का Installation (Windows/Linux)    | 10 मिनट       |
| 5         | पहला Java प्रोग्राम – Hello, World!     | 10 मिनट       |
| 6         | Java प्रोग्राम कैसे Compile और Run करें | 8 मिनट        |

---

### 🎥 वीडियो 1: Java क्या है और इसका इतिहास

#### 📜 विवरण:

* Java एक **high-level, object-oriented programming language** है।
* इसे **James Gosling** और उनकी टीम ने 1991 में Sun Microsystems में बनाया था।
* पहले इसका नाम Oak था, बाद में Java रखा गया।
* 1995 में Java को public में launch किया गया और अब इसे Oracle Corporation maintain करती है।

#### 🧠 क्यों Java सीखे?

* यह **platform independent** है – यानी एक बार कोड लिखा, हर जगह चलेगा (WORA).
* यह secure है – memory management और runtime checks इसे crash-proof बनाते हैं।
* Android apps का base Java है।
* बड़े-बड़े companies (Google, Amazon, Infosys, TCS आदि) Java developers hire करती हैं।

---

### 🎥 वीडियो 2: Java की विशेषताएँ (Key Features of Java)

#### ⭐ मुख्य विशेषताएँ:

| विशेषता              | विवरण                                                         |
| -------------------- | ------------------------------------------------------------- |
| Simple               | Java का syntax C/C++ से आसान और direct है                     |
| Object-Oriented      | सब कुछ class और object के रूप में होता है                     |
| Platform Independent | bytecode किसी भी OS पर JVM से चल सकता है                      |
| Secure               | Java में pointers नहीं होते और memory safe रहती है            |
| Robust               | Garbage collection और exception handling इसे मज़बूत बनाते हैं |
| Multithreaded        | एक साथ multiple tasks करने की सुविधा                          |
| Portable             | Code को कहीं भी deploy किया जा सकता है                        |
| High Performance     | JIT compiler की वजह से तेज़                                   |

---

### 🎥 वीडियो 3: Java कैसे काम करता है – JDK, JRE, JVM

#### 🧱 Architecture Diagram:

```
[Your Java Code (.java)] 
   ↓ javac (Java Compiler)
[Bytecode (.class file)]
   ↓ JVM (Java Virtual Machine)
[Output on any OS]
```

#### 🔍 तीन मुख्य भाग:

* **JDK (Java Development Kit)**
  ➤ इसमें compiler (`javac`), debugger, documentation tools होते हैं।
  ➤ developers JDK का use करके code लिखते और compile करते हैं।

* **JRE (Java Runtime Environment)**
  ➤ इसमें libraries और JVM शामिल होता है।
  ➤ यह सिर्फ compiled bytecode को run करता है — सिर्फ execution के लिए उपयोग होता है।

* **JVM (Java Virtual Machine)**
  ➤ यह `.class` फाइल (bytecode) को machine-specific instructions में बदलता है और execute करता है।
  ➤ यही Java को **platform independent** बनाता है।

---

### 🎥 वीडियो 4: Java का Installation (Windows और Linux)

#### 🔧 Windows Steps:

1. Oracle वेबसाइट से JDK डाउनलोड करें –
   🔗 [https://www.oracle.com/java/technologies/javase-downloads.html](https://www.oracle.com/java/technologies/javase-downloads.html)
2. `.exe` installer को run करें और install करें।
3. Environment Variable सेट करें:

   * `JAVA_HOME` = C:\Program Files\Java\jdk-21
   * PATH में: `%JAVA_HOME%\bin`

#### 🐧 Linux (Ubuntu) Steps:

```bash
sudo apt update
sudo apt install openjdk-21-jdk
java -version
javac -version
```

---

### 🎥 वीडियो 5: पहला Java प्रोग्राम – Hello, World!

#### 🧑‍💻 कोड:

```java
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}
```

#### 📚 कोड का व्याख्या:

* `public class HelloWorld` → यह एक class है जिसका नाम HelloWorld है। Java में सब कुछ class के अंदर होता है।
* `public static void main(String[] args)` → यह program का entry point है।
* `System.out.println()` → यह console पर output दिखाने के लिए use होता है।

#### 🖥 Output:

```
Hello, World!
```

---

### 🎥 वीडियो 6: Java प्रोग्राम को Compile और Run कैसे करें

#### 🧑‍💻 स्टेप्स (Command Line से):

1. फ़ाइल सेव करें: `HelloWorld.java`
2. Compile करें:

   ```bash
   javac HelloWorld.java
   ```

   → यह `HelloWorld.class` नाम की bytecode फ़ाइल बनाएगा।
3. Run करें:

   ```bash
   java HelloWorld
   ```
4. Output:

   ```
   Hello, World!
   ```

---

## 🧪 Module 1 – अभ्यास और क्विज़

### ✅ Exercise:

1. एक प्रोग्राम लिखें जो `"Welcome to Java Course!"` प्रिंट करे।
2. अपने system में `javac` और `java` commands को terminal में चला कर versions verify करें।

### ✅ Quiz:

1. Java किस वर्ष launch हुआ था?
2. JDK, JRE, और JVM में क्या अंतर है?
3. Java secure क्यों मानी जाती है?
4. Java का पहला प्रोग्राम कौन सा होता है?
5. WORA का क्या मतलब है?


**WORA** का मतलब है **"Write Once, Run Anywhere"** — यानी:

> **"एक बार कोड लिखो, और उसे कहीं भी चला सकते हो।"**

### यह Java का सबसे बड़ा फायदा है।

जब आप Java में कोई प्रोग्राम लिखते हैं और उसे compile करते हैं, तो Java compiler उस कोड को **bytecode** में बदल देता है। यह bytecode किसी specific operating system के लिए नहीं होता — बल्कि ये **JVM (Java Virtual Machine)** पर चलता है।

### उदाहरण:

* आपने Windows पर Java कोड लिखा और compile किया।
* अब उसी `.class` bytecode फाइल को आप:

  * Linux
  * macOS
  * या किसी और system पर भी चला सकते हैं — **अगर वहां JVM install है।**

इसलिए Java को **platform-independent** language कहा जाता है — और यही है **WORA** का core concept.

**📌 WORA = Java Code ➡ Compile ➡ Bytecode ➡ JVM ➡ Run on Any OS**

---

## 📄 Extra Material (For Download):

* PDF Notes (Module 1 Summary)
* Installation Guide (PDF & Video)
* Java Keywords Chart
