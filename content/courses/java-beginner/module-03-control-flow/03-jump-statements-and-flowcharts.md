---
title: "3.3 Jump Statements & Control Flowchart"
categories: [ Java, Course ]
tags: [Java, ControlFlow, Flowchart, Break, Continue]
description: "break, continue, labeled loops का उपयोग और संपूर्ण कंट्रोल फ़्लो डिसीजन चार्ट।"
date: 2026-09-20T08:00:00+05:30
lastmod: 2026-09-20T08:00:00+05:30
images: ["images/2025/06/syntax-and-data-types.webp"]
author: ahmad
type: docs
---

## 🎯 **Lesson Objectives**
- `break` और `continue` स्टेटमेंट्स के कार्यप्रणाली को समझना।
- नेस्टेड लूप्स में **Labeled Break/Continue** का उपयोग करना।
- प्रोग्राम के निष्पादन प्रवाह को दर्शाने वाला विज़ुअल **ASCII Flowchart** समझना।

---

## ⚙️ **1. Break vs Continue**

- `break`: पूरे लूप को तुरंत समाप्त करके लूप से बाहर निकल जाता है।
- `continue`: वर्तमान इटरेशन को छोड़ता है और सीधे अगली इटरेशन पर कूद जाता है।

```java
public class JumpDemo {
    public static void main(String[] args) {
        System.out.println("--- Continue Example (Skip 3) ---");
        for (int i = 1; i <= 5; i++) {
            if (i == 3) {
                continue; // 3 को स्किप करके 4 पर जाओ
            }
            System.out.println("Number: " + i);
        }

        System.out.println("
--- Break Example (Stop at 4) ---");
        for (int i = 1; i <= 5; i++) {
            if (i == 4) {
                break; // लूप तुरंत खत्म
            }
            System.out.println("Number: " + i);
        }
    }
}
```

---

## 📊 **Control Flow Decision Architecture (Flowchart)**

```text
                     [ Program Start ]
                             |
                             v
                    { Condition Check }
                        /         \
                  True /           \ False
                      v             v
             [ Execute Code Block ]   [ Execute Else Block ]
                      |                         |
                      +------------+------------+
                                   |
                                   v
                         { Loop Condition }
                           /             \
                     True /               \ False
                         v                 v
                [ Run Loop Body ]      [ Exit Loop ]
                  /            \              |
          { break? }         { continue? }     |
           /      \            /        \      |
     Yes /         \ No   Yes /          \ No  |
        v           v        v             v   |
    [Exit Loop]  [Next Stmt] [Skip to Next]    |
                                   |           |
                                   +<----------+
                                   |
                                   v
                            [ Program End ]
```

---

## 🏷️ **2. Labeled Loops (उन्नत नियंत्रण)**

नेस्टेड लूप्स में अंदरूनी लूप से सीधे बाहरी लूप को तोड़ने के लिए लेबल्स का उपयोग किया जाता है:

```java
public class LabeledLoopDemo {
    public static void main(String[] args) {
        outerLoop: // लेबल
        for (int i = 1; i <= 3; i++) {
            for (int j = 1; j <= 3; j++) {
                if (i == 2 && j == 2) {
                    System.out.println("Breaking outer loop at i=2, j=2");
                    break outerLoop; // सीधे बाहरी लूप को रोक देगा
                }
                System.out.println("i=" + i + ", j=" + j);
            }
        }
    }
}
```

---

## 📌 **Quick Revision Summary**
- `break` लूप या स्विच ब्लॉक से बाहर निकालता है।
- `continue` सिर्फ मौजूदा राउंड को छोड़कर अगले राउंड पर जाता है।
- `outerLoop:` जैसे लेबल्स नेस्टेड लूप्स को नियंत्रित करने में मदद करते हैं।

---

## 🧭 **Navigation**
- **⬅️ पिछला चैप्टर**: [3.2 Loops & Iterations (for, while, do-while)](./02-loops-and-iterations/)
- **अगला मॉड्यूल ➡️**: [Module 4: Functions & Methods](../module-04-functions-and-methods/)
