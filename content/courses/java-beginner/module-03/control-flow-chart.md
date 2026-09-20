---
title: "3.2 Control Flow Chart"
categories: [ Java, Course]
tags: [Basic]
description: "Control Flow Chart"
date: 2025-06-01T07:00:54+05:30
author: ahmad
type: docs
---

## Control Flow Chart

```
┌────────────┐
│   Start    │
└────┬───────┘
     │
     ▼
┌───────────────┐
│ if (condition)│
└────┬─────┬────┘
     │     │
     ▼     ▼
  [true] [false]
     │     │
     ▼     ▼
┌────────────┐   ┌────────────────────────┐
│ Execute If │   │ Check else-if / else   │
└────┬───────┘   └────────────┬───────────┘
     │                        ▼
     │               ┌────────────────┐
     │               │ Execute else   │
     │               └──────┬─────────┘
     ▼                      ▼
┌────────────────────────────────────────────┐
│              switch(expression)            │
└────┬────────────┬────────────┬─────────────┘
     ▼            ▼            ▼
 case 1:       case 2:      default:
 Execute       Execute      Execute
     │            │            │
     ▼            ▼            ▼
┌────┴────────────┴────────────┐
│         for loop             │
│ (init; condition; update)    │
└────────────┬────────────────┘
             ▼
       Check Condition
         /       \
     [true]     [false]
      /             \
Loop Body           Exit Loop
   |  ┌────────┐
   |  │continue│ → Next iteration
   |  └────────┘
   └──> break → Exit Loop

             ▼
        while loop
     ┌──────────────┐
     │Check Condition│
     └────┬─────────┘
          ▼
       [true]
          |
      Loop Body
          |
       [false]
          ▼

        do-while loop
     ┌──────────────────┐
     │Execute Body Once │
     └────┬─────────────┘
          ▼
     Check Condition
      /        \
  [true]      [false]
    |             |
Repeat         Exit Loop

     ▼
┌────────────┐
│    End     │
└────────────┘
```

---

### ✅ इस डायग्राम से क्या समझें?

* प्रोग्राम execution कई रास्तों से गुजर सकता है — Conditions, Loops और Blocks के माध्यम से।
* `if-else`, `switch`, और `loops` control structures का प्रयोग कर आप अपने प्रोग्राम को सही तरीके से नियंत्रित कर सकते हैं।
* `break` और `continue` loop की flow को manipulate करने के लिए इस्तेमाल होते हैं।

---

```
📍 Start
   |
   v
🔷 if (condition)
   |--> true  --> 🟩 Execute Block
   |--> false --> Check next else-if or else
                         |
                         v
                     🟩 Execute else block (if present)
   |
   v
🔷 switch (expression)
   |--> case 1: 🟩 Execute case 1 code
   |--> case 2: 🟩 Execute case 2 code
   |--> default: 🟩 Execute default code
   |
   v
🔁 for loop (initialization; condition; update)
   |
   |--> 🔄 Check Condition
         |--> true  --> 🟩 Loop Body
         |             |--> break --> 🔚 Exit loop
         |             |--> continue --> 🔁 Next iteration
         |
         |--> false --> ⏭ Exit loop
   |
   v
🔁 while loop
   |
   |--> 🔄 Check Condition
         |--> true  --> 🟩 Loop Body
         |             |--> break / continue
         |
         |--> false --> ⏭ Exit loop
   |
   v
🔁 do-while loop
   |
   |--> 🟩 Execute Body Once
         |
         --> 🔄 Check Condition
               |--> true  --> Repeat
               |--> false --> Exit
   |
   v
🔚 End
```

---

### 🧠 Notes:

* **🔷** – Decision point (`if`, `switch`)
* **🔁** – Loop structure
* **🟩** – Code execution block
* **🔚** – Program ends
* **continue** – Current iteration skip, next पर जाए
* **break** – Loop या switch से बाहर निकलें
