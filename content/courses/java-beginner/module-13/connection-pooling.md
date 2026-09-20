---
title: "13.2 Connection Pooling"
categories: [ Java, Course]
tags: [Basic]
description: "Connection Pooling in Java (JDBC)"
date: 2025-06-01T07:00:17+05:30
author: ahmad
type: docs
---

JDBC में **Connection Pooling** एक advanced और बहुत ही important concept है — आइए इसे अच्छे से समझते हैं:

## 📘 **Connection Pooling in Java (JDBC)**

---

## 🔷 1. Connection Pooling क्या है?

> Connection Pooling एक technique है जिसमें हम database connections को **बार-बार create और destroy करने की बजाय** एक ready-made pool में रखते हैं और जरूरत पड़ने पर **reuse** करते हैं।

➡️ इससे performance बढ़ती है, memory कम लगती है, और DB overload नहीं होता।

---

## Without Pooling: क्या होता है?

हर बार जब कोई user DB से interact करता है:

```
[Create Connection] → [Run Query] → [Close Connection]
```

हर बार connection बनाना और बंद करना **महंगा (expensive)** होता है।

---

## ✅ With Pooling:

```
[Get from Pool] → [Use Connection] → [Return to Pool]
```

➡️ Connections बार-बार **reuse** होते हैं।
➡️ Response time fast होता है।
➡️ Database पर load control में रहता है।

---

## 🔧 Popular Java Connection Pooling Libraries

| Library      | Use Case                                     |
| ------------ | -------------------------------------------- |
| **HikariCP** | Fastest, lightweight, modern (Recommended ✅) |
| Apache DBCP  | Apache Commons-based                         |
| C3P0         | पुराने समय का popular library                |
| BoneCP       | Older and stable                             |
| H2 Pool      | Embedded Java databases                      |

---

## 🔹 2. HikariCP से JDBC Connection Pooling

### ✅ Maven Dependency:

```xml
<dependency>
    <groupId>com.zaxxer</groupId>
    <artifactId>HikariCP</artifactId>
    <version>5.0.1</version>
</dependency>
```

---

### ✅ Java Code Example:

```java
import com.zaxxer.hikari.HikariConfig;
import com.zaxxer.hikari.HikariDataSource;
import java.sql.*;

public class HikariExample {
    public static void main(String[] args) throws Exception {

        // 1. Pool Configuration
        HikariConfig config = new HikariConfig();
        config.setJdbcUrl("jdbc:mysql://localhost:3306/mydb");
        config.setUsername("root");
        config.setPassword("1234");
        config.setMaximumPoolSize(10);  // Max 10 connections

        // 2. DataSource from config
        HikariDataSource ds = new HikariDataSource(config);

        // 3. Get Connection from Pool
        try (Connection conn = ds.getConnection()) {
            Statement stmt = conn.createStatement();
            ResultSet rs = stmt.executeQuery("SELECT * FROM students");

            while (rs.next()) {
                System.out.println(rs.getInt("id") + " - " + rs.getString("name"));
            }
        }

        // 4. Pool close (optional, usually on app shutdown)
        ds.close();
    }
}
```

---

## 🧠 HikariCP के Key Features

| Feature         | Description                                                     |
| --------------- | --------------------------------------------------------------- |
| 🔄 Fast         | सबसे तेज़ connection pool                                       |
| ⚡ Lightweight   | Memory efficient                                                |
| 🔒 Secure       | Thread-safe and stable                                          |
| ⚙️ Configurable | Timeouts, max pool size, idle settings सब customize हो सकते हैं |

---

## 🧠 Interview में पूछे जाने वाले सवाल:

1. Connection Pooling क्या है और क्यों ज़रूरी है?
2. `HikariCP` और `DBCP` में क्या फर्क है?
3. क्या Pooling performance को improve करता है?
4. JDBC में pool को कैसे integrate करते हैं?
5. Pool size और timeout कैसे सेट करते हैं?

---

## 🧪 Practice Assignments

1. बिना pool और pool के साथ एक ही SQL query 10 बार run कर के time compare करें
2. HikariConfig का use करके maxPoolSize को 2 पर set करें और 3 connections try करें
3. एक reusable `DBUtil` class बनाईए जो pooled connection return करे
4. एक mini app बनाईए जो pool से connection लेकर student data fetch करे