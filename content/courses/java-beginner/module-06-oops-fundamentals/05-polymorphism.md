---
title: "6.5 Polymorphism & Dynamic Dispatch"
categories: [ Java, Course ]
tags: [Java, Polymorphism, Upcasting, Downcasting, DynamicDispatch]
description: "Compile-Time vs Runtime Polymorphism, Dynamic Method Dispatch, Upcasting और Downcasting।"
date: 2026-09-20T08:00:00+05:30
lastmod: 2026-09-20T08:00:00+05:30
images: ["images/2025/06/class-and-object.webp"]
author: ahmad
type: docs
---

## 🎯 **Lesson Objectives**
- **Polymorphism (बहुरूपता)** के दोनों प्रकारों में महारत हासिल करना।
- **Dynamic Method Dispatch** (रनटाइम पर मेथड का सही चयन) समझना।
- **Upcasting** (सुरक्षित) और **Downcasting** (`instanceof` के साथ) का उपयोग।

---

## ⚙️ **Code: Payment Gateway Architecture**

```java
// सुपर क्लास
abstract class PaymentMethod {
    public abstract void processPayment(double amount);
}

class UPIPayment extends PaymentMethod {
    @Override
    public void processPayment(double amount) {
        System.out.println("₹" + amount + " UPI (GPay/PhonePe) से सुरक्षित ट्रांसफर हुए।");
    }
}

class CreditCardPayment extends PaymentMethod {
    @Override
    public void processPayment(double amount) {
        System.out.println("₹" + amount + " क्रेडिट कार्ड (2% रिवॉर्ड पॉइंट्स) से प्रोसेस हुए।");
    }
}

public class PolymorphismDemo {
    // पैरेंट टाइप का रेफ़रेंस किसी भी चाइल्ड ऑब्जेक्ट को स्वीकार कर सकता है (Polymorphic Method)
    public static void executeCheckout(PaymentMethod payment, double billAmount) {
        payment.processPayment(billAmount); // Dynamic Dispatch!
    }

    public static void main(String[] args) {
        PaymentMethod upi = new UPIPayment();         // Upcasting
        PaymentMethod card = new CreditCardPayment(); // Upcasting

        executeCheckout(upi, 1500.0);
        executeCheckout(card, 4500.0);
    }
}
```

---

## 📌 **Quick Revision Summary**
- **Upcasting**: चाइल्ड ऑब्जेक्ट को पैरेंट रेफ़रेंस में असाइन करना (स्वचालित और सुरक्षित)।
- **Dynamic Method Dispatch**: रनटाइम पर ऑब्जेक्ट के वास्तविक प्रकार के आधार पर मेथड का निष्पादन।

---

## 🧭 **Navigation**
- **⬅️ पिछला चैप्टर**: [6.4 Inheritance & Code Reusability](./04-inheritance/)
- **अगला चैप्टर ➡️**: [6.6 Abstraction & Interfaces](./06-abstraction/)
