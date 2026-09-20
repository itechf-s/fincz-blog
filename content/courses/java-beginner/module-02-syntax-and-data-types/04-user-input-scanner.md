---
title: "2.4 User Input using Scanner Class"
categories: [ Java, Course ]
tags: [Java, Scanner, UserInput, Console]
description: "java.util.Scanner से कंसोल इनपुट लेना, प्रमुख मेथड्स, और न्यूलाइन बफ़र बग का निवारण।"
date: 2026-09-20T08:00:00+05:30
lastmod: 2026-09-20T08:00:00+05:30
images: ["images/2025/06/syntax-and-data-types.webp"]
author: ahmad
type: docs
weight: 4
---

## 🎯 **Lesson Objectives**
- `java.util.Scanner` क्लास का इस्तेमाल करके कीबोर्ड से इनपुट लेना।
- `nextInt()`, `nextDouble()`, `next()`, और `nextLine()` के उपयोग को समझना।
- प्रसिद्ध **Scanner Newline Buffer Bug** को पहचानना और उसे ठीक करना।
- `Scanner` ऑब्जेक्ट को ठीक से क्लोज (`close()`) करना।

---

## 💡 **Real-Life Analogy**
जैसे एटीएम मशीन पर आप अपना पिन, निकासी राशि और खाता प्रकार स्क्रीन पर टाइप करते हैं और मशीन उसे पढ़कर प्रोसेसिंग करती है; उसी तरह `Scanner` आपके Java प्रोग्राम की "कीपैड रीडर" है जो कंसोल पर यूजर द्वारा टाइप किए गए डेटा को वेरिएबल्स में भरती है।

---

## 💻 **Scanner के प्रमुख इनपुट मेथड्स**

| मेथड (Method) | क्या इनपुट लेता है | उदाहरण |
| :--- | :--- | :--- |
| `sc.nextInt()` | पूर्ण संख्या (Integer) | `25` |
| `sc.nextDouble()` | दशमलव संख्या (Double) | `84.50` |
| `sc.next()` | केवल एक शब्द (First word till space) | `"Rahul"` |
| `sc.nextLine()` | पूरी लाइन (Full sentence with spaces)| `"Rahul Kumar Sharma"` |
| `sc.nextBoolean()` | बूलियन मान | `true` |

---

## 🧑‍💻 **पूर्ण कोड उदाहरण (Full Working Example)**

```java
import java.util.Scanner;

public class UserInputMaster {
    public static void main(String[] args) {
        // 1. Scanner ऑब्जेक्ट बनाएं (System.in कीबोर्ड को दर्शाता है)
        Scanner scanner = new Scanner(System.in);

        System.out.print("अपना नाम दर्ज करें: ");
        String name = scanner.nextLine();

        System.out.print("अपनी उम्र दर्ज करें: ");
        int age = scanner.nextInt();

        System.out.print("अपना मासिक बजट दर्ज करें (₹): ");
        double budget = scanner.nextDouble();

        System.out.println("
--- यूजर प्रोफाइल ---");
        System.out.println("नाम: " + name);
        System.out.println("उम्र: " + age + " वर्ष");
        System.out.println("मासिक बजट: ₹" + budget);

        // 2. रिसोर्स को क्लोज करें
        scanner.close();
    }
}
```

---

## ⚠️ **The Scanner Newline Trap (सबसे आम गलती)**

जब आप `nextInt()` या `nextDouble()` के तुरंत बाद `nextLine()` कॉल करते हैं, तो `nextLine()` यूजर इनपुट लेने के बजाय खाली स्ट्रिंग स्किप कर देता है!

### ऐसा क्यों होता है?
जब यूजर `25` लिखकर `Enter` दबाता है, तो `nextInt()` केवल `25` को पढ़ता है, और `
` (Enter की न्यूलाइन) बफ़र में ही रह जाती है। अगला `nextLine()` उसी बची हुई न्यूलाइन को खाली स्ट्रिंग मानकर आगे बढ़ जाता है।

### ✅ समाधान (Fix):
```java
System.out.print("उम्र दर्ज करें: ");
int age = scanner.nextInt();
scanner.nextLine(); // बची हुई न्यूलाइन (
) को साफ़ करने के लिए एक अतिरिक्त कॉल!

System.out.print("अपना शहर दर्ज करें: ");
String city = scanner.nextLine(); // अब यह सही से यूजर इनपुट लेगा
```

---

## 📝 **Practice Exercise**
एक प्रोग्राम लिखें जो यूजर से:
1. दो संख्याएं इनपुट ले (उदा. `num1` और `num2`)
2. उनका जोड़ (Sum), घटाव (Difference), गुणा (Product), और औसत (Average) कंसोल पर सुंदर तरीके से प्रिंट करे।

---

## 📌 **Quick Revision Summary**
- इनपुट लेने के लिए `java.util.Scanner` को इम्पोर्ट करना आवश्यक है।
- `next()` सिर्फ एक शब्द लेता है, जबकि `nextLine()` पूरी लाइन पढ़ता है।
- न्यूलाइन स्किप की समस्या से बचने के लिए `nextInt()` के बाद एक खाली `scanner.nextLine()` चलाएं।

---

## 🧭 **Navigation**
- **⬅️ पिछला चैप्टर**: [2.3 Type Casting & Type Promotion](./03-type-casting-and-promotion/)
- **अगला मॉड्यूल ➡️**: [Module 3: Control Flow Statements & Decision Logic](../module-03-control-flow/)
