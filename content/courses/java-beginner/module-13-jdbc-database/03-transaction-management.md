---
title: "13.3 Transaction Management & ACID"
categories: [ Java, Course ]
tags: [Java, Transactions, ACID, Commit, Rollback, Database]
description: "ACID सिद्धांत, setAutoCommit(false), commit(), rollback(), और सुरक्षित वित्तीय लेनदेन।"
date: 2026-09-20T08:00:00+05:30
lastmod: 2026-09-20T08:00:00+05:30
images: ["images/2025/06/jdbc.webp"]
author: ahmad
type: docs
---

## ⚙️ **Code: Bank Fund Transfer with Rollback**

```java
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;

public class TransactionDemo {
    public static void main(String[] args) {
        String url = "jdbc:postgresql://localhost:5432/bank_db";
        Connection conn = null;

        try {
            conn = DriverManager.getConnection(url, "postgres", "secret");
            
            // 1. ऑटो-कमिट बंद करें (Manual Transaction Mode)
            conn.setAutoCommit(false);

            // स्टेप 1: खाता A से ₹5000 काटना
            try (PreparedStatement debit = conn.prepareStatement("UPDATE accounts SET balance = balance - 5000 WHERE acc_no = 'ACC-A'")) {
                debit.executeUpdate();
            }

            // स्टेप 2: खाता B में ₹5000 जोड़ना
            try (PreparedStatement credit = conn.prepareStatement("UPDATE accounts SET balance = balance + 5000 WHERE acc_no = 'ACC-B'")) {
                credit.executeUpdate();
            }

            // 2. दोनों स्टेप्स सफल होने पर ही कमिट करें
            conn.commit();
            System.out.println("✅ फंड ट्रांसफर सफल और डेटाबेस में कमिट हुआ!");

        } catch (SQLException ex) {
            System.out.println("❌ एरर आया! सभी बदलाव वापस (Rollback) किए जा रहे हैं...");
            if (conn != null) {
                try {
                    conn.rollback(); // किसी भी विफलता पर पैसे वापस
                } catch (SQLException e) {
                    e.printStackTrace();
                }
            }
        } finally {
            if (conn != null) {
                try { conn.close(); } catch (SQLException e) { e.printStackTrace(); }
            }
        }
    }
}
```

---

## 🧭 **Navigation**
- **⬅️ पिछला चैप्टर**: [13.2 Connection Pooling (HikariCP)](./02-connection-pooling/)
- **पाठ्यक्रम मुख्य पृष्ठ 🎓**: [Java Masterclass Syllabus](../syllabus/)
