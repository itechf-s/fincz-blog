---
title: "12.3 Thread Pool"
categories: [ Java, Course]
tags: [Basic]
description: "Thread Pool in Java"
date: 2025-06-01T07:00:19+05:30
author: ahmad
type: docs
---

# 📘 **Module 13: Multithreading & Concurrency in Java**

अब हम Java Multithreading का एक और **production-level concept** सीखते हैं —

## 📘 **Thread Pool in Java**

अब हम Java के multithreading system की एक core abstraction को समझते हैं:

## 🔷 1. ExecutorService क्या है?

> `ExecutorService` Java की एक interface है जो task execution को manage करने का **modern और flexible तरीका** देती है।
> ये `Thread` class से अलग है, क्योंकि इसमें thread creation, scheduling, pooling – सब कुछ internally manage होता है।

➡️ यह **Thread Pool mechanism** को control करता है।

---

## 📦 यह interface कहाँ से आती है?

```java
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
```

---

## 🔹 2. ExecutorService बनाना

```java
ExecutorService executor = Executors.newFixedThreadPool(3);
```

➡️ इसमें 3 threads का एक pool होगा, जो tasks को चलाएगा।

---

## 🔧 Common Implementations (Executors class से)

| Method                          | Description                         |
| ------------------------------- | ----------------------------------- |
| `newFixedThreadPool(int n)`     | Fixed size thread pool              |
| `newCachedThreadPool()`         | Dynamic thread creation (on demand) |
| `newSingleThreadExecutor()`     | One thread, all tasks serially      |
| `newScheduledThreadPool(int n)` | Delayed/repeating task scheduling   |

---

## 🧪 Example 1: Runnable Task चलाना

```java
Runnable task = () -> System.out.println("Task executed by " + Thread.currentThread().getName());

ExecutorService executor = Executors.newFixedThreadPool(2);
executor.execute(task);
executor.shutdown();
```

---

## 🧪 Example 2: Callable Task और Result लेना

```java
Callable<Integer> task = () -> {
    Thread.sleep(1000);
    return 42;
};

ExecutorService executor = Executors.newSingleThreadExecutor();
Future<Integer> future = executor.submit(task);

System.out.println("Result: " + future.get()); // blocks until result is ready

executor.shutdown();
```

---

## 🔁 Methods of `ExecutorService`

| Method                            | Description                                     |
| --------------------------------- | ----------------------------------------------- |
| `execute(Runnable)`               | Task run करता है (no return value)              |
| `submit(Runnable/Callable)`       | Task को submit करता है, `Future` return करता है |
| `shutdown()`                      | Gracefully बंद करता है (pending tasks चलते हैं) |
| `shutdownNow()`                   | तुरंत tasks को रोक देता है                      |
| `awaitTermination(timeout, unit)` | रुकता है जब तक सारे tasks complete नहीं हो जाते |
| `isShutdown()`                    | Checks if shutdown requested                    |
| `isTerminated()`                  | Checks if all tasks completed                   |

---

## ⚖️ execute() vs submit()

| Feature            | `execute()` | `submit()`                   |
| ------------------ | ----------- | ---------------------------- |
| Return value       | ❌ नहीं      | ✅ Future object              |
| Exception handling | नहीं        | Catch कर सकते हैं via Future |
| Callable support   | ❌ नहीं      | ✅ हाँ                        |
| Blocking           | नहीं        | Future.get() block करता है   |

---

## ✅ Future Interface

> `Future<T>` एक object होता है जो future में मिलनी वाली value को represent करता है।

```java
Future<String> result = executor.submit(() -> "Done");
System.out.println(result.get()); // Output: Done
```

---

## 🔒 क्यों ExecutorService बेहतर है?

| Feature               | Benefit                          |
| --------------------- | -------------------------------- |
| Resource optimization | Reuse of threads                 |
| Scalability           | Multiple tasks → Limited threads |
| Flexible              | Fixed, cached, single, scheduled |
| Modern                | Better than old `Thread`/`Timer` |

## 🔷 1. Thread Pool क्या होता है?

> Thread Pool एक ऐसा mechanism है जहाँ एक fixed number of threads पहले से ही तैयार रहते हैं।
> जब कोई task आता है, तो pool से कोई **idle thread** उस task को उठा कर execute करता है।

✅ इससे बार-बार नया thread बनाने की जरूरत नहीं पड़ती → **Memory Efficient + Fast + Scalable**

---

## 🔧 Java में Thread Pool कैसे बनता है?

Java में Thread Pool `Executors` class से manage होता है:
(Java 5+ में available – `java.util.concurrent` package)

```java
import java.util.concurrent.*;

ExecutorService pool = Executors.newFixedThreadPool(5);
```

---

## 🔹 Common Thread Pool Types (Executors class के methods)

| Method                      | Description                                         |
| --------------------------- | --------------------------------------------------- |
| `newFixedThreadPool(n)`     | `n` threads वाला fixed pool बनाता है                |
| `newCachedThreadPool()`     | जरूरत पड़ने पर threads बनाता है और reuse करता है    |
| `newSingleThreadExecutor()` | सिर्फ 1 thread वाला pool (serial execution)         |
| `newScheduledThreadPool(n)` | Delayed और repeated task चलाने के लिए (seen before) |

---

## 🔁 Example: Fixed Thread Pool

```java
ExecutorService pool = Executors.newFixedThreadPool(3);

Runnable task1 = () -> System.out.println("Task 1 by " + Thread.currentThread().getName());
Runnable task2 = () -> System.out.println("Task 2 by " + Thread.currentThread().getName());
Runnable task3 = () -> System.out.println("Task 3 by " + Thread.currentThread().getName());
Runnable task4 = () -> System.out.println("Task 4 by " + Thread.currentThread().getName());

pool.execute(task1);
pool.execute(task2);
pool.execute(task3);
pool.execute(task4);

pool.shutdown(); // जरूरी है, नहीं तो program कभी बंद नहीं होगा
```

---

## 🔄 Thread Pool का Flow (Text Diagram):

```
+--------------------+
|  Task Submit होता है |
+--------------------+
          ↓
+----------------------+
| Idle Thread Available? |
+----------------------+
   |         |
  Yes       No
   ↓         ↓
Execute   Queue में चला जाए
   ↓
Task Done → Thread वापस pool में
```

---

## 📊 Thread Pool vs Creating Threads Manually

| Feature      | Thread Pool | Manual Threads       |
| ------------ | ----------- | -------------------- |
| Thread Reuse | ✅ हाँ       | ❌ नहीं               |
| Memory Use   | Efficient   | High                 |
| Scalability  | Easy        | Difficult            |
| Performance  | Fast        | Slow (more overhead) |
| Control      | Better      | Less control         |

---

## 📌 Thread Pool के Important Methods

| Method                      | Use                                           |
| --------------------------- | --------------------------------------------- |
| `execute(Runnable)`         | Task को बिना return value के चलाना            |
| `submit(Runnable/Callable)` | Task को future result के साथ भेजना            |
| `shutdown()`                | Pool को gracefully बंद करना                   |
| `shutdownNow()`             | तुरन्त सारे threads को बंद करता है            |
| `awaitTermination()`        | जब तक सारे tasks खत्म न हो जाएँ, wait करता है |

---

## ✅ `submit()` और `Future`

अगर आप return value चाहते हैं, तो `submit()` और `Callable<T>` interface use करें:

```java
Callable<Integer> task = () -> 10 + 20;

Future<Integer> result = pool.submit(task);
System.out.println("Result: " + result.get()); // 30
```

---

## 🧪 Practice Assignments

1. एक fixed pool बनाईए (size = 3) और 6 tasks चलाइए
2. हर task को एक unique ID दीजिए और उसमें sleep(1-3 sec) डालिए
3. `submit()` का use करके एक task से sum return करवाइए
4. एक task बनाईए जो file को read करे और result return करे (`Callable`)
5. shutdown() के बाद `awaitTermination()` का use करिए

---

## 🧠 Interview Questions

* Thread Pool क्या है और इसके फायदे क्या हैं?
* `execute()` vs `submit()` में क्या फर्क है?
* Cached Thread Pool कब use करना चाहिए?
* क्यों Thread Pool को shutdown करना जरूरी होता है?
* `Future` object का क्या use है?
