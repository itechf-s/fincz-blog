---
title: "Java Questions and Answers"
categories: [ Spring Boot ]
tags: [Annotations Spring Boot]
description: "Java Project Interview Questions and Answers"
date: 2023-05-18T08:00:00+05:30
images: ["images/2023/05/introduction-java.webp"]
author: ahmad
---

## Java Questions and Answers

### 1. What are the new features introduced in Java 11?

- **Local Variable Syntax for Lambda Parameters:** Allows var to be used as the type of lambda parameters.
- **HTTP Client (Standard)**: Provides a new HTTP client API to handle HTTP requests and responses.
- **Launch Single-File Source-Code Programs**: Enables running a Java source file directly with the `java` command.
- **ZGC: A Scalable Low-Latency Garbage Collector**: A new garbage collector that aims to provide low-latency pause times for large heaps..
- **Flight Recorder**: The Java Flight Recorder (JFR) is now available for use without any additional cost.

### 2. What is the module system introduced in Java 9?
Modules define clear boundaries, and only public APIs are accessible by default. Modules can also declare dependencies on other modules, ensuring a well-defined structure and reducing classpath issues.

### 3. Explain the concept of var in Java 11.

In Java 11, the `var` keyword allows for local variable type inference. It allows you to declare a variable without explicitly specifying its type, letting the compiler infer it based on the assigned value. However, the `var` keyword does not mean dynamic typing; the type is still determined at compile-time.

### 4. What are the differences between `equals()` and `hashCode()` methods?

- `equals()`: It is a method used to compare the equality of two objects in Java. By default, it checks for reference equality

- `hashCode()`: It is a method that returns a hash code value for an object. The `hashCode()` method is used in hash-based data structures like `HashMap` and `HashSet` to determine the object's bucket or location. 

### 5. What is the difference between method overloading and method overriding?

Method Overloading:
- It involves having multiple methods in a class with the same name but different parameters.
- The methods are differentiated based on the number, type, or order of parameters.
- Method overloading is determined at compile-time (static polymorphism).
- Overloaded methods can have different return types.

Method Overriding:
- It involves creating a method in the subclass with the same name and parameters as in the superclass.
- The method in the subclass provides a different implementation of the method defined in the superclass.
- Method overriding is determined at runtime (dynamic polymorphism).
- Overridden methods must have the same return type or a covariant (subclass) return type.

### 6. What is the purpose of the `volatile` keyword in Java?
- It ensures that any thread reading the variable always sees the most up-to-date value.
- The `volatile` keyword is useful in scenarios where multiple threads are accessing a shared variable without synchronization.

### Object-Oriented Programming (OOP) Concepts

#### 1. Encapsulation
Encapsulation is the practice of bundling data and methods together into a single unit called a class. It allows for data hiding and protects the internal state of an object, ensuring that it can only be accessed through defined methods.

#### 2. Inheritance
Inheritance is the mechanism by which one class inherits the properties and behaviors of another class. It enables code reuse and the creation of hierarchical relationships between classes, forming an "is-a" relationship.

#### 3. Polymorphism
Polymorphism allows objects of different classes to be treated as objects of a common superclass. It allows methods to be implemented in different ways in different classes, while still being called using the same interface.

#### 4. Abstraction
Abstraction is the process of simplifying complex systems by breaking them down into smaller, more manageable units. It focuses on the essential features of an object, hiding the unnecessary details and providing a clear and concise representation.

#### 5. Association
Association represents a relationship between two or more objects. It can be a one-to-one, one-to-many, or many-to-many relationship. Objects interact with each other through associations, enabling communication and collaboration.

#### 6. Composition
Composition is a strong form of association where one class is composed of one or more objects of other classes. The composed objects cannot exist independently, and their lifecycle is closely tied to the lifecycle of the containing class.

#### 7. Aggregation
Aggregation is a weaker form of composition where one class is associated with one or more objects of other classes. The associated objects can exist independently and have their lifecycle, even though they are part of the containing class.

#### 8. Interface
An interface defines a contract that classes can implement. It specifies a set of methods that implementing classes must adhere to, providing a way to achieve abstraction and standardization.

### Design Patterns - Short Descriptions

#### 1. Singleton
- Ensures a class has only one instance and provides a global point of access to it.

#### 2. Factory Method
- Defines an interface for creating objects, but allows subclasses to decide which class to instantiate.

#### 3. Abstract Factory
- Provides an interface for creating families of related or dependent objects without specifying their concrete classes.

#### 4. Builder
- Separates the construction of complex objects from their representation, allowing the same construction process to create different representations.

#### 5. Prototype
- Creates new objects by cloning existing ones, allowing the copying of object properties and behaviors.

#### 6. Adapter
- Allows incompatible classes to work together by converting the interface of one class into another expected by the clients.

#### 7. Decorator
- Dynamically adds behavior to an object at runtime by wrapping it in a decorator class.

#### 8. Composite
- Represents a group of objects as a single object, treating both in a uniform manner.

#### 9. Proxy
- Provides a surrogate or placeholder for another object to control its access, add extra functionality, or perform lazy initialization.

#### 10. Observer
- Defines a one-to-many dependency between objects, so that when one object changes its state, all its dependents are notified and updated automatically.

#### 11. Strategy
- Defines a family of algorithms, encapsulates each one, and makes them interchangeable at runtime.

#### 12. Template Method
- Defines the skeleton of an algorithm in a superclass, allowing subclasses to provide specific implementations of certain steps.

#### 13. State
- Allows an object to alter its behavior when its internal state changes, treating each state as an individual class.

#### 14. Facade
- Provides a simplified interface to a complex system, hiding its complexities and improving usability.

#### 15. Command
- Encapsulates a request as an object, allowing parameterization of clients with different requests, queue or log requests, and support undoable operations.

### SOLID Design Principles

SOLID is an acronym that represents a set of five design principles aimed at improving software design and maintainability. Here's a brief description of each principle:

#### 1. Single Responsibility Principle (SRP)
- A class should have only one reason to change.
- It states that a class should have a single responsibility and should be focused on doing one thing well.
- This principle promotes modularity and makes classes easier to understand, test, and maintain.

#### 2. Open/Closed Principle (OCP)
- Software entities (classes, modules, functions) should be open for extension but closed for modification.
- It suggests that code should be written in a way that new functionality can be added without modifying existing code.
- This principle promotes code reusability, maintainability, and allows for easier integration of new features.

#### 3. Liskov Substitution Principle (LSP)
- Subtypes must be substitutable for their base types.
- It ensures that objects of a superclass can be replaced with objects of its subclass without affecting the correctness of the program.
- This principle promotes code reuse and helps maintain a consistent and predictable behavior of objects in a hierarchy.

#### 4. Interface Segregation Principle (ISP)
- Clients should not be forced to depend on interfaces they do not use.
- It suggests that interfaces should be fine-grained and focused on specific client requirements.
- This principle promotes decoupling, modularity, and prevents the problem of "fat" interfaces.

#### 5. Dependency Inversion Principle (DIP)
- High-level modules should not depend on low-level modules; both should depend on abstractions.
- It states that the dependency should be on abstractions rather than concrete implementations.
- This principle promotes loose coupling, flexibility, and facilitates easier unit testing and modular design.
