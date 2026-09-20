---
title: "10.4 Map Interface (HashMap Internal Working)"
categories: [ Java, Course ]
tags: [Java, Map, HashMap, HashCode, Equals]
description: "Key-Value पेयर्स, hashCode() और equals() का इंटरनल बकेट आर्किटेक्चर।"
date: 2026-09-20T08:00:00+05:30
lastmod: 2026-09-20T08:00:00+05:30
images: ["images/2025/06/collections-framework.webp"]
author: ahmad
type: docs
weight: 4
---

```java
import java.util.HashMap;
import java.util.Map;

public class MapDemo {
    public static void main(String[] args) {
        Map<String, Double> stockPrices = new HashMap<>();
        stockPrices.put("TCS", 3850.50);
        stockPrices.put("INFY", 1520.00);
        stockPrices.put("RELIANCE", 2950.75);

        System.out.println("TCS Price: ₹" + stockPrices.get("TCS"));

        for (Map.Entry<String, Double> entry : stockPrices.entrySet()) {
            System.out.println(entry.getKey() + " -> ₹" + entry.getValue());
        }
    }
}
```

---

## 🧭 **Navigation**
- **⬅️ पिछला चैप्टर**: [10.3 Set Interface (HashSet vs TreeSet)](./03-set-interface/)
- **अगला चैप्टर ➡️**: [10.5 Iterators & Fail-Fast vs Fail-Safe](./05-iterators-fail-fast-vs-fail-safe/)
