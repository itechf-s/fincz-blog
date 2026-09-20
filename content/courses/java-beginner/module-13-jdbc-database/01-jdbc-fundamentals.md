---
title: "13.1 JDBC Fundamentals & CRUD"
categories: [ Java, Course ]
tags: [Java, JDBC, PreparedStatement, SQLInjection, CRUD]
description: "JDBC आर्किटेक्चर, 5 कोर स्टेप्स, और PreparedStatement से SQL Injection से सुरक्षा।"
date: 2026-09-20T08:00:00+05:30
lastmod: 2026-09-20T08:00:00+05:30
images: ["images/2025/06/jdbc.webp"]
author: ahmad
type: docs
weight: 1
---

## ⚙️ **5 Core Steps of JDBC**

```java
import java.sql.*;

public class JdbcCrudDemo {
    private static final String URL = "jdbc:postgresql://localhost:5432/fincz_db";
    private static final String USER = "postgres";
    private static final String PASS = "secret";

    public static void main(String[] args) {
        String insertSql = "INSERT INTO users (name, email) VALUES (?, ?)";

        // Try-with-resources से Connection और PreparedStatement ऑटोमैटिक क्लोज होंगे
        try (Connection conn = DriverManager.getConnection(URL, USER, PASS);
             PreparedStatement pstmt = conn.prepareStatement(insertSql)) {

            // पैरामीटर्स सेट करें (100% SQL Injection Safe)
            pstmt.setString(1, "Ahmad");
            pstmt.setString(2, "ahmad@fincz.com");

            int rows = pstmt.executeUpdate();
            System.out.println("Inserted Rows: " + rows);

        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
}
```

---

## 🧭 **Navigation**
- **⬅️ पिछला मॉड्यूल**: [Module 12: Multithreading & Concurrency](../module-12-multithreading-and-concurrency/)
- **अगला चैप्टर ➡️**: [13.2 Connection Pooling (HikariCP)](./02-connection-pooling/)
