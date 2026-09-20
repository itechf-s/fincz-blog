---
title: "6.2 Class, Object & Constructors"
categories: [ Java, Course ]
tags: [Java, Class, Object, Constructors, ThisKeyword]
description: "Class (Blueprint) vs Object (Instance), Constructor Overloading, this कीवर्ड और मेमोरी लाइफसाइकिल।"
date: 2026-09-20T08:00:00+05:30
lastmod: 2026-09-20T08:00:00+05:30
images: ["images/2025/06/class-and-object.webp"]
author: ahmad
type: docs
---

## 🎯 **Lesson Objectives**
- Class (नक्शा) और Object (वास्तविक वस्तु) के संबंध को समझना।
- Default और Parameterized Constructors का उपयोग करना।
- `this` कीवर्ड की सहायता से Shadowing को हल करना और Constructor Chaining करना।

---

## 💡 **Real-Life Analogy**
- **Class (ब्लूप्रिंट)**: घर का आर्किटेक्चरल मैप (नक्शा)। कागज पर बने नक्शे में आप रह नहीं सकते (यह कोई मेमोरी नहीं लेता)।
- **Object (इंस्टेंस)**: उस नक्शे से बनाया गया वास्तविक ईंट-सीमेंट का मकान (यह जमीन/मेमोरी घेरता है)। एक नक्शे से आप 100 मकान बना सकते हैं।

---

## ⚙️ **Code: BankAccount Modeling**

```java
public class BankAccount {
    // 1. Instance Variables (State)
    private String accountNumber;
    private String accountHolderName;
    private double balance;

    // 2. Default Constructor
    public BankAccount() {
        this("ACC-000", "Guest User", 0.0); // Constructor Chaining using this()
    }

    // 3. Parameterized Constructor
    public BankAccount(String accountNumber, String accountHolderName, double initialBalance) {
        this.accountNumber = accountNumber;
        this.accountHolderName = accountHolderName;
        this.balance = initialBalance;
    }

    // 4. Methods (Behavior)
    public void deposit(double amount) {
        if (amount > 0) {
            this.balance += amount;
            System.out.println("₹" + amount + " जमा किए गए। नया बैलेंस: ₹" + this.balance);
        }
    }

    public void displayInfo() {
        System.out.println("खाता संख्या: " + this.accountNumber + " | धारक: " + this.accountHolderName + " | बैलेंस: ₹" + this.balance);
    }

    public static void main(String[] args) {
        // new कीवर्ड हीप में नया ऑब्जेक्ट बनाता है
        BankAccount acc1 = new BankAccount("SBI-1001", "Ahmad", 25000.0);
        BankAccount acc2 = new BankAccount("HDFC-2002", "Pooja", 50000.0);

        acc1.displayInfo();
        acc2.displayInfo();

        acc1.deposit(5000.0);
    }
}
```

---

## 🧠 **Heap और Stack में मेमोरी आवंटन**

```text
    STACK MEMORY                     HEAP MEMORY
+--------------------+        +-----------------------------------+
| acc1 (Reference)   | -----> | BankAccount Object @101           |
| (Holds Address 101)|        | - accountNumber: "SBI-1001"       |
+--------------------+        | - accountHolderName: "Ahmad"      |
| acc2 (Reference)   | -----> | - balance: 30000.0                |
| (Holds Address 202)|        +-----------------------------------+
+--------------------+        | BankAccount Object @202           |
                              | - accountNumber: "HDFC-2002"      |
                              | - accountHolderName: "Pooja"      |
                              | - balance: 50000.0                |
                              +-----------------------------------+
```

---

## 📌 **Quick Revision Summary**
- `new` कीवर्ड हीप मेमोरी में स्पेस एलोकेट करता है और कंस्ट्रक्टर को कॉल करता है।
- कंस्ट्रक्टर का नाम क्लास के नाम जैसा होता है और इसका कोई रिटर्न टाइप नहीं होता।
- `this` कीवर्ड वर्तमान ऑब्जेक्ट के इंस्टेंस वेरिएबल्स को संदर्भित करता है।

---

## 🧭 **Navigation**
- **⬅️ पिछला चैप्टर**: [6.1 OOPs Fundamentals & Core Pillars](./01-oops-introduction/)
- **अगला चैप्टर ➡️**: [6.3 Encapsulation & Data Hiding](./03-encapsulation/)
