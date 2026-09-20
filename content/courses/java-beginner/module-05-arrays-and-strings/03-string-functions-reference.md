---
title: "5.3 String Methods Cheat Sheet"
categories: [ Java, Course ]
tags: [Java, Strings, Methods, Reference]
description: "Java के टॉप 15+ स्ट्रिंग मेथड्स (length, charAt, substring, split, replace) का संदर्भ और कोड उदाहरण।"
date: 2026-09-20T08:00:00+05:30
lastmod: 2026-09-20T08:00:00+05:30
images: ["images/2025/06/arrays-and-strings.webp"]
author: ahmad
type: docs
---

## 📋 **Top Java String Methods Quick Reference**

| मेथड (Method) | क्या करता है (Purpose) | उदाहरण कोड | आउटपुट |
| :--- | :--- | :--- | :--- |
| `length()` | कुल अक्षरों की संख्या | `"Java".length()` | `4` |
| `charAt(int index)` | विशिष्ट इंडेक्स पर कैरेक्टर | `"Java".charAt(1)` | `'a'` |
| `toUpperCase()` | सभी अक्षरों को कैपिटल बनाना | `"java".toUpperCase()` | `"JAVA"` |
| `toLowerCase()` | सभी अक्षरों को स्मॉल बनाना | `"JAVA".toLowerCase()` | `"java"` |
| `substring(int start, int end)`| स्ट्रिंग का एक टुकड़ा निकालना | `"FinczLearn".substring(0, 5)` | `"Fincz"` |
| `contains(CharSequence s)` | चेक करना कि सबस्ट्रिंग मौजूद है | `"Hello".contains("ell")` | `true` |
| `startsWith(String prefix)` | शुरुआती शब्द चेक करना | `"Java".startsWith("Ja")` | `true` |
| `endsWith(String suffix)` | अंतिम शब्द चेक करना | `"report.pdf".endsWith(".pdf")` | `true` |
| `replace(oldChar, newChar)` | अक्षरों को बदलना | `"Java".replace('a', 'o')` | `"Jovo"` |
| `trim()` | शुरुआत और अंत के फालतू स्पेस हटाना | `"  hi  ".trim()` | `"hi"` |
| `split(String regex)` | डिलिमिटर के आधार पर एरे में तोड़ना | `"a,b,c".split(",")` | `["a", "b", "c"]` |
| `isEmpty()` | चेक करना कि स्ट्रिंग खाली है (`length == 0`) | `"".isEmpty()` | `true` |

---

## 💻 **प्रैक्टिकल कोड उदाहरण**

```java
public class StringMethodsInAction {
    public static void main(String[] args) {
        String email = "   support@fincz.com   ";
        
        // 1. क्लीनअप (Trim and Lowercase)
        String cleanEmail = email.trim().toLowerCase();
        System.out.println("Clean Email: " + cleanEmail);

        // 2. डोमेन अलग करना (Split)
        String[] parts = cleanEmail.split("@");
        System.out.println("Username: " + parts[0]);
        System.out.println("Domain: " + parts[1]);

        // 3. सबस्ट्रिंग
        if (cleanEmail.endsWith(".com")) {
            System.out.println("वैध .com डोमेन है।");
        }
    }
}
```

---

## 🧭 **Navigation**
- **⬅️ पिछला चैप्टर**: [5.2 Strings & String Constant Pool (SCP)](./02-strings-and-string-pool/)
- **अगला चैप्टर ➡️**: [5.4 Practice Assignment & Solutions](./04-practice-assignment/)
