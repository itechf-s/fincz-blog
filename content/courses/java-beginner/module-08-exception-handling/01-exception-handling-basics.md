---
title: "8.1 Exception Handling Basics"
categories: [ Java, Course ]
tags: [Java, Exceptions, TryCatch, Finally, ErrorHandling]
description: "Error vs Exception, try-catch-finally ब्लॉक्स, और एक्सेप्शन फ़्लो की समझ।"
date: 2026-09-20T08:00:00+05:30
lastmod: 2026-09-20T08:00:00+05:30
images: ["images/2025/06/exception-handling.webp"]
author: ahmad
type: docs
weight: 1
---

## 🎯 **Lesson Objectives**
- **Exception** क्या है और अनहैंडल्ड एक्सेप्शन से प्रोग्राम कैसे क्रैश होता है।
- `try`, `catch`, और `finally` ब्लॉक्स का सटीक निष्पादन क्रम (Execution Flow)।
- `finally` ब्लॉक का महत्व (Cleanup Logic)।

---

## 💡 **Real-Life Analogy**
गाड़ी में **एयरबैग (Airbag)** सिस्टम की तरह। अगर कभी कोई अप्रत्याशित दुर्घटना (Exception) होती है, तो एयरबैग तुरंत एक्टिव होकर यात्रियों को बचा लेता है (`catch`), ताकि गाड़ी पूरी तरह तबाह न हो। और यात्रा के बाद सीटबेल्ट खोलना (`finally`) हर हाल में ज़रूरी होता है, चाहे दुर्घटना हुई हो या नहीं।

---

## ⚙️ **Code: Handling Division by Zero**

```java
public class TryCatchDemo {
    public static void main(String[] args) {
        System.out.println("प्रोग्राम प्रारंभ...");

        try {
            int dividend = 100;
            int divisor = 0; // शून्य से भाग देने पर ArithmeticException आएगा
            int result = dividend / divisor;
            System.out.println("Result: " + result);
        } catch (ArithmeticException ex) {
            System.out.println("⚠️ कैच किया गया एरर: किसी संख्या को शून्य (0) से भाग नहीं दिया जा सकता!");
            System.out.println("मैसेज: " + ex.getMessage());
        } finally {
            System.out.println("✅ Finally Block: यह हमेशा चलेगा (रिसोर्स क्लीनअप के लिए)।");
        }

        System.out.println("प्रोग्राम सफलतापूर्वक समाप्त (Graceful Exit)।");
    }
}
```

---

## 📌 **Quick Revision Summary**
- जोखिम भरा कोड हमेशा `try` ब्लॉक में रखें।
- एक्सेप्शन आने पर प्रोग्राम क्रैश होने के बजाय `catch` ब्लॉक में जाता है।
- `finally` ब्लॉक हर हाल में (Even on exception or return) चलता है।

---

## 🧭 **Navigation**
- **⬅️ पिछला मॉड्यूल**: [Module 7: Packages & Access Modifiers](../module-07-packages-and-access-modifiers/)
- **अगला चैप्टर ➡️**: [8.2 Checked vs Unchecked Exceptions](./02-checked-vs-unchecked-exceptions/)
