---
title: "9.1 File Handling Basics"
categories: [ Java, Course ]
tags: [Java, File, CRUD, FileHandling]
description: "java.io.File क्लास से फ़ाइल बनाना, पढ़ना, मेटाडेटा चेक करना और डिलीट करना।"
date: 2026-09-20T08:00:00+05:30
lastmod: 2026-09-20T08:00:00+05:30
images: ["images/2025/06/file-handling.webp"]
author: ahmad
type: docs
weight: 1
---

## 🎯 **Lesson Objectives**
- `java.io.File` क्लास का उपयोग।
- फ़ाइल का अस्तित्व (`exists()`), साइज़ (`length()`), और अनुमतियाँ जाँचना।
- `createNewFile()` और `delete()` का उपयोग।

```java
import java.io.File;
import java.io.IOException;

public class FileBasicsDemo {
    public static void main(String[] args) {
        File file = new File("notes.txt");

        try {
            if (file.createNewFile()) {
                System.out.println("नई फ़ाइल बनाई गई: " + file.getName());
            } else {
                System.out.println("फ़ाइल पहले से मौजूद है।");
            }

            System.out.println("पूर्ण पाथ: " + file.getAbsolutePath());
            System.out.println("क्या फ़ाइल पढ़ी जा सकती है? " + file.canRead());
            System.out.println("फ़ाइल साइज़: " + file.length() + " बाइट्स");
        } catch (IOException e) {
            System.out.println("एरर: " + e.getMessage());
        }
    }
}
```

---

## 🧭 **Navigation**
- **⬅️ पिछला मॉड्यूल**: [Module 8: Exception Handling](../module-08-exception-handling/)
- **अगला चैप्टर ➡️**: [9.2 Directory Operations](./02-directory-operations/)
