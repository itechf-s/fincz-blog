---
title: "10.5 Iterators & Fail-Fast vs Fail-Safe"
categories: [ Java, Course ]
tags: [Java, Iterator, FailFast, FailSafe, Concurrency]
description: "Iterator, ConcurrentModificationException, और Fail-Fast vs Fail-Safe कलेक्शन्स।"
date: 2026-09-20T08:00:00+05:30
lastmod: 2026-09-20T08:00:00+05:30
images: ["images/2025/06/collections-framework.webp"]
author: ahmad
type: docs
---

```java
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

public class IteratorDemo {
    public static void main(String[] args) {
        List<String> items = new ArrayList<>();
        items.add("Pen");
        items.add("Book");
        items.add("Eraser");

        // सुरक्षित रिमूवल के लिए Iterator.remove() का उपयोग करें
        Iterator<String> itr = items.iterator();
        while (itr.hasNext()) {
            String item = itr.next();
            if (item.equals("Book")) {
                itr.remove(); // सुरक्षित
            }
        }
        System.out.println("After Removal: " + items);
    }
}
```

---

## 🧭 **Navigation**
- **⬅️ पिछला चैप्टर**: [10.4 Map Interface (HashMap Internal Working)](./04-map-interface/)
- **अगला मॉड्यूल ➡️**: [Module 11: Generics & Wrapper Classes](../module-11-generics-and-wrappers/)
