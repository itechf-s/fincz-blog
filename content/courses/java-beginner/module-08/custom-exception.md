---
title: "8.5 Custom Exception"
categories: [ Java, Course]
tags: [Basic]
description: "Custom Exception in Java"
date: 2025-06-01T07:00:32+05:30
author: ahmad
type: docs
---

अब हम Java में एक practical और interview-relevant concept सीखते हैं:
🔶 **Custom Exception (User-Defined Exception)**

## 📌 Custom Exception क्या होता है?

> जब हमें Java की existing exceptions से अलग **ख़ुद की exception बनानी हो**, तब हम custom exception बनाते हैं।

➡️ इसे Java की किसी existing class जैसे `Exception` या `RuntimeException` को **extend करके** बनाया जाता है।

---

## 🎯 क्यों ज़रूरी है Custom Exception?

| जरूरत                              | उदाहरण                                                                    |
| ---------------------------------- | ------------------------------------------------------------------------- |
| Readable Error                     | `"Insufficient balance in account"` की जगह `InsufficientBalanceException` |
| Business logic clearly define करना | जैसे – `InvalidAgeException`, `NegativeAmountException`                   |
| Better debugging                   | Code को समझना आसान बनता है                                                |

---

## ✅ 1. Checked Custom Exception बनाना

### 🔹 Step 1: Exception class बनाइए

```java
// Must extend Exception for Checked Exception
class InvalidAgeException extends Exception {
    public InvalidAgeException(String message) {
        super(message);  // base class constructor
    }
}
```

### 🔹 Step 2: Use कीजिए

```java
public class Voter {
    public static void checkAge(int age) throws InvalidAgeException {
        if (age < 18) {
            throw new InvalidAgeException("Age must be 18 or above to vote.");
        } else {
            System.out.println("You are eligible to vote.");
        }
    }

    public static void main(String[] args) {
        try {
            checkAge(16);
        } catch (InvalidAgeException e) {
            System.out.println("Exception Caught: " + e.getMessage());
        }
    }
}
```

➡️ Output:

```
Exception Caught: Age must be 18 or above to vote.
```

---

## ✅ 2. Unchecked Custom Exception बनाना

अगर आप चाहते हैं कि compiler इसे **forcefully handle ना करे**, तो:

```java
// Must extend RuntimeException for Unchecked
class NegativeAmountException extends RuntimeException {
    public NegativeAmountException(String msg) {
        super(msg);
    }
}
```

```java
public class Bank {
    public static void deposit(int amount) {
        if (amount < 0) {
            throw new NegativeAmountException("Amount can't be negative.");
        }
        System.out.println("Amount deposited: " + amount);
    }

    public static void main(String[] args) {
        deposit(-100);
    }
}
```

➡️ Output:

```
Exception in thread "main" NegativeAmountException: Amount can't be negative.
```

---

## 🧾 Summary Table:

| Feature             | Checked Exception                          | Unchecked Exception                     |
| ------------------- | ------------------------------------------ | --------------------------------------- |
| Base class          | `Exception`                                | `RuntimeException`                      |
| Handle करना ज़रूरी? | ✔️ हाँ                                     | ❌ Optional                              |
| कब use करें         | Business rules को strongly enforce करना हो | Logical rules हों, और flexibility चाहिए |

---

## 🧪 Practice Tasks:

1. `InsufficientBalanceException` class बनाइए – अगर withdraw amount balance से ज़्यादा हो
2. `InvalidEmailException` class बनाइए – email format गलत होने पर
3. `CustomFileNotFoundException` बनाइए और file read में use करें

---

## 📘 Interview Questions:

1. Custom Exception क्यों बनाते हैं?
2. Checked vs Unchecked Custom Exception में क्या फर्क है?
3. क्या हम Custom Exception में fields भी रख सकते हैं (जैसे code, reason)?
4. क्या Custom Exception multiple constructors रख सकता है?
