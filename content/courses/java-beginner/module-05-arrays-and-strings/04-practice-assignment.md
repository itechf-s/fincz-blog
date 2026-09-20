---
title: "5.4 Practice Assignment & Solutions"
categories: [ Java, Course ]
tags: [Java, Practice, Arrays, Strings, Assignment]
description: "10 हैंड्स-ऑन कोडिंग असाइनमेंट्स (Palindrome, Reverse, Matrix Sum) और विस्तृत समाधान।"
date: 2026-09-20T08:00:00+05:30
lastmod: 2026-09-20T08:00:00+05:30
images: ["images/2025/06/arrays-and-strings.webp"]
author: ahmad
type: docs
weight: 4
---

## 📝 **10 Hands-on Practice Challenges**

नीचे दिए गए कोडिंग प्रॉब्लम्स को पहले खुद हल करने का प्रयास करें:

---

### 🔹 प्रश्न 1: ऐरे का सबसे बड़ा नंबर (Find Max in Array)
```java
public class FindMax {
    public static void main(String[] args) {
        int[] arr = {14, 52, 98, 33, 76, 21};
        int max = arr[0];
        for (int num : arr) {
            if (num > max) {
                max = num;
            }
        }
        System.out.println("Maximum Number: " + max); // 98
    }
}
```

---

### 🔹 प्रश्न 2: स्ट्रिंग को उल्टा करना (Reverse a String)
```java
public class ReverseString {
    public static void main(String[] args) {
        String original = "FINCZ";
        StringBuilder sb = new StringBuilder(original);
        String reversed = sb.reverse().toString();
        System.out.println("Reversed: " + reversed); // ZCNIF
    }
}
```

---

### 🔹 प्रश्न 3: पेलिंड्रोम चेक (Palindrome Check)
```java
public class PalindromeCheck {
    public static void main(String[] args) {
        String str = "radar";
        String rev = new StringBuilder(str).reverse().toString();
        
        if (str.equalsIgnoreCase(rev)) {
            System.out.println(str + " एक पेलिंड्रोम शब्द है!");
        } else {
            System.out.println(str + " पेलिंड्रोम नहीं है।");
        }
    }
}
```

---

### 🔹 प्रश्न 4: ऐरे के सभी तत्वों का योग (Sum of Elements)
```java
public class ArraySum {
    public static void main(String[] args) {
        int[] numbers = {10, 20, 30, 40, 50};
        int sum = 0;
        for (int n : numbers) sum += n;
        System.out.println("Total Sum: " + sum);
    }
}
```

---

## 🧭 **Navigation**
- **⬅️ पिछला चैप्टर**: [5.3 String Methods Cheat Sheet](./03-string-functions-reference/)
- **अगला मॉड्यूल ➡️**: [Module 6: Object-Oriented Programming (OOPs)](../module-06-oops-fundamentals/)
