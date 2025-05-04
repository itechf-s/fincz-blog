---
title: "Introduction of NumPy"
categories: [ Python ]
tags: [Basic]
description: "Introduction of NumPy"
date: 2025-02-27T08:00:00+05:30
images: ["images/2025/02/num-py.webp"]
author: ahmad
---

## **NumPy क्या होता है?**  

**NumPy (Numerical Python)** एक पायथन लाइब्रेरी है, जो **तेज़ और कुशल गणना** करने के लिए इस्तेमाल होती है। यह **अरे (Array)** पर आधारित गणनाएँ करने के लिए सबसे ज़्यादा उपयोगी होती है।  

👉 **NumPy का मुख्य उपयोग:**  
✔️ बड़ी मात्रा में **सांख्यिकीय डेटा** (Numerical Data) को **प्रबंधित और प्रोसेस** करने के लिए  
✔️ तेज़ी से **गणितीय (Mathematical) और वैज्ञानिक (Scientific) कैलकुलेशन** करने के लिए  
✔️ **Machine Learning और AI** में डेटा प्रोसेसिंग के लिए  

---

## **NumPy की खास बातें**  

✅ **Normal Python List से तेज़:**  
NumPy का **Array (ndarray)** साधारण Python List से **10-50 गुना तेज़** काम करता है।  

✅ **कम मेमोरी का उपयोग करता है:**  
NumPy में डेटा **Contiguous Memory Blocks** में स्टोर होता है, जिससे यह **कम मेमोरी लेता है और तेज़ी से एक्सेस होता है।**  

✅ **Multi-Dimensional Arrays (बहु-आयामी सरणी):**  
NumPy में 1D, 2D, 3D या उससे अधिक आयाम (Dimensions) वाले **Arrays** आसानी से बनाए जा सकते हैं।  

✅ **Machine Learning और Deep Learning के लिए जरूरी:**  
SciPy, Pandas, TensorFlow, और PyTorch जैसी लाइब्रेरी भी NumPy का उपयोग करती हैं।  

---

## **NumPy कैसे Install करें?**  

Google Colab या Jupyter Notebook में पहले से **NumPy Installed होता है।**  
अगर आपके सिस्टम में नहीं है, तो इसे **pip** से इंस्टॉल कर सकते हैं:  

```
pip install numpy
```

---

## **NumPy का उपयोग (Examples)**  

### **1️⃣ Simple NumPy Array बनाना**
```python
import numpy as np

arr = np.array([1, 2, 3, 4, 5])  # 1D Array
print(arr)
```
**Output:**  
```
[1 2 3 4 5]
```

---

### **2️⃣ 2D NumPy Array बनाना**
```python
import numpy as np

arr2d = np.array([[1, 2, 3], [4, 5, 6]])  # 2D Array
print(arr2d)
```
**Output:**  
```
[[1 2 3]
 [4 5 6]]
```

---

### **3️⃣ Zeros और Ones Array बनाना**
```python
import numpy as np

zeros_array = np.zeros((3, 3))  # 3x3 का Zero Matrix
ones_array = np.ones((2, 2))    # 2x2 का One Matrix

print(zeros_array)
print(ones_array)
```
**Output:**  
```
[[0. 0. 0.]
 [0. 0. 0.]
 [0. 0. 0.]]

[[1. 1.]
 [1. 1.]]
```

---

### **4️⃣ NumPy में Array की Shape और Size निकालना**
```python
import numpy as np

arr = np.array([[1, 2, 3], [4, 5, 6]])

print("Shape:", arr.shape)  # (Rows, Columns)
print("Size:", arr.size)    # कुल कितने एलिमेंट हैं
```
**Output:**  
```
Shape: (2, 3)
Size: 6
```

---

### **5️⃣ NumPy में Array पर गणितीय ऑपरेशन**
```python
import numpy as np

arr1 = np.array([10, 20, 30])
arr2 = np.array([1, 2, 3])

print("Addition:", arr1 + arr2)      # जोड़
print("Subtraction:", arr1 - arr2)   # घटाव
print("Multiplication:", arr1 * arr2)  # गुणा
print("Division:", arr1 / arr2)      # भाग
```
**Output:**  
```
Addition: [11 22 33]
Subtraction: [ 9 18 27]
Multiplication: [10 40 90]
Division: [10. 10. 10.]
```

---

## **NumPy क्यों ज़रूरी है?**  
🔹 NumPy तेज़ी से **बड़े डेटा** पर गणना कर सकता है।  
🔹 यह AI और Machine Learning के **Data Processing** में सबसे ज़रूरी लाइब्रेरी है।  
🔹 Pandas, Scikit-learn, TensorFlow, और PyTorch जैसी लाइब्रेरी भी **NumPy पर आधारित** हैं।  

👉 **अगर आप AI सीख रहे हैं, तो NumPy सीखना बहुत ज़रूरी है!** 🚀  


### **NumPy में और क्या-क्या सीख सकते हैं?** 🚀  

NumPy सिर्फ Arrays बनाने तक सीमित नहीं है। इसमें बहुत सारे **Advanced Features** हैं जो **Data Science, AI, और Machine Learning** के लिए ज़रूरी होते हैं।  

---

## **🔹 1. NumPy में Indexing और Slicing (डेटा को एक्सेस करना)**  
NumPy में आप Arrays के **Specific Elements, Rows, और Columns** को आसानी से एक्सेस कर सकते हैं।  

### **✅ Example: Indexing (एक एलिमेंट निकालना)**
```python
import numpy as np

arr = np.array([10, 20, 30, 40, 50])
print(arr[2])  # तीसरा एलिमेंट (Index 2 पर)
```
**Output:**  
```
30
```

### **✅ Example: Slicing (कई एलिमेंट्स निकालना)**
```python
arr = np.array([10, 20, 30, 40, 50])
print(arr[1:4])  # Index 1 से 3 तक (20, 30, 40)
```
**Output:**  
```
[20 30 40]
```

### **✅ Example: 2D Array में Slicing**
```python
arr2d = np.array([[1, 2, 3], [4, 5, 6], [7, 8, 9]])
print(arr2d[0:2, 1:3])  # पहले 2 Rows और Column 1 से 2 तक
```
**Output:**  
```
[[2 3]
 [5 6]]
```

---

## **🔹 2. NumPy में Reshaping (Array का आकार बदलना)**  
आप किसी Array के Rows और Columns को बदल सकते हैं।  

### **✅ Example: 1D से 2D में बदलना**
```python
arr = np.array([1, 2, 3, 4, 5, 6])
reshaped = arr.reshape(2, 3)  # 2 Rows, 3 Columns
print(reshaped)
```
**Output:**  
```
[[1 2 3]
 [4 5 6]]
```

---

## **🔹 3. NumPy में Mathematical Operations (गणितीय गणना)**  
NumPy में कई Mathematical और Statistical Functions होते हैं।  

### **✅ Example: Sum, Mean, और Standard Deviation**
```python
arr = np.array([10, 20, 30, 40, 50])

print("Sum:", np.sum(arr))
print("Mean:", np.mean(arr))
print("Standard Deviation:", np.std(arr))
```
**Output:**  
```
Sum: 150
Mean: 30.0
Standard Deviation: 14.14
```

### **✅ Example: Maximum और Minimum Values**
```python
arr = np.array([5, 15, 25, 35, 45])

print("Max:", np.max(arr))
print("Min:", np.min(arr))
```
**Output:**  
```
Max: 45
Min: 5
```

---

## **🔹 4. NumPy में Random Numbers Generate करना**  
Machine Learning में **Random Numbers** बहुत काम आते हैं, जैसे **Data Augmentation और Testing Data** बनाने के लिए।  

### **✅ Example: Random Numbers से Array बनाना**
```python
import numpy as np

random_arr = np.random.randint(1, 100, (3, 3))  # 1 से 100 के बीच 3x3 का मैट्रिक्स
print(random_arr)
```
**Output:** (हर बार नया होगा)  
```
[[23 65 78]
 [12 90 45]
 [34 67 89]]
```

---

## **🔹 5. NumPy में Matrix Operations (मैट्रिक्स ऑपरेशन)**  
AI और ML में **Matrices (गणितीय मैट्रिक्स)** का बहुत बड़ा रोल होता है।  

### **✅ Example: Matrix Multiplication**
```python
A = np.array([[1, 2], [3, 4]])
B = np.array([[5, 6], [7, 8]])

result = np.dot(A, B)  # मैट्रिक्स गुणा (Matrix Multiplication)
print(result)
```
**Output:**  
```
[[19 22]
 [43 50]]
```

---

## **🔹 6. NumPy में Boolean Masking (Filter करना)**  
किसी Array में से **सिर्फ वही Values निकालना** जो किसी Condition को Satisfy करती हों।  

### **✅ Example: 50 से बड़े सभी नंबर निकालना**
```python
arr = np.array([10, 25, 50, 75, 100])

filtered = arr[arr > 50]
print(filtered)
```
**Output:**  
```
[75 100]
```

---

## **🔹 7. NumPy और Pandas में क्या अंतर है?**  

| Feature | **NumPy** | **Pandas** |
|---------|----------|------------|
| Data Structure | Array | DataFrame (टैबुलर डेटा) |
| Speed | तेज़ (Fast) | थोड़ा धीमा (Slower than NumPy) |
| Usage | गणितीय कैलकुलेशन | डेटा एनालिसिस |
| Indexing | नंबर बेस्ड | लेबल बेस्ड (Column Name) |

अगर आपको सिर्फ **संख्याओं पर काम करना है**, तो **NumPy** अच्छा है।  
लेकिन अगर आपको **Excel जैसी टेबल पर काम करना है**, तो **Pandas** ज़्यादा उपयोगी है।  

---

## **🔹 8. NumPy कहां-कहां इस्तेमाल होता है?**  

✔ **Machine Learning** – TensorFlow और Scikit-Learn में इस्तेमाल होता है।  
✔ **Data Science** – Pandas, SciPy जैसी लाइब्रेरी में NumPy का बेस है।  
✔ **Image Processing** – OpenCV (cv2) लाइब्रेरी NumPy Arrays पर काम करती है।  
✔ **Artificial Intelligence** – Deep Learning Frameworks (PyTorch, Keras) में NumPy का उपयोग होता है।  
✔ **Finance & Stock Market** – बड़े डेटा सेट्स का एनालिसिस करने में मदद करता है।  

---

## **🔹 9. क्या मुझे NumPy सीखना चाहिए?**  
✅ **अगर आप AI, Machine Learning, या Data Science सीख रहे हैं, तो NumPy अनिवार्य है।**  
✅ यह Python की सबसे तेज़ और उपयोगी लाइब्रेरी में से एक है।  
✅ Google Colab या Jupyter Notebook पर **Practically Try करें**, इससे जल्दी समझ आएगा।  

---

### **📌 NumPy का अगला स्टेप क्या है?**  
अब **Pandas** सीखें, क्योंकि **Pandas = NumPy + DataFrames** है।  
👉 **अगर NumPy में कोई और सवाल हो, तो पूछिए!** 😊🚀

### **NumPy में डेटा को Save और Load कैसे करें?**  

NumPy में डेटा को सेव (Save) और लोड (Load) करने के लिए कई तरीके होते हैं।  
आप **Binary (.npy, .npz)** और **Text (.csv, .txt)** दोनों फॉर्मेट में डेटा सेव कर सकते हैं।  

---

## **🔹 1. NumPy में Binary Format (.npy) में Save और Load करना**  
अगर आपको NumPy Array को **तेज़ और सुरक्षित** तरीके से सेव करना है, तो **`.npy` (NumPy Binary Format)** सबसे अच्छा तरीका है।  

### **✅ Example: Save NumPy Array as .npy**
```python
import numpy as np

arr = np.array([1, 2, 3, 4, 5])

# Array को "data.npy" नाम से सेव करें
np.save("data.npy", arr)

print("Data saved successfully!")
```

### **✅ Example: Load NumPy Array from .npy**
```python
import numpy as np

# "data.npy" फाइल से डेटा लोड करें
loaded_arr = np.load("data.npy")

print("Loaded Data:", loaded_arr)
```
**Output:**  
```
Loaded Data: [1 2 3 4 5]
```
📌 **Note:** `.npy` फॉर्मेट NumPy के लिए सबसे तेज़ और सुरक्षित है, लेकिन इसे दूसरे प्रोग्राम में आसानी से नहीं पढ़ा जा सकता।

---

## **🔹 2. कई Arrays को एक साथ Save और Load करना (.npz Format)**  
अगर आपको एक ही फाइल में **Multiple Arrays** सेव करने हैं, तो **`.npz` (Compressed NumPy Format)** उपयोग कर सकते हैं।  

### **✅ Example: Save Multiple Arrays in .npz**
```python
import numpy as np

arr1 = np.array([10, 20, 30])
arr2 = np.array([[1, 2, 3], [4, 5, 6]])

# दोनों Arrays को "multi_data.npz" में सेव करें
np.savez("multi_data.npz", array1=arr1, array2=arr2)

print("Multiple arrays saved successfully!")
```

### **✅ Example: Load Multiple Arrays from .npz**
```python
import numpy as np

# "multi_data.npz" फाइल से डेटा लोड करें
loaded_data = np.load("multi_data.npz")

print("Array 1:", loaded_data["array1"])
print("Array 2:", loaded_data["array2"])
```
**Output:**  
```
Array 1: [10 20 30]
Array 2: [[1 2 3]
          [4 5 6]]
```

📌 **Note:** `.npz` में डेटा **Compressed** रहता है, जिससे स्टोरेज कम लगता है।

---

## **🔹 3. NumPy Array को Text File (.txt, .csv) में Save और Load करना**  
अगर आपको डेटा को **Excel, Pandas, या किसी दूसरे टूल में इस्तेमाल करना हो**, तो आप **CSV (Comma Separated Values) या TXT (Text File)** में सेव कर सकते हैं।  

### **✅ Example: Save NumPy Array as .txt**
```python
import numpy as np

arr = np.array([[1, 2, 3], [4, 5, 6]])

# Array को "data.txt" में सेव करें
np.savetxt("data.txt", arr)

print("Data saved successfully in text format!")
```

### **✅ Example: Load NumPy Array from .txt**
```python
import numpy as np

# "data.txt" से डेटा लोड करें
loaded_arr = np.loadtxt("data.txt")

print("Loaded Data:", loaded_arr)
```
**Output:**  
```
Loaded Data:
[[1. 2. 3.]
 [4. 5. 6.]]
```

📌 **Note:** `.txt` फॉर्मेट में **Floats** के रूप में डेटा सेव होता है।

---

## **🔹 4. NumPy Array को CSV File में Save और Load करना**  
अगर आप डेटा को Excel या Pandas के साथ उपयोग करना चाहते हैं, तो **CSV (Comma Separated Values)** सबसे अच्छा फॉर्मेट है।  

### **✅ Example: Save NumPy Array as .csv**
```python
import numpy as np

arr = np.array([[10, 20, 30], [40, 50, 60]])

# "data.csv" में Array सेव करें
np.savetxt("data.csv", arr, delimiter=",")

print("Data saved successfully in CSV format!")
```

### **✅ Example: Load NumPy Array from .csv**
```python
import numpy as np

# "data.csv" से डेटा लोड करें
loaded_arr = np.loadtxt("data.csv", delimiter=",")

print("Loaded Data:", loaded_arr)
```
**Output:**  
```
Loaded Data:
[[10. 20. 30.]
 [40. 50. 60.]]
```

📌 **Note:** CSV फॉर्मेट में डेटा **Comma-Separated** रहता है, जो Pandas और Excel में आसानी से ओपन किया जा सकता है।

---

## **🔹 5. NumPy Array को Pandas DataFrame में बदलना (Excel के लिए उपयोगी)**  
अगर आप NumPy डेटा को **Excel में इस्तेमाल करना चाहते हैं**, तो इसे **Pandas DataFrame** में बदल सकते हैं।  

### **✅ Example: NumPy Array को CSV के रूप में सेव करना (Pandas के साथ)**
```python
import numpy as np
import pandas as pd

arr = np.array([[101, "Alice", 90], [102, "Bob", 85], [103, "Charlie", 95]])

# NumPy Array को Pandas DataFrame में बदलना
df = pd.DataFrame(arr, columns=["ID", "Name", "Marks"])

# DataFrame को CSV में सेव करना
df.to_csv("students.csv", index=False)

print("Data saved in CSV using Pandas!")
```

📌 **Note:** Pandas का उपयोग करके आप CSV में **Column Names** भी जोड़ सकते हैं।

---

## **📌 कौन सा Format कब इस्तेमाल करें?**  

| **Format** | **कब इस्तेमाल करें?** |
|------------|----------------------|
| `.npy` | NumPy का **Fastest और Recommended** Format (Single Array) |
| `.npz` | **Multiple Arrays** को एक साथ सेव करने के लिए |
| `.txt` | डेटा को **Text Format** में सेव करने के लिए |
| `.csv` | **Excel, Pandas और Data Science** के लिए सबसे अच्छा |

---

## **🎯 Conclusion (Final Summary)**  
✅ अगर आप **AI/ML** में काम कर रहे हैं, तो `.npy` और `.npz` सबसे अच्छा है।  
✅ अगर आपको डेटा **Excel, Pandas या दूसरे टूल्स में इस्तेमाल करना है**, तो `.csv` या `.txt` का उपयोग करें।  
✅ NumPy में **डेटा को Load और Save करना बहुत आसान** है, और यह आपके कोड को तेज़ बनाता है।  

🔹 **अब आप NumPy में डेटा सेव और लोड करना सीख गए हैं!** 🎉  
👉 **अगर कोई डाउट हो, तो पूछिए!** 😊🚀