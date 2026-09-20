---
title: "5.1 Arrays in Java (1D & 2D)"
categories: [ Java, Course ]
tags: [Java, Arrays, DataStructures, Matrix]
description: "1D और 2D ऐरे, इंडेक्सिंग, हीप मेमोरी एलोकेशन, और ArrayIndexOutOfBoundsException से बचाव।"
date: 2026-09-20T08:00:00+05:30
lastmod: 2026-09-20T08:00:00+05:30
images: ["images/2025/06/arrays-and-strings.webp"]
author: ahmad
type: docs
weight: 1
---

## 🎯 **Lesson Objectives**
- Array क्या है और मेमोरी में यह कैसे स्टोर होता है।
- 1D और 2D (Matrix) ऐरे बनाना और उन पर लूप्स चलाना।
- `ArrayIndexOutOfBoundsException` और `Arrays.toString()` का उपयोग।

---

## 💡 **Real-Life Analogy**
ऐरे को ट्रेन के एक डिब्बे में लगी **सीटों की कतार (Numbered Seats: 0, 1, 2, 3...)** समझिए। सभी सीटें एक ही प्रकार के यात्रियों के लिए हैं और उनका नंबर फिक्स है। आप सीट 0 से शुरू करके अंतिम सीट तक क्रमबद्ध तरीके से बैठ सकते हैं।

---

## ⚙️ **1. One-Dimensional Array (1D Array)**

```java
import java.util.Arrays;

public class Array1DDemo {
    public static void main(String[] args) {
        // तरीका 1: फिक्स साइज़ के साथ डिक्लेयर करना (हीप मेमोरी में 5 ब्लॉक बनेंगे)
        int[] scores = new int[5];
        scores[0] = 95;
        scores[1] = 88;
        scores[2] = 72;
        scores[3] = 90;
        scores[4] = 85;

        // तरीका 2: सीधे वैल्यूज के साथ इनिशियलाइज करना
        String[] fruits = {"Apple", "Mango", "Banana", "Orange"};

        // ऐरे को प्रिंट करना
        System.out.println("Fruits: " + Arrays.toString(fruits));

        // For-Each Loop से ट्रैवर्स करना
        int totalScore = 0;
        for (int s : scores) {
            totalScore += s;
        }
        System.out.println("औसत स्कोर: " + (double) totalScore / scores.length);
    }
}
```

---

## ⚙️ **2. Two-Dimensional Array (2D Matrix)**

```java
public class Array2DDemo {
    public static void main(String[] args) {
        // 2x3 मैट्रिक्स (2 पंक्तियाँ, 3 कॉलम)
        int[][] matrix = {
            {1, 2, 3},
            {4, 5, 6}
        };

        System.out.println("2D Matrix Elements:");
        for (int row = 0; row < matrix.length; row++) {
            for (int col = 0; col < matrix[row].length; col++) {
                System.out.print(matrix[row][col] + " ");
            }
            System.out.println(); // अगली पंक्ति के लिए
        }
    }
}
```

---

## ⚠️ **Common Gotchas**
- ❌ **0-based Indexing भूलना**: 5 साइज़ के ऐरे में अंतिम इंडेक्स `4` होता है। `scores[5]` एक्सेस करने पर Java तुरंत `ArrayIndexOutOfBoundsException` फेंकता है।
- ❌ **फिक्स साइज़**: ऐरे का साइज़ एक बार बनने के बाद बदला नहीं जा सकता। डायनामिक साइज़ के लिए हम `ArrayList` का प्रयोग करते हैं।

---

## 📌 **Quick Revision Summary**
- ऐरे एक ही डेटा टाइप के कई एलिमेंट्स को कंटीन्यूअस मेमोरी ब्लॉक्स में स्टोर करता है।
- ऐरे की लंबाई जानने के लिए `.length` प्रॉपर्टी का उपयोग करें।
- ऐरे को कंसोल पर आसानी से देखने के लिए `Arrays.toString(arr)` का उपयोग करें।

---

## 🧭 **Navigation**
- **⬅️ पिछला मॉड्यूल**: [Module 4: Functions & Methods](../module-04-functions-and-methods/)
- **अगला चैप्टर ➡️**: [5.2 Strings & String Constant Pool (SCP)](./02-strings-and-string-pool/)
