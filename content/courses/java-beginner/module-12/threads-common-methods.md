---
title: "12.2 Threads Common Methods"
categories: [ Java, Course]
tags: [Basic]
description: "Java Thread के Common Methods (Cheat Sheet)"
date: 2025-06-01T07:00:20+05:30
author: ahmad
type: docs
---

नीचे दिए गए हैं Java `Thread` class के **सभी commonly used methods** एक आसान table के रूप में, ताकि आप इन्हें जल्दी समझ सकें और याद रख सकें —

---

# 📘 **Java Thread के Common Methods (Cheat Sheet)**

| 🔢 No. | 🧵 Method          | 📝 Description                                                             | 🔧 Use Example                       |
| ------ | ------------------ | -------------------------------------------------------------------------- | ------------------------------------ |
| 1️⃣    | `start()`          | Thread को **start** करता है और internally `run()` method call करता है      | `t1.start();`                        |
| 2️⃣    | `run()`            | Thread के अंदर का task define करता है                                      | `public void run() { }`              |
| 3️⃣    | `sleep(ms)`        | Thread को कुछ time के लिए **pause** करता है (milliseconds)                 | `Thread.sleep(1000);`                |
| 4️⃣    | `join()`           | एक thread को **दूसरे thread के खत्म होने का wait** कराता है                | `t1.join();`                         |
| 5️⃣    | `isAlive()`        | बताता है कि thread अभी **active** है या खत्म हो चुका है                    | `if(t1.isAlive())`                   |
| 6️⃣    | `setName()`        | Thread का नाम set करता है                                                  | `t1.setName("Worker1");`             |
| 7️⃣    | `getName()`        | Thread का नाम प्राप्त करता है                                              | `System.out.println(t1.getName());`  |
| 8️⃣    | `setPriority(int)` | Thread की **priority** सेट करता है (1 से 10)                               | `t1.setPriority(8);`                 |
| 9️⃣    | `getPriority()`    | Thread की current priority देता है                                         | `t1.getPriority();`                  |
| 🔟     | `yield()`          | Thread voluntarily अपना CPU छोड़े, ताकि दूसरा thread चल सके (hint देता है) | `Thread.yield();`                    |
| 🔚     | `currentThread()`  | Returns reference to the currently executing thread                        | `Thread t = Thread.currentThread();` |
| 🔒     | `interrupt()`      | Thread को interrupt करने के लिए use होता है (safely रोकने का signal)       | `t1.interrupt();`                    |

---

## ✅ Example Use:

```java
class MyThread extends Thread {
    public void run() {
        System.out.println(Thread.currentThread().getName() + " is running");
    }
}

public class Demo {
    public static void main(String[] args) throws InterruptedException {
        MyThread t1 = new MyThread();
        t1.setName("FirstThread");
        t1.start();

        t1.join();  // Wait for t1 to finish

        System.out.println("Main thread finished");
    }
}
```

---

## 🧠 Important Notes:

* `start()` सिर्फ एक बार call कर सकते हैं, बार-बार नहीं।
* `sleep()` method static है और current thread पर apply होता है।
* `join()` thread को रोकता है जब तक दूसरा thread पूरा न हो जाए।
* `isAlive()` हमें बताता है कि thread अभी भी चल रहा है या नहीं।
* `setPriority()` का default value होता है `5`, range होती है 1 (MIN) से 10 (MAX)।
