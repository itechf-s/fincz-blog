---
title: "12.2 Thread Methods & Synchronization"
categories: [ Java, Course ]
tags: [Java, Synchronization, RaceCondition, Locks]
description: "sleep(), join(), Race Conditions, synchronized ब्लॉक्स और ऑब्जेक्ट लॉक्स।"
date: 2026-09-20T08:00:00+05:30
lastmod: 2026-09-20T08:00:00+05:30
images: ["images/2025/06/multithreading-concurrency.webp"]
author: ahmad
type: docs
weight: 2
---

```java
class Counter {
    private int count = 0;

    // synchronized से एक समय में सिर्फ एक ही थ्रेड अंदर आ सकता है (Race Condition Safe)
    public synchronized void increment() {
        count++;
    }

    public int getCount() { return count; }
}

public class SyncDemo {
    public static void main(String[] args) throws InterruptedException {
        Counter counter = new Counter();

        Thread t1 = new Thread(() -> {
            for (int i = 0; i < 1000; i++) counter.increment();
        });

        Thread t2 = new Thread(() -> {
            for (int i = 0; i < 1000; i++) counter.increment();
        });

        t1.start();
        t2.start();

        t1.join(); // t1 के खत्म होने का इंतज़ार करें
        t2.join(); // t2 के खत्म होने का इंतज़ार करें

        System.out.println("Final Count (Always 2000): " + counter.getCount());
    }
}
```

---

## 🧭 **Navigation**
- **⬅️ पिछला चैप्टर**: [12.1 Multithreading Fundamentals](./01-multithreading-concurrency-basics/)
- **अगला चैप्टर ➡️**: [12.3 Thread Pools & ExecutorService](./03-thread-pool-and-executors/)
