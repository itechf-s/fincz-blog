---
title: "6.4 Encapsulation"
categories: [ Java, Course]
tags: [Basic]
description: "Encapsulation"
date: 2025-06-01T07:00:43+05:30
author: ahmad
type: docs
---

चलिए अब OOP का अगला important concept — **Encapsulation** — detail में आसान हिंदी में समझते हैं, ताकि आपको इसके **what, why, how** और real-life examples, Java syntax और interview questions पूरी तरह समझ में आ जाएँ।

## 🔷 Encapsulation क्या होता है?

### 📌 Definition:

> **Encapsulation** का मतलब है — **data (variables) और code (methods)** को एक साथ एक ही unit (यानि class) में **छिपा कर रखना** और बाहर की दुनिया को controlled access देना।

➡️ Java में यह **data hiding** और **security** के लिए इस्तेमाल किया जाता है।

---

## 🎯 Real Life Example:

मान लो आपके पास एक बैंक अकाउंट है। उसमें balance कितना है, ये आप बाहर की दुनिया को direct access नहीं देना चाहेंगे।
लेकिन आप चाहते हैं कि कोई `deposit()` या `withdraw()` method से ही उस balance को बदल सके।

👉 यही होता है **encapsulation** – Direct access ना देना, सिर्फ method से control देना।

---

## 🔧 Java में Encapsulation कैसे implement होता है?

### इसके लिए तीन step follow करते हैं:

| Step | क्या करना है                                      |
| ---- | ------------------------------------------------- |
| 1️⃣  | Variables को `private` बनाओ                       |
| 2️⃣  | Methods (`getters` और `setters`) को `public` बनाओ |
| 3️⃣  | इन्हीं methods से data access या modify करो       |

---

## ✅ Java Code Example:

```java
class Account {
    // Step 1: private data
    private int balance;

    // Step 2: public setter method
    public void setBalance(int amount) {
        if (amount >= 0) {
            balance = amount;
        } else {
            System.out.println("Invalid amount");
        }
    }

    // Step 3: public getter method
    public int getBalance() {
        return balance;
    }
}
```

```java
public class Main {
    public static void main(String[] args) {
        Account myAcc = new Account();

        myAcc.setBalance(5000);  // controlled access
        System.out.println("Balance: " + myAcc.getBalance());
    }
}
```

---

## 🔍 Encapsulation से क्या फायदा होता है?

| Benefit           | Description                                            |
| ----------------- | ------------------------------------------------------ |
| ✅ Security        | Data direct access से बचता है                          |
| ✅ Control         | कौन data देख या बदल सकता है, ये decide कर सकते हैं     |
| ✅ Maintainability | Code में बदलाव करना आसान                               |
| ✅ Reusability     | Encapsulated class बार-बार use की जा सकती है           |
| ✅ Flexibility     | Getter/Setter में logic डाल सकते हैं (जैसे validation) |

---

## 🧠 बिना Encapsulation का Code (Bad Practice):

```java
class Account {
    public int balance;  // गलत! कोई भी इसे बदल सकता है

    // कोई control नहीं, validation नहीं
}
```

कोई भी ऐसे कर सकता है:

```java
Account acc = new Account();
acc.balance = -99999;  // Invalid value भी चल जाएगी
```

➡️ **Unsafe, Unprofessional, Risky**

---

## 🧠 Encapsulation vs Abstraction

| Point           | Encapsulation                   | Abstraction             |
| --------------- | ------------------------------- | ----------------------- |
| Focus           | Data hiding                     | Implementation hiding   |
| Use             | `private`, `getters`, `setters` | `abstract`, `interface` |
| क्या छुपाते हैं | Data                            | Complex logic           |
| Example         | Bank balance variable           | Payment gateway logic   |

---

## 📘 Interview में पूछा जाता है:

> 🔹 What is encapsulation in Java?
> 🔹 How is encapsulation achieved?
> 🔹 Difference between encapsulation and abstraction?
> 🔹 Give a real-life example of encapsulation.

---

## 🧾 Summary (Table Form)

| Feature        | Encapsulation                                                  |
| -------------- | -------------------------------------------------------------- |
| Purpose        | Secure data access                                             |
| Keywords Used  | `private`, `public`                                            |
| Components     | Variables + Getters/Setters                                    |
| Main Principle | Data hiding                                                    |
| Implementation | Class के अंदर variables को hide करना और methods से access देना |
