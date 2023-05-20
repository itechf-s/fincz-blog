---
title: "Frequently Used Annotations in Spring Boot"
categories: [ Spring Boot ]
tags: [Annotations Spring Boot]
description: "Frequently Used Annotations in Spring Boot"
date: 2023-05-18T08:00:00+05:30
images: ["images/2021/10/all-calculator.png"]
author: ahmad
---

## Frequently Used Annotations in Spring Boot

When it comes to developing applications using Spring Boot, there are several annotations that are commonly used. Here are some of the most frequently used annotations in Spring Boot:

### 1. `@RestController`
The `@RestController` annotation is used to define a class as a RESTful controller. It combines the `@Controller` and `@ResponseBody` annotations, making it easier to create RESTful APIs.

### 2. `@RequestMapping`
The `@RequestMapping` annotation is used to map HTTP requests to specific controller methods. It allows you to define the URL path and HTTP method for handling the requests.

### 3. `@Autowired`
The `@Autowired` annotation is used for automatic dependency injection. It tells Spring to automatically wire up the dependencies required by a class, eliminating the need for manual wiring.

### 4. `@Service`
The `@Service` annotation is used to mark a class as a service component in the business layer. It serves as a specialization of the `@Component` annotation, indicating that the class performs a service task.

### 5. `@Repository`
The `@Repository` annotation is used to mark a class as a repository component in the persistence layer. It is used to perform database operations and provides exception translation.

### 6. `@Component`
The `@Component` annotation is the most generic annotation for a Spring component. It is used to mark a class as a Spring-managed component and enables autodetection and autowiring capabilities.

### 7. `@Configuration`
The `@Configuration` annotation is used to declare a class as a configuration class. It is often used in conjunction with `@Bean` methods to define and configure beans in the Spring application context.

### 8. `@Bean`
The `@Bean` annotation is used to declare a method that produces a bean to be managed by the Spring container. It is typically used within `@Configuration` classes to define custom beans.

### 9. `@Value("${property.name}")`
The `@Value` annotation can be used to inject values from properties files or environment variables into fields or method parameters. It allows you to externalize configuration values and inject them into your application.

### 10. `@Transactional`
The `@Transactional` annotation is used to define the scope of a transactional method. It ensures that the method is executed within a transaction, providing data integrity and consistency.

### 11. `@PathVariable`
The `@PathVariable` annotation is used to extract values from the URI path and map them to method parameters. It allows you to handle dynamic values in the URL and use them in your controller methods.

### 12. `@RequestBody`
The `@RequestBody` annotation is used to bind the HTTP request body to a method parameter. It is commonly used in RESTful APIs to extract and parse JSON or XML data sent in the request body.

### 13. `@GetMapping`, `@PostMapping`, `@PutMapping`, `@DeleteMapping`
These annotations are shortcuts for the commonly used HTTP methods: GET, POST, PUT, and DELETE, respectively. They combine the `@RequestMapping` annotation with the respective HTTP method, making it easier to define the endpoint mappings.

### 14. `@ExceptionHandler`
The `@ExceptionHandler` annotation is used to define a method that handles exceptions thrown within a specific controller or across the entire application. It allows you to customize the error handling and provide appropriate responses.

### 15. `@Valid`
The `@Valid` annotation is used in conjunction with JSR-303 validation annotations, such as `@NotBlank` or `@NotNull`, to validate method parameters or request payloads. It ensures that the provided data meets the specified validation constraints.

### 16. `@Async`
The `@Async` annotation is used to mark a method as asynchronous. It allows the method to be executed in a separate thread, enabling concurrent processing and improved performance.

### 17. `@Cacheable`, `@CachePut`, `@CacheEvict`
These annotations are used to enable caching in Spring Boot applications. `@Cacheable` is used to cache the result of a method, `@CachePut` updates the cache with the method result, and `@CacheEvict` is used to remove entries from the cache.

### 18. `@Scheduled`
The `@Scheduled` annotation is used to schedule the execution of a method at fixed intervals or specific times. It is commonly used for tasks such as periodic data updates, sending emails, or generating reports.

### 19. `@ConditionalOnProperty`
The `@ConditionalOnProperty` annotation allows you to conditionally enable or disable a configuration or bean based on the presence or value of a specified property in the application's configuration files.

### 20. `@CrossOrigin`
The `@CrossOrigin` annotation is used to enable cross-origin resource sharing (CORS) for specific controller methods or the entire controller. It allows you to control the access permissions for web resources from different domains.

### 21. `@EnableCaching`
The `@EnableCaching` annotation is used to enable the caching support in Spring Boot applications. It must be placed on a configuration class to enable caching capabilities.

### 22. `@ModelAttribute`
The `@ModelAttribute` annotation is used to bind method parameters to model attributes. It is commonly used in Spring MVC applications to populate model attributes before rendering a view.

### 23. `@EnableScheduling`
The `@EnableScheduling` annotation is used to enable scheduling support in Spring Boot applications. It must be placed on a configuration class to enable the scheduling of annotated methods.

### 24. `@Entity`
The `@Entity` annotation is used to mark a class as an entity in JPA (Java Persistence API). It is typically used in conjunction with Spring Data JPA to map Java objects to database tables.

### 25. `@Conditional`
The `@Conditional` annotation is used to conditionally enable or disable a configuration or bean based on a specified condition. It allows you to define custom conditions for configuration or bean creation.

### 26. `@ExceptionHandler`
The `@ExceptionHandler` annotation is used to define a method that handles exceptions thrown within a controller. It allows you to handle specific exceptions and provide custom error responses.

### 27. `@RestControllerAdvice`
The `@RestControllerAdvice` annotation is used to define a global exception handler for all controllers in the application. It allows you to centralize exception handling logic and provide consistent error responses.

### 28. `@RepositoryRestResource`
The `@RepositoryRestResource` annotation is used to customize the RESTful endpoints exposed by a Spring Data repository. It allows you to specify custom paths, modify endpoint behavior, and more.

### 29. `@Transactional(propagation = Propagation.REQUIRED)`
The `@Transactional` annotation can also have the `propagation` attribute, which defines the propagation behavior of the transaction. Setting it to `Propagation.REQUIRED` specifies that the method should be executed within a transaction, and if a transaction doesn't exist, a new one will be created.

### 30. `@ConfigurationProperties`
The `@ConfigurationProperties` annotation is used to bind external configuration properties to a Java class. It allows you to easily map properties from property files, environment variables, or command-line arguments to fields in your configuration class.

### 31. `@Validated`
The `@Validated` annotation is used to trigger the validation of method parameters or class-level constraints using JSR-303 or JSR-349 validation annotations. It is commonly used to ensure that input data meets specific validation rules.

### 32. `@Async`
The `@Async` annotation is used to mark a method as asynchronous. It allows the method to be executed in a separate thread, improving performance by enabling concurrent processing.

### 33. `@EventListener`
The `@EventListener` annotation is used to mark a method as an event listener. It allows you to handle application events published by the Spring application context or custom events defined in your application.

### 34. `@EnableAutoConfiguration`
The `@EnableAutoConfiguration` annotation is used to enable Spring Boot's auto-configuration mechanism. It automatically configures the application based on the classpath dependencies and the configuration properties.

### 35. `@EnableSwagger2`
The `@EnableSwagger2` annotation is used to enable Swagger 2 documentation in a Spring Boot application. It provides automatic generation of API documentation based on the code and annotations in your controllers.

### 36. `@ConditionalOnBean`
The `@ConditionalOnBean` annotation is used to conditionally enable or disable a configuration or bean based on the presence of specific beans in the application context. It allows you to control the configuration based on the availability of other beans.

### 37. `@FeignClient`
The `@FeignClient` annotation is used in combination with Spring Cloud OpenFeign to create a declarative REST client. It allows you to easily define interfaces and make HTTP requests to other microservices.

### 38. `@Retryable`
The `@Retryable` annotation is used to automatically retry a method in case of failures. It allows you to configure the number of retries, backoff intervals, and exception types to consider for retry.

### 39. `@EnableZuulProxy`
The `@EnableZuulProxy` annotation is used to enable the Zuul API gateway in a Spring Boot application. It automatically configures the necessary components for routing and filtering of incoming requests.

### 40. `@ConfigurationPropertiesBinding`
The `@ConfigurationPropertiesBinding` annotation is used to create a custom converter for binding configuration properties to a specific type. It allows you to define how properties should be converted to the desired type.

### 41. `@EntityScan`
The `@EntityScan` annotation is used to specify the base packages to scan for entity classes. It is often used when entity classes are located in different packages than the main application class.

### 42. `@EnableJpaRepositories`
The `@EnableJpaRepositories` annotation is used to enable JPA repositories in Spring Boot applications. It scans for repository interfaces and automatically creates repository bean instances.

### 43. `@EnableTransactionManagement`
The `@EnableTransactionManagement` annotation is used to enable Spring's transaction management capabilities. It allows you to annotate methods with `@Transactional` and manage database transactions effectively.

### 44. `@Test`
The `@Test` annotation is used in unit testing with frameworks like JUnit. It marks a method as a test method, allowing it to be executed as part of the test suite.

### 45. `@MockBean`
The `@MockBean` annotation is used in unit testing to mock dependencies of a Spring component. It allows you to replace a real bean with a mock implementation for isolated testing.

### 46. `@WebMvcTest`
The `@WebMvcTest` annotation is used for testing Spring MVC controllers. It loads only the web layer components, allowing you to focus on testing the controller's behavior.

### 47. `@Data`
The `@Data` annotation is provided by the Lombok library and is used to automatically generate boilerplate code, such as getters, setters, and toString methods, for a class.

### 48. `@ConfigurationPropertiesScan`
The `@ConfigurationPropertiesScan` annotation is used to enable scanning of `@ConfigurationProperties` annotated classes. It allows you to use the `@ConfigurationProperties` annotation without explicitly defining each class in the configuration.

### 49. `@EnableCircuitBreaker`
The `@EnableCircuitBreaker` annotation is used to enable the circuit breaker pattern in a Spring Boot application. It integrates with libraries like Hystrix to provide fault tolerance and resilience to distributed systems.

### 50. `@IntegrationComponentScan`
The `@IntegrationComponentScan` annotation is used to enable component scanning for Spring Integration components, such as message channels, message handlers, and gateways.

### 51. `@Scheduled(cron = "*/5 * * * * *")`
The `@Scheduled` annotation also supports cron expressions. You can specify a cron expression using the `cron` attribute to schedule a method to run at specific times or intervals.

### 52. `@EnableJms`
The `@EnableJms` annotation is used to enable Java Message Service (JMS) functionality in a Spring Boot application. It configures the necessary components to send and receive messages using JMS.
