---
title: "6.3 Encapsulation & Data Hiding"
categories: [ Java, Course ]
tags: [Java, Encapsulation, DataHiding, GettersSetters]
description: "Data Hiding, private फ़ील्ड्स, Getters और Setters में वैलिडेशन लॉजिक और JavaBean नियम।"
date: 2026-09-20T08:00:00+05:30
lastmod: 2026-09-20T08:00:00+05:30
images: ["images/2025/06/class-and-object.webp"]
author: ahmad
type: docs
weight: 3
---

## 🎯 **Lesson Objectives**
- **Encapsulation** क्या है और डेटा को `private` रखना क्यों ज़रूरी है।
- Getters और Setters मेथड्स के साथ डेटा वैलिडेशन लागू करना।
- Read-Only और Write-Only क्लासेस बनाना।

---

## 💡 **Real-Life Analogy**
कैप्सूल दवाई की तरह, जिसके अंदर की कड़वी दवा सुरक्षित शेल के अंदर बंद होती है। या बैंक का कैश वॉल्ट (Locker), जहाँ कोई भी अजनबी सीधे अंदर जाकर पैसे नहीं निकाल सकता; बल्कि कैशियर (Getter/Setter) के ज़रिए सही पहचान और नियमों की जांच के बाद ही पैसा दिया जाता है।

---

## ⚙️ **Code: Secured Employee Profile**

```java
public class Employee {
    // 1. Data Hiding (फ़ील्ड्स को private रखें)
    private int empId;
    private String name;
    private double monthlySalary;

    // कंस्ट्रक्टर
    public Employee(int empId, String name, double salary) {
        this.empId = empId;
        this.name = name;
        setMonthlySalary(salary); // सेटर के ज़रिए वैलिडेशन
    }

    // 2. Getter Methods (सिर्फ पढ़ने की अनुमति)
    public int getEmpId() {
        return empId;
    }

    public String getName() {
        return name;
    }

    public double getMonthlySalary() {
        return monthlySalary;
    }

    // 3. Setter Method with Validation (डेटा की सुरक्षा)
    public void setMonthlySalary(double monthlySalary) {
        if (monthlySalary >= 10000.0) {
            this.monthlySalary = monthlySalary;
        } else {
            System.out.println("⚠️ एरर: वेतन न्यूनतम सीमा (₹10,000) से कम नहीं हो सकता!");
        }
    }
}
```

---

## 📌 **Quick Revision Summary**
- वेरिएबल्स को हमेशा `private` रखें।
- पब्लिक `getVar()` और `setVar()` मेथड्स के ज़रिए ही एक्सेस प्रदान करें।
- यह कोड को सुरक्षित, लचीला और मेंटेनेबल बनाता है।

---

## 🧭 **Navigation**
- **⬅️ पिछला चैप्टर**: [6.2 Class, Object & Constructors](./02-class-and-object/)
- **अगला चैप्टर ➡️**: [6.4 Inheritance & Code Reusability](./04-inheritance/)
