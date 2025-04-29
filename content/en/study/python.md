---
title: "Introduction of Python"
categories: [ Python ]
tags: [Basic]
description: "Introduction of Python"
date: 2025-03-06T08:00:00+05:30
images: ["images/2025/03/python.webp"]
author: ahmad
---
## **📌 Step 1: Python का Introduction** 🚀  

Python एक **high-level, interpreted, और user-friendly programming language** है। इसे **Guido van Rossum** ने 1991 में बनाया था। यह **सिंपल सिंटैक्स** और **पावरफुल लाइब्रेरीज़** की वजह से बहुत पॉपुलर है।  

---

### **🔹 Python क्यों सीखें?**  
✅ **सिंपल और आसान** – Python का सिंटैक्स बहुत readable और beginner-friendly है।  
✅ **बहुत उपयोगी** – Web Development, Data Science, AI, ML, Automation, और Hacking में इस्तेमाल होती है।  
✅ **बड़ी Community** – Python सीखने और समस्या हल करने के लिए एक विशाल Community मौजूद है।  
✅ **Cross-Platform** – Windows, Mac, Linux सब जगह चलता है।  
✅ **Libraries और Frameworks** – NumPy, Pandas, TensorFlow, Django, Flask जैसी हज़ारों libraries उपलब्ध हैं।  

---

### **🔹 Python का Hello World Program (Example)**  
Python में प्रोग्राम लिखना बहुत आसान है। नीचे दिया गया कोड Python का पहला प्रोग्राम है:  
```python
print("Hello, World!")
```
👉 यह कोड **"Hello, World!"** को स्क्रीन पर प्रिंट करेगा।  

---

### **📌 Next Step: Python Installation**  
अब हमें Python को अपने कंप्यूटर में **इंस्टॉल** करना होगा।  
👉 **क्या आपके सिस्टम में Python पहले से इंस्टॉल है?**  
Python चेक करने के लिए **Terminal (Linux/Mac) या Command Prompt (Windows)** में ये कमांड टाइप करें:  
```bash
python --version
```
अगर आपको **Python 3.x.x** जैसा कुछ दिखता है, तो इसका मतलब Python पहले से इंस्टॉल है।  
अगर नहीं, तो **मैं आपको Python Install करने का तरीका बताऊँ?** 😊

## **📌 Step 2: Python Installation** 🚀  

अब हम अपने सिस्टम में **Python Install** करेंगे। अगर आपके पास पहले से Python Install नहीं है, तो नीचे दिए गए स्टेप्स फॉलो करें।  

---

### **🔹 Windows में Python Install करने का तरीका**  
1️⃣ **Python की ऑफिशियल वेबसाइट पर जाएँ:**  
   🔗 [https://www.python.org/downloads/](https://www.python.org/downloads/)  

2️⃣ **Python 3 का लेटेस्ट वर्ज़न डाउनलोड करें।**  
   - Windows के लिए **Python Installer (.exe file)** डाउनलोड करें।  

3️⃣ **इंस्टॉलेशन शुरू करें और "Add Python to PATH" को सेलेक्ट करें।**  
   - इंस्टॉलेशन के दौरान एक ऑप्शन आएगा **"Add Python to PATH"** उसे **ज़रूर चेक करें** ताकि Python Command Prompt में सही से काम करे।  
   - फिर **Install Now** पर क्लिक करें।  

4️⃣ **इंस्टॉलेशन पूरा होने के बाद Python को चेक करें।**  
   - **Command Prompt (cmd)** खोलें और यह कमांड टाइप करें:  
     ```bash
     python --version
     ```  
   - अगर आउटपुट में `Python 3.x.x` दिखता है, तो Python सही से इंस्टॉल हो गया है। 🎉  

---

### **🔹 Ubuntu/Linux में Python Install करने का तरीका**  
1️⃣ **टर्मिनल (Ctrl + Alt + T) खोलें और यह कमांड रन करें:**  
   ```bash
   sudo apt update
   sudo apt install python3 python3-pip
   ```  
2️⃣ **इंस्टॉलेशन के बाद Python चेक करें:**  
   ```bash
   python3 --version
   ```  
   - अगर आउटपुट में `Python 3.x.x` दिखता है, तो Python सही से इंस्टॉल हो गया है।  

---

### **🔹 MacOS में Python Install करने का तरीका**  
1️⃣ **MacOS में Python पहले से इंस्टॉल होता है, लेकिन पुराना वर्ज़न हो सकता है।**  
2️⃣ **लेटेस्ट Python 3 इंस्टॉल करने के लिए Homebrew का इस्तेमाल करें:**  
   ```bash
   brew install python3
   ```  
3️⃣ **Python चेक करने के लिए:**  
   ```bash
   python3 --version
   ```  

---

### **✅ Next Step: Python का पहला प्रोग्राम चलाना**  
अब जब Python इंस्टॉल हो गया है, तो क्या आप Python का पहला **Hello World** प्रोग्राम चलाना चाहते हैं? 😊

## **📌 Step 3: Python का पहला प्रोग्राम** 🚀  

अब जब Python इंस्टॉल हो चुका है, तो हम अपना पहला Python प्रोग्राम रन करेंगे।  

---

### **🔹 Python Shell (REPL) में कोड चलाना**  
Python Shell एक इंटरएक्टिव मोड है, जहाँ आप लाइन-बाय-लाइन Python कोड रन कर सकते हैं।  

1️⃣ **टर्मिनल / कमांड प्रॉम्प्ट खोलें**  
2️⃣ **Python स्टार्ट करें**  
   - Windows में:  
     ```bash
     python
     ```  
   - Linux/Mac में:  
     ```bash
     python3
     ```  
3️⃣ अब Shell में ये कोड टाइप करें:  
   ```python
   print("Hello, World!")
   ```  
   - Output:  
     ```
     Hello, World!
     ```  
   🎉 बधाई हो! आपने अपना पहला Python प्रोग्राम चला लिया! 🚀  

---

### **🔹 Python Script (.py फ़ाइल) में कोड चलाना**  
Python को हम **स्क्रिप्ट फ़ाइल (.py)** में लिखकर भी चला सकते हैं।  

1️⃣ **Python Code लिखें**  
   - किसी टेक्स्ट एडिटर (Notepad, VS Code, या PyCharm) में नीचे का कोड लिखें:  
     ```python
     print("Welcome to Python Programming!")
     ```  
2️⃣ **फ़ाइल को `first_program.py` नाम से सेव करें।**  
3️⃣ **टर्मिनल / कमांड प्रॉम्प्ट खोलें और फाइल को रन करें:**  
   - Windows में:  
     ```bash
     python first_program.py
     ```  
   - Linux/Mac में:  
     ```bash
     python3 first_program.py
     ```  
4️⃣ **Output:**  
   ```
   Welcome to Python Programming!
   ```  

---

### **✅ Next Step: Python में Variables और Data Types**  
अब हम **Python में Variables और Data Types** के बारे में सीखेंगे।  
क्या मैं अगला स्टेप समझाऊँ? 😊

## **📌 Step 4: Python में Variables और Data Types** 🚀  

Python में **variables** का उपयोग डेटा को स्टोर करने के लिए किया जाता है।  
Variables में कोई भी **value (number, text, list, etc.)** स्टोर की जा सकती है।  

---

### **🔹 Python में Variable कैसे बनाते हैं?**  
Python में किसी भी नाम से एक variable बनाया जा सकता है और उसमें value दी जा सकती है:  
```python
name = "Rahul"  # String
age = 25        # Integer
price = 99.99   # Float
is_student = True  # Boolean
```  
✅ **Python में Variable बनाते समय Data Type अलग से नहीं लिखना पड़ता**, Python **खुद पहचान लेता है।**  

---

### **🔹 Python के मुख्य Data Types**  
Python में कई प्रकार के Data Types होते हैं, जिनमें से कुछ मुख्य प्रकार नीचे दिए गए हैं:  

| **Data Type**  | **Example**           | **Description** |
|---------------|----------------------|----------------|
| `int`        | `age = 25`            | Integer (पूर्ण संख्या) |
| `float`      | `price = 99.99`       | Decimal नंबर |
| `str`        | `name = "Amit"`       | Text (String) |
| `bool`       | `is_valid = True`     | True/False (Boolean) |
| `list`       | `marks = [85, 90, 78]` | Multiple values |
| `tuple`      | `colors = ("red", "blue")` | Immutable List |
| `dict`       | `student = {"name": "Raj", "age": 20}` | Key-Value Pairs |

---

### **🔹 Variables का उपयोग (Examples)**  
```python
# Integer Variable
x = 10
y = 20
total = x + y
print("Total:", total)  # Output: Total: 30

# String Variable
name = "Amit"
print("Hello, " + name)  # Output: Hello, Amit

# Boolean Variable
is_adult = True
print(is_adult)  # Output: True
```

---

### **🔹 Python में Variable Input लेना**  
```python
name = input("Enter your name: ")
print("Hello, " + name)
```
📌 **यह प्रोग्राम यूज़र से नाम लेगा और फिर Hello के साथ प्रिंट करेगा।**  

---

### **✅ Next Step: Operators in Python**  
अब हम **Python के Operators (गणितीय और लॉजिकल ऑपरेशंस)** सीखेंगे।  
क्या मैं अगला स्टेप समझाऊँ? 😊

## **📌 Step 5: Python में Operators** 🚀  

Python में **Operators** का उपयोग गणितीय और तार्किक (Logical) गणनाएँ करने के लिए किया जाता है।  
Operators **दो या अधिक variables पर कार्य करते हैं** और एक output प्रदान करते हैं।  

---

## **🔹 1. Arithmetic Operators (गणितीय ऑपरेटर)**  
ये ऑपरेटर गणितीय गणनाओं के लिए उपयोग होते हैं।  

| **Operator** | **Example**   | **Description** |
|-------------|-------------|----------------|
| `+`        | `x + y`     | जोड़ (Addition) |
| `-`        | `x - y`     | घटाना (Subtraction) |
| `*`        | `x * y`     | गुणा (Multiplication) |
| `/`        | `x / y`     | भाग (Division - Float) |
| `//`       | `x // y`    | भागफल (Floor Division) |
| `%`        | `x % y`     | शेषफल (Modulus) |
| `**`       | `x ** y`    | घातांक (Exponent) |

### **🔸 Example**
```python
x = 10
y = 3

print("Addition:", x + y)      # 13
print("Subtraction:", x - y)   # 7
print("Multiplication:", x * y) # 30
print("Division:", x / y)      # 3.3333
print("Floor Division:", x // y) # 3
print("Modulus:", x % y)       # 1
print("Exponent:", x ** y)     # 1000
```

---

## **🔹 2. Comparison Operators (तुलनात्मक ऑपरेटर)**  
ये ऑपरेटर **दो मानों की तुलना** करते हैं और **True या False** लौटाते हैं।  

| **Operator** | **Example**   | **Description** |
|-------------|-------------|----------------|
| `==`       | `x == y`    | बराबर है? (Equal to) |
| `!=`       | `x != y`    | बराबर नहीं है? (Not equal to) |
| `>`        | `x > y`     | बड़ा है? (Greater than) |
| `<`        | `x < y`     | छोटा है? (Less than) |
| `>=`       | `x >= y`    | बड़ा या बराबर है? (Greater than or equal to) |
| `<=`       | `x <= y`    | छोटा या बराबर है? (Less than or equal to) |

### **🔸 Example**
```python
a = 10
b = 5

print(a == b)  # False
print(a != b)  # True
print(a > b)   # True
print(a < b)   # False
```

---

## **🔹 3. Logical Operators (लॉजिकल ऑपरेटर)**  
ये ऑपरेटर **एक से अधिक शर्तों** की जाँच करने के लिए उपयोग किए जाते हैं।  

| **Operator** | **Example**       | **Description** |
|-------------|----------------|----------------|
| `and`      | `x > 5 and x < 15` | दोनों शर्तें सही होनी चाहिए |
| `or`       | `x > 5 or x < 3`  | कोई भी एक शर्त सही होनी चाहिए |
| `not`      | `not(x > 5)`     | विपरीत (Reverse the condition) |

### **🔸 Example**
```python
x = 10

print(x > 5 and x < 15)  # True
print(x > 5 or x < 3)    # True
print(not(x > 5))        # False
```

---

## **🔹 4. Assignment Operators (असाइनमेंट ऑपरेटर)**  
ये ऑपरेटर किसी **variable को मान (value) असाइन करने** के लिए उपयोग होते हैं।  

| **Operator** | **Example**  | **Same As** |
|-------------|------------|-------------|
| `=`         | `x = 5`    | `x = 5` |
| `+=`        | `x += 3`   | `x = x + 3` |
| `-=`        | `x -= 3`   | `x = x - 3` |
| `*=`        | `x *= 3`   | `x = x * 3` |
| `/=`        | `x /= 3`   | `x = x / 3` |
| `//=`       | `x //= 3`  | `x = x // 3` |
| `%=`        | `x %= 3`   | `x = x % 3` |
| `**=`       | `x **= 3`  | `x = x ** 3` |

### **🔸 Example**
```python
x = 10
x += 5  # x = x + 5
print(x)  # 15
```

---

## **✅ Next Step: Conditional Statements in Python**  
अब हम **Python में If-Else और Conditional Statements** सीखेंगे।  
क्या मैं अगला स्टेप समझाऊँ? 😊

## **📌 Step 6: Python में Conditional Statements (If-Else)** 🚀  

Python में **Conditional Statements** का उपयोग किसी **शर्त (Condition) के आधार पर निर्णय लेने** के लिए किया जाता है।  
अगर शर्त **सही (True)** होती है तो एक Block चलेगा, **नहीं तो** दूसरा Block चलेगा।  

---

## **🔹 1. if Statement (अगर शर्त सही हो तो)**  
अगर दी गई **शर्त (Condition) True** होती है, तो अंदर का कोड चलेगा।  

### **🔸 Example**
```python
age = 18

if age >= 18:
    print("आप वोट दे सकते हैं!")  
```
✅ **Output:** `आप वोट दे सकते हैं!`

---

## **🔹 2. if-else Statement (अगर सही है तो कुछ करो, वरना कुछ और करो)**  
अगर शर्त **True** होती है, तो **if** block चलेगा,  
अगर शर्त **False** होती है, तो **else** block चलेगा।  

### **🔸 Example**
```python
age = 16

if age >= 18:
    print("आप वोट दे सकते हैं!")
else:
    print("आप वोट नहीं दे सकते!")  
```
✅ **Output:** `आप वोट नहीं दे सकते!`

---

## **🔹 3. if-elif-else Statement (कई शर्तों को चेक करना)**  
अगर **पहली शर्त False** हो जाती है, तो **elif** का उपयोग करके दूसरी शर्त चेक कर सकते हैं।  

### **🔸 Example**
```python
marks = 75

if marks >= 90:
    print("आपको A+ ग्रेड मिला!")
elif marks >= 80:
    print("आपको A ग्रेड मिला!")
elif marks >= 70:
    print("आपको B ग्रेड मिला!")
else:
    print("आपको C ग्रेड मिला!")  
```
✅ **Output:** `आपको B ग्रेड मिला!`

---

## **🔹 4. Nested if (if के अंदर if)**  
अगर एक if के अंदर दूसरा if हो, तो इसे **Nested if** कहते हैं।  

### **🔸 Example**
```python
num = 10

if num > 0:
    print("यह एक Positive Number है!")
    
    if num % 2 == 0:
        print("यह Even Number भी है!")  
```
✅ **Output:**  
```
यह एक Positive Number है!  
यह Even Number भी है!  
```

---

## **✅ Next Step: Python में Loops (For और While)**  
अब हम **Python में Loops** (बार-बार कोड चलाने का तरीका) सीखेंगे।  
क्या मैं अगला स्टेप समझाऊँ? 😊

## **📌 Step 7: Python में Loops (For और While)** 🚀  

जब हमें कोई कोड **बार-बार चलाना (Repeat करना)** हो, तो हम **Loops** का उपयोग करते हैं।  
Python में दो प्रकार के Loops होते हैं:  

1️⃣ **for loop** – जब हमें निश्चित संख्या में बार कोड चलाना हो।  
2️⃣ **while loop** – जब हमें शर्त पूरी होने तक कोड चलाना हो।  

---

## **🔹 1. For Loop (निश्चित बार दोहराना)**  
जब हमें **list, tuple, string, या range** में items को एक-एक करके एक्सेस करना हो, तो **for loop** का उपयोग किया जाता है।  

### **🔸 Example: List में Loop चलाना**
```python
fruits = ["सेब", "केला", "अंगूर"]

for fruit in fruits:
    print(fruit)
```
✅ **Output:**  
```
सेब  
केला  
अंगूर  
```

---

### **🔸 Example: range() के साथ For Loop**
अगर हमें **1 से 5 तक के नंबर प्रिंट** करने हों:  
```python
for i in range(1, 6):
    print(i)
```
✅ **Output:**  
```
1  
2  
3  
4  
5  
```
📌 **range(start, stop, step)**  
- `start` – कहाँ से शुरू करें  
- `stop` – कहाँ पर बंद करें (यह संख्या शामिल नहीं होती)  
- `step` – कितने-कितने का अंतर  

```python
for i in range(1, 10, 2):  # 1 से 10 तक, 2-2 की जंप
    print(i)
```
✅ **Output:**  
```
1  
3  
5  
7  
9  
```

---

## **🔹 2. While Loop (शर्त पूरी होने तक दोहराना)**  
जब हमें **पता न हो कि कोड कितनी बार चलाना है, लेकिन शर्त पूरी होने तक चलाना है**, तब **while loop** उपयोग होता है।  

### **🔸 Example:**
```python
x = 1

while x <= 5:
    print(x)
    x += 1  # x को 1 से बढ़ाते रहेंगे
```
✅ **Output:**  
```
1  
2  
3  
4  
5  
```

---

## **🔹 3. break और continue (Loop को कंट्रोल करना)**  
**`break`** – loop को बीच में रोकने के लिए।  
**`continue`** – कुछ को स्किप करके अगला step लेने के लिए।  

### **🔸 Example: break**
```python
for i in range(1, 10):
    if i == 5:
        break  # Loop यहीं बंद हो जाएगा
    print(i)
```
✅ **Output:**  
```
1  
2  
3  
4  
```

### **🔸 Example: continue**
```python
for i in range(1, 6):
    if i == 3:
        continue  # 3 को स्किप कर देगा
    print(i)
```
✅ **Output:**  
```
1  
2  
4  
5  
```

---

## **✅ Next Step: Python में Functions (फंक्शन क्या होते हैं?)**  
अब हम **Python में Functions** (बार-बार उपयोग होने वाले कोड को फंक्शन में कैसे लिखें) सीखेंगे।  
क्या मैं अगला स्टेप समझाऊँ? 😊

## **📌 Step 8: Python में Functions (फंक्शन क्या होते हैं?)** 🚀  

जब हमें **बार-बार एक जैसा कोड लिखने की जरूरत पड़ती है**, तो हम उसे **Function** में लिख सकते हैं।  
इससे हमारा कोड **Readable (समझने में आसान), Reusable (बार-बार इस्तेमाल होने लायक) और छोटा** हो जाता है।  

---

## **🔹 1. Python में Function कैसे बनाते हैं?**  

Python में `def` कीवर्ड से function बनाया जाता है।  

### **🔸 Example: एक Simple Function**
```python
def greet():
    print("नमस्ते! कैसे हो?")  

greet()  # Function को कॉल (चालू) करना  
```
✅ **Output:**  
```
नमस्ते! कैसे हो?  
```
📌 **Explanation:**  
- `def greet():` → हमने `greet()` नाम का function बनाया।  
- `print("नमस्ते! कैसे हो?")` → जब function call होगा, यह code चलेगा।  
- `greet()` → function को कॉल किया।  

---

## **🔹 2. Function में Arguments (Input लेना)**  
Function में **arguments (parameters)** देकर हम उसे Dynamic बना सकते हैं।  

### **🔸 Example: नाम के साथ Greeting**
```python
def greet(name):
    print(f"नमस्ते {name}! कैसे हो?")  

greet("अमन")  
greet("सोनू")  
```
✅ **Output:**  
```
नमस्ते अमन! कैसे हो?  
नमस्ते सोनू! कैसे हो?  
```
📌 **Explanation:**  
- `def greet(name):` → `name` एक parameter है, जो function के अंदर इस्तेमाल होगा।  
- `greet("अमन")` → `"अमन"` argument के रूप में पास किया गया।  

---

## **🔹 3. Function में Multiple Parameters**  
अगर function में एक से ज्यादा inputs देने हैं, तो हम Multiple Parameters इस्तेमाल कर सकते हैं।  

### **🔸 Example: दो नंबर जोड़ना**
```python
def add(a, b):
    sum = a + b
    print(f"योग: {sum}")

add(5, 3)  
add(10, 20)  
```
✅ **Output:**  
```
योग: 8  
योग: 30  
```

---

## **🔹 4. Function में Return Statement (Output वापस भेजना)**  
अगर function को कोई **result वापस (return) भेजना हो**, तो हम `return` keyword का उपयोग करते हैं।  

### **🔸 Example: दो नंबर जोड़कर result return करना**
```python
def add(a, b):
    return a + b  

result = add(10, 5)  
print(f"योग: {result}")  
```
✅ **Output:**  
```
योग: 15  
```
📌 **Explanation:**  
- `return a + b` → function result वापस भेजेगा।  
- `result = add(10, 5)` → return value `result` में store हो गई।  

---

## **🔹 5. Default Parameter (अगर input न मिले तो default value लेना)**  
अगर हम चाहते हैं कि function **default value** से चले, तो हम default parameter सेट कर सकते हैं।  

### **🔸 Example: Default Greeting Function**
```python
def greet(name="दोस्त"):
    print(f"नमस्ते {name}! कैसे हो?")  

greet()  # Default value 'दोस्त' का उपयोग करेगा  
greet("अमन")  
```
✅ **Output:**  
```
नमस्ते दोस्त! कैसे हो?  
नमस्ते अमन! कैसे हो?  
```

---

## **🔹 6. Lambda Function (छोटे और Simple Functions)**  
अगर कोई function **सिर्फ एक लाइन का हो**, तो हम इसे `lambda` function में लिख सकते हैं।  

### **🔸 Example: दो नंबर जोड़ने का Lambda Function**
```python
add = lambda a, b: a + b  

print(add(5, 3))  
```
✅ **Output:**  
```
8  
```

---

## **✅ Next Step: Python में Data Structures (List, Tuple, Dictionary, Set)**  
अब हम **Python के Important Data Structures** (List, Tuple, Dictionary, Set) सीखेंगे।  
क्या मैं अगला स्टेप समझाऊँ? 😊

## **📌 Step 9: Python में Data Structures (List, Tuple, Dictionary, Set)** 🚀  

Python में **Data Structures** का उपयोग **डेटा को Store और Manage** करने के लिए किया जाता है।  
इसमें चार मुख्य प्रकार होते हैं:  

1️⃣ **List (सूची)** – Mutable (बदलने योग्य) ordered collection  
2️⃣ **Tuple (ट्यूपल)** – Immutable (नहीं बदल सकता) ordered collection  
3️⃣ **Dictionary (शब्दकोश)** – Key-Value pairs वाली collection  
4️⃣ **Set (समूह)** – Unordered, unique items वाली collection  

---

## **🔹 1. Python List (Mutable Ordered Collection)**  
📌 **List में कई items रख सकते हैं और इन्हें modify कर सकते हैं।**  
📌 **List को `[ ]` ब्रैकेट में लिखा जाता है।**  

### **🔸 Example: List बनाना और उपयोग करना**
```python
fruits = ["सेब", "केला", "अंगूर"]
print(fruits)  
print(fruits[0])  # पहला item एक्सेस करें
```
✅ **Output:**  
```
['सेब', 'केला', 'अंगूर']
सेब
```

### **🔸 List को Modify करना (Mutable होने के कारण)**
```python
fruits[1] = "संतरा"  # दूसरे item को बदलना
print(fruits)
```
✅ **Output:**  
```
['सेब', 'संतरा', 'अंगूर']
```

### **🔸 List में Item जोड़ना**
```python
fruits.append("अनार")  # लास्ट में जोड़ें
print(fruits)
```
✅ **Output:**  
```
['सेब', 'संतरा', 'अंगूर', 'अनार']
```

---

## **🔹 2. Python Tuple (Immutable Ordered Collection)**  
📌 **Tuple List की तरह ही होता है, लेकिन इसे बदला नहीं जा सकता।**  
📌 **Tuple को `( )` ब्रैकेट में लिखा जाता है।**  

### **🔸 Example: Tuple बनाना और उपयोग करना**
```python
numbers = (10, 20, 30)
print(numbers)
print(numbers[1])  # दूसरा item एक्सेस करें
```
✅ **Output:**  
```
(10, 20, 30)
20
```

### **🔸 Tuple को Change नहीं कर सकते**
```python
numbers[1] = 50  # Error देगा क्योंकि Tuple immutable होता है।
```
❌ **Error:**  
```
TypeError: 'tuple' object does not support item assignment
```

---

## **🔹 3. Python Dictionary (Key-Value Pairs Collection)**  
📌 **Dictionary में Data को Key-Value pairs में Store किया जाता है।**  
📌 **Dictionary को `{ }` ब्रैकेट में लिखा जाता है।**  

### **🔸 Example: Dictionary बनाना और उपयोग करना**
```python
student = {"नाम": "अमन", "उम्र": 21, "शहर": "दिल्ली"}
print(student["नाम"])  # Key के द्वारा Value एक्सेस करना
```
✅ **Output:**  
```
अमन
```

### **🔸 Dictionary में नया Key-Value जोड़ना**
```python
student["कक्षा"] = "12वीं"
print(student)
```
✅ **Output:**  
```
{'नाम': 'अमन', 'उम्र': 21, 'शहर': 'दिल्ली', 'कक्षा': '12वीं'}
```

### **🔸 Dictionary में Value बदलना**
```python
student["उम्र"] = 22
print(student)
```
✅ **Output:**  
```
{'नाम': 'अमन', 'उम्र': 22, 'शहर': 'दिल्ली', 'कक्षा': '12वीं'}
```

---

## **🔹 4. Python Set (Unordered Unique Items Collection)**  
📌 **Set में Unique items होते हैं और इनका order तय नहीं होता।**  
📌 **Set को `{ }` ब्रैकेट में लिखा जाता है।**  

### **🔸 Example: Set बनाना और उपयोग करना**
```python
numbers = {1, 2, 3, 4, 4, 5}  # Duplicate 4 को हटा देगा
print(numbers)
```
✅ **Output:**  
```
{1, 2, 3, 4, 5}
```

### **🔸 Set में नया Item जोड़ना**
```python
numbers.add(6)
print(numbers)
```
✅ **Output:**  
```
{1, 2, 3, 4, 5, 6}
```

---

## **📌 Next Step: Python में File Handling (फाइल को पढ़ना और लिखना)**  
अब हम **Python में Files को Read और Write करना** सीखेंगे।  
क्या मैं अगला स्टेप समझाऊँ? 😊

## **📌 Step 10: Python में File Handling (फाइल को पढ़ना और लिखना)** 🚀  

Python में **File Handling** का उपयोग **Text या Data को Read और Write** करने के लिए किया जाता है।  
इसमें हम **Files (TXT, CSV, JSON, etc.) को Open, Read, Write और Close** कर सकते हैं।  

---

## **🔹 1. Python में File Open और Read करना**  
Python में `open()` function का उपयोग करके फाइल को खोला जाता है।  
- `"r"` → Read Mode (फाइल को सिर्फ पढ़ सकते हैं)  
- `"w"` → Write Mode (फाइल को लिख सकते हैं, पुराना डेटा हट जाएगा)  
- `"a"` → Append Mode (फाइल के अंत में नया डेटा जोड़ सकते हैं)  

### **🔸 Example: फाइल को पढ़ना (`read()`)**
```python
file = open("sample.txt", "r")  # "r" = Read mode
content = file.read()
print(content)
file.close()  # File को बंद करना जरूरी है
```
✅ **Output (अगर sample.txt में यह लिखा हो):**  
```
Hello, यह एक Python फाइल है।
```

### **🔸 एक-एक Line पढ़ना (`readline()` और `readlines()`)**
```python
file = open("sample.txt", "r")
print(file.readline())  # पहली लाइन पढ़ेगा
file.close()
```

```python
file = open("sample.txt", "r")
print(file.readlines())  # सारी लाइनों को List में स्टोर करेगा
file.close()
```

---

## **🔹 2. Python में File Write करना (`write()`)**  
अगर हमें किसी फाइल में **नया डेटा लिखना** है, तो `"w"` या `"a"` mode का उपयोग करेंगे।  
📌 **⚠️ ध्यान दें:** `"w"` mode से **पुराना डेटा हट जाएगा।**  

### **🔸 Example: फाइल में लिखना (`write()`)**
```python
file = open("sample.txt", "w")  # Write mode (पुराना डेटा हट जाएगा)
file.write("नमस्ते! यह नई फाइल है।")
file.close()
```

✅ **Output (sample.txt फाइल में यह लिखा जाएगा):**  
```
नमस्ते! यह नई फाइल है।
```

### **🔸 Example: फाइल में नया डेटा जोड़ना (`append` mode)**
```python
file = open("sample.txt", "a")  # Append mode (डेटा हटेगा नहीं, नया जुड़ जाएगा)
file.write("\nयह नई लाइन है।")  # \n से नई लाइन में लिखेगा
file.close()
```

✅ **Output (sample.txt का नया डेटा):**  
```
नमस्ते! यह नई फाइल है।
यह नई लाइन है।
```

---

## **🔹 3. Python में `with open()` का उपयोग (बिना `close()` किए File Handle करना)**  
`with open()` का उपयोग करने से **हमें `close()` करने की जरूरत नहीं पड़ती** और फाइल खुद बंद हो जाती है।  

### **🔸 Example: फाइल पढ़ना `with open()` के साथ**
```python
with open("sample.txt", "r") as file:
    content = file.read()
    print(content)  
```

### **🔸 Example: फाइल में लिखना `with open()` के साथ**
```python
with open("sample.txt", "w") as file:
    file.write("Python File Handling आसान है!")
```

---

## **📌 Next Step: Python में Exception Handling (Try-Except से Errors को Handle करना)**  
अब हम **Python में Error Handling (Try-Except Blocks)** सीखेंगे।  
क्या मैं अगला स्टेप समझाऊँ? 😊

## **📌 Step 11: Python में Exception Handling (त्रुटियों को संभालना)** 🚀  

Python प्रोग्राम में **गलत इनपुट, फाइल न मिलने, ज़ीरो से भाग करने** जैसी समस्याओं से **एरर (Error) आ सकते हैं**।  
इन एरर को **Handle** करने के लिए **Exception Handling** का उपयोग किया जाता है।  

Python में Exception Handling के लिए **`try` - `except`** का उपयोग किया जाता है।  

---

## **🔹 1. Python में Error (Exception) क्या होते हैं?**  
Python में दो प्रकार की Errors होती हैं:  
1️⃣ **Syntax Errors (व्याकरण त्रुटि)** – कोड लिखने में गलती  
2️⃣ **Exceptions (अपवाद)** – Runtime में होने वाली गलती  

### **🔸 Example: Syntax Error**
```python
print("Hello  # कोटेशन बंद करना भूल गए
```
❌ **Error:**  
```
SyntaxError: EOL while scanning string literal
```

### **🔸 Example: Exception (ZeroDivisionError)**
```python
a = 10 / 0  # 0 से भाग नहीं कर सकते
```
❌ **Error:**  
```
ZeroDivisionError: division by zero
```

---

## **🔹 2. `try-except` से Errors को Handle करना**  
📌 **अगर कोई कोड Error दे सकता है, तो उसे `try` Block में रखते हैं, और Error को `except` Block में Handle करते हैं।**  

### **🔸 Example: ZeroDivisionError Handle करना**
```python
try:
    a = 10 / 0  # Error होगा
except ZeroDivisionError:
    print("Error: 0 से भाग नहीं किया जा सकता!")  # Error Handle हो गया
```
✅ **Output:**  
```
Error: 0 से भाग नहीं किया जा सकता!
```

---

## **🔹 3. `except Exception` से सभी Errors Handle करना**  
अगर हमें **सभी प्रकार के Errors Handle करने हैं**, तो `except Exception` का उपयोग कर सकते हैं।  

### **🔸 Example: Multiple Errors Handle करना**
```python
try:
    num = int(input("कोई संख्या दर्ज करें: "))  # अगर यूज़र कुछ गलत डाले तो
    result = 10 / num  # अगर 0 डाले तो
    print("परिणाम:", result)
except ZeroDivisionError:
    print("Error: 0 से भाग नहीं कर सकते!")
except ValueError:
    print("Error: कृपया केवल संख्याएँ दर्ज करें!")
except Exception as e:
    print(f"कोई अज्ञात त्रुटि हुई: {e}")
```
✅ **Output (गलत input देने पर):**  
```
Error: कृपया केवल संख्याएँ दर्ज करें!
```

✅ **Output (0 देने पर):**  
```
Error: 0 से भाग नहीं कर सकते!
```

---

## **🔹 4. `finally` Block (कोई भी Error हो, ये चलेगा)**  
📌 **`finally` Block हमेशा Execute होता है, चाहे Error आए या न आए।**  

### **🔸 Example: `finally` Block**
```python
try:
    file = open("data.txt", "r")
    print(file.read())
except FileNotFoundError:
    print("Error: फाइल नहीं मिली!")
finally:
    print("यह Code हमेशा चलेगा!")
```
✅ **Output (अगर फाइल नहीं मिली):**  
```
Error: फाइल नहीं मिली!
यह Code हमेशा चलेगा!
```

---

## **📌 Next Step: Python में Object-Oriented Programming (OOPs Concepts - Class & Objects)**  
अब हम **Python में OOPs (Class, Object, Inheritance)** सीखेंगे।  
क्या मैं अगला स्टेप समझाऊँ? 😊

## **📌 Step 12: Python में Object-Oriented Programming (OOPs Concepts)** 🚀  

Python में **Object-Oriented Programming (OOPs)** एक **Programming Paradigm** है, जो **Classes और Objects** का उपयोग करता है।  
OOPs की मदद से **Code को Reuse और Manage करना आसान हो जाता है**।  

---

## **🔹 1. Class और Object क्या होते हैं?**  
📌 **Class:** यह **एक Blueprint (खाका)** होता है, जिससे Objects बनाए जाते हैं।  
📌 **Object:** यह Class का **Instance (उदाहरण)** होता है।  

### **🔸 Example: Class और Object**
```python
# Class बनाना
class Car:
    def __init__(self, brand, model):
        self.brand = brand  # Object की Property
        self.model = model

    def show_details(self):
        print(f"Car: {self.brand} {self.model}")

# Object बनाना
car1 = Car("Toyota", "Corolla")
car2 = Car("Honda", "Civic")

car1.show_details()  # Car: Toyota Corolla
car2.show_details()  # Car: Honda Civic
```
✅ **Output:**  
```
Car: Toyota Corolla  
Car: Honda Civic  
```

---

## **🔹 2. Constructor (`__init__`) क्या होता है?**  
📌 **Constructor (`__init__`) वह Function होता है, जो Object बनने पर Automatically Call होता है।**  

```python
class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def greet(self):
        print(f"Hello, मेरा नाम {self.name} है और मेरी उम्र {self.age} साल है।")

p1 = Person("अमित", 30)
p1.greet()
```
✅ **Output:**  
```
Hello, मेरा नाम अमित है और मेरी उम्र 30 साल है।
```

---

## **🔹 3. Inheritance (विरासत) क्या होता है?**  
📌 **Inheritance** से हम **एक Class की Properties और Methods दूसरी Class में Use कर सकते हैं**।  

### **🔸 Example: Single Inheritance**
```python
# Parent Class
class Animal:
    def sound(self):
        print("जानवर की आवाज़!")

# Child Class (जो Animal को Inherit कर रही है)
class Dog(Animal):
    def bark(self):
        print("कुत्ता भौंकता है!")

dog = Dog()
dog.sound()  # Parent Class का Method
dog.bark()   # Child Class का Method
```
✅ **Output:**  
```
जानवर की आवाज़!  
कुत्ता भौंकता है!  
```

---

## **🔹 4. Encapsulation (डेटा छुपाना)**  
📌 **Encapsulation से हम Data को Hide कर सकते हैं और सिर्फ जरूरी Methods से Access दे सकते हैं।**  

### **🔸 Example: Encapsulation**
```python
class BankAccount:
    def __init__(self, balance):
        self.__balance = balance  # Private Variable

    def get_balance(self):
        return self.__balance  # Encapsulated Data Access

account = BankAccount(5000)
print(account.get_balance())  # ✅ सही तरीका

# print(account.__balance)  # ❌ गलत (डायरेक्ट एक्सेस नहीं कर सकते)
```
✅ **Output:**  
```
5000
```

---

## **🔹 5. Polymorphism (एक से अधिक रूप)**  
📌 **Polymorphism का मतलब होता है "एक ही नाम, लेकिन अलग-अलग काम"।**  
📌 इसमें **एक ही Function अलग-अलग Classes में अलग-अलग तरीके से काम करता है।**  

### **🔸 Example: Polymorphism**
```python
class Bird:
    def sound(self):
        print("पंछी गा रहे हैं!")

class Dog:
    def sound(self):
        print("कुत्ता भौंक रहा है!")

# Polymorphism का उपयोग
for animal in [Bird(), Dog()]:
    animal.sound()
```
✅ **Output:**  
```
पंछी गा रहे हैं!  
कुत्ता भौंक रहा है!  
```

---

## **📌 Next Step: Python में Modules और Libraries (Like NumPy, Pandas, Matplotlib)**  
अब हम **Python में Modules और Libraries (जैसे NumPy, Pandas, Matplotlib)** सीखेंगे।  
क्या मैं अगला स्टेप समझाऊँ? 😊

## **📌 Step 13: Python में Modules और Libraries** 🚀  

Python में **Modules और Libraries** का उपयोग करके हम **Code को Organize और Reuse** कर सकते हैं।  
Modules वे **फाइल्स** होती हैं, जिनमें Python कोड होता है, और Libraries कई Modules का Collection होती हैं।  

---

## **🔹 1. Python Module क्या होता है?**  
📌 **Module** एक **Python फ़ाइल (.py)** होती है, जिसमें **Functions और Variables** होते हैं, जिन्हें हम दूसरे कोड में Import करके Use कर सकते हैं।  

### **🔸 Example: अपना खुद का Module बनाना और Import करना**
1️⃣ **एक नया Python फ़ाइल बनाइए** → `my_module.py`  
```python
# my_module.py
def greet(name):
    return f"Hello, {name}!"
```

2️⃣ **इस Module को Main फ़ाइल में Import करके इस्तेमाल करें:**  
```python
import my_module

print(my_module.greet("Amit"))  # Output: Hello, Amit!
```

---

## **🔹 2. Python की Built-in Libraries**  
Python में कई **Built-in Libraries** होती हैं, जिन्हें हम सीधा **Import** करके Use कर सकते हैं।  
आइए कुछ Important Libraries देखें:  

### **📌 (1) `math` - गणितीय कार्यों के लिए**  
```python
import math

print(math.sqrt(25))   # 5.0
print(math.factorial(5))  # 120
```

### **📌 (2) `random` - Random Numbers Generate करने के लिए**  
```python
import random

print(random.randint(1, 10))  # 1 से 10 के बीच कोई Random Number
print(random.choice(["Apple", "Banana", "Mango"]))  # कोई Random शब्द
```

### **📌 (3) `datetime` - तारीख और समय के लिए**  
```python
import datetime

now = datetime.datetime.now()
print("अभी का समय:", now)
```

---

## **🔹 3. External Libraries (NumPy, Pandas, Matplotlib, etc.)**  
Python में कई **External Libraries** हैं, जिन्हें **Install करके** Use किया जाता है।  
👉 **इन्हें Install करने के लिए:**  
```
pip install numpy pandas matplotlib
```

### **📌 (1) `NumPy` - Scientific Computation के लिए**  
```python
import numpy as np

arr = np.array([1, 2, 3, 4, 5])
print(arr * 2)  # [2 4 6 8 10]
```

### **📌 (2) `Pandas` - Data Analysis के लिए**  
```python
import pandas as pd

data = {"नाम": ["अमित", "रोहित"], "उम्र": [25, 30]}
df = pd.DataFrame(data)
print(df)
```

### **📌 (3) `Matplotlib` - Graphs बनाने के लिए**  
```python
import matplotlib.pyplot as plt

x = [1, 2, 3, 4, 5]
y = [10, 20, 30, 40, 50]

plt.plot(x, y)
plt.show()
```

---

## **📌 Step 15: Python with Databases (Python से Database Connect करना) 🚀**  

Python का उपयोग करके हम **Databases (MySQL, SQLite, PostgreSQL, MongoDB, आदि)** से कनेक्ट कर सकते हैं।  
सबसे पहले हम **SQLite** सीखेंगे क्योंकि यह **Inbuilt Database** है और Python में आसानी से इस्तेमाल किया जा सकता है।  

---

## **🔹 1. SQLite Database क्या है?**  
📌 **SQLite** एक **Lightweight Database** है, जो Python के साथ **Inbuilt** आता है।  
✔ इसमें कोई **Server Install करने की जरूरत नहीं**।  
✔ यह **File-Based** Database होता है।  
✔ इसका उपयोग **छोटे से बड़े प्रोजेक्ट्स** में किया जाता है।  

---

## **🔹 2. SQLite को Python से Connect करना**  

📌 सबसे पहले हमें **sqlite3** लाइब्रेरी का उपयोग करना होगा।  
```python
import sqlite3

# Database से कनेक्ट करें (अगर फाइल नहीं है तो यह नई फाइल बना देगा)
conn = sqlite3.connect("my_database.db")

# Cursor बनाएं (जो SQL Queries को Execute करेगा)
cursor = conn.cursor()

print("Database Connected Successfully!")

# कनेक्शन बंद करें
conn.close()
```
✅ **Output:**  
```
Database Connected Successfully!
```
✔ अब **"my_database.db"** नाम की SQLite Database File बन जाएगी।

---

## **🔹 3. Table Create करना (CREATE TABLE Query)**  

📌 **SQL Query** लिखकर हम **Table Create** कर सकते हैं।  

```python
import sqlite3

conn = sqlite3.connect("my_database.db")
cursor = conn.cursor()

# Table बनाएं
cursor.execute('''
    CREATE TABLE IF NOT EXISTS students (
        id INTEGER PRIMARY KEY,
        name TEXT,
        age INTEGER
    )
''')

conn.commit()  # Changes Save करें
print("Table Created Successfully!")

conn.close()
```
✅ **Output:**  
```
Table Created Successfully!
```
✔ अब **students** नाम की Table Database में बन जाएगी।  

---

## **🔹 4. Data Insert करना (INSERT Query)**  
📌 **Table में Data डालने के लिए `INSERT INTO` का उपयोग करें।**  

```python
import sqlite3

conn = sqlite3.connect("my_database.db")
cursor = conn.cursor()

# Data Insert करें
cursor.execute("INSERT INTO students (name, age) VALUES ('अमित', 22)")
cursor.execute("INSERT INTO students (name, age) VALUES ('सोनू', 25)")

conn.commit()  # Save Changes
print("Data Inserted Successfully!")

conn.close()
```
✅ **Output:**  
```
Data Inserted Successfully!
```

---

## **🔹 5. Data Read करना (SELECT Query)**  
📌 **Table से Data Read करने के लिए `SELECT * FROM` का उपयोग करें।**  

```python
import sqlite3

conn = sqlite3.connect("my_database.db")
cursor = conn.cursor()

# Data Read करें
cursor.execute("SELECT * FROM students")
rows = cursor.fetchall()  # सभी Rows को Fetch करें

for row in rows:
    print(row)

conn.close()
```
✅ **Output:**  
```
(1, 'अमित', 22)
(2, 'सोनू', 25)
```
✔ यह **Tuple Format** में Data Return करेगा।  

---

## **🔹 6. Data Update करना (UPDATE Query)**  
📌 **Table में Existing Data Update करने के लिए `UPDATE` Query का उपयोग करें।**  

```python
import sqlite3

conn = sqlite3.connect("my_database.db")
cursor = conn.cursor()

# Update Query
cursor.execute("UPDATE students SET age = 26 WHERE name = 'सोनू'")

conn.commit()
print("Data Updated Successfully!")

conn.close()
```
✅ **Output:**  
```
Data Updated Successfully!
```
✔ अब सोनू की उम्र **25 → 26** हो जाएगी।

---

## **🔹 7. Data Delete करना (DELETE Query)**  
📌 **Table से किसी Row को Delete करने के लिए `DELETE` Query का उपयोग करें।**  

```python
import sqlite3

conn = sqlite3.connect("my_database.db")
cursor = conn.cursor()

# Delete Query
cursor.execute("DELETE FROM students WHERE name = 'अमित'")

conn.commit()
print("Data Deleted Successfully!")

conn.close()
```
✅ **Output:**  
```
Data Deleted Successfully!
```
✔ अब **अमित** का Data Delete हो जाएगा।

---

## **🔹 8. MySQL से कनेक्ट करना (MySQL Connector)**  
📌 MySQL से कनेक्ट करने के लिए हमें **`mysql-connector-python`** इंस्टॉल करना होगा।  
```bash
pip install mysql-connector-python
```

### **📌 Example: MySQL से कनेक्शन**  
```python
import mysql.connector

conn = mysql.connector.connect(
    host="localhost",
    user="root",
    password="your_password",
    database="your_database"
)

cursor = conn.cursor()
print("MySQL Connected Successfully!")

conn.close()
```

---

## **📌 Next Step: Python और Pandas (Data Analysis & Data Science)**  
अब हम सीखेंगे **Pandas (Data Analysis & Data Science में उपयोगी लाइब्रेरी)**।  
क्या मैं अगला स्टेप समझाऊँ? 😊

## **📌 Virtual Environment (Virtualenv) कैसे बनाएं?**  

🔹 **Virtual Environment (Venv)** Python में एक **अलग-अलग वर्कस्पेस** बनाने का तरीका है, जिससे आपकी अलग-अलग Python प्रोजेक्ट्स की dependencies (packages) एक-दूसरे से प्रभावित न हों।  

### **🎯 Virtual Environment क्यों ज़रूरी है?**
✔ अलग-अलग प्रोजेक्ट्स के लिए **अलग-अलग Python वर्ज़न और लाइब्रेरी** रख सकते हैं।  
✔ Python के पैकेजेस **Globally Install करने की ज़रूरत नहीं** होती।  
✔ Dependency Conflicts को **Avoid** करता है।  

---

## **🔹 Step 1: Virtualenv इंस्टॉल करें (अगर पहले से इंस्टॉल नहीं है)**  
```bash
pip install virtualenv
```
✔ यह Command `virtualenv` को आपके सिस्टम में इंस्टॉल कर देगा।

---

## **🔹 Step 2: Virtual Environment बनाएं**  
अपने प्रोजेक्ट के फ़ोल्डर में जाकर यह Command चलाएं:  
```bash
virtualenv myenv
```
✅ **यह क्या करेगा?**  
✔ `myenv` नाम का एक नया Virtual Environment बनाएगा।  
✔ यह एक **अलग Python इंटरप्रेटर और पैकेज मैनेजर (pip)** सेट करेगा।  

अगर आप **Python 3** का इस्तेमाल कर रहे हैं, तो यह कमांड दें:  
```bash
python3 -m venv myenv
```

---

## **🔹 Step 3: Virtual Environment Activate करें**  
📌 Activation का तरीका OS के हिसाब से अलग होता है।  

**✔ Windows (Command Prompt / PowerShell):**  
```bash
myenv\Scripts\activate
```

**✔ Ubuntu / Mac (Terminal):**  
```bash
source myenv/bin/activate
```
✅ **Activate होने के बाद Terminal में ऐसे दिखेगा:**  
```
(myenv) user@machine:~$
```
✔ अब आप इस Virtual Environment में **Python Packages Install** कर सकते हैं।

---

## **🔹 Step 4: Virtual Environment में Packages Install करें**  
अब आप कोई भी **Python Package** इंस्टॉल कर सकते हैं, जो सिर्फ इसी Environment में रहेगा।  

```bash
pip install numpy pandas
```

---

## **🔹 Step 5: Virtual Environment Deactivate करें**  
अगर आप Virtual Environment से बाहर निकलना चाहते हैं, तो यह कमांड चलाएं:  
```bash
deactivate
```
✔ इससे आप **सिस्टम के Default Python Environment** में वापस चले जाएंगे।

---

## **🔹 Step 6: Virtual Environment को Delete करना**  
अगर आपको Virtual Environment **हटाना (Delete)** है, तो आप इसे **सीधे डिलीट कर सकते हैं**।  

```bash
rm -rf myenv    # (Linux / Mac)
rmdir /s myenv  # (Windows)
```
✔ यह `myenv` नाम का पूरा Virtual Environment हटा देगा।

---

## **🎯 निष्कर्ष (Conclusion)**
🔹 **Virtual Environment** Python Projects को **Organized और Manage** करने के लिए ज़रूरी है।  
🔹 **हर प्रोजेक्ट के लिए एक अलग Virtualenv बनाएं** ताकि Python Dependencies न टकराएं।  
🔹 **Activate और Deactivate करना बहुत आसान** है।  

📌 **Next Step:** अब आप Virtual Environment में **Jupyter Notebook, Flask, Django** जैसी लाइब्रेरीज़ को Install और Use कर सकते हैं! 🚀  

### 🎯 **क्या आपको कोई और Example या डेमो चाहिए? 😊**