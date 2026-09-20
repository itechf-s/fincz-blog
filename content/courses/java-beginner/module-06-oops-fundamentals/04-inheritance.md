---
title: "6.4 Inheritance & Code Reusability"
categories: [ Java, Course ]
tags: [Java, Inheritance, Extends, Super, OOPs]
description: "IS-A संबंध, extends कीवर्ड, Single/Multilevel/Hierarchical इनहेरिटेंस और Diamond Problem।"
date: 2026-09-20T08:00:00+05:30
lastmod: 2026-09-20T08:00:00+05:30
images: ["images/2025/06/class-and-object.webp"]
author: ahmad
type: docs
weight: 4
---

## 🎯 **Lesson Objectives**
- **Inheritance** और कोड पुनः प्रयोज्यता (Code Reusability) को समझना।
- `extends` और `super` कीवर्ड का सही इस्तेमाल।
- Java में मल्टीपल इनहेरिटेंस (क्लासेस के साथ) क्यों प्रतिबंधित है (**Diamond Problem**)।

---

## ⚙️ **Code: Vehicle Inheritance Hierarchy**

```java
// सुपर क्लास (Parent Class)
class Vehicle {
    protected String brand;
    protected int maxSpeed;

    public Vehicle(String brand, int maxSpeed) {
        this.brand = brand;
        this.maxSpeed = maxSpeed;
    }

    public void startEngine() {
        System.out.println(brand + " का इंजन स्टार्ट हो गया है।");
    }
}

// सब क्लास (Child Class)
class ElectricCar extends Vehicle {
    private int batteryCapacityKWh;

    public ElectricCar(String brand, int maxSpeed, int batteryCapacity) {
        super(brand, maxSpeed); // पैरेंट कंस्ट्रक्टर को कॉल करना
        this.batteryCapacityKWh = batteryCapacity;
    }

    public void showBatteryStatus() {
        System.out.println(brand + " बैटरी क्षमता: " + batteryCapacityKWh + " kWh");
    }
}

public class InheritanceDemo {
    public static void main(String[] args) {
        ElectricCar tesla = new ElectricCar("Tesla Model 3", 220, 75);
        tesla.startEngine();        // पैरेंट से मिला मेथड
        tesla.showBatteryStatus();  // अपना विशेष मेथड
    }
}
```

---

## ❓ **Java मल्टीपल इनहेरिटेंस क्यों सपोर्ट नहीं करता?**
अगर क्लास `C`, क्लास `A` और क्लास `B` दोनों को `extends` करती, और दोनों में `display()` मेथड होता, तो JVM भ्रमित हो जाता कि किसका मेथड चलाए। इसे **Diamond Problem** कहते हैं। Java में इसे हल करने के लिए **Interfaces** का उपयोग किया जाता है।

---

## 📌 **Quick Revision Summary**
- इनहेरिटेंस के लिए `extends` कीवर्ड का उपयोग होता है।
- पैरेंट के कंस्ट्रक्टर और मेथड्स को एक्सेस करने के लिए `super` का इस्तेमाल करें।
- Java सिंगल, मल्टीलेवल और हायरार्किकल इनहेरिटेंस को सपोर्ट करता है।

---

## 🧭 **Navigation**
- **⬅️ पिछला चैप्टर**: [6.3 Encapsulation & Data Hiding](./03-encapsulation/)
- **अगला चैप्टर ➡️**: [6.5 Polymorphism & Dynamic Dispatch](./05-polymorphism/)
