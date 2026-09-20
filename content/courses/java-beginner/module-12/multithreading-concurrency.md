---
title: "12.1 Multithreading & Concurrency"
categories: [ Java, Course]
tags: [Basic]
description: "Multithreading & Concurrency in Java"
date: 2025-06-01T07:00:21+05:30
images: ["images/2025/06/multithreading-concurrency.webp"]
author: ahmad
type: docs
---

अब हम Java के एक powerful और advanced topic पर आते हैं, जो real-world applications (जैसे: gaming, banking, server apps) में बहुत काम आता है —

---

## 🔷 1. Multithreading क्या है?

> Java में **Multithreading** का मतलब है: एक ही प्रोग्राम के अंदर **multiple tasks को एक साथ** (concurrently) execute करना।

👉 हर "Thread" एक independent task होता है जो CPU का हिस्सा लेकर चलता है।

---

## 🔍 Multitasking vs Multithreading

| Feature    | Multitasking (OS Level) | Multithreading (Java) |
| ---------- | ----------------------- | --------------------- |
| Units      | Multiple processes      | Multiple threads      |
| Memory Use | High                    | Low (shared memory)   |
| Speed      | Slower                  | Faster (lightweight)  |

---

## 🔷 2. Thread कैसे बनाते हैं?

Java में thread बनाने के दो तरीके हैं:

### ✅ Method 1: Thread class extend करना

```java
class MyThread extends Thread {
    public void run() {
        System.out.println("Thread is running...");
    }
}

public class Demo {
    public static void main(String[] args) {
        MyThread t1 = new MyThread();
        t1.start();  // run() method internally call होता है
    }
}
```

---

### ✅ Method 2: Runnable interface implement करना

```java
class MyRunnable implements Runnable {
    public void run() {
        System.out.println("Runnable thread running...");
    }
}

public class Demo {
    public static void main(String[] args) {
        Thread t1 = new Thread(new MyRunnable());
        t1.start();
    }
}
```

➡️ ये तरीका ज़्यादा flexible होता है क्योंकि Java में multiple inheritance allowed नहीं है।

---

## 🧠 Thread vs Runnable

| Criteria    | Thread Class           | Runnable Interface             |
| ----------- | ---------------------- | ------------------------------ |
| Extends     | `Thread`               | `Object` class (more free)     |
| Inheritance | Already extends Thread | Allows extending another class |
| Preferred   | Less                   | ✅ More flexible & clean        |

---

## 🔁 Common Thread Methods

| Method      | Description                                         |
| ----------- | --------------------------------------------------- |
| `start()`   | Thread शुरू करता है (internally run() call करता है) |
| `run()`     | Task define करता है                                 |
| `sleep(ms)` | Thread को रोकता है (pause)                          |
| `join()`    | एक thread को दूसरे का इंतज़ार कराता है              |
| `isAlive()` | Check करता है कि thread अभी चल रहा है या नहीं       |

---

### ✅ Example: `sleep()` और `join()`

```java
class MyThread extends Thread {
    public void run() {
        for (int i = 1; i <= 5; i++) {
            System.out.println(i);
            try {
                Thread.sleep(1000);  // 1 second pause
            } catch (Exception e) {
                System.out.println(e);
            }
        }
    }
}
```

---

## ⚠️ 3. Concurrency Problems

कई threads जब एक ही data पर काम करते हैं, तो ये problems आ सकती हैं:

* **Race Condition**
* **Data Inconsistency**
* **Deadlock**

---

## 🔐 4. Synchronization

> जब multiple threads एक shared resource को access करें, तो हम **synchronized** keyword का use करते हैं ताकि एक बार में सिर्फ एक thread ही उसे access कर सके।

### ✅ Example:

```java
class Bank {
    synchronized void withdraw(int amount) {
        // critical section
    }
}
```

---

## 🧱 5. Thread Priority

Java में हर thread की एक priority होती है (1 to 10)।
Default priority होती है: **5**

```java
t1.setPriority(8);
```

---

## 📊 Thread Lifecycle Diagram (Text version)

```
+------------+     start()     +-----------+   sleep()/wait()   +-------------+
|  New       | ─────────────▶ | Runnable  | ──────────────────▶ | Blocked     |
+------------+                +-----------+                     +-------------+
                                  │                                  ▲
                                  ▼ run()                            │ notify()
                             +-----------+    terminates            │
                             | Running   | ───────────────────────▶ +-------------+
                             +-----------+                          | Terminated  |
                                                                    +-------------+
```

---

## 🧪 Practice Assignments

1. एक thread class बनाइए जो 1 से 10 तक नंबर print करे
2. दो threads बनाईए: एक vowels print करे, दूसरा consonants
3. Runnable interface use करके multithreaded countdown बनाईए
4. एक shared bank balance class बनाईए और synchronized block use कीजिए
5. दो threads को sleep() के साथ चलाइए और join() से एक को wait कराइए

---

## 🧠 Interview Questions

* Thread बनाने के दो तरीके क्या हैं?
* Thread class vs Runnable interface
* Race condition क्या होती है?
* Synchronization क्यों ज़रूरी है?
* `sleep()` vs `wait()` में क्या फर्क है?
