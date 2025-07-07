---
title: "13.1 JDBC Intro"
categories: [ Java, Course]
tags: [Basic]
description: "JDBC (Java Database Connectivity)"
date: 2025-06-01T07:00:18+05:30
images: ["images/2025/06/jdbc.webp"]
author: ahmad
type: docs
---

# 📘 **Module 14: JDBC (Java Database Connectivity)**

## 🔷 1. JDBC क्या है?

> JDBC (Java Database Connectivity) एक **Java API** है जो Java application को database (जैसे MySQL, Oracle, PostgreSQL) से **connect** करने की सुविधा देती है।

यह Java app को SQL query run करने, डेटा fetch करने, update/delete करने की **capability** देता है।

---

## 🔄 JDBC Workflow (Text Flow)

```
1. Load JDBC Driver
        ↓
2. Create Connection to Database
        ↓
3. Create Statement/PreparedStatement
        ↓
4. Execute Query (SELECT/INSERT/UPDATE)
        ↓
5. Process Result (ResultSet)
        ↓
6. Close Connection
```

---

## 🧱 2. JDBC Components

| Component           | Description                               |
| ------------------- | ----------------------------------------- |
| `DriverManager`     | Database driver को load और manage करता है |
| `Connection`        | Database से actual connection बनाता है    |
| `Statement`         | SQL queries को execute करता है            |
| `PreparedStatement` | Secure और efficient version of Statement  |
| `ResultSet`         | Query result को hold करता है              |

---

## ✅ 3. Example: MySQL Connection

### 👉 Prerequisite:

* JDBC Driver jar (e.g., `mysql-connector-java-8.x.x.jar`)
* MySQL Database installed

### ✅ Step-by-step Code:

```java
import java.sql.*;

public class JDBCExample {
    public static void main(String[] args) {
        String url = "jdbc:mysql://localhost:3306/mydb";
        String user = "root";
        String password = "1234";

        try {
            // 1. Load Driver (Optional in newer versions)
            Class.forName("com.mysql.cj.jdbc.Driver");

            // 2. Connect to DB
            Connection conn = DriverManager.getConnection(url, user, password);

            // 3. Create Statement
            Statement stmt = conn.createStatement();

            // 4. Execute Query
            ResultSet rs = stmt.executeQuery("SELECT * FROM students");

            // 5. Process Result
            while (rs.next()) {
                System.out.println("ID: " + rs.getInt("id"));
                System.out.println("Name: " + rs.getString("name"));
            }

            // 6. Close Connection
            rs.close();
            stmt.close();
            conn.close();

        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
```

---

## 🔒 4. PreparedStatement (Secure Query)

> जब आप dynamic query चलाते हैं (user input के साथ), PreparedStatement use करें — इससे **SQL Injection** से बचाव होता है।

```java
PreparedStatement pst = conn.prepareStatement("SELECT * FROM students WHERE id = ?");
pst.setInt(1, 5);
ResultSet rs = pst.executeQuery();
```

---

## 🧠 5. Common JDBC Classes & Methods

| Class           | Method                                    | Use                       |
| --------------- | ----------------------------------------- | ------------------------- |
| `DriverManager` | `getConnection()`                         | DB से connect करना        |
| `Connection`    | `createStatement()`, `prepareStatement()` | SQL के लिए object बनाना   |
| `Statement`     | `executeQuery()`, `executeUpdate()`       | SELECT / INSERT / UPDATE  |
| `ResultSet`     | `next()`, `getInt()`, `getString()`       | Query result को read करना |

---

## 🧪 Practice Assignments

1. MySQL database में एक `students` table बनाईए
2. Java से connect करके उसमें data insert कीजिए
3. Data read करके print कीजिए
4. PreparedStatement से एक record ढूंढिए (id द्वारा)
5. एक function बनाईए जो नाम update करे

---

## 🧠 Interview Questions

* JDBC क्या है और इसके steps क्या हैं?
* `Statement` vs `PreparedStatement`
* SQL Injection से कैसे बच सकते हैं?
* JDBC में ResultSet क्या करता है?
* DriverManager क्या role play करता है?

---

## 🔄 Advanced Topics

* Connection Pooling (HikariCP)
* Transaction Management (commit, rollback)
* ORM (Hibernate Intro)
* JDBC with Spring Boot
