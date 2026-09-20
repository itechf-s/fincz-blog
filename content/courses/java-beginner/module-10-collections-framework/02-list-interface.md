---
title: "10.2 List Interface (ArrayList vs LinkedList)"
categories: [ Java, Course ]
tags: [Java, List, ArrayList, LinkedList, Performance]
description: "ArrayList का इंटरनल रीसाइज़िंग और LinkedList के साथ टाइम कॉम्प्लेक्सिटी तुलना।"
date: 2026-09-20T08:00:00+05:30
lastmod: 2026-09-20T08:00:00+05:30
images: ["images/2025/06/collections-framework.webp"]
author: ahmad
type: docs
weight: 2
---

```java
import java.util.ArrayList;
import java.util.List;

public class ListDemo {
    public static void main(String[] args) {
        List<String> list = new ArrayList<>();
        list.add("Java");
        list.add("Spring Boot");
        list.add("Docker");

        System.out.println("Size: " + list.size());
        System.out.println("First Item: " + list.get(0)); // O(1) Time Complexity
    }
}
```

---

## 🧭 **Navigation**
- **⬅️ पिछला चैप्टर**: [10.1 Collections Framework Overview](./01-collections-framework-overview/)
- **अगला चैप्टर ➡️**: [10.3 Set Interface (HashSet vs TreeSet)](./03-set-interface/)
