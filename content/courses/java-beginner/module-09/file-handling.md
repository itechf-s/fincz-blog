---
title: "9.1 File Handling"
categories: [ Java, Course]
tags: [Basic]
description: "Module 9: File Handling in Java"
date: 2025-06-01T07:00:31+05:30
images: ["images/2025/06/file-handling.webp"]
author: ahmad
type: docs
---

## 🔷 1. File Handling क्या होता है?

> **File Handling** का मतलब है – Java के ज़रिए किसी file को create, read, write या delete करना।

➡️ Java हमें `java.io` और `java.nio` packages के ज़रिए यह सुविधा देता है।

---

## 📦 Important Classes:

| Class            | Use                                    |
| ---------------- | -------------------------------------- |
| `File`           | File को create, delete, check          |
| `FileReader`     | File से character-by-character पढ़ना   |
| `BufferedReader` | File से efficiently line-by-line पढ़ना |
| `FileWriter`     | File में character-by-character लिखना  |
| `BufferedWriter` | Efficient writing                      |
| `Scanner`        | Input लेने के लिए (file या user से)    |
| `PrintWriter`    | Easy writing with formatting           |

---

## ✅ 2. File बनाना और जानकारी पढ़ना (`File` class)

### 🔹 Example: File Create & Info

```java
import java.io.File;

public class FileExample {
    public static void main(String[] args) {
        File file = new File("demo.txt");

        try {
            if (file.createNewFile()) {
                System.out.println("File created: " + file.getName());
            } else {
                System.out.println("File already exists.");
            }

            System.out.println("Path: " + file.getAbsolutePath());
            System.out.println("Readable: " + file.canRead());
            System.out.println("Writable: " + file.canWrite());

        } catch (Exception e) {
            System.out.println("An error occurred.");
        }
    }
}
```

---

## ✅ 3. File में Data लिखना (`FileWriter`, `BufferedWriter`)

```java
import java.io.FileWriter;

public class WriteExample {
    public static void main(String[] args) {
        try {
            FileWriter fw = new FileWriter("demo.txt");
            fw.write("Hello World from Java!");
            fw.close();
            System.out.println("Successfully written to file.");
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
```

➡️ इससे `"demo.txt"` नाम की फाइल में content लिखा जाएगा।

---

## ✅ 4. File से Data पढ़ना (`FileReader`, `BufferedReader`)

```java
import java.io.BufferedReader;
import java.io.FileReader;

public class ReadExample {
    public static void main(String[] args) {
        try (BufferedReader br = new BufferedReader(new FileReader("demo.txt"))) {
            String line;
            while ((line = br.readLine()) != null) {
                System.out.println(line);
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
```

➡️ यह line-by-line text को पढ़ता है।

---

## ✅ 5. `Scanner` से File पढ़ना (Easy way)

```java
import java.io.File;
import java.util.Scanner;

public class ScannerFile {
    public static void main(String[] args) {
        try {
            File f = new File("demo.txt");
            Scanner sc = new Scanner(f);
            while (sc.hasNextLine()) {
                System.out.println(sc.nextLine());
            }
            sc.close();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
```

---

## 📌 6. File Delete करना

```java
File file = new File("demo.txt");
if (file.delete()) {
    System.out.println("Deleted: " + file.getName());
} else {
    System.out.println("Failed to delete");
}
```

---

## 🖼️ Text-Based Flow Diagram

```
+----------------------+
|  File Handling Flow  |
+----------------------+
| Create File          |
| ↓                    |
| Write to File        |
| ↓                    |
| Read from File       |
| ↓                    |
| Delete File (opt)    |
+----------------------+
```

---

## 🧾 Summary Table

| Task            | Class                           |
| --------------- | ------------------------------- |
| Create / Delete | `File`                          |
| Read (char)     | `FileReader`                    |
| Read (line)     | `BufferedReader`, `Scanner`     |
| Write (char)    | `FileWriter`                    |
| Write (fast)    | `BufferedWriter`, `PrintWriter` |

---

## 🧪 Practice Assignments

1. एक program लिखिए जो user से input लेकर file में store करे
2. File से नाम पढ़िए और उन सबको capitalize कर के दोबारा file में लिखिए
3. File में 10 संख्याएँ हों, उन्हें पढ़कर उनकी कुल योग (sum) निकालिए

---

## 📘 Interview Questions

1. Java में file कैसे create की जाती है?
2. FileWriter और BufferedWriter में क्या फ़र्क है?
3. FileReader से क्या limitations हैं?
4. try-with-resources file handling में कैसे काम आता है?
