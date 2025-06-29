---
title: "10.5 Fail-Fast vs Fail-Safe"
categories: [ Java, Course]
tags: [Basic]
description: "Fail-Fast vs Fail-Safe Iterators in Java"
date: 2025-06-01T07:00:24+05:30
author: ahmad
type: docs
---

# 📘 **Module 10: Java Collections Framework (JCF)**

Java में Collection framework से जुड़ा यह एक **interview-favorite concept** है —
आइए detail में समझते हैं:

---

## 🔍 **Fail-Fast vs Fail-Safe Iterators in Java**

---

## 🔷 1. Fail-Fast Iterator क्या होता है?

> जब आप किसी Collection को iterate कर रहे हों (for-each, Iterator आदि से) और **उसी समय उसी Collection को modify** (add/remove) कर दें, तो Iterator तुरंत **`ConcurrentModificationException`** throw करता है।

🧨 यही behavior कहलाता है **Fail-Fast**।

---

### ✅ Example:

```java
import java.util.*;

public class FailFastDemo {
    public static void main(String[] args) {
        List<String> list = new ArrayList<>();
        list.add("A");
        list.add("B");

        for (String item : list) {
            list.remove(item);  // ⚠️ Error here
        }
    }
}
```

**Output:**

```
Exception in thread "main" java.util.ConcurrentModificationException
```

➡️ क्योंकि `ArrayList` का Iterator **Fail-Fast** है।

---

## ⚠️ Behind the Scene:

Fail-Fast Iterator internally एक **modCount** नाम का variable check करता है —
अगर loop के दौरान collection modify हो गया, तो modCount mismatch के कारण exception आ जाता है।

---

## ✅ Example: Using `Iterator.remove()` is safe

```java
Iterator<String> it = list.iterator();
while (it.hasNext()) {
    String item = it.next();
    if (item.equals("A")) {
        it.remove();  // ✅ Safe way to remove
    }
}
```

---

## 🔶 2. Fail-Safe Iterator क्या होता है?

> Fail-Safe iterator ऐसे collections में use होता है जो **modification को tolerate** करते हैं।
> ये **original collection की copy** पर काम करते हैं, इसलिए modification से कोई error नहीं आता।

✅ ऐसे iterators **exception नहीं फेंकते**।

---

### ✅ Example:

```java
import java.util.concurrent.CopyOnWriteArrayList;

public class FailSafeDemo {
    public static void main(String[] args) {
        CopyOnWriteArrayList<String> list = new CopyOnWriteArrayList<>();
        list.add("A");
        list.add("B");

        for (String item : list) {
            list.add("C");  // ✅ No error
        }

        System.out.println(list); // [A, B, C, C]
    }
}
```

➡️ क्योंकि `CopyOnWriteArrayList` का Iterator **Fail-Safe** है।

---

## 📘 Summary Table:

| Feature              | Fail-Fast                           | Fail-Safe                                   |
| -------------------- | ----------------------------------- | ------------------------------------------- |
| Works on             | Original collection                 | Collection की **copy** पर                   |
| Modification allowed | ❌ During iteration                  | ✅ Allowed                                   |
| Exception?           | ✅ `ConcurrentModificationException` | ❌ कोई exception नहीं                        |
| Examples             | `ArrayList`, `HashMap`, `HashSet`   | `CopyOnWriteArrayList`, `ConcurrentHashMap` |
| Performance          | ✅ Fast (No copy)                    | ❌ Slightly slower (copy-based)              |

---

## 🧠 Interview Questions:

1. Fail-Fast और Fail-Safe Iterator में क्या फर्क है?
2. `ConcurrentModificationException` कब आता है?
3. `CopyOnWriteArrayList` और `ArrayList` में क्या difference है?
4. क्या हम `List` को loop के दौरान modify कर सकते हैं?
