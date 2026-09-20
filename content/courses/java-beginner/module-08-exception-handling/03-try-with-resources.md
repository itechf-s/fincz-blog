---
title: "8.3 Try-with-Resources (AutoCloseable)"
categories: [ Java, Course ]
tags: [Java, TryWithResources, AutoCloseable, MemoryLeak]
description: "Automatic Resource Management (ARM), AutoCloseable इंटरफ़ेस, और मेमोरी लीक्स से सुरक्षा।"
date: 2026-09-20T08:00:00+05:30
lastmod: 2026-09-20T08:00:00+05:30
images: ["images/2025/06/exception-handling.webp"]
author: ahmad
type: docs
weight: 3
---

## 🎯 **Lesson Objectives**
- पारम्परिक `finally` में रिसोर्स क्लोज करने की समस्याएं।
- Java 7 में आए **Try-with-Resources** की शक्ति।
- `java.lang.AutoCloseable` इंटरफ़ेस कैसे काम करता है।

---

## ⚙️ **Code Comparison**

### ❌ पुराना लंबा तरीका (Java 6 तक):
```java
Scanner sc = null;
try {
    sc = new Scanner(System.in);
    // इनपुट लॉजिक
} finally {
    if (sc != null) {
        sc.close(); // मैन्युअल क्लोज करना पड़ता था
    }
}
```

### ✅ आधुनिक Try-with-Resources (Java 7+):
```java
import java.util.Scanner;

public class AutoResourceDemo {
    public static void main(String[] args) {
        // try के कोष्ठक (brackets) में रिसोर्स बनाएं
        try (Scanner sc = new Scanner(System.in)) {
            System.out.print("अपना शहर लिखें: ");
            String city = sc.nextLine();
            System.out.println("शहर: " + city);
        } // try ब्लॉक खत्म होते ही sc.close() अपने-आप चल जाएगा!
    }
}
```

---

## 📌 **Quick Revision Summary**
- जो भी क्लास `AutoCloseable` को लागू करती है, उसे Try-with-Resources में इस्तेमाल किया जा सकता है।
- फ़ाइल हैंडलिंग, डेटाबेस कनेक्शन और सॉकेट नेटवर्क कॉल्स में हमेशा Try-with-Resources अपनाएं।

---

## 🧭 **Navigation**
- **⬅️ पिछला चैप्टर**: [8.2 Checked vs Unchecked Exceptions](./02-checked-vs-unchecked-exceptions/)
- **अगला चैप्टर ➡️**: [8.4 Exception Hierarchy & Catch Rules](./04-exception-hierarchy/)
