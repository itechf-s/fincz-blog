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

### Advanced Java Interview Questions and Very Short Answers for Experienced Software Developers

Here are some advanced Java interview questions along with very short answers that can be helpful for a 12-year software developer:

#### Q1. What are the differences between checked and unchecked exceptions in Java?
Checked exceptions are checked at compile-time and must be declared in a method's signature or caught using a try-catch block. Examples include IOException and SQLException. Unchecked exceptions, also known as runtime exceptions, are not checked at compile-time and do not need to be declared or caught explicitly. Examples include NullPointerException and ArrayIndexOutOfBoundsException.

#### Q2. What is the difference between serialization and externalization in Java?
Serialization is the process of converting an object's state into a byte stream, which can be stored in a file or transmitted over the network. Externalization is a variation of serialization that allows you to have more control over the serialization process by implementing custom readExternal() and writeExternal() methods.

#### Q3. What is the purpose of the transient keyword in Java?
The transient keyword is used to indicate that a variable should not be serialized when an object is serialized. It is often used for variables that contain sensitive or unnecessary data that should not be persisted.

#### Q4. What is the purpose of the volatile keyword in Java?
The volatile keyword is used to indicate that a variable may be modified by multiple threads. It ensures that the variable is always read from and written to the main memory, rather than being cached by each thread, making it suitable for concurrent programming.

#### Q5. What are functional interfaces in Java 8?
Functional interfaces are interfaces that have exactly one abstract method. They are used to define lambda expressions and method references in Java 8's functional programming paradigm. Examples include Runnable, Consumer, and Predicate.

#### Q6. What is the difference between the Comparable and Comparator interfaces?
The Comparable interface is used to define a natural ordering for a class. It allows objects of the class to be compared and sorted based on their natural order. The Comparator interface, on the other hand, allows you to define multiple custom comparison rules for a class. It is useful when you want to sort objects based on different criteria.

#### Q7. What is the difference between an inner class and a static nested class?
An inner class is a non-static class defined inside another class. It has access to the members of the outer class and can be instantiated only with an instance of the outer class. A static nested class, also known as a static inner class, is a static class defined inside another class. It does not have access to the instance members of the outer class and can be instantiated without an instance of the outer class.

#### Q8. What are lambda expressions in Java 8?
Lambda expressions are anonymous functions introduced in Java 8. They allow you to write concise and expressive code by providing a way to pass behavior as a parameter to methods or functions. Lambda expressions are commonly used with functional interfaces and the Stream API.

#### Q9. What is the difference between the default and static methods in interfaces?
Default methods were introduced in Java 8 to allow adding new methods to existing interfaces without breaking the implementations. They have a default implementation in the interface itself. Static methods in interfaces are similar to static methods in classes and can be called directly using the interface name.

#### Java Language Basics
1. What is autoboxing and unboxing?
   - Autoboxing is the automatic conversion of a primitive type to its corresponding wrapper class type. Unboxing is the opposite, converting a wrapper class object to its primitive type.

2. What is the difference between method overloading and method overriding?
   - Method overloading refers to having multiple methods with the same name but different parameters within the same class. Method overriding occurs when a subclass provides its own implementation of a method defined in its superclass.

3. What is a static initializer block?
   - A static initializer block is a block of code inside a class that is executed only once when the class is loaded. It is used to initialize static variables or perform any other one-time initialization.

4. What are varargs in Java?
   - Varargs, short for variable-length arguments, allow a method to accept a variable number of arguments of the same type. They are declared using an ellipsis (...) after the parameter type.

5. What is the difference between shallow copy and deep copy?
   - Shallow copy creates a new object that shares the same memory as the original object. Deep copy creates a completely independent copy of the object with its own memory.

6. What is the purpose of the finalize() method?
   - The finalize() method is called by the garbage collector before an object is garbage collected. It can be overridden to perform any necessary cleanup operations.

7. What is the difference between equals() and == in Java?
   - The equals() method is used to compare the contents of two objects for equality. The == operator compares the references of two objects to check if they point to the same memory location.

8. What is the purpose of the getClass() method?
   - The getClass() method is used to get the runtime class of an object. It returns an instance of the Class class, which provides information about the class's methods, fields, and more.

9. What are inner classes in Java?
   - Inner classes are classes defined within another class. They have access to the members of the outer class and can be instantiated only with an instance of the outer class.

10. What is the purpose of the transient keyword?
    - The transient keyword is used to indicate that a variable should not be serialized when an object is serialized.

#### Object-Oriented Programming (OOP) Concepts

11. What are the four pillars of object-oriented programming?
    - Encapsulation, inheritance, polymorphism, and abstraction.

12. What is encapsulation in Java?
    - Encapsulation is the bundling of data and methods together in a class. It provides data hiding and allows controlled access to the data through methods.

13. What is inheritance in Java?
    - Inheritance is a mechanism that allows classes to inherit properties and behaviors from other classes. It promotes code reuse and supports the concept of "is-a" relationships.

14. What is polymorphism in Java?
    - Polymorphism allows objects of different classes to be treated as objects of a common superclass. It enables objects to take on different forms and behave differently based on the context.

15. What is abstraction in Java?
    - Abstraction is the process of hiding unnecessary details and exposing only the essential features of an object. It is achieved using abstract classes and interfaces.

16. What is the difference between an abstract class and an interface?
    - An abstract class can have both abstract and concrete methods, while an interface can only have abstract methods. A class can extend only one abstract class but can implement multiple interfaces.

17. What is method overriding?
    - Method overriding occurs when a subclass provides its own implementation of a method defined in its superclass. It is used to achieve runtime polymorphism.

18. What is method overloading?
    - Method overloading refers to having multiple methods with the same name but different parameters within the same class. The methods must differ in the number, type, or order of their parameters.

19. What is the difference between composition and inheritance?
    - Composition represents a "has-a" relationship between classes, where one class contains an instance of another class. Inheritance represents an "is-a" relationship between classes, where a subclass inherits properties and behaviors from a superclass.

20. What is the purpose of the final keyword?
    - The final keyword is used to restrict the modification of classes, methods, and variables. A final class cannot be subclassed, a final method cannot be overridden, and a final variable cannot be reassigned.

#### Exception Handling and Multithreading

21. What is an exception in Java?
    - An exception is an event that occurs during the execution of a program, disrupting the normal flow of instructions. It represents an error or an unexpected condition.

22. What is the difference between checked and unchecked exceptions?
    - Checked exceptions are checked at compile-time and must be declared in a method's signature or caught using a try-catch block. Unchecked exceptions, also known as runtime exceptions, are not checked at compile-time and do not need to be declared or caught explicitly.

23. What is the purpose of the try-catch-finally block?
    - The try-catch-finally block is used for exception handling. The code in the try block is executed, and if an exception occurs, it is caught in the catch block. The finally block is always executed, regardless of whether an exception occurred or not.

24. What is the difference between the throw and throws keywords?
    - The throw keyword is used to explicitly throw an exception from a method. The throws keyword is used in the method signature to indicate that the method can throw one or more types of exceptions.

25. What are checked exceptions and why are they called checked?
    - Checked exceptions are exceptions that must be declared in a method's signature or caught using a try-catch block. They are called checked because the compiler checks if they are handled properly.

26. What is a thread in Java?
    - A thread is a lightweight unit of execution within a program. It allows concurrent execution and enables multitasking.

27. What is the difference between a thread and a process?
    - A process is an executing instance of a program, whereas a thread is a single sequence of execution within a process. A process can have multiple threads.

28. What is synchronization in Java?
    - Synchronization is the process of controlling the access to shared resources in a multithreaded environment. It prevents multiple threads from accessing shared resources simultaneously and avoids data inconsistencies.

29. What are the different ways to create a thread in Java?
    - Threads can be created by extending the Thread class, implementing the Runnable interface, or using Java 8's lambda expressions and functional interfaces.

30. What is the purpose of the wait(), notify(), and notifyAll() methods?
    - These methods are used for inter-thread communication in Java. wait() causes the current thread to wait until another thread notifies it, notify() wakes up a single waiting thread, and notifyAll() wakes up all waiting threads.

#### Java Collections Framework

31. What is the Java Collections Framework?
    - The Java Collections Framework provides a set of classes and interfaces for representing and manipulating collections of objects. It includes classes like ArrayList, LinkedList, HashMap, etc.

32. What is the difference between List and Set in Java?
    - List is an ordered collection that allows duplicate elements, while Set is an unordered collection that does not allow duplicate elements.

33. What is the difference between ArrayList and LinkedList?
    - ArrayList is implemented as a resizable array, while LinkedList is implemented as a doubly-linked list. ArrayList provides faster access to elements by index, while LinkedList provides faster insertions and deletions.

34. What is the difference between HashMap and HashTable?
    - HashMap is not synchronized and allows null values, while HashTable is synchronized and does not allow null values. HashMap is preferred for non-thread-safe operations.

35. What is the purpose of the Comparable and Comparator interfaces?
    - The Comparable interface is used to define the natural ordering of objects. The Comparator interface is used to define custom ordering for objects.

36. What is the difference between fail-fast and fail-safe iterators?
    - Fail-fast iterators throw a ConcurrentModificationException if the collection is modified while iterating. Fail-safe iterators work on a copy of the original collection and do not throw an exception.

37. What is the difference between a shallow copy and a deep copy?
    - A shallow copy creates a new object that shares the same memory as the original object. A deep copy creates a completely independent copy with its own memory.

38. What is the purpose of the Iterator and ListIterator interfaces?
    - The Iterator interface is used to traverse a collection in a forward direction. The ListIterator interface extends the Iterator interface and allows bidirectional traversal and modification of a list.

39. What is the purpose of the Comparable and Comparator interfaces?
    - The Comparable interface is used to define the natural ordering of objects. The Comparator interface is used to define custom ordering for objects.

40. What is the purpose of the hashCode() and equals() methods?
    - The hashCode() method is used to generate a unique hash code for an object. The equals() method is used to compare the equality of two objects.

#### Java I/O and Serialization

41. What is serialization in Java?
    - Serialization is the process of converting an object into a byte stream, which can be saved to a file or sent over a network. Deserialization is the reverse process of reconstructing the object from the byte stream.

42. What is the purpose of the java.io package?
    - The java.io package provides classes for performing input and output operations in Java, such as reading from and writing to files, streams, and sockets.

43. What is the difference between Reader/Writer and InputStream/OutputStream in Java I/O?
    - Reader/Writer classes are used for character-oriented I/O, while InputStream/OutputStream classes are used for byte-oriented I/O.

44. What is the purpose of the FileInputStream and FileOutputStream classes?
    - FileInputStream is used to read data from a file as a stream of bytes. FileOutputStream is used to write data to a file as a stream of bytes.

45. What is the purpose of the BufferedReader and BufferedWriter classes?
    - BufferedReader and BufferedWriter provide buffering capabilities to improve the efficiency of reading and writing text data.

46. What is the difference between BufferedReader.readLine() and Scanner.nextLine()?
    - BufferedReader.readLine() reads a line of text as a string, while Scanner.nextLine() reads a line of text and returns it as a string.

47. What is the purpose of the ObjectInputStream and ObjectOutputStream classes?
    - ObjectInputStream is used to read objects from a stream during deserialization. ObjectOutputStream is used to write objects to a stream during serialization.

48. What is the purpose of the Serializable interface?
    - The Serializable interface is a marker interface that indicates a class can be serialized and deserialized. It does not define any methods.

49. What is the purpose of the transient keyword in Java serialization?
    - The transient keyword is used to indicate that a variable should not be serialized. It is useful for excluding sensitive or unnecessary data from serialization.

50. What is the difference between a FileReader and FileInputStream?
    - FileReader is used for reading character data from a file, while FileInputStream is used for reading binary data from a file.

#### JDBC and Database Connectivity

51. What is JDBC?
    - JDBC (Java Database Connectivity) is an API that allows Java programs to interact with databases. It provides a set of classes and interfaces for database connectivity and manipulation.

52. What are the steps involved in establishing a database connection using JDBC?
    - Load the JDBC driver, establish a connection using the DriverManager class, create a Statement or PreparedStatement, execute SQL queries or updates, process the results, and close the connection.

53. What is the difference between Statement and PreparedStatement?
    - Statement is used for executing static SQL statements. PreparedStatement is a precompiled SQL statement that can be parameterized and reused, providing better performance and security.

54. What is connection pooling in JDBC?
    - Connection pooling is a technique of reusing database connections to improve performance. Instead of creating a new connection for every request, a pool of connections is maintained and reused.

55. What is the purpose of the ResultSet interface?
    - The ResultSet interface provides methods to retrieve and manipulate the results of a database query. It represents a set of rows returned by a database query.

56. What is the difference between execute(), executeQuery(), and executeUpdate()?
    - execute() can be used for executing any SQL statement. executeQuery() is used for executing SELECT queries and returns a ResultSet. executeUpdate() is used for executing INSERT, UPDATE, DELETE queries and returns the number of affected rows.

57. What is the purpose of the PreparedStatement.setXXX() methods?
    - The setXXX() methods are used to set values for the parameters in a PreparedStatement. The XXX indicates the data type of the parameter, such as setString(), setInt(), etc.

58. What is SQL injection and how can it be prevented?
    - SQL injection is a security vulnerability where an attacker can manipulate SQL queries by injecting malicious SQL code. It can be prevented by using parameterized queries (PreparedStatement) or by sanitizing and validating user inputs.

59. What is a transaction in the context of database management?
    - A transaction is a unit of work performed on a database. It represents a sequence of operations that must be executed together as a single atomic unit. Transactions ensure data consistency and integrity.

60. What is a database transaction isolation level?
    - Transaction isolation level defines the degree of isolation between concurrent transactions. It determines the level of data visibility and concurrency control in a multi-user database system.

#### Java EE (Enterprise Edition)

61. What is Java EE (Enterprise Edition)?
    - Java EE is a platform for developing enterprise-level applications in Java. It provides a set of APIs, specifications, and runtime environments for building scalable, distributed, and secure applications.

62. What are the core components of Java EE?
    - The core components of Java EE include Java Servlets, JavaServer Pages (JSP), Enterprise JavaBeans (EJB), Java Persistence API (JPA), Java Message Service (JMS), and JavaServer Faces (JSF).

63. What is the purpose of the Java Servlet API?
    - The Java Servlet API provides a framework for developing web applications using the Java programming language. Servlets are server-side components that handle HTTP requests and generate dynamic web content.

64. What is the difference between a Servlet and a JSP?
    - A Servlet is a Java class that handles HTTP requests and generates responses programmatically. A JSP (JavaServer Pages) is an HTML-like document with embedded Java code that is translated into a Servlet before execution.

65. What are the different session management techniques in Java EE?
    - Session management techniques in Java EE include HttpSession (using cookies or URL rewriting), stateful EJBs, and client-side session frameworks like Spring Session or Apache Shiro.

66. What is the purpose of the Java Persistence API (JPA)?
    - The Java Persistence API is a specification for object-relational mapping in Java EE. It provides a set of interfaces and annotations for mapping Java objects to relational databases and performing database operations.

67. What is the difference between EJB and JPA?
    - EJB (Enterprise JavaBeans) is a component architecture for building distributed, scalable, and transactional business applications. JPA (Java Persistence API) is a specification for object-relational mapping. EJB can use JPA for persistence.

68. What is the purpose of the Java Message Service (JMS)?
    - The Java Message Service is an API for asynchronous messaging between distributed applications. It provides a way to send, receive, and process messages between applications using messaging providers.

69. What is the difference between stateful and stateless EJBs?
    - Stateful EJBs maintain conversational state and can have instance variables, while stateless EJBs do not maintain state and are pooled for concurrent processing.

70. What is the purpose of the JavaServer Faces (JSF) framework?
    - JavaServer Faces is a component-based web framework for building user interfaces in Java EE applications. It provides a set of reusable UI components and a model-view-controller architecture.

#### Design Patterns

71. What is a design pattern?
    - A design pattern is a reusable solution to a common software design problem. It provides a proven approach for designing software systems that exhibit certain characteristics or solve specific problems.

72. What is the Singleton design pattern?
    - The Singleton design pattern ensures that a class has only one instance and provides a global point of access to it. It is often used for classes that control access to a shared resource.

73. What is the Factory design pattern?
    - The Factory design pattern provides an interface for creating objects, but allows subclasses to decide which class to instantiate. It encapsulates the object creation logic and promotes loose coupling.

74. What is the Observer design pattern?
    - The Observer design pattern defines a one-to-many dependency between objects. When the state of one object changes, all dependent objects are notified and updated automatically.

75. What is the MVC (Model-View-Controller) design pattern?
    - The MVC design pattern separates an application into three interconnected components: the model (data and business logic), the view (user interface), and the controller (handles user input and updates the model/view).

76. What is the Builder design pattern?
    - The Builder design pattern separates the construction of a complex object from its representation, allowing the same construction process to create different representations. It simplifies the construction of complex objects.

77. What is the Strategy design pattern?
    - The Strategy design pattern allows interchangeable algorithms to be selected at runtime. It encapsulates each algorithm into a separate class, making them interchangeable and easily reusable.

78. What is the Decorator design pattern?
    - The Decorator design pattern dynamically adds new behaviors to an object by wrapping it in an object of a decorator class. It provides a flexible alternative to subclassing for extending functionality.

79. What is the Proxy design pattern?
    - The Proxy design pattern provides a surrogate or placeholder for another object and controls access to it. It allows additional functionality to be added to the object without changing its interface.

80. What is the Template Method design pattern?
    - The Template Method design pattern defines the skeleton of an algorithm in a method, allowing subclasses to provide specific implementations for certain steps. It promotes code reuse and allows variations in behavior.


#### Java Security

81. What is Java Security Manager?
    - Java Security Manager is a part of the Java security architecture that determines the permissions granted to Java code based on a security policy. It controls access to system resources and prevents unauthorized actions.

82. What is the purpose of the java.security package?
    - The java.security package provides classes and interfaces for implementing security features in Java applications. It includes classes for cryptography, secure random number generation, key management, and secure communication.

83. What is encryption and decryption in Java?
    - Encryption is the process of converting plaintext into ciphertext to protect data confidentiality. Decryption is the reverse process of converting ciphertext back to plaintext using a decryption key.

84. What is hashing in Java?
    - Hashing is the process of transforming data into a fixed-size hash value or hash code. It is commonly used for data integrity checks, password storage, and indexing data structures like hash tables.

85. What is the purpose of the SecureRandom class in Java?
    - The SecureRandom class provides a cryptographically strong random number generator in Java. It is suitable for generating random numbers and cryptographic keys.

86. What are access modifiers in Java?
    - Access modifiers control the visibility and accessibility of classes, methods, and variables in Java. The main access modifiers are public, protected, default (no modifier), and private.

87. What is the purpose of the java.security.AccessController class?
    - The AccessController class in Java Security is used to perform privileged actions and control access to sensitive operations or resources. It enables fine-grained access control based on security policies.

88. What are digital signatures in Java?
    - Digital signatures in Java are used to ensure the authenticity and integrity of digital messages or documents. They involve using cryptographic algorithms to sign and verify the signature of data.

89. What is secure coding in Java?
    - Secure coding in Java refers to writing code that is resistant to vulnerabilities and attacks, such as injection attacks, buffer overflows, cross-site scripting, and other security flaws.

90. What is the purpose of the java.security.Principal interface?
    - The Principal interface represents the identity of a user or entity in a Java application. It is used in authentication and authorization processes to determine the permissions and roles associated with the identity.

#### Java Performance Optimization

91. What is performance optimization in Java?
    - Performance optimization in Java involves improving the speed, efficiency, and resource utilization of Java applications. It includes techniques such as code optimization, memory management, and algorithm improvements.

92. What are the different types of garbage collectors in Java?
    - The different types of garbage collectors in Java include the Serial Collector, Parallel Collector, Concurrent Mark-Sweep (CMS) Collector, and Garbage-First (G1) Collector. Each collector uses different algorithms for memory management and garbage collection.

93. What is the purpose of the java.util.concurrent package?
    - The java.util.concurrent package provides classes and interfaces for concurrent programming in Java. It includes thread-safe collections, synchronization utilities, thread pools, and atomic variables.

94. What is the difference between StringBuffer and StringBuilder?
    - StringBuffer is synchronized and thread-safe, while StringBuilder is not synchronized and is more efficient in single-threaded scenarios. StringBuilder should be preferred when thread safety is not required.

95. What is the purpose of the finalize() method in Java?
    - The finalize() method is called by the garbage collector before reclaiming an object's memory. It can be overridden to perform cleanup operations or release resources before an object is garbage collected.

96. What is the difference between stack memory and heap memory in Java?
    - Stack memory is used for storing local variables and method calls, and it is managed by the Java Virtual Machine (JVM). Heap memory is used for dynamic memory allocation and objects, and it is managed by the garbage collector.

97. What is the purpose of the JIT (Just-In-Time) compiler in Java?
    - The JIT compiler in Java is responsible for dynamically translating Java byte code into machine code at runtime. It optimizes the performance of Java programs by analyzing and compiling frequently executed code segments.

98. What are the advantages of using immutable objects in Java?
    - Immutable objects are thread-safe, as they cannot be modified after creation. They simplify concurrency and synchronization, improve security, and allow for safe sharing of objects across multiple threads.

99. What is the purpose of the java.util.concurrent.locks package?
    - The java.util.concurrent.locks package provides classes and interfaces for explicit locking and synchronization in Java. It includes locks, condition variables, and read/write locks for fine-grained control over thread synchronization.

100. What is the difference between a shallow copy and a deep copy in Java?
    - A shallow copy creates a new object that shares the same memory as the original object. A deep copy creates a completely independent copy with its own memory, including recursively copying any referenced objects.