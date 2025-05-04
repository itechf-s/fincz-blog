---
title: "Introduction of Pandas"
categories: [ Python ]
tags: [Basic]
description: "Introduction of Pandas"
date: 2025-03-01T08:00:00+05:30
images: ["images/2025/03/pandas.webp"]
author: ahmad
---

✅ **Pandas क्या है?**  
Pandas **डेटा को स्टोर, प्रोसेस और एनालाइज करने** के लिए एक बहुत ही पावरफुल लाइब्रेरी है। यह **CSV, Excel, SQL, और JSON** जैसे डेटा को आसानी से मैनेज करने में मदद करता है।

✅ **Pandas में क्या सीखना ज़रूरी है?**  
1️⃣ **DataFrame और Series** (Pandas का बेसिक स्ट्रक्चर)  
2️⃣ **CSV / Excel फाइल को Load और Save करना**  
3️⃣ **डेटा को Manipulate और Clean करना**  
4️⃣ **Filtering, Sorting, और Grouping**  
5️⃣ **Missing Values को Handle करना**  

## **🎯 Pandas सीखने के बाद क्या होगा?**  
- आप **CSV/Excel फाइल्स को लोड और प्रोसेस** कर पाएंगे।  
- Data को **Filter, Clean, और Visualize** कर पाएंगे।  
- Machine Learning के लिए **डेटा तैयार** कर पाएंगे।  


## **📌 अगला स्टेप:**  
1️⃣ **Pandas का Introduction और Installation**  
2️⃣ **Pandas DataFrame और Series समझना**  
3️⃣ **CSV / Excel फाइल को Load और Save करना**  
4️⃣ **डेटा को Modify, Filter, और Sort करना**  
5️⃣ **Missing Data को Handle करना**  

# **📌 Step 1: Pandas क्या है और इसे कैसे Install करें?**  
**Pandas एक Python लाइब्रेरी है** जो डेटा को **टैबुलर फॉर्मेट** (rows और columns) में मैनेज करने के लिए बनाई गई है।  

✅ **इसे क्यों इस्तेमाल करें?**  
- **CSV, Excel, SQL, JSON** जैसी फाइल को आसानी से पढ़ और लिख सकते हैं।  
- **डेटा को Filter, Modify, और Analyze** कर सकते हैं।  
- Machine Learning के लिए **डेटा को तैयार** कर सकते हैं।  

### **🔹 Pandas Install कैसे करें?**  
अगर आपने पहले Pandas इंस्टॉल नहीं किया है, तो इसे इंस्टॉल करने के लिए यह कमांड चलाएँ:  

```bash
pip install pandas
```
अगर आप **Jupyter Notebook** या **Google Colab** में काम कर रहे हैं, तो यह पहले से इंस्टॉल होता है।


# **📌 Step 2: Pandas का पहला प्रोग्राम (Basic DataFrame)**
### **✅ Example: DataFrame बनाना और प्रिंट करना**  
```python
import pandas as pd  # Pandas लाइब्रेरी इम्पोर्ट करें

# एक सिंपल DataFrame बनाएं
data = {
    "नाम": ["अमन", "सुमित", "नेहा"],
    "उम्र": [25, 30, 22],
    "शहर": ["दिल्ली", "मुंबई", "कोलकाता"]
}

df = pd.DataFrame(data)  # DataFrame बनाएं

print(df)  # DataFrame को प्रिंट करें
```
### **📌 Output:**
```
     नाम  उम्र      शहर
0   अमन   25    दिल्ली
1  सुमित   30    मुंबई
2   नेहा   22  कोलकाता
```
✔ **अब आपके पास एक टेबल (DataFrame) है!** Pandas डेटा को इस फॉर्मेट में स्टोर करता है।


# **📌 Step 3: CSV फाइल को पढ़ना और लिखना**
Pandas की सबसे बड़ी खासियत यह है कि **आप CSV, Excel और JSON फाइल को आसानी से लोड कर सकते हैं।**  

### **✅ CSV फ़ाइल को पढ़ें (Load CSV File)**
अगर आपके पास `"data.csv"` नाम की कोई फ़ाइल है, तो इसे ऐसे पढ़ सकते हैं:
```python
df = pd.read_csv("data.csv")  # CSV फाइल लोड करें
print(df.head())  # पहले 5 रिकॉर्ड दिखाएँ
```
📌 **Note:**  
- `read_csv()` फ़ंक्शन CSV फाइल को Pandas DataFrame में कन्वर्ट कर देता है।  
- `head()` फ़ंक्शन पहले 5 rows दिखाता है।


### **✅ DataFrame को CSV फाइल में सेव करें**
```python
df.to_csv("output.csv", index=False)  # DataFrame को CSV में सेव करें
print("✅ डेटा सेव हो गया!")
```
📌 **Note:**  
- `index=False` देने से एक्स्ट्रा इंडेक्स कॉलम सेव नहीं होता।  

# **📌 Step 4: Data को Modify करना (Filter, Sort, और Update)**
### **✅ किसी कॉलम से डेटा सेलेक्ट करें**
```python
print(df["नाम"])  # सिर्फ नाम कॉलम दिखाएँ
```
### **✅ किसी Row को सेलेक्ट करें**
```python
print(df.iloc[1])  # दूसरी Row दिखाएँ (0-based index)
```
### **✅ डेटा को फ़िल्टर करें (उम्र > 25 वाले लोग)**
```python
filtered_df = df[df["उम्र"] > 25]
print(filtered_df)
```
### **✅ डेटा को Sort करें (उम्र के अनुसार)**
```python
sorted_df = df.sort_values("उम्र", ascending=False)  # Descending Order में
print(sorted_df)
```

# **📌 Step 5: Missing Values को Handle करना**
कभी-कभी डेटा में **खाली (NaN) वैल्यू होती हैं**, जिसे **Handle** करना ज़रूरी होता है।

### **✅ Missing Values को चेक करें**
```python
print(df.isnull().sum())  # हर कॉलम में कितनी Missing Values हैं?
```
### **✅ Missing Values को हटाएँ**
```python
df_cleaned = df.dropna()  # NaN वाली Rows हटा दें
print(df_cleaned)
```
### **✅ Missing Values को भरें**
```python
df_filled = df.fillna("अज्ञात")  # NaN वैल्यू को "अज्ञात" से भरें
print(df_filled)
```

# **📌 Next Step: Data Analysis और Visualization**
अब जब आपको Pandas की बेसिक्स आ गई, तो अगला स्टेप होगा:  
✅ **Matplotlib और Seaborn** का उपयोग करके डेटा को **Visualize** करना।  
✅ **GroupBy और Aggregation** का उपयोग करके डेटा का एनालिसिस करना।  

📌 **क्या आप डेटा विज़ुअलाइज़ेशन सीखना चाहेंगे?** 🎨📊

# **📌 Step 1: Matplotlib और Seaborn क्या हैं?**  
✅ **Matplotlib:** यह Python की सबसे पॉपुलर लाइब्रेरी है, जिससे हम **लाइन ग्राफ, बार चार्ट, स्कैटर प्लॉट, और पाई चार्ट** बना सकते हैं।  
✅ **Seaborn:** यह Matplotlib का एक एडवांस वर्जन है, जिससे हम **स्टाइलिश और प्रोफेशनल चार्ट** बना सकते हैं।  

# **📌 Step 2: Install और Import करें**  
अगर आपने पहले Matplotlib और Seaborn इंस्टॉल नहीं किया है, तो यह कमांड चलाएँ:  
```bash
pip install matplotlib seaborn
```
अब इसे Python में इम्पोर्ट करें:  
```python
import matplotlib.pyplot as plt
import seaborn as sns
import pandas as pd
```

# **📌 Step 3: Line Chart बनाना (Matplotlib)**  
सबसे पहले हम एक **लाइन ग्राफ** बनाएंगे, जो डेटा के ट्रेंड को दिखाता है।  
```python
# Sample Data
years = [2018, 2019, 2020, 2021, 2022]
sales = [500, 700, 900, 850, 1100]

# लाइन ग्राफ बनाना
plt.plot(years, sales, marker="o", linestyle="--", color="b", label="Sales")

# Labels और Title
plt.xlabel("Year")
plt.ylabel("Sales (in Thousands)")
plt.title("Company Sales Over Years")
plt.legend()

# ग्राफ दिखाएँ
plt.show()
```
📌 **क्या हो रहा है?**  
- `plot()` से लाइन चार्ट बना रहे हैं।  
- `marker="o"` का मतलब **डाटा पॉइंट्स को दिखाना**।  
- `linestyle="--"` का मतलब **डैश वाली लाइन**।  
- `legend()` से **लेबल** दिखाया जा रहा है।  


# **📌 Step 4: Bar Chart बनाना (Seaborn)**
अब एक **बार चार्ट** बनाएंगे, जो विभिन्न शहरों की बिक्री (sales) दिखाएगा।  
```python
# Sample Data
data = {"City": ["Delhi", "Mumbai", "Kolkata", "Jaunpur"],
        "Sales": [1200, 1500, 1100, 1800]}

df = pd.DataFrame(data)

# Seaborn Bar Chart
sns.barplot(x="City", y="Sales", data=df, palette="coolwarm")

# Title और Labels
plt.title("Diff Cities Sales")
plt.xlabel("City")
plt.ylabel("Sales (in K)")

# ग्राफ दिखाएँ
plt.show()
```
📌 **क्या हो रहा है?**  
- `sns.barplot()` से एक सुंदर बार चार्ट बना रहे हैं।  
- `palette="coolwarm"` से **कलर स्कीम** अच्छी लग रही है।  

---

# **📌 Step 5: Pie Chart बनाना (Matplotlib)**
```python
# Sample Data
labels = ["Electronics", "Clothing", "Groceries", "Toys"]
sizes = [40, 25, 20, 15]
colors = ["blue", "red", "green", "yellow"]

# Pie Chart बनाना
plt.pie(sizes, labels=labels, colors=colors, autopct="%1.1f%%", startangle=90)

# Title
plt.title("Product Sales Distribution")

# ग्राफ दिखाएँ
plt.show()
```
📌 **क्या हो रहा है?**  
- `pie()` से **पाई चार्ट** बना रहे हैं।  
- `autopct="%1.1f%%"` से **परसेंटेज वैल्यू** दिख रही है।  
- `startangle=90` से चार्ट **रोटेट** हो रहा है।  

---

# **📌 Step 6: Scatter Plot बनाना (Seaborn)**
```python
# Sample Data
data = {"Advertising": [10, 20, 30, 40, 50, 60],
        "Sales": [100, 200, 250, 400, 500, 600]}

df = pd.DataFrame(data)

# Scatter Plot बनाना
sns.scatterplot(x="Advertising", y="Sales", data=df, color="red")

# Title और Labels
plt.title("Ad Budget vs Sales")
plt.xlabel("Ad Budget (in $1000s)")
plt.ylabel("Sales (in $1000s)")

# ग्राफ दिखाएँ
plt.show()
```
📌 **क्या हो रहा है?**  
- **बिंदु (dots)** दिखा रहे हैं कि **विज्ञापन बजट बढ़ने से बिक्री कैसे बढ़ती है**।  
- इसे **लाइन ग्राफ से अलग** इसलिए बनाया जाता है, क्योंकि यह **रिलेशनशिप (correlation)** दिखाता है।  

---

## **🎯 Next Step: Data Analysis और Feature Engineering**
अब जब आपको **डेटा विज़ुअलाइज़ेशन** आ गया, तो अगला स्टेप होगा:  
✅ **Data Analysis करना (Pandas + Seaborn)**  
✅ **Machine Learning के लिए डेटा तैयार करना (Feature Engineering)**  

💡 **क्या आप अब Data Analysis और Feature Engineering सीखना चाहेंगे?** 🚀
बहुत बढ़िया! अब हम **Data Analysis और Feature Engineering** सीखेंगे। 🚀📊  

---

# **📌 Step 1: Data Analysis क्या है?**  
**Data Analysis का मतलब है डेटा को समझना, क्लीन करना और पैटर्न निकालना।**  
✅ इसमें **डुप्लिकेट और मिसिंग डेटा** हटाया जाता है।  
✅ **डेटा को विज़ुअलाइज़ और फ़िल्टर** किया जाता है।  
✅ **समस्या का कारण और पैटर्न** खोजे जाते हैं।  

---

# **📌 Step 2: Sample Dataset लोड करें**  
सबसे पहले, हम एक **CSV फाइल लोड** करेंगे और उसे समझेंगे।  
```python
import pandas as pd

# Sample Data Load करें
df = pd.read_csv("https://raw.githubusercontent.com/mwaskom/seaborn-data/master/titanic.csv")

# पहले 5 रिकॉर्ड देखें
print(df.head())
```
📌 **Titanic Dataset में यह कॉलम होंगे:**  
- `sex` → पुरुष (male) या महिला (female)  
- `age` → उम्र  
- `fare` → टिकट की कीमत  
- `survived` → 1 (बच गए), 0 (नहीं बच पाए)  
- `pclass` → टिकट क्लास (1st, 2nd, 3rd)  

---

# **📌 Step 3: डेटा की जानकारी और Missing Values चेक करें**  
```python
# Dataset की जानकारी देखें
print(df.info())

# Missing Values चेक करें
print(df.isnull().sum())
```
📌 **अगर Missing Values हैं, तो इन्हें ठीक करना होगा।**  

---

# **📌 Step 4: Missing Data को ठीक करना (Feature Engineering)**
### ✅ **Option 1: NaN वैल्यू को हटा दें**
```python
df_cleaned = df.dropna()  # सभी NaN वाली Rows हटाएँ
print(df_cleaned.info())
```
👉 यह **रिस्की हो सकता है, क्योंकि डेटा कम हो जाएगा।**  

### ✅ **Option 2: Mean/Median से भरना**
```python
df["age"].fillna(df["age"].median(), inplace=True)  # Missing age को median से भरें
```
👉 यह **अच्छा तरीका है**, क्योंकि यह आउटपुट पर असर नहीं डालता।  

### ✅ **Option 3: Mode से कैटेगरी भरना**
```python
df["embark_town"].fillna(df["embark_town"].mode()[0], inplace=True)  # सबसे common value भरें
```

---

# **📌 Step 5: Feature Engineering (नए फीचर बनाना)**
### ✅ **नया कॉलम बनाना: उम्र के हिसाब से ग्रुपिंग**
```python
df["age_group"] = pd.cut(df["age"], bins=[0, 18, 40, 60, 100], labels=["Child", "Young", "Adult", "Senior"])
print(df[["age", "age_group"]].head())
```
📌 **अब "age" की जगह "age_group" का यूज़ कर सकते हैं।**  

---

# **📌 Step 6: Data Visualization (Seaborn से)**
### ✅ **कौन ज्यादा बचा? पुरुष या महिला?**
```python
import seaborn as sns
import matplotlib.pyplot as plt

sns.countplot(x="sex", hue="survived", data=df)
plt.title("Survival Rate by Gender")
plt.show()
```
👉 **महिलाओं की सर्वाइवल रेट ज्यादा है!** 🚢  

### ✅ **बचने की संभावना टिकट क्लास पर कैसे निर्भर करती है?**
```python
sns.barplot(x="pclass", y="survived", data=df, palette="coolwarm")
plt.title("Survival Rate by Ticket Class")
plt.show()
```
👉 **1st Class में बचने की संभावना ज़्यादा है!**  

---

# **📌 Step 7: Correlation (Feature Selection)**
👉 **Feature Selection का मतलब यह देखना कि कौन-सा कॉलम सबसे ज्यादा impact करता है।**  
```python
import numpy as np

corr_matrix = df.corr()
sns.heatmap(corr_matrix, annot=True, cmap="coolwarm")
plt.title("Correlation Matrix")
plt.show()
```
error fixed

```python
# सिर्फ Numerical Columns लें
df_numeric = df.select_dtypes(include=[np.number])

# Correlation Matrix बनाएँ
corr_matrix = df_numeric.corr()

# Heatmap बनाएँ
sns.heatmap(corr_matrix, annot=True, cmap="coolwarm")
plt.title("Correlation Matrix")
plt.show()

```
📌 **अगर किसी कॉलम का "Survived" के साथ हाई कोरिलेशन है, तो वह ML मॉडल के लिए महत्वपूर्ण होगा।**  

---

# **📌 Next Step: Machine Learning Model बनाना**
✅ **अब हम इस डेटा पर Machine Learning Model लगाएंगे।**  
✅ **Classification Model (Logistic Regression, Decision Tree)** सीखेंगे।  

💡 **क्या आप Machine Learning Model बनाना सीखना चाहेंगे?** 🚀