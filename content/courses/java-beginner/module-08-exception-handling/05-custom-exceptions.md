---
title: "8.5 Custom Exceptions (throw vs throws)"
categories: [ Java, Course ]
tags: [Java, CustomException, Throw, Throws]
description: "अपने खुद के कस्टम एक्सेप्शन बनाना, throw और throws का सटीक अंतर।"
date: 2026-09-20T08:00:00+05:30
lastmod: 2026-09-20T08:00:00+05:30
images: ["images/2025/06/exception-handling.webp"]
author: ahmad
type: docs
---

## 🎯 **Lesson Objectives**
- **Custom Exception** कब और क्यों बनाना चाहिए।
- `throw` (एक्सेप्शन फेंकना) बनाम `throws` (मेथड सिग्नेचर में घोषणा करना)।

---

## ⚙️ **Code: Custom InvalidAgeException**

```java
// 1. कस्टम अनचेक्ड एक्सेप्शन क्लास
class InsufficientFundsException extends RuntimeException {
    public InsufficientFundsException(String message) {
        super(message);
    }
}

public class BankWallet {
    private double balance = 1000.0;

    // throws: कॉलर को चेतावनी देना
    public void withdraw(double amount) {
        if (amount > balance) {
            // throw: नया एक्सेप्शन फेंकना
            throw new InsufficientFundsException("अपर्याप्त बैलेंस! आपके पास केवल ₹" + balance + " हैं।");
        }
        balance -= amount;
        System.out.println("₹" + amount + " निकाले गए। शेष: ₹" + balance);
    }

    public static void main(String[] args) {
        BankWallet wallet = new BankWallet();
        try {
            wallet.withdraw(2500.0);
        } catch (InsufficientFundsException ex) {
            System.out.println("ट्रांजैक्शन फेल: " + ex.getMessage());
        }
    }
}
```

---

## 🧭 **Navigation**
- **⬅️ पिछला चैप्टर**: [8.4 Exception Hierarchy & Catch Rules](./04-exception-hierarchy/)
- **अगला मॉड्यूल ➡️**: [Module 9: File Handling & I/O Streams](../module-09-file-handling-and-io/)
