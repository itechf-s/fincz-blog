---
title: "7.2 Real-World Example"
categories: [ Java, Course]
tags: [Basic]
description: "Access Modifiers & Packages Real-World Example"
date: 2025-06-01T07:00:38+05:30
author: ahmad
type: docs
---

# 📘 **Module 7: Access Modifiers & Packages**

अब मैं आपको **Access Modifiers** और **Packages** का एक **Real-World Java Project Example** देकर समझाता हूँ, जैसे कि किसी कंपनी का **"Online Shopping Application"** बन रहा हो।

---

## 🛒 Real-World Example: Online Shopping System

## 🎯 Modules in Project:

1. `com.shop.customers` – Customer details
2. `com.shop.products` – Product details
3. `com.shop.orders` – Order management
4. `com.shop.utils` – Utility classes (Helper, Validator)

---

## 🔹 Package Structure:

```
com/
 └── shop/
     ├── customers/
     │    └── Customer.java
     ├── products/
     │    └── Product.java
     ├── orders/
     │    └── Order.java
     └── utils/
          └── Validator.java
```

---

## 🔐 Access Modifier Usage:

### ✅ 1. `private` → Data hiding

```java
// Customer.java
package com.shop.customers;

public class Customer {
    private String name;        // Can't be accessed directly outside
    private String email;

    public void setName(String name) { this.name = name; }
    public String getName() { return name; }
}
```

➡️ इस तरह `name` और `email` की direct access रोकी गई — **Encapsulation + Security**

---

### ✅ 2. `protected` → Allow subclass access

```java
// Product.java
package com.shop.products;

public class Product {
    protected double discount = 0.05;

    protected void applyDiscount() {
        System.out.println("5% discount applied");
    }
}
```

➡️ अब कोई subclass जैसे `SpecialProduct` इसको access कर सकता है।

---

### ✅ 3. `default` (no modifier) → Package-private access

```java
// Validator.java
package com.shop.utils;

class Validator {
    static boolean validateEmail(String email) {
        return email.contains("@");
    }
}
```

➡️ ये method सिर्फ उसी package (`com.shop.utils`) में usable है।

---

### ✅ 4. `public` → Universal access

```java
// Order.java
package com.shop.orders;

public class Order {
    public int orderId;
    public void placeOrder() {
        System.out.println("Order placed successfully");
    }
}
```

➡️ इसे कोई भी package import करके use कर सकता है।

---

## 🧠 जब आप Main Program लिखते हैं:

```java
// Main.java
import com.shop.customers.Customer;
import com.shop.orders.Order;

public class Main {
    public static void main(String[] args) {
        Customer c = new Customer();
        c.setName("Kaunain");
        System.out.println(c.getName());

        Order o = new Order();
        o.placeOrder();
    }
}
```

---

## ✅ Summary: Real Use of Modifiers

| Modifier    | Example Use Case                                 |
| ----------- | ------------------------------------------------ |
| `private`   | Hide customer info like password, card details   |
| `protected` | Allow Product subclasses to customize logic      |
| `default`   | Limit Helper class use to utils package only     |
| `public`    | Expose services like `Order.placeOrder()` to all |

---

## 🎁 Bonus Tip: Naming Convention

| Layer        | Naming Suggestion                  |
| ------------ | ---------------------------------- |
| Model/Entity | `Customer`, `Order`, `Product`     |
| Service      | `CustomerService`, `OrderService`  |
| Utility      | `Helper`, `Validator`, `Converter` |