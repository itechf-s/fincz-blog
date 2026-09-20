---
title: "12.3 Thread Pools & ExecutorService"
categories: [ Java, Course ]
tags: [Java, ThreadPool, ExecutorService, Callable, Future]
description: "थ्रेड पूल्स का महत्व, Executors.newFixedThreadPool, Callable vs Runnable और Future।"
date: 2026-09-20T08:00:00+05:30
lastmod: 2026-09-20T08:00:00+05:30
images: ["images/2025/06/multithreading-concurrency.webp"]
author: ahmad
type: docs
---

```java
import java.util.concurrent.*;

public class ThreadPoolDemo {
    public static void main(String[] args) throws ExecutionException, InterruptedException {
        // 3 वर्कर थ्रेड्स का पूल बनाएं
        ExecutorService executor = Executors.newFixedThreadPool(3);

        // Callable से वैल्यू वापस ली जा सकती है
        Callable<String> downloadTask = () -> {
            Thread.sleep(1000);
            return "फाइल डाउनलोड पूर्ण!";
        };

        Future<String> futureResult = executor.submit(downloadTask);

        System.out.println("अन्य काम चल रहा है...");
        String result = futureResult.get(); // जब तक रिजल्ट न आए तब तक ब्लॉक रहेगा
        System.out.println("परिणाम: " + result);

        executor.shutdown(); // पूल को सुरक्षित रूप से बंद करें
    }
}
```

---

## 🧭 **Navigation**
- **⬅️ पिछला चैप्टर**: [12.2 Thread Methods & Synchronization](./02-thread-methods-and-synchronization/)
- **अगला चैप्टर ➡️**: [12.4 Thread Scheduling & Deadlock Prevention](./04-thread-scheduling-and-deadlock/)
