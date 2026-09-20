---
title: "8.3 try with resources"
categories: [ Java, Course]
tags: [Basic]
description: "try-with-resources in Java"
date: 2025-06-01T07:00:34+05:30
author: ahmad
type: docs
---

👉 **`try-with-resources`**
जो file handling, database connection, socket जैसे resource-based कामों में बहुत ज़रूरी होता है।

---

## 🔷 1. Problem in Traditional `try-catch`

जब हम किसी **resource** (जैसे: file, DB connection) को use करते हैं, तो हमें उसे **manually close** करना पड़ता है:

### 🔴 Traditional Approach (before Java 7):

```java
FileReader fr = null;

try {
    fr = new FileReader("data.txt");
    // read file
} catch (IOException e) {
    System.out.println("Error: " + e.getMessage());
} finally {
    try {
        if (fr != null) fr.close();  // manually close
    } catch (IOException e) {
        System.out.println("Error closing file");
    }
}
```

> ❌ समस्या: अगर हम `close()` करना भूल जाएँ, तो memory leak, file lock जैसी परेशानियाँ हो सकती हैं।

---

## ✅ 2. What is `try-with-resources`?

### 📌 Definition:

> Java 7 से आया feature जिसमें हम resource को **try-block के अंदर declare करते हैं**, और Java उसे **automatically close कर देता है**, चाहे exception आए या ना आए।

---

## 🔹 Syntax:

```java
try (ResourceType resource = new ResourceType()) {
    // use resource
} catch (Exception e) {
    // handle exception
}
```

---

## ✅ 3. Example with FileReader & BufferedReader

```java
import java.io.*;

public class TryWithResourceDemo {
    public static void main(String[] args) {
        try (BufferedReader br = new BufferedReader(new FileReader("data.txt"))) {
            String line;
            while ((line = br.readLine()) != null) {
                System.out.println(line);
            }
        } catch (IOException e) {
            System.out.println("Error: " + e.getMessage());
        }
        // No need to write br.close()
    }
}
```

➡️ यहाँ `BufferedReader` को **automatically close** कर दिया जाएगा, बिना manually `close()` लिखे।

---

## 📌 Condition:

> जो भी class `try-with-resources` में use करनी है, वो **`AutoCloseable` interface** को implement करनी चाहिए।

### Built-in AutoCloseable classes:

| Class Name          | Use                 |
| ------------------- | ------------------- |
| `FileReader`        | File reading        |
| `BufferedReader`    | Efficient file read |
| `FileInputStream`   | Binary file input   |
| `Scanner`           | Input reading       |
| `Connection` (JDBC) | Database connection |

---

## 🧠 Benefits of `try-with-resources`

| Benefit             | Explanation                          |
| ------------------- | ------------------------------------ |
| ✅ Automatic close   | resource को खुद बंद करता है          |
| ✅ No finally needed | `finally` block लिखने की ज़रूरत नहीं |
| ✅ Less error-prone  | human error से बचाता है              |
| ✅ Clean code        | short और readable code               |

---

## 🔍 Multiple Resources Example:

```java
try (
    FileReader fr = new FileReader("file.txt");
    BufferedReader br = new BufferedReader(fr)
) {
    System.out.println(br.readLine());
} catch (IOException e) {
    e.printStackTrace();
}
```

---

## ❗ Java Version Notes:

| Java Version | Feature                                                            |
| ------------ | ------------------------------------------------------------------ |
| Java 7       | `try-with-resources` introduced                                    |
| Java 9       | Effectively final resource को बाहर declare करके भी use कर सकते हैं |

```java
BufferedReader br = new BufferedReader(new FileReader("file.txt"));
try (br) {
    System.out.println(br.readLine());
}
```

---

## 📘 Summary Table

| Feature         | Description                           |
| --------------- | ------------------------------------- |
| Introduced in   | Java 7                                |
| Closes Resource | Automatically                         |
| Works With      | Classes implementing `AutoCloseable`  |
| Replaces        | `finally` block for closing           |
| Benefits        | Less error, clean code, memory safety |

---

## 🧪 Practice Task:

* File से data पढ़िए `try-with-resources` से
* Scanner से user input लीजिए और उसे भी auto-close कराइए
* JDBC connection से MySQL DB read करके auto-close कराइए (advance)
