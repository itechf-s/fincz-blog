---
title: "9.2 Directory Operations"
categories: [ Java, Course]
tags: [Basic]
description: "Module 9: Directory Operations in Java"
date: 2025-06-01T07:00:30+05:30
author: ahmad
type: docs
---

अब हम **Java में Directory (फ़ोल्डर)** से जुड़े operations सीखते हैं — यानी:

> ✅ Directory बनाना,
> ✅ Directory को list करना,
> ✅ Files को check/delete करना

---

## 📘 Java Directory Operations

Java में directory operations करने के लिए हम **`java.io.File`** और कुछ मामलों में **`java.nio.file`** package का use करते हैं।

---

## 🔶 1. Directory बनाना

### ✅ Single Folder:

```java
import java.io.File;

public class CreateDirectory {
    public static void main(String[] args) {
        File dir = new File("myFolder");
        if (dir.mkdir()) {
            System.out.println("Directory created.");
        } else {
            System.out.println("Directory not created or already exists.");
        }
    }
}
```

➡️ ये `myFolder` नाम की directory बनाएगा।

---

### ✅ Nested Folder (`parent/child`) बनाना:

```java
File dir = new File("parent/child/grandchild");
if (dir.mkdirs()) {
    System.out.println("All directories created.");
}
```

➡️ `mkdirs()` multiple levels create करता है, जबकि `mkdir()` सिर्फ एक level।

---

## 🔷 2. Directory के अंदर files और folders list करना

```java
File dir = new File("myFolder");
String[] list = dir.list();

if (list != null) {
    for (String name : list) {
        System.out.println(name);
    }
}
```

➡️ यह `myFolder` के अंदर की सारी files और directories को print करेगा।

---

## 🔍 Extra: File or Directory की पहचान करना

```java
File f = new File("myFolder/data.txt");

if (f.isFile()) {
    System.out.println("It is a file.");
} else if (f.isDirectory()) {
    System.out.println("It is a directory.");
}
```

---

## 🧹 3. Directory या File को Delete करना

```java
File f = new File("myFolder/data.txt");
if (f.delete()) {
    System.out.println("File deleted.");
}
```

> ⚠️ Directory को delete करने के लिए उसका **खाली होना ज़रूरी** है।

```java
File d = new File("myFolder");
if (d.delete()) {
    System.out.println("Directory deleted.");
}
```

---

## 📦 4. Directory और उसके contents को Recursively Delete करना

```java
public class DeleteDirectory {
    public static void deleteFolder(File file) {
        File[] files = file.listFiles();
        if (files != null) {
            for (File f : files) {
                deleteFolder(f); // recursion
            }
        }
        file.delete();
    }

    public static void main(String[] args) {
        File dir = new File("myFolder");
        deleteFolder(dir);
        System.out.println("Directory and contents deleted.");
    }
}
```

---

## 📘 Summary Table

| Task                         | Method                 | Notes           |
| ---------------------------- | ---------------------- | --------------- |
| Directory बनाना              | `mkdir()` / `mkdirs()` | One / Nested    |
| Directory check करना         | `isDirectory()`        | true/false      |
| Directory contents list करना | `list()`               | Returns array   |
| Directory delete करना        | `delete()`             | खाली होनी चाहिए |
| Recursively delete करना      | custom method          | recursion से    |

---

## 🧪 Practice Exercises

1. Program लिखिए जो एक directory बनाए और उसमें 3 text files auto-create करे
2. एक method बनाए जो किसी directory की सारी files को नाम के साथ print करे
3. एक directory और उसमें मौजूद सब files को delete करने वाला recursive function बनाए

---

## 🎯 Interview Tips:

* `mkdir()` vs `mkdirs()` में फर्क?
* `delete()` method directory पर कब fail होता है?
* Directory की files list करने के लिए कौन-कौन से method हैं?
