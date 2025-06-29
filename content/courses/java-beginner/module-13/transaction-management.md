---
title: "13.3 Transaction Management"
categories: [ Java, Course]
tags: [Basic]
description: "JDBC Transaction Management in Java"
date: 2025-06-01T07:00:17+05:30
author: ahmad
type: docs
---

# 📘 **Module 14: JDBC (Java Database Connectivity)**

अब हम JDBC में एक और **real-world application** में काम आने वाला महत्वपूर्ण विषय सीखते हैं:

## 📘 **JDBC Transaction Management in Java**

---

## 🔷 1. Transaction क्या होता है?

> **Transaction** का मतलब है: एक या एक से ज़्यादा database operations का **एक logical unit** के रूप में execute होना।

➡️ या तो सारे steps **सफल (commit)** हों, या एक भी असफल हो जाए तो **पूरा rollback** कर दिया जाए।

---

## 🔒 क्यों ज़रूरी है?

बैंकिंग जैसा सोचिए:

> 1. A के अकाउंट से पैसे कटे
> 2. B के अकाउंट में पैसे जमा हुए
>    अगर पहला step सफल हुआ लेकिन दूसरा फेल — तो system inconsistent हो जाएगा।

इसलिए:
✅ Either **all success (COMMIT)**
❌ Or **none (ROLLBACK)**

---

## 🔁 2. Auto-commit Mode

By default, JDBC में हर SQL statement **auto-commit** होता है।

```java
conn.setAutoCommit(false);  // अब manually commit या rollback करना होगा
```

---

## ✅ 3. Transaction Management Steps:

```java
Connection conn = DriverManager.getConnection(...);
conn.setAutoCommit(false);  // 🔐 Transaction शुरू

try {
    Statement stmt = conn.createStatement();

    stmt.executeUpdate("UPDATE account SET balance = balance - 1000 WHERE id = 1");
    stmt.executeUpdate("UPDATE account SET balance = balance + 1000 WHERE id = 2");

    conn.commit();  // ✅ अगर दोनों success

} catch (Exception e) {
    conn.rollback();  // ❌ एक भी step fail हुआ
    e.printStackTrace();
}
```

---

## 🧱 4. Important Methods

| Method                      | Use                                     |
| --------------------------- | --------------------------------------- |
| `conn.setAutoCommit(false)` | Auto-commit बंद करता है                 |
| `conn.commit()`             | सभी changes को permanently save करता है |
| `conn.rollback()`           | सभी changes को undo कर देता है          |
| `conn.setSavepoint()`       | Intermediate save point बनाता है        |
| `conn.rollback(Savepoint)`  | Particular point तक rollback            |

---

## 🔁 5. Savepoint Example (Intermediate Rollback)

```java
conn.setAutoCommit(false);

Statement stmt = conn.createStatement();
stmt.executeUpdate("INSERT INTO users VALUES (1, 'Ali')");
Savepoint sp = conn.setSavepoint();

stmt.executeUpdate("INSERT INTO users VALUES (2, 'Zara')");

// कुछ problem आई
conn.rollback(sp);  // सिर्फ Zara वाला rollback

conn.commit();
```

---

## 🧠 Interview Questions

* Transaction क्या होता है?
* JDBC में transaction कैसे manage करते हैं?
* commit() vs rollback()
* Savepoint क्यों use करते हैं?
* Auto-commit mode कैसे काम करता है?

---

## 🧪 Practice Assignments

1. दो update queries को एक ही transaction में चलाइए
2. Intentional exception डालिए और rollback का behavior देखिए
3. Savepoint बनाकर rollback करके देखिए
4. Auto-commit mode में और बिना auto-commit में result compare कीजिए
5. A से B अकाउंट में transfer का simulation बनाईए

---

## 🧱 Transaction Flow (Text Diagram)

```
1. setAutoCommit(false)
        ↓
2. Run SQL 1
        ↓
3. Run SQL 2
        ↓
4. Both Success → COMMIT
   Any Fail     → ROLLBACK
```