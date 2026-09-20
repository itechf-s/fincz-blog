---
title: "4.3 Method Overriding"
categories: [ Java, Course ]
tags: [Java, MethodOverriding, OOPs, Polymorphism, Super]
description: "Runtime Polymorphism, @Override एनोटेशन, मेथड सिग्नेचर के नियम, और super कीवर्ड का उपयोग।"
date: 2026-09-20T08:00:00+05:30
lastmod: 2026-09-20T08:00:00+05:30
images: ["images/2025/06/functions-and-methods.webp"]
author: ahmad
type: docs
weight: 3
---

## 🎯 **Lesson Objectives**
- **Method Overriding** और इनहेरिटेंस के बीच संबंध को समझना।
- `@Override` एनोटेशन का महत्व।
- `super` कीवर्ड का उपयोग करके पैरेंट क्लास के मेथड को कॉल करना।

---

## 💡 **Real-Life Analogy**
मान लीजिए पिता की वसीयत में एक साधारण 'कीपैड फोन' का नियम (`makeCall()`) है। बेटा उस वसीयत को इनहेरिट करता है, लेकिन वह अपने आधुनिक स्मार्टफोन में उसी `makeCall()` को वीडियो कॉलिंग और VoLTE फीचर के साथ अपग्रेड (Override) कर देता है।

---

## ⚙️ **Code Example: Bank Interest Rates**

```java
// पैरेंट क्लास (Parent / Super Class)
class Bank {
    public double getInterestRate() {
        return 4.0; // डिफ़ॉल्ट ब्याज दर 4%
    }
}

// चाइल्ड क्लास (Child / Sub Class)
class SBI extends Bank {
    @Override // कंपाइलर को बताता है कि हम पैरेंट का मेथड बदल रहे हैं
    public double getInterestRate() {
        return 6.5; // SBI की अपनी विशेष ब्याज दर
    }
}

class HDFC extends Bank {
    @Override
    public double getInterestRate() {
        return 7.2; // HDFC की अपनी ब्याज दर
    }
}

public class OverridingDemo {
    public static void main(String[] args) {
        Bank myBank1 = new SBI();  // Dynamic Method Dispatch
        Bank myBank2 = new HDFC();

        System.out.println("SBI Rate: " + myBank1.getInterestRate() + "%");
        System.out.println("HDFC Rate: " + myBank2.getInterestRate() + "%");
    }
}
```

---

## 📋 **Overloading vs Overriding (तुलना)**

| गुण (Property) | Method Overloading | Method Overriding |
| :--- | :--- | :--- |
| **क्लास** | एक ही क्लास में होता है | पैरेंट और चाइल्ड क्लास के बीच होता है (IS-A) |
| **पैरामीटर्स** | अनिवार्य रूप से अलग होने चाहिए | बिल्कुल समान होने चाहिए |
| **पॉलीमॉर्फिज़्म** | Compile-Time (Early Binding) | Run-Time (Late / Dynamic Binding) |
| **Private/Static Methods**| ओवरलोड हो सकते हैं | ओवरराइड **नहीं** हो सकते |

---

## 📌 **Quick Revision Summary**
- Overriding से चाइल्ड क्लास पैरेंट क्लास के मेथड को अपना विशेष इम्प्लीमेंटेशन देती है।
- हमेशा `@Override` एनोटेशन का प्रयोग करें ताकि स्पेलिंग की गलती पर कंपाइलर तुरंत चेतावनी दे।
- `static`, `final` और `private` मेथड्स को ओवरराइड नहीं किया जा सकता।

---

## 🧭 **Navigation**
- **⬅️ पिछला चैप्टर**: [4.2 Method Overloading](./02-method-overloading/)
- **अगला चैप्टर ➡️**: [4.4 Static vs Instance Methods](./04-static-vs-instance-methods/)
