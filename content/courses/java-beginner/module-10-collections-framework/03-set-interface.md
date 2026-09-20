---
title: "10.3 Set Interface (HashSet vs TreeSet)"
categories: [ Java, Course ]
tags: [Java, Set, HashSet, TreeSet, Hashing]
description: "डुप्लीकेट्स हटाना, हैशिंग, और TreeSet का सॉर्टेड डेटा स्टोरेज।"
date: 2026-09-20T08:00:00+05:30
lastmod: 2026-09-20T08:00:00+05:30
images: ["images/2025/06/collections-framework.webp"]
author: ahmad
type: docs
weight: 3
---

```java
import java.util.HashSet;
import java.util.Set;
import java.util.TreeSet;

public class SetDemo {
    public static void main(String[] args) {
        Set<String> uniqueTags = new HashSet<>();
        uniqueTags.add("Java");
        uniqueTags.add("Python");
        uniqueTags.add("Java"); // डुप्लीकेट अपने-आप इग्नोर हो जाएगा

        System.out.println("HashSet (No duplicates): " + uniqueTags);

        Set<Integer> sortedNumbers = new TreeSet<>();
        sortedNumbers.add(50);
        sortedNumbers.add(10);
        sortedNumbers.add(30);
        System.out.println("TreeSet (Sorted): " + sortedNumbers); // [10, 30, 50]
    }
}
```

---

## 🧭 **Navigation**
- **⬅️ पिछला चैप्टर**: [10.2 List Interface (ArrayList vs LinkedList)](./02-list-interface/)
- **अगला चैप्टर ➡️**: [10.4 Map Interface (HashMap Internal Working)](./04-map-interface/)
