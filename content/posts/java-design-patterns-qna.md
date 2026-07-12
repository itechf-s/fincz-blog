---
title: "Top 10 Java Design Patterns for Senior Developers"
categories: [ "Java", "Interview" ]
tags: ["Java", "Design Patterns", "OOP", "Interview"]
description: "A practical guide to the most common Java design patterns with real-world business use cases from the insurance domain, perfect for senior developer interviews."
date: 2024-05-20T08:00:00+05:30
lastmod: 2026-07-11T08:00:00+05:30
images: ["images/2024/05/java-design-patterns.png"]
author: ahmad
---

## Top 10 Java Design Patterns for Senior Developers

Design patterns are reusable, proven solutions to commonly occurring problems within a given context in software design. For senior developers, a deep understanding of these patterns is crucial for building scalable, maintainable, and flexible applications.

---

## Creational Patterns

Creational patterns provide various object creation mechanisms, which increase flexibility and reuse of existing code.

### 1. Singleton Pattern
**Intent:** Ensures a class has only one instance and provides a global point of access to it.

**Business Use Case:** "Our application needs a single, globally accessible object to manage application-level configuration that is loaded once at startup. We must ensure no more than one instance of this configuration manager is ever created."

**Implementation:** The modern, recommended way to implement a thread-safe Singleton in Java is using an `enum`. It's concise and handles serialization and thread-safety issues automatically.

```java
/**
 * Enum-based Singleton is the most robust way to implement this pattern.
 * It handles thread-safety and serialization issues out of the box.
 */
public enum ConfigurationManager {
    INSTANCE; // The single, globally accessible instance

    private String databaseUrl;

    // The constructor is implicitly private
    private ConfigurationManager() {
        // Load configuration from a file or other source
        this.databaseUrl = "jdbc:postgresql://prod.db.server:5432/claims_db";
        System.out.println("ConfigurationManager initialized.");
    }

    public String getDatabaseUrl() {
        return databaseUrl;
    }
}
```

### 2. Factory Method Pattern
**Intent:** Defines an interface for creating an object but lets subclasses decide which class to instantiate.

**Business Use Case:** "Our application needs to create different types of `Claim` objects (`MedicalClaim`, `DentalClaim`, `VisionClaim`) based on an input string. We want to avoid a large `if-else` block in our service class."

**Implementation:** A factory encapsulates the creation logic, decoupling the client (the service) from the concrete classes.

```java
public interface Claim {
    void process();
}

public class MedicalClaim implements Claim {
    public void process() { System.out.println("Processing Medical Claim..."); }
}

public class DentalClaim implements Claim {
    public void process() { System.out.println("Processing Dental Claim..."); }
}

public class ClaimFactory {
    public static Claim createClaim(String claimType) {
        if ("MEDICAL".equalsIgnoreCase(claimType)) {
            return new MedicalClaim();
        } else if ("DENTAL".equalsIgnoreCase(claimType)) {
            return new DentalClaim();
        }
        throw new IllegalArgumentException("Unknown claim type: " + claimType);
    }
}

// Client code
// Claim medicalClaim = ClaimFactory.createClaim("MEDICAL");
// medicalClaim.process();
```

### 3. Builder Pattern
**Intent:** Separates the construction of a complex object from its representation, so that the same construction process can create different representations.

**Business Use Case:** "We need to create a `Policy` object that has many optional configuration parameters, like `deductible`, `copay`, `outOfPocketMax`, and `isPpoPlan`. We want to avoid a constructor with a long list of parameters (a 'telescoping constructor')."

**Implementation:** The Builder pattern provides a fluent API for constructing objects step-by-step, improving readability.

```java
public class Policy {
    private final String policyId; // required
    private final String memberId; // required
    private final double deductible; // optional
    private final double copay;      // optional

    private Policy(Builder builder) {
        this.policyId = builder.policyId;
        this.memberId = builder.memberId;
        this.deductible = builder.deductible;
        this.copay = builder.copay;
    }

    // Static nested Builder class
    public static class Builder {
        private final String policyId;
        private final String memberId;
        private double deductible = 0.0;
        private double copay = 0.0;

        public Builder(String policyId, String memberId) {
            this.policyId = policyId;
            this.memberId = memberId;
        }

        public Builder withDeductible(double deductible) {
            this.deductible = deductible;
            return this; // Return builder for chaining
        }

        public Builder withCopay(double copay) {
            this.copay = copay;
            return this;
        }

        public Policy build() {
            return new Policy(this);
        }
    }
}

// Client code
// Policy policy = new Policy.Builder("POL123", "MEM456")
//                         .withDeductible(1000.0)
//                         .withCopay(25.0)
//                         .build();
```

---

## Structural Patterns

Structural patterns explain how to assemble objects and classes into larger structures while keeping these structures flexible and efficient.

### 4. Adapter Pattern
**Intent:** Allows objects with incompatible interfaces to collaborate.

**Business Use Case:** "Our system uses a standard `IProviderValidator` interface. We need to integrate with a new, third-party validation service that has a completely different API (e.g., its method is named `verifyProvider(String npi)` instead of `isValid(Provider provider)`). We don't want to change our existing code."

**Implementation:** The Adapter acts as a bridge between our interface and the third-party service's interface.

```java
// Our existing interface
public interface IProviderValidator {
    boolean isValid(String providerId);
}

// The third-party service we can't change
public class ExternalProviderVerifier {
    public boolean check(String npi) {
        // ... logic to verify provider
        return true;
    }
}

// The Adapter class
public class ProviderVerifierAdapter implements IProviderValidator {
    private final ExternalProviderVerifier externalVerifier = new ExternalProviderVerifier();

    @Override
    public boolean isValid(String providerId) {
        // Adapts our method call to the external service's method call
        return externalVerifier.check(providerId);
    }
}
```

### 5. Decorator Pattern
**Intent:** Attaches new behaviors to objects by placing them inside special wrapper objects that contain the behaviors.

**Business Use Case:** "We have a base `Policy` object. We want to dynamically add optional coverages like 'Dental Coverage' or 'Vision Coverage' at runtime. Each added coverage modifies the final premium calculation."

**Implementation:** Decorators wrap the base object, adding new functionality while maintaining the same interface.

```java
public interface Policy {
    double getPremium();
}

public class BasicHealthPolicy implements Policy {
    @Override
    public double getPremium() {
        return 500.0;
    }
}

// Abstract Decorator
public abstract class PolicyDecorator implements Policy {
    protected Policy decoratedPolicy;

    public PolicyDecorator(Policy decoratedPolicy) {
        this.decoratedPolicy = decoratedPolicy;
    }

    public double getPremium() {
        return decoratedPolicy.getPremium();
    }
}

// Concrete Decorator
public class DentalCoverageDecorator extends PolicyDecorator {
    public DentalCoverageDecorator(Policy decoratedPolicy) {
        super(decoratedPolicy);
    }

    @Override
    public double getPremium() {
        return super.getPremium() + 75.0; // Add cost of dental coverage
    }
}

// Client code
// Policy myPolicy = new BasicHealthPolicy();
// myPolicy = new DentalCoverageDecorator(myPolicy); // Wrap it
// System.out.println("Total Premium: " + myPolicy.getPremium()); // Outputs 575.0
```

### 6. Facade Pattern
**Intent:** Provides a simplified, unified interface to a complex subsystem of classes.

**Business Use Case:** "Submitting a new claim is a complex process that involves multiple services: `MemberService` (to check eligibility), `ProviderService` (to validate the provider), and `AdjudicationService` (to process the claim). We want to provide a single, simple method for clients to submit a claim without needing to know about all these internal services."

**Implementation:** The Facade hides the complexity of the subsystem behind a simple interface.

```java
// Complex Subsystem
class MemberService { public boolean isEligible(String memberId) { return true; } }
class ProviderService { public boolean isValid(String providerId) { return true; } }
class AdjudicationService { public void adjudicate(Claim claim) { /* ... */ } }

// The Facade
public class ClaimSubmissionFacade {
    private MemberService memberService = new MemberService();
    private ProviderService providerService = new ProviderService();
    private AdjudicationService adjudicationService = new AdjudicationService();

    public void submitClaim(Claim claim) {
        if (memberService.isEligible(claim.getMemberId()) && providerService.isValid(claim.getProviderId())) {
            adjudicationService.adjudicate(claim);
            System.out.println("Claim submitted successfully.");
        } else {
            System.out.println("Claim submission failed validation.");
        }
    }
}
```

### 8. Proxy Pattern
**Intent:** Provide a surrogate or placeholder for another object to control access to it.

**Business Use Case:** "We have a `Claim` object that contains a large list of historical notes, which are expensive to load from the database. We only want to load these notes when a user actually clicks on the 'View Notes' button. How can we implement this lazy loading?"

**Implementation:** A `ClaimProxy` can be used. The client interacts with the proxy, which has the same interface as the real `Claim` object. The proxy only loads the expensive notes when the `getNotes()` method is called for the first time.

```java
public interface IClaim {
    String getId();
    List<String> getNotes();
}

// The real, heavy object
public class RealClaim implements IClaim {
    private String id;
    private List<String> notes;

    public RealClaim(String id) {
        this.id = id;
        loadNotesFromDatabase(); // Expensive operation
    }

    private void loadNotesFromDatabase() {
        System.out.println("Fetching notes for claim " + id + " from DB...");
        this.notes = Arrays.asList("Note 1", "Note 2");
    }

    @Override
    public String getId() { return id; }
    @Override
    public List<String> getNotes() { return notes; }
}

// The Proxy object
public class ClaimProxy implements IClaim {
    private String id;
    private RealClaim realClaim; // The proxy holds a reference to the real object

    public ClaimProxy(String id) { this.id = id; }

    @Override
    public String getId() { return id; }

    @Override
    public List<String> getNotes() {
        if (realClaim == null) { // Lazy initialization
            this.realClaim = new RealClaim(this.id);
        }
        return realClaim.getNotes();
    }
}
```


## Behavioral Patterns

Behavioral patterns are concerned with algorithms and the assignment of responsibilities between objects.

### 9. Strategy Pattern
**Intent:** Defines a family of algorithms, encapsulates each one, and makes them interchangeable.

**Business Use Case:** "Our application needs to support multiple payment calculation methods for claims (e.g., `PPOPaymentStrategy`, `HMOOaymentStrategy`), each with different logic. We want to select the correct strategy at runtime based on the member's plan."

**Implementation:** This allows the `ClaimProcessor` to use a payment strategy without being coupled to its specific implementation.

```java
public interface PaymentCalculationStrategy {
    double calculate(Claim claim);
}

public class PpoPaymentStrategy implements PaymentCalculationStrategy {
    public double calculate(Claim claim) { return claim.getBilledAmount() * 0.8; } // 80% coverage
}

public class HmoPaymentStrategy implements PaymentCalculationStrategy {
    public double calculate(Claim claim) { return claim.getBilledAmount() * 0.9; } // 90% coverage
}

public class ClaimProcessor {
    private PaymentCalculationStrategy strategy;

    public void setStrategy(PaymentCalculationStrategy strategy) {
        this.strategy = strategy;
    }

    public double processPayment(Claim claim) {
        return strategy.calculate(claim);
    }
}
```

### 8. Observer Pattern
**Intent:** Defines a one-to-many dependency between objects so that when one object (the subject) changes state, all its dependents (observers) are notified and updated automatically.

**Business Use Case:** "When a claim's status changes to 'Approved', we need to notify multiple downstream systems: the `PaymentService`, the `NotificationService` (to email the member), and an `AuditService`. We want to do this without tightly coupling the `Claim` service to all these other services."

**Implementation:** The `Claim` object is the "Subject". The other services are "Observers" that register to receive updates.

```java
import java.util.ArrayList;
import java.util.List;

// Observer interface
interface ClaimObserver {
    void update(Claim claim);
}

// Subject
class Claim {
    private List<ClaimObserver> observers = new ArrayList<>();
    private String status;

    public void addObserver(ClaimObserver observer) {
        observers.add(observer);
    }

    public void setStatus(String status) {
        this.status = status;
        notifyObservers();
    }

    private void notifyObservers() {
        for (ClaimObserver observer : observers) {
            observer.update(this);
        }
    }
}

// Concrete Observer
class AuditService implements ClaimObserver {
    @Override
    public void update(Claim claim) {
        System.out.println("AUDIT: Claim status changed to " + claim.status);
    }
}
```

### 11. Template Method Pattern
**Intent:** Defines the skeleton of an algorithm in a base class but lets subclasses override specific steps of the algorithm without changing its structure.

**Business Use Case:** "All claim processing follows the same high-level steps: 1) Validate, 2) Price, 3) Apply Benefits. However, the specific implementation of each step is different for `DentalClaim` and `MedicalClaim`. We want to enforce this workflow while allowing for specific implementations."

**Implementation:** An abstract base class defines the template method (`processClaim`), and abstract methods for the steps that subclasses must implement.

```java
public abstract class ClaimProcessorTemplate {
    // The template method - final to prevent overriding
    public final void processClaim(Claim claim) {
        validate(claim);
        price(claim);
        applyBenefits(claim);
        System.out.println("Claim processing complete.");
    }

    // Steps to be implemented by subclasses
    protected abstract void validate(Claim claim);
    protected abstract void price(Claim claim);
    protected abstract void applyBenefits(Claim claim);
}

public class DentalClaimProcessor extends ClaimProcessorTemplate {
    @Override
    protected void validate(Claim claim) { System.out.println("Validating dental-specific rules..."); }
    @Override
    protected void price(Claim claim) { System.out.println("Pricing using dental fee schedule..."); }
    @Override
    protected void applyBenefits(Claim claim) { System.out.println("Applying dental plan benefits..."); }
}
```

### 10. State Pattern
**Intent:** Allows an object to alter its behavior when its internal state changes. The object will appear to change its class.

**Business Use Case:** "A `Claim` object can be in various states: `Submitted`, `Pending`, `Approved`, `Denied`. The actions you can perform on a claim depend on its current state. For example, you can only 'approve' a 'pending' claim, not a 'submitted' one. We want to avoid a massive `if/else` block in the `Claim` class."

**Implementation:** We create separate classes for each state, and the `Claim` object delegates its behavior to its current state object.

```java
interface ClaimState {
    void approve(ClaimContext context);
    void deny(ClaimContext context);
}

class SubmittedState implements ClaimState {
    public void approve(ClaimContext c) { System.out.println("Cannot approve a submitted claim. Must be pending first."); }
    public void deny(ClaimContext c) { System.out.println("Cannot deny a submitted claim. Must be pending first."); }
}

class PendingState implements ClaimState {
    public void approve(ClaimContext c) {
        System.out.println("Claim approved.");
        c.setState(new ApprovedState());
    }
    public void deny(ClaimContext c) {
        System.out.println("Claim denied.");
        c.setState(new DeniedState());
    }
}

class ApprovedState implements ClaimState { /* ... */ }
class DeniedState implements ClaimState { /* ... */ }

// The Context class
class ClaimContext {
    private ClaimState state;

    public ClaimContext() {
        this.state = new SubmittedState(); // Initial state
    }

    public void setState(ClaimState state) { this.state = state; }
    public void approve() { state.approve(this); }
    public void deny() { state.deny(this); }
}
```