---
title: "12.1 Multithreading Fundamentals"
categories: [ Java, Course ]
tags: [Java, Multithreading, Thread, Runnable, Concurrency]
description: "प्रोसेस vs थ्रेड, थ्रेड बनाने के 2 तरीके (Thread vs Runnable), और Thread Lifecycle States।"
date: 2026-09-20T08:00:00+05:30
lastmod: 2026-09-20T08:00:00+05:30
images: ["images/2025/06/multithreading-concurrency.webp"]
author: ahmad
type: docs
---

```java
// तरीका 1: Runnable Interface (Recommended)
class BackgroundTask implements Runnable {
    private String taskName;

    public BackgroundTask(String name) {
        this.taskName = name;
    }

    @Override
    public void run() {
        for (int i = 1; i <= 3; i++) {
            System.out.println(taskName + " - स्टेप " + i);
            try {
                Thread.sleep(500); // आधा सेकंड का विराम
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }
    }
}

public class ThreadDemo {
    public static void main(String[] args) {
        Thread t1 = new Thread(new BackgroundTask("टास्क A"));
        Thread t2 = new Thread(new BackgroundTask("टास्क B"));

        t1.start(); // नए थ्रेड में execution शुरू
        t2.start();
    }
}
```

---

## 🧭 **Navigation**
- **⬅️ पिछला मॉड्यूल**: [Module 11: Generics & Wrapper Classes](../module-11-generics-and-wrappers/)
- **अगला चैप्टर ➡️**: [12.2 Thread Methods & Synchronization](./02-thread-methods-and-synchronization/)
