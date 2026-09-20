---
title: "3.2 Loops & Iterations (for, while, do-while)"
categories: [ Java, Course ]
tags: [Java, Loops, Iteration, ForLoop, WhileLoop]
description: "Java में for, while, do-while और for-each लूप्स का विस्तृत उपयोग और सही चयन।"
date: 2026-09-20T08:00:00+05:30
lastmod: 2026-09-20T08:00:00+05:30
images: ["images/2025/06/syntax-and-data-types.webp"]
author: ahmad
type: docs
---

## 🎯 **Lesson Objectives**
- लूप्स (Loops) की आवश्यकता और उनके प्रकार समझना।
- `for`, `while`, `do-while` के बीच का मुख्य अंतर जानना।
- कब कौन सा लूप इस्तेमाल करना चाहिए, इसका निर्णय लेना।
- इनफिनिट लूप्स (Infinite Loops) से बचाव करना।

---

## 💡 **Real-Life Analogy**
- **for Loop**: अगर आपको पता है कि मैदान के ठीक **5 चक्कर** लगाने हैं (फिक्स काउंट)।
- **while Loop**: जब तक बारिश हो रही है, तब तक छाता खोलकर रखो (शर्त जब तक सच है, पता नहीं कितनी देर)।
- **do-while Loop**: रेस्टोरेंट में पहले एक बार खाना खाया, फिर पूछा "क्या और ऑर्डर करना है?" (कम से कम एक बार काम ज़रूर होगा)।

---

## ⚙️ **1. For Loop (निश्चित पुनरावृत्ति के लिए)**

```java
public class ForLoopDemo {
    public static void main(String[] args) {
        // 1 से 5 तक की गिनती प्रिंट करना
        for (int i = 1; i <= 5; i++) {
            System.out.println("Count: " + i);
        }
    }
}
```

---

## ⚙️ **2. While Loop (शर्त-आधारित पुनरावृत्ति के लिए)**

```java
public class WhileLoopDemo {
    public static void main(String[] args) {
        int batteryPercentage = 100;

        // जब तक बैटरी 20% से ज्यादा है
        while (batteryPercentage > 20) {
            System.out.println("Battery OK: " + batteryPercentage + "%");
            batteryPercentage -= 20; // बैटरी कम हो रही है
        }
        System.out.println("Low Battery Warning! Connect Charger.");
    }
}
```

---

## ⚙️ **3. Do-While Loop (Exit-Controlled)**

`do-while` लूप की खास बात यह है कि इसका कंडीशन चेक लूप के अंत में होता है। इसलिए कंडीशन `false` होने पर भी यह **कम से कम 1 बार** ज़रूर चलता है:

```java
public class DoWhileDemo {
    public static void main(String[] args) {
        int attempts = 0;

        do {
            System.out.println("OTP भेजा गया (Attempt " + (attempts + 1) + ")");
            attempts++;
        } while (attempts < 1); // शर्त तुरंत false हो जाएगी, फिर भी 1 बार चला
    }
}
```

---

## 📋 **तुलनात्मक चार्ट (Comparison Table)**

| लूप प्रकार | चेक का समय | कब इस्तेमाल करें | न्यूनतम चलने की संख्या |
| :--- | :--- | :--- | :--- |
| **for** | एंट्री पर (Entry-Controlled) | जब पुनरावृत्ति की संख्या पहले से पता हो | 0 बार |
| **while** | एंट्री पर (Entry-Controlled) | जब सिर्फ शर्त पता हो, संख्या नहीं | 0 बार |
| **do-while** | एग्जिट पर (Exit-Controlled) | जब कोड को कम से कम 1 बार चलाना आवश्यक हो | 1 बार |

---

## ⚠️ **Common Mistakes**
- ❌ **इनफिनिट लूप (Loop Variable न बढ़ाना)**: अगर आप `while(i < 5)` में `i++` करना भूल जाएं, तो प्रोग्राम हमेशा के लिए लटक जाएगा और CPU 100% हो जाएगा।
- ❌ **Off-by-One Error**: `i < 5` (0 से 4 तक = 5 बार) और `i <= 5` (0 से 5 तक = 6 बार) में ध्यान रखें।

---

## 📌 **Quick Revision Summary**
- फिक्स संख्या के लिए `for` लूप सबसे साफ़ सिंटैक्स प्रदान करता है।
- डायनामिक कंडीशन के लिए `while` लूप श्रेष्ठ है।
- मेनू ड्रिवन प्रोग्राम्स में `do-while` लूप का उपयोग होता है।

---

## 🧭 **Navigation**
- **⬅️ पिछला चैप्टर**: [3.1 Conditional Statements (if-else & Switch)](./01-conditional-statements/)
- **अगला चैप्टर ➡️**: [3.3 Jump Statements & Control Flowchart](./03-jump-statements-and-flowcharts/)
