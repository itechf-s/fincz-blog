---
title: "10.1 Collections Framework Overview"
categories: [ Java, Course ]
tags: [Java, Collections, Hierarchy, Iterable]
description: "ऐरे की सीमाएं, JCF की जरूरत और Collection Interface Hierarchy Tree।"
date: 2026-09-20T08:00:00+05:30
lastmod: 2026-09-20T08:00:00+05:30
images: ["images/2025/06/collections-framework.webp"]
author: ahmad
type: docs
weight: 1
---

## 🌳 **Collection Hierarchy Tree**

```text
                       Iterable (Interface)
                               |
                       Collection (Interface)
                               |
         +---------------------+---------------------+
         |                     |                     |
   List (Interface)     Set (Interface)      Queue (Interface)
     - ArrayList          - HashSet            - PriorityQueue
     - LinkedList         - LinkedHashSet      - ArrayDeque
     - Vector             - TreeSet (Sorted)
```
*(नोट: `Map` इंटरफ़ेस अलग रूट पर है क्योंकि यह Key-Value पेयर्स स्टोर करता है)*

---

## 🧭 **Navigation**
- **⬅️ पिछला मॉड्यूल**: [Module 9: File Handling & I/O Streams](../module-09-file-handling-and-io/)
- **अगला चैप्टर ➡️**: [10.2 List Interface (ArrayList vs LinkedList)](./02-list-interface/)
