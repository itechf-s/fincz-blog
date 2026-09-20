---
title: "3.1 Conditional Statements (if-else & Switch)"
categories: [ Java, Course ]
tags: [Java, IfElse, Switch, ControlFlow]
description: "Java में if, if-else, else-if ladder, nested if और आधुनिक Switch Expressions का उपयोग।"
date: 2026-09-20T08:00:00+05:30
lastmod: 2026-09-20T08:00:00+05:30
images: ["images/2025/06/syntax-and-data-types.webp"]
author: ahmad
type: docs
---

## 🎯 **Lesson Objectives**
- प्रोग्राम में शर्तों (Conditions) के आधार पर कोड निष्पादित करना।
- `if`, `if-else`, `else-if` लैडर और नेस्टेड कंडीशन्स का व्यावहारिक उपयोग।
- पारंपरिक `switch-case` बनाम मॉडर्न **Java 14+ Enhanced Switch Expressions** (Arrow `->` Syntax)।

---

## 💡 **Real-Life Analogy**
जब आप ऑनलाइन शॉपिंग करते हैं, तो पेमेंट गेटवे पूछता है:
- "क्या कार्ड वैलिड है?" -> यदि हाँ, तो OTP भेजो।
- "क्या खाते में पर्याप्त बैलेंस है?" -> यदि नहीं, तो 'Insufficient Balance' दिखाओ।
- "क्या पेमेंट मोड UPI है, Card है, या NetBanking?" -> उपयुक्त स्क्रीन दिखाओ।
यही काम कोड में **Conditional Statements** करते हैं।

---

## ⚙️ **1. if-else and else-if Ladder**

```java
public class GradeCalculator {
    public static void main(String[] args) {
        int marks = 82;

        if (marks >= 90) {
            System.out.println("Grade: A+ (Outstanding)");
        } else if (marks >= 75) {
            System.out.println("Grade: A (Excellent)");
        } else if (marks >= 60) {
            System.out.println("Grade: B (First Class)");
        } else if (marks >= 40) {
            System.out.println("Grade: C (Pass)");
        } else {
            System.out.println("Grade: F (Fail)");
        }
    }
}
```

---

## ⚙️ **2. Modern Switch Expressions (Java 14+)**

पारंपरिक `switch` में बार-बार `break;` लगाना पड़ता था और `break` भूलने पर Fall-through बग आ जाता था। आधुनिक Java में **Arrow Syntax (`->`)** के साथ स्विच एक्सप्रेशन काफी सुंदर और सुरक्षित हो गया है:

```java
public class ModernSwitchDemo {
    public static void main(String[] args) {
        int dayNumber = 3;

        // Modern Switch Expression (वैल्यू भी रिटर्न कर सकता है)
        String dayName = switch (dayNumber) {
            case 1 -> "Monday";
            case 2 -> "Tuesday";
            case 3 -> "Wednesday";
            case 4 -> "Thursday";
            case 5 -> "Friday";
            case 6, 7 -> "Weekend (Saturday/Sunday)";
            default -> "Invalid Day Number";
        };

        System.out.println("Selected Day: " + dayName);
    }
}
```

---

## ⚠️ **Common Mistakes & Pro Tips**
- ❌ **`=` vs `==`**: `if (isAdmin = true)` असाइनमेंट ऑपरेटर है जो हमेशा `true` बना देगा। तुलना के लिए हमेशा `==` (Equality) का प्रयोग करें: `if (isAdmin == true)` या बेहतर `if (isAdmin)`.
- ❌ **Strings की तुलना में `==` का प्रयोग**: स्ट्रिंग्स को कभी `if (str == "Hello")` से न मापें। इसके लिए हमेशा `.equals()` का प्रयोग करें: `if (str.equals("Hello"))`.

---

## 📌 **Quick Revision Summary**
- रेंज आधारित तुलना के लिए `if-else` लैडर सबसे उपयुक्त है।
- फिक्स मानों (Discrete values) की तुलना के लिए `switch` तेज़ और साफ़ होता है।
- Modern Java में Arrow `->` सिंटैक्स के साथ `break` लिखने की ज़रूरत नहीं पड़ती।

---

## 🧭 **Navigation**
- **⬅️ पिछला मॉड्यूल**: [Module 2: Java Syntax, Variables & Data Types](../module-02-syntax-and-data-types/)
- **अगला चैप्टर ➡️**: [3.2 Loops & Iterations (for, while, do-while)](./02-loops-and-iterations/)
