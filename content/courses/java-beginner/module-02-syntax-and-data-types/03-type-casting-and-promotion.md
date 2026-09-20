---
title: "2.3 Type Casting & Type Promotion"
categories: [ Java, Course ]
tags: [Java, TypeCasting, TypePromotion, Conversion]
description: "Implicit Widening vs Explicit Narrowing Type Casting, और एक्सप्रेशन में Type Promotion के नियम।"
date: 2026-09-20T08:00:00+05:30
lastmod: 2026-09-20T08:00:00+05:30
images: ["images/2025/06/syntax-and-data-types.webp"]
author: ahmad
type: docs
---

## 🎯 **Lesson Objectives**
- **Type Conversion** क्या है और यह कब आवश्यक होता है।
- **Widening (Implicit) Casting** vs **Narrowing (Explicit) Casting** का अंतर।
- गणितीय ऑपरेशन्स में **Type Promotion** के नियम और डेटा लॉस (Data Loss) से बचाव।

---

## 💡 **Real-Life Analogy**
- **Widening (छोटा ➔ बड़ा)**: 1 लीटर पानी को 5 लीटर की बाल्टी में डालना। इसमें पानी का एक भी कतरा बाहर नहीं गिरेगा (सुरक्षित और ऑटोमैटिक)।
- **Narrowing (बड़ा ➔ छोटा)**: 5 लीटर पानी को 1 लीटर के जग में जबरदस्ती डालना। 4 लीटर पानी बाहर बह जाएगा (Data Loss)। इसलिए Java आपसे पुष्टि मांगता है कि आप जानबूझकर ऐसा कर रहे हैं।

---

## ⚙️ **1. Widening Casting (Implicit / Automatic)**

जब छोटे डेटा टाइप को बड़े डेटा टाइप में बदला जाता है, तो कंपाइलर इसे अपने-आप सुरक्षित रूप से कर देता है:

```text
byte -> short -> int -> long -> float -> double
```

```java
int smallNumber = 100;
double largeContainer = smallNumber; // ऑटोमैटिक कन्वर्जन (Widening)

System.out.println(smallNumber);    // 100
System.out.println(largeContainer); // 100.0
```

---

## ⚙️ **2. Narrowing Casting (Explicit / Manual)**

जब बड़े डेटा टाइप को छोटे डेटा टाइप में बदलना हो, तो हमें **कास्ट ऑपरेटर `(targetType)`** लगाना पड़ता है:

```java
double originalPrice = 99.85;
int roundPrice = (int) originalPrice; // मैनुअल कास्टिंग (दशमलव का हिस्सा हट जाएगा)

System.out.println("Original: " + originalPrice); // 99.85
System.out.println("Rounded: " + roundPrice);     // 99 (Data loss!)
```

### ⚠️ Overflow / Wrap-around Example:
```java
int largeVal = 130;
byte b = (byte) largeVal; // byte की रेंज -128 से 127 तक है
System.out.println(b);    // आउटपुट: -126 (Overflow wrap-around!)
```

---

## ⚙️ **3. Type Promotion in Expressions**

Java में गणितीय गणनाओं के दौरान:
1. सभी `byte`, `short`, और `char` वैल्यूज ऑटोमैटिकली `int` में प्रमोट हो जाती हैं।
2. यदि एक्सप्रेशन में कोई `long`, `float`, या `double` मौजूद है, तो पूरा एक्सप्रेशन क्रमशः सबसे बड़े टाइप में प्रमोट हो जाता है।

```java
byte num1 = 40;
byte num2 = 50;
// byte result = num1 + num2; // ❌ Compilation Error! (num1 + num2 का रिजल्ट int बन चुका है)
int result = num1 + num2;     // ✅ सही तरीका
```

---

## 📝 **Practice Challenge**
नीचे दिए गए कोड का आउटपुट बिना चलाए सोचें:
```java
int a = 10;
int b = 4;
double division = a / b;
System.out.println("Result: " + division);
```
*(उत्तर: `2.0` होगा क्योंकि `10 / 4` पहले इंटीजर डिवीजन करके `2` देता है, फिर वह `double` में प्रमोट होकर `2.0` बनता है। सही दशमलव रिजल्ट के लिए `(double) a / b` लिखना चाहिए जो `2.5` देगा।)*

---

## 📌 **Quick Revision Summary**
- छोटे से बड़े टाइप में जाना **Widening** (सुरक्षित व स्वचालित) कहलाता है।
- बड़े से छोटे टाइप में जाना **Narrowing** (मैनुअल कास्टिंग) कहलाता है।
- एक्सप्रेशन में हमेशा सबसे बड़े ऑपरेंड के अनुसार टाइप प्रमोशन होता है।

---

## 🧭 **Navigation**
- **⬅️ पिछला चैप्टर**: [2.2 Variables & 8 Primitive Data Types](./02-variables-and-data-types/)
- **अगला चैप्टर ➡️**: [2.4 User Input using Scanner Class](./04-user-input-scanner/)
