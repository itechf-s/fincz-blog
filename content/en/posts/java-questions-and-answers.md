---
title: "Java Questions and Answers"
categories: [ Spring Boot ]
tags: [Annotations Spring Boot]
description: "Java Project Interview Questions and Answers"
date: 2023-05-18T08:00:00+05:30
images: ["images/2021/10/all-calculator.png"]
author: ahmad
---
## Java Project Interview Questions and Answers

### 1. What are the new features introduced in Java 11?

Java 11 introduced several new features and enhancements. Some of the key features include:

- **Local Variable Syntax for Lambda Parameters:** Allows var to be used as the type of lambda parameters.
- **HTTP Client (Standard)**: Provides a new HTTP client API to handle HTTP requests and responses.
- **Nest-Based Access Control**: Introduces a new access control model for nested classes.
- **Launch Single-File Source-Code Programs**: Enables running a Java source file directly with the `java` command.
- **ZGC: A Scalable Low-Latency Garbage Collector**: A new garbage collector that aims to provide low-latency pause times for large heaps.
- **Epsilon: A No-Op Garbage Collector**: A garbage collector that performs no actual garbage collection, useful for performance testing.
- **Flight Recorder**: The Java Flight Recorder (JFR) is now available for use without any additional cost.
- **Dynamic Class-File Constants**: Enables loading constant variables into classes at runtime.

### 2. What is the module system introduced in Java 9?

Java 9 introduced the Java Platform Module System (JPMS) to modularize the Java SE platform and applications. The module system provides a way to encapsulate code and its dependencies, improving maintainability and performance. Modules define clear boundaries, and only public APIs are accessible by default. Modules can also declare dependencies on other modules, ensuring a well-defined structure and reducing classpath issues.

### 3. Explain the concept of var in Java 11.

In Java 11, the `var` keyword allows for local variable type inference. It allows you to declare a variable without explicitly specifying its type, letting the compiler infer it based on the assigned value. However, the `var` keyword does not mean dynamic typing; the type is still determined at compile-time.

For example:
```java
var name = "John"; // Infers the type as String
var numbers = List.of(1, 2, 3); // Infers the type as List<Integer>
```

Using `var` can enhance code readability by reducing repetition, especially when the type is obvious from the context.

### 4. How does the new HTTP Client API in Java 11 differ from HttpURLConnection?

The new HTTP Client API introduced in Java 11 provides a more modern and flexible approach to making HTTP requests. Here are some differences compared to HttpURLConnection:

- **Asynchronous Support:** The new API offers asynchronous execution with CompletableFuture, allowing non-blocking requests.
- **Simplified Request/Response Handling:** The API provides a fluent and intuitive way to build requests and process responses.
- **HTTP/2 and WebSocket Support:** The new client supports HTTP/2 and WebSocket protocols out of the box.
- **Better Performance and Concurrency:** The new client is designed to be more performant and efficient, especially for high-concurrency scenarios.
- **Built-in Authentication and Cookies:** The API simplifies handling authentication and cookie management.
- **Customization and Extensibility:** The new API provides more options for customization and extension, making it easier to adapt to specific requirements.

### 5. What are the benefits of using ZGC as a garbage collector in Java 11?

ZGC is a low-latency garbage collector introduced in Java 11. It offers several benefits, including:

- **Low Pause Times:** ZGC aims to keep pause times within a few milliseconds, regardless of the heap size.
- **Scalability:** It is designed to handle multi-terabyte heaps, making it suitable for large-scale applications.
- **Concurrent Garbage Collection:** Most of the garbage collection work is performed concurrently with

### 6. Explain the difference between `ArrayList` and `LinkedList` in Java.

- `ArrayList`: It is a dynamic array implementation that provides fast random access and retrieval of elements. It uses an underlying array to store elements and automatically resizes when needed. However, inserting or deleting elements in the middle of an `ArrayList` can be slower due to the need for shifting elements.

- `LinkedList`: It is a doubly-linked list implementation that allows efficient insertion and deletion of elements at both ends. However, random access and retrieval of elements in a `LinkedList` are slower compared to an `ArrayList`. `LinkedList` is preferred when frequent insertions and deletions are required.

### 7. What are the differences between `equals()` and `hashCode()` methods?

- `equals()`: It is a method used to compare the equality of two objects in Java. By default, it checks for reference equality (i.e., if the references point to the same memory location). However, it is often overridden in classes to provide a custom definition of equality based on object properties.

- `hashCode()`: It is a method that returns a hash code value for an object. The `hashCode()` method is used in hash-based data structures like `HashMap` and `HashSet` to determine the object's bucket or location. It should be implemented consistently with the `equals()` method, such that objects with the same equality return the same hash code.
