---
title: "12.4 Thread Scheduling"
categories: [ Java, Course]
tags: [Basic]
description: "Thread Scheduling in Java (Thread Execution Order)"
date: 2025-06-01T07:00:19+05:30
author: ahmad
type: docs
---

## 📘 **Thread Scheduling in Java (Thread Execution Order)**

---

## 🔷 1. Thread Scheduling क्या है?

> जब multiple threads एक साथ runnable हों, तो Java VM (JVM) **किस thread को कब, कितनी देर के लिए CPU देगा**, यह तय करना — **Thread Scheduling** कहलाता है।

➡️ Java में Thread Scheduling **Thread Scheduler** द्वारा manage होता है।
यह **OS dependent** होता है — यानी behavior platform पर भी depend करता है।

---

## 🔧 Thread Scheduler के दो मुख्य policies होती हैं:

| Policy                    | Description                                                              |
| ------------------------- | ------------------------------------------------------------------------ |
| **Time Slicing**          | हर thread को CPU का fixed time slot मिलता है (round-robin style)         |
| **Preemptive Scheduling** | Highest priority वाला thread CPU ले लेता है, चाहे दूसरा thread चल रहा हो |

> JVM generally दोनों का combination use करता है — ये आपके OS पर भी depend करता है।

---

## 🔹 2. Thread Priority

Java में हर thread की एक priority होती है (integer: 1 से 10) जो Thread Scheduler को **hint** देती है कि कौनसा thread पहले चले।

| Constant               | Value       | Meaning          |
| ---------------------- | ----------- | ---------------- |
| `Thread.MIN_PRIORITY`  | 1           | Lowest priority  |
| `Thread.NORM_PRIORITY` | 5 (default) | Normal           |
| `Thread.MAX_PRIORITY`  | 10          | Highest priority |

### ✅ Example:

```java
Thread t1 = new Thread();
Thread t2 = new Thread();

t1.setPriority(Thread.MIN_PRIORITY);  // 1
t2.setPriority(Thread.MAX_PRIORITY);  // 10
```

⚠️ यह **guarantee नहीं करता** कि high-priority thread ही पहले चलेगा — सिर्फ एक **suggestion** होता है।

---

## 🔁 Example: Thread Priority Impact

```java
class MyThread extends Thread {
    public void run() {
        for (int i = 1; i <= 5; i++) {
            System.out.println(getName() + ": " + i);
        }
    }
}

public class Demo {
    public static void main(String[] args) {
        MyThread t1 = new MyThread();
        MyThread t2 = new MyThread();
        MyThread t3 = new MyThread();

        t1.setPriority(3);
        t2.setPriority(8);
        t3.setPriority(6);

        t1.setName("Thread-Low");
        t2.setName("Thread-High");
        t3.setName("Thread-Medium");

        t1.start();
        t2.start();
        t3.start();
    }
}
```

➡️ हर बार output का order अलग हो सकता है क्योंकि actual scheduling OS और JVM के ऊपर है।

---

## 🔄 3. `yield()` Method

> `Thread.yield()` एक static method है जो **current thread को voluntarily pause** करता है और कहता है:
> "अगर कोई और thread ready है, तो उसे चलने दो।"

### ✅ Syntax:

```java
Thread.yield();
```

➡️ यह भी सिर्फ **hint देता है**, JVM इसको माने या न माने — इसकी कोई गारंटी नहीं।

---

## 🔁 Scheduling Behavior (Text Diagram):

```
Multiple Threads Ready
        ↓
Thread Scheduler picks next based on:
    → Priority
    → Time Slice
    → yield() or join()
        ↓
Thread gets CPU
        ↓
Runs → Sleeps → Yields → Completes
        ↓
Next thread gets CPU
```

---
अब हम Java की एक advanced और powerful सुविधा सीखते हैं जो modern multithreaded applications में बहुत काम आती है —

## 📘 **ScheduledExecutorService in Java**

---

## 🔷 1. ScheduledExecutorService क्या है?

> यह Java की **java.util.concurrent** package का हिस्सा है, जो हमें **Scheduled Task Execution** (delay या repeated execution) करने की सुविधा देता है — यानी:

* किसी task को future में **एक बार चलाना**
* या उसे **bar-bar fixed interval पर दोहराना**

➡️ ये traditional `Timer` और `TimerTask` का modern और thread-safe version है।

---

## 🧱 ScheduledExecutorService का निर्माण:

```java
import java.util.concurrent.*;

ScheduledExecutorService scheduler = Executors.newScheduledThreadPool(1);
```

* `newScheduledThreadPool(n)` → एक scheduled thread pool बनाता है जिसमें `n` threads होंगे।

---

## ✅ Common Methods

| Method                                                        | Description                                                              |
| ------------------------------------------------------------- | ------------------------------------------------------------------------ |
| `schedule(Runnable task, delay, timeUnit)`                    | एक बार task को delay के बाद execute करता है                              |
| `scheduleAtFixedRate(task, initialDelay, period, timeUnit)`   | एक task को बार-बार, हर fixed interval पर run करता है (start time से gap) |
| `scheduleWithFixedDelay(task, initialDelay, delay, timeUnit)` | एक task को बार-बार run करता है, लेकिन हर execution के बाद delay के साथ   |

---

## 🔁 Example 1: Delay के साथ एक बार Run

```java
ScheduledExecutorService scheduler = Executors.newScheduledThreadPool(1);

Runnable task = () -> System.out.println("Hello after 3 seconds");

scheduler.schedule(task, 3, TimeUnit.SECONDS);
```

---

## 🔁 Example 2: Repeated Execution (Fixed Rate)

```java
scheduler.scheduleAtFixedRate(() -> {
    System.out.println("Running at fixed rate: " + System.currentTimeMillis());
}, 1, 5, TimeUnit.SECONDS);
```

➡️ हर 5 सेकंड पर task चलेगा, भले ही पिछले task का time कितना भी हो।

---

## 🔁 Example 3: Repeated Execution (Fixed Delay)

```java
scheduler.scheduleWithFixedDelay(() -> {
    System.out.println("Running with fixed delay");
    try {
        Thread.sleep(2000); // simulate task taking time
    } catch (InterruptedException e) {
        e.printStackTrace();
    }
}, 1, 3, TimeUnit.SECONDS);
```

➡️ हर task के **खत्म होने के बाद 3 सेकंड का delay** होगा।

---

## ❌ Shutdown करना

```java
scheduler.shutdown();  // all scheduled tasks बंद कर देगा
```

---

## 🧠 scheduleAtFixedRate vs scheduleWithFixedDelay

| Feature           | `scheduleAtFixedRate`      | `scheduleWithFixedDelay`               |
| ----------------- | -------------------------- | -------------------------------------- |
| Timing            | Fixed interval से          | पिछले task के खत्म होने के बाद         |
| Task delay impact | अगला task delay हो सकता है | अगला task delay के बाद ही शुरू होता है |
| Use Case          | Consistent timing चाहिए    | Task के बीच fixed gap चाहिए            |

---

## 🧪 Practice Assignments

1. एक task बनाईए जो हर 10 सेकंड पर "Server ping" message print करे
2. एक task बनाईए जो 5 सेकंड delay के बाद एक बार चले
3. एक task बनाईए जो हर बार 2 सेकंड का काम करे और फिर 5 सेकंड बाद दोबारा चले (`scheduleWithFixedDelay`)
4. 3 threads वाला scheduled pool बनाईए और अलग-अलग नाम के tasks चलाइए
5. एक task बनाईए जो system time log करे हर 1 सेकंड पर

---

## 🧠 Interview में पूछा जा सकता है:

* `ScheduledExecutorService` और `TimerTask` में क्या अंतर है?
* Fixed Rate और Fixed Delay में क्या फर्क है?
* क्या scheduled task cancel या reschedule किया जा सकता है?
* क्या ये thread-safe होता है?
