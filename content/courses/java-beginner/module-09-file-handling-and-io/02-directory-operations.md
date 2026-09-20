---
title: "9.2 Directory Operations"
categories: [ Java, Course ]
tags: [Java, Directory, FileSystem, Mkdir]
description: "फ़ोल्डर क्रिएशन (mkdir, mkdirs), फ़ाइल लिस्टिंग और डायरेक्टरी सर्च।"
date: 2026-09-20T08:00:00+05:30
lastmod: 2026-09-20T08:00:00+05:30
images: ["images/2025/06/file-handling.webp"]
author: ahmad
type: docs
---

```java
import java.io.File;

public class DirectoryDemo {
    public static void main(String[] args) {
        File folder = new File("reports/2026/sales");
        
        // नेस्टेड डायरेक्ट्रीज बनाएं
        if (folder.mkdirs()) {
            System.out.println("फ़ोल्डर संरचना सफलतापूर्वक बनाई गई।");
        }

        File currentDir = new File(".");
        String[] files = currentDir.list();
        System.out.println("वर्तमान फ़ोल्डर की फ़ाइलें:");
        if (files != null) {
            for (String f : files) {
                System.out.println("📁 " + f);
            }
        }
    }
}
```

---

## 🧭 **Navigation**
- **⬅️ पिछला चैप्टर**: [9.1 File Handling Basics](./01-file-handling-basics/)
- **अगला चैप्टर ➡️**: [9.3 Byte Streams vs Character Streams](./03-io-streams/)
