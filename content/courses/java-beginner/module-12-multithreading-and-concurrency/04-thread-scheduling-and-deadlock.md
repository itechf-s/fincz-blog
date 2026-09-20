---
title: "12.4 Thread Scheduling & Deadlock Prevention"
categories: [ Java, Course ]
tags: [Java, Deadlock, Scheduling, Priority, Concurrency]
description: "थ्रेड प्रायोरिटी, डेडलॉक की 4 शर्तें और डेडलॉक का पता लगाने व रोकथाम की तकनीक।"
date: 2026-09-20T08:00:00+05:30
lastmod: 2026-09-20T08:00:00+05:30
images: ["images/2025/06/multithreading-concurrency.webp"]
author: ahmad
type: docs
---

## ⚠️ **Deadlock क्या है?**
जब दो या दो से अधिक थ्रेड्स एक-दूसरे द्वारा पकड़े गए रिसोर्स (Lock) को पाने के लिए अनंत काल तक इंतज़ार करते रहते हैं, तो उस स्थिति को **Deadlock** कहते हैं।

```text
Thread 1 (Holds Lock A) ----> Waiting for Lock B
                                  ^
                                  |
Thread 2 (Holds Lock B) ----------+
```

### ✅ Deadlock से बचाव:
1. **Lock Ordering**: सभी थ्रेड्स में लॉक्स को हमेशा एक ही फिक्स क्रम (उदा. पहले Lock A फिर Lock B) में प्राप्त करें।
2. **`tryLock()`**: `java.util.concurrent.locks.ReentrantLock` में टाइमआउट का इस्तेमाल करें।

---

## 🧭 **Navigation**
- **⬅️ पिछला चैप्टर**: [12.3 Thread Pools & ExecutorService](./03-thread-pool-and-executors/)
- **अगला मॉड्यूल ➡️**: [Module 13: JDBC & Database Operations](../module-13-jdbc-database/)
