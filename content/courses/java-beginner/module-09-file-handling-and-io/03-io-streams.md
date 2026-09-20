---
title: "9.3 Byte Streams vs Character Streams"
categories: [ Java, Course ]
tags: [Java, Streams, BufferedReader, BufferedWriter, IO]
description: "Byte Streams (FileInputStream) vs Character Streams (BufferedReader/Writer) और हाई-स्पीड I/O।"
date: 2026-09-20T08:00:00+05:30
lastmod: 2026-09-20T08:00:00+05:30
images: ["images/2025/06/file-handling.webp"]
author: ahmad
type: docs
weight: 3
---

## 🎯 **Fast File Read & Write with BufferedReader**

```java
import java.io.*;

public class FastBufferedIODemo {
    public static void main(String[] args) {
        String fileName = "sample.txt";

        // 1. फ़ाइल में लिखना (Write)
        try (BufferedWriter writer = new BufferedWriter(new FileWriter(fileName))) {
            writer.write("Fincz Learn - Java Masterclass");
            writer.newLine();
            writer.write("हाई-परफॉर्मेंस फ़ाइल I/O सीखना आसान है।");
        } catch (IOException e) {
            e.printStackTrace();
        }

        // 2. फ़ाइल से पढ़ना (Read line by line)
        try (BufferedReader reader = new BufferedReader(new FileReader(fileName))) {
            String line;
            System.out.println("--- फ़ाइल सामग्री ---");
            while ((line = reader.readLine()) != null) {
                System.out.println(line);
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
```

---

## 🧭 **Navigation**
- **⬅️ पिछला चैप्टर**: [9.2 Directory Operations](./02-directory-operations/)
- **अगला मॉड्यूल ➡️**: [Module 10: Java Collections Framework](../module-10-collections-framework/)
