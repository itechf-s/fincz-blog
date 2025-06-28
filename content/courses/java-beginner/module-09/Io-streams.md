---
title: "9.3 I/O Streams"
categories: [ Java, Course]
tags: [Basic]
description: "Module 9: I/O Streams in Java"
date: 2025-06-01T07:00:29+05:30
author: ahmad
type: docs
---

# 📘 **Module 9: File Handling in Java**

## I/O Streams in Java

---

## 🔷 1. I/O Streams क्या होते हैं?

### 📌 Definition:

> Java I/O (Input/Output) Streams का मतलब है – किसी **source (जैसे keyboard, file)** से **data पढ़ना (input)** और किसी **destination (जैसे console, file)** में **data लिखना (output)**।

Java में **stream** एक continuous data flow को represent करता है — जैसे पानी की धारा (stream)।

---

## 🔁 दो प्रकार के Stream:

| Stream Type           | Description               | Example Classes                                  |
| --------------------- | ------------------------- | ------------------------------------------------ |
| **Byte Streams**      | Binary data (image, file) | `InputStream`, `OutputStream`, `FileInputStream` |
| **Character Streams** | Text data (char, string)  | `Reader`, `Writer`, `FileReader`, `FileWriter`   |

---

## 🧭 Stream Hierarchy Diagram:

```
java.lang.Object
   └── java.io.InputStream        ← Byte Input
         ├── FileInputStream
         ├── BufferedInputStream
         └── DataInputStream

   └── java.io.OutputStream       ← Byte Output
         ├── FileOutputStream
         ├── BufferedOutputStream
         └── DataOutputStream

   └── java.io.Reader             ← Char Input
         ├── FileReader
         └── BufferedReader

   └── java.io.Writer             ← Char Output
         ├── FileWriter
         └── BufferedWriter
```

---

## ✅ 2. Byte Streams

### 🔹 Use: Binary file read/write (image, PDF, video)

### 🔹 Example: FileInputStream

```java
import java.io.FileInputStream;

public class ByteRead {
    public static void main(String[] args) {
        try (FileInputStream fis = new FileInputStream("file.bin")) {
            int data;
            while ((data = fis.read()) != -1) {
                System.out.print((char) data);
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
```

---

## ✅ 3. Character Streams

### 🔹 Use: Text file read/write

### 🔹 Example: FileReader & FileWriter

```java
import java.io.FileWriter;

public class CharWrite {
    public static void main(String[] args) {
        try (FileWriter fw = new FileWriter("text.txt")) {
            fw.write("Hello, Java Streams!");
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
```

```java
import java.io.FileReader;

public class CharRead {
    public static void main(String[] args) {
        try (FileReader fr = new FileReader("text.txt")) {
            int ch;
            while ((ch = fr.read()) != -1) {
                System.out.print((char) ch);
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
```

---

## ✅ 4. Buffered Streams

> Speed और performance बढ़ाने के लिए Java buffered stream देता है।

### 🔹 Example: `BufferedReader`, `BufferedWriter`

```java
BufferedReader br = new BufferedReader(new FileReader("text.txt"));
BufferedWriter bw = new BufferedWriter(new FileWriter("text.txt"));
```

---

## ✅ 5. Data Streams – Primitive Types Read/Write

```java
DataOutputStream dos = new DataOutputStream(new FileOutputStream("data.bin"));
dos.writeInt(100);
dos.writeUTF("Hello");

DataInputStream dis = new DataInputStream(new FileInputStream("data.bin"));
int x = dis.readInt();
String s = dis.readUTF();
```

---

## 📘 Summary Table

| Type     | Input Class         | Output Class         | Use           |
| -------- | ------------------- | -------------------- | ------------- |
| Byte     | `FileInputStream`   | `FileOutputStream`   | Binary files  |
| Char     | `FileReader`        | `FileWriter`         | Text files    |
| Buffered | `BufferedReader`    | `BufferedWriter`     | Fast I/O      |
| Data     | `DataInputStream`   | `DataOutputStream`   | Primitives    |
| Object   | `ObjectInputStream` | `ObjectOutputStream` | Serialization |

---

## 🧪 Practice Assignments:

1. एक text file में कुछ text लिखिए और उसे character stream से पढ़िए
2. Binary file (image) को byte stream से read/write कीजिए
3. BufferedWriter का use करके fast writing कीजिए
4. DataOutputStream से integer, float और string एक binary file में store कीजिए

---

## 📘 Interview में पूछे जाने वाले सवाल:

* Byte और Character stream में क्या फ़र्क है?
* BufferedReader क्यों use करते हैं?
* FileReader vs FileInputStream?
* `read()` method क्या return करता है?
* try-with-resources stream में कैसे helpful है?
