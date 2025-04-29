---
title: "Introduction of Git and Github"
categories: [ Git ]
tags: [Basic]
description: "Introduction of Git and Github"
date: 2025-03-02T08:00:00+05:30
images: ["images/2025/03/github.webp"]
author: ahmad
---

## **📌 Step 1: Git और GitHub क्या हैं?**  
### ✅ **Git:**  
Git एक **Version Control System (VCS)** है, जिससे आप **अपने कोड को सेव, ट्रैक और बैकअप** कर सकते हैं।  
👉 अगर आप गलती कर देते हैं, तो Git आपको **पुरानी वर्ज़न पर वापस जाने** की सुविधा देता है।  

### ✅ **GitHub:**  
GitHub एक **Online Platform** है, जहां आप अपने **Git रिपॉज़िटरी (Repositories) को स्टोर और शेयर** कर सकते हैं।  
👉 इसे **कोड का Google Drive** समझ सकते हैं, जहां आप अपने **प्रोजेक्ट्स को ओपन-सोर्स** भी कर सकते हैं।  

## **📌 Step 2: Git Install करें**
🔹 अगर आप **Windows** में हैं, तो [Git की ऑफिशियल वेबसाइट](https://git-scm.com/downloads) से डाउनलोड करें।  
🔹 **Ubuntu में इंस्टॉल करने के लिए:**  
```bash
sudo apt update
sudo apt install git
```
🔹 **Mac में इंस्टॉल करने के लिए:**  
```bash
brew install git
```
👉 **इंस्टॉलेशन चेक करने के लिए:**  
```bash
git --version
```
अगर आउटपुट में `git version x.x.x` आता है, तो Git सही से इंस्टॉल हो गया। ✅  

## **📌 Step 3: Git को सेटअप करें**
सबसे पहले, Git को अपनी पहचान बताएँ (बस एक बार सेट करना होता है)  
```bash
git config --global user.name "Your Name"
git config --global user.email "your-email@example.com"
```
👉 **चेक करें कि Git सेटअप सही है या नहीं:**  
```bash
git config --list
```
अगर इसमें आपका नाम और ईमेल दिख रहा है, तो Git सेटअप हो गया! ✅  

## **📌 Step 4: नया Git प्रोजेक्ट (Repository) बनाना**
```bash
mkdir my_project  # नया फोल्डर बनाएँ
cd my_project  # उसके अंदर जाएँ
git init  # इस फोल्डर को Git रिपॉज़िटरी बनाएँ
```
📌 अब `my_project` Git से जुड़ गया! 🚀  

## **📌 Step 5: Git में फ़ाइल ऐड और सेव (Commit) करना**
### ✅ **नई फ़ाइल बनाएँ और Git को बताएं**
```bash
echo "Hello Git" > hello.txt  # एक फ़ाइल बनाएँ
git status  # चेक करें कि Git को क्या बदलाव दिख रहे हैं
git add hello.txt  # फ़ाइल Git में जोड़ें
```
### ✅ **फाइल को सेव करें (Commit)**
```bash
git commit -m "Added hello.txt file"
```
👉 अब यह फ़ाइल **स्थायी रूप से Git में सेव (commit)** हो गई। ✅  

## **📌 Step 6: GitHub पर Repository बनाकर उसे Git से जोड़ना**
### ✅ **GitHub पर एक नया रिपॉज़िटरी बनाएँ:**  
1️⃣ [GitHub](https://github.com) पर जाएं और लॉगिन करें।  
2️⃣ "New Repository" पर क्लिक करें और **रिपॉज़िटरी का नाम** डालें।  
3️⃣ नीचे "Create Repository" बटन दबाएँ।  

### ✅ **GitHub को Git से जोड़ना (Remote जोड़ना)**  
```bash
git remote add origin https://github.com/your-username/my_project.git
git branch -M main
git push -u origin main
```
📌 अब आपकी फ़ाइल GitHub पर अपलोड हो गई! 🚀  


## **📌 Step 7: Git की ज़रूरी Commands**
| Command | काम |
|---------|-----|
| `git status` | फ़ाइल्स की स्थिति चेक करें |
| `git add filename` | फ़ाइल को स्टेज करें (Git में जोड़ें) |
| `git commit -m "Message"` | फ़ाइल को सेव (commit) करें |
| `git log` | सारे कमिट्स देखें |
| `git push origin main` | GitHub पर बदलाव अपलोड करें |
| `git pull origin main` | GitHub से लेटेस्ट कोड लें |
| `git clone URL` | GitHub की रिपॉज़िटरी को डाउनलोड करें |


## **🎯 Next Step: Git Branching और Merge करना**  
✅ अब आप **Git Branching और Merge करना** सीख सकते हैं!  
💡 **क्या आप अगले स्टेप के रूप में Branching सीखना चाहेंगे?** 🚀

## **📌 Step 1: Branching क्या है?**  
👉 **Branching का मतलब है एक नई लाइन पर काम करना, बिना मेन (main) ब्रांच को बदले।**  
👉 इससे आप **अलग-अलग फीचर्स पर काम कर सकते हैं** और बाद में उन्हें **main ब्रांच में मिला सकते हैं (merge कर सकते हैं)।**  


## **📌 Step 2: नई ब्रांच कैसे बनाएं और स्विच करें?**  
### ✅ **नई ब्रांच बनाएँ**
```bash
git branch feature-branch
```
📌 अब एक नई ब्रांच `feature-branch` बन गई!  

### ✅ **नई ब्रांच पर स्विच करें**
```bash
git checkout feature-branch
```
📌 अब आप `feature-branch` में काम कर रहे हैं।  

👉 **Shortcut Command:**  
```bash
git checkout -b feature-branch
```
📌 इससे **ब्रांच बनती भी है और स्विच भी हो जाते हैं!**  


## **📌 Step 3: नई ब्रांच में बदलाव करें और Commit करें**
अब हम `feature-branch` में एक नई फाइल जोड़ते हैं।  
```bash
echo "New Feature Added" > feature.txt
git add feature.txt
git commit -m "Added feature.txt file"
```
📌 **अब यह बदलाव `feature-branch` में सेव हो गया!**  


## **📌 Step 4: ब्रांच को Main ब्रांच में Merge करना**
### ✅ **पहले Main ब्रांच पर स्विच करें**
```bash
git checkout main
```
### ✅ **फिर Merging करें**
```bash
git merge feature-branch
```
📌 **अब `feature-branch` के सभी बदलाव `main` में आ गए!** 🚀  


## **📌 Step 5: पुरानी ब्रांच हटाना (Cleanup)**
### ✅ **Local ब्रांच हटाएँ**
```bash
git branch -d feature-branch
```
📌 अगर ब्रांच को पहले ही `merge` कर लिया है, तो यह हट जाएगी।  

### ✅ **Remote (GitHub) ब्रांच हटाएँ**
```bash
git push origin --delete feature-branch
```
📌 **अब यह ब्रांच GitHub से भी हट जाएगी!**  

---

## **📌 Step 6: Merge Conflicts (अगर Error आए तो?)**
अगर **दो ब्रांच में एक ही फाइल बदली गई है**, तो **Merge Conflict** आ सकता है।  
### ✅ **Conflict को देखने के लिए:**
```bash
git status
```
👉 Git आपको दिखाएगा कि किस फाइल में **conflict है**।  

### ✅ **फाइल खोलें और Conflict सॉल्व करें**
📌 जिस लाइन पर **<<<<<<< HEAD** और **=======** दिखे, उसे **मैन्युअली ठीक करें।**  
```diff
<<<<<<< HEAD
यह main ब्रांच का कोड है।
=======
यह feature-branch का कोड है।
>>>>>>> feature-branch
```
👉 **अपनी पसंद का कोड रखें और बाकी हटाएँ।**  

### ✅ **फिर इसे Staging और Commit करें**
```bash
git add conflicted-file.txt
git commit -m "Resolved merge conflict"
```
📌 अब **Conflict सॉल्व हो गया!** 🚀  

---

## **📌 Step 7: GitHub पर Push करें**
### ✅ **अगर नई ब्रांच को GitHub पर भेजना है**
```bash
git push origin feature-branch
```
### ✅ **अगर Merge के बाद Main ब्रांच को GitHub पर भेजना है**
```bash
git push origin main
```
📌 **अब GitHub भी अपडेट हो गया!** ✅  

---

## **🎯 Next Step: Git Rebase और GitHub Pull Requests सीखना**  
💡 **क्या आप Git Rebase और Pull Requests सीखना चाहेंगे?** 🚀

# **📌 Step 1: Git Rebase क्या है?**  
👉 **Git Rebase का उपयोग तब किया जाता है जब हम अपने कोड को अपडेटेड Main ब्रांच के साथ Sync करना चाहते हैं, बिना Merge Commit बनाए।**  

✍ **Rebase और Merge में अंतर:**  
| Feature | Merge | Rebase |
|---------|-------|--------|
| **नई Merge Commit बनती है?** | ✅ हाँ | ❌ नहीं |
| **Commit History साफ रहती है?** | ❌ नहीं | ✅ हाँ |
| **कब इस्तेमाल करें?** | कई लोगों के काम को जोड़ने के लिए | अपने काम को अपडेट रखने के लिए |

---

# **📌 Step 2: Git Rebase कैसे करें?**  
### ✅ **Step 2.1: पहले Main ब्रांच पर जाएं और अपडेट लें**  
```bash
git checkout main
git pull origin main
```
📌 इससे आपका **Main ब्रांच GitHub से अपडेट** हो जाएगा।  

### ✅ **Step 2.2: अपनी फीचर ब्रांच पर वापस जाएं**  
```bash
git checkout feature-branch
```
📌 अब आप **अपनी ब्रांच (feature-branch)** में वापस आ गए।  

### ✅ **Step 2.3: अब Rebase करें**  
```bash
git rebase main
```
📌 अब आपके सभी commits **Main ब्रांच के बाद** सेट हो जाएंगे।  

---

# **📌 Step 3: Rebase में Conflict कैसे सॉल्व करें?**  
**अगर Rebase के दौरान Conflict आता है, तो Git इसे रोक देगा।**  
### ✅ **Conflict देखने के लिए:**
```bash
git status
```
👉 Git बताएगा कि **कौन-सी फाइल में Conflict आया है**।  

### ✅ **Conflict सॉल्व करें और फाइल को Staging में डालें:**
```bash
git add conflicted-file.txt
```
### ✅ **फिर Rebase को Continue करें:**
```bash
git rebase --continue
```
📌 **अब Rebase पूरा हो जाएगा!** ✅  

---

# **📌 Step 4: GitHub पर Pull Request (PR) कैसे बनाएं?**  
### ✅ **Step 4.1: अपनी ब्रांच को GitHub पर Push करें**
```bash
git push origin feature-branch --force
```
👉 **Rebase के बाद `--force` से Push करना पड़ता है**, क्योंकि यह History बदल चुका होता है।  

### ✅ **Step 4.2: GitHub पर जाएं और PR बनाएँ**  
1️⃣ **GitHub पर अपनी Repository खोलें।**  
2️⃣ **Compare & pull request** बटन पर क्लिक करें।  
3️⃣ **PR का टाइटल और डिस्क्रिप्शन लिखें।**  
4️⃣ **Create pull request** बटन दबाएँ।  

📌 **अब आपका Pull Request तैयार है!** 🚀  

---

# **🎯 Next Step: Git Stash और Cherry-Pick सीखना**  
💡 **क्या आप Git Stash और Cherry-Pick सीखना चाहेंगे?** 🚀

बहुत बढ़िया! अब हम **Git Stash और Cherry-Pick** को स्टेप-बाय-स्टेप सीखेंगे। 🚀  

---

# **📌 Step 1: Git Stash क्या है?**  
👉 **Git Stash तब काम आता है जब आपको बिना Commit किए ब्रांच बदलनी हो, लेकिन आपका काम खोए नहीं।**  

✍ **Example:**  
मान लीजिए, आप **feature-branch** में काम कर रहे हैं और अचानक आपको **main ब्रांच पर जाना पड़ जाए।**  
अगर आप `git checkout main` करते हैं, तो Git आपको **बिना Commit किए स्विच नहीं करने देगा।**  

📌 **Git Stash आपकी सारी Uncommitted Changes को स्टोर कर लेता है और बाद में वापस लाने की सुविधा देता है।**  

---

# **📌 Step 2: Git Stash कैसे करें?**  
### ✅ **Step 2.1: अपने Uncommitted Changes को Stash करें**  
```bash
git stash
```
📌 अब आपके सभी **Uncommitted Changes स्टोर हो गए** और आपका वर्किंग डायरेक्टरी साफ हो गई।  

### ✅ **Step 2.2: अब आप आराम से ब्रांच बदल सकते हैं**  
```bash
git checkout main
```

---

# **📌 Step 3: Stashed Changes वापस कैसे लाएँ?**  
### ✅ **Step 3.1: Stash को वापस Apply करें**
```bash
git stash apply
```
📌 इससे आपकी स्टैश की गई Changes वापस आ जाएंगी! ✅  

👉 अगर आप स्टैश को अप्लाई करने के बाद हटाना चाहते हैं:  
```bash
git stash drop
```

### ✅ **Step 3.2: अगर आप स्टैश को बिना Apply किए हटाना चाहते हैं**  
```bash
git stash clear
```
📌 **अब सारी Stashed Changes हट जाएँगी!** 🚀  

---

# **📌 Step 4: Git Cherry-Pick क्या है?**  
👉 **Git Cherry-Pick एक Powerful Command है जिससे आप किसी एक Commit को एक ब्रांच से दूसरी ब्रांच में ला सकते हैं।**  
👉 यह तब काम आता है जब आप **पूरी ब्रांच को Merge नहीं करना चाहते, सिर्फ कुछ ज़रूरी Changes उठाने हैं।**  

---

# **📌 Step 5: Git Cherry-Pick कैसे करें?**  
### ✅ **Step 5.1: उस Commit का ID पता करें जिसे Copy करना है**  
```bash
git log --oneline
```
📌 इससे आपको **सभी Commits की IDs** दिखेंगी।  

### ✅ **Step 5.2: अब Cherry-Pick करें**  
```bash
git cherry-pick <commit-id>
```
📌 इससे सिर्फ वो Commit आपकी ब्रांच में आ जाएगी। 🚀  

---

# **📌 Example: Git Cherry-Pick का इस्तेमाल**  
### **मान लीजिए:**
- **आप `feature-branch` में काम कर रहे थे** और वहाँ एक Important Bug Fix हुआ।  
- लेकिन **आपको यह Fix `main` ब्रांच में भी चाहिए।**  
- तो आप उस Fix वाले Commit को `main` ब्रांच में ला सकते हैं, बिना पूरी `feature-branch` को Merge किए।  

### ✅ **Step 1: पहले Main ब्रांच में जाएं**
```bash
git checkout main
```

### ✅ **Step 2: Commit ID पता करें**
```bash
git log --oneline feature-branch
```
**मान लीजिए, आपको `a1b2c3d4` Commit को Copy करना है।**  

### ✅ **Step 3: अब Cherry-Pick करें**
```bash
git cherry-pick a1b2c3d4
```
📌 **अब सिर्फ वही Bug Fix `main` ब्रांच में आ गया!** 🚀  

---

## **Git Cherry-Pick – किसी एक Commit को किसी Branch में Apply करना** 🚀  

Git Cherry-Pick एक बहुत काम की Command है, जिससे आप **किसी एक Branch से कोई Specific Commit उठाकर दूसरी Branch में Apply कर सकते हैं।**  

👉 **जब आपको पूरा Branch Merge नहीं करना हो, सिर्फ़ कोई एक जरूरी Change चाहिए, तब Cherry-Pick बहुत काम आता है।**  
👉 **यह तब भी काम आता है, जब कोई Bug Fix किसी दूसरे Branch में हुआ हो और आपको उसे अपनी Branch में लेना हो।**  

---

## **📌 Step 1: Commit ID निकालें**  

सबसे पहले, उस Commit का ID (Hash) निकालें, जिसे आपको दूसरी Branch में Apply करना है।  
```bash
git log --oneline
```
📌 **यह सभी Commit Messages के साथ उनकी IDs दिखाएगा। Example:**  
```
a1b2c3d Fix login issue
x9y8z7 Added new API endpoint
p4q5r6 UI improvements
```
👉 हमें **"Fix login issue"** वाले Commit को दूसरी Branch में Apply करना है।  

---

## **📌 Step 2: Target Branch पर स्विच करें**  

अब उस Branch पर जाएं, जहां आप यह Commit Apply करना चाहते हैं:  
```bash
git checkout main
```

---

## **📌 Step 3: Cherry-Pick Command चलाएं**  

अब Cherry-Pick Command रन करें और उस Commit ID को पास करें:  
```bash
git cherry-pick a1b2c3d
```
📌 **अब "Fix login issue" वाला Commit `main` Branch में Apply हो जाएगा।**  

---

## **📌 Step 4: Conflict आने पर क्या करें?**  

अगर कोई Conflict आता है, तो Git बताएगा:  
```
error: could not apply a1b2c3d... Fix login issue
hint: Resolve conflicts and then run "git cherry-pick --continue".
```
👉 **Solution:**  
1️⃣ **Conflicted Files को Open करें और Fix करें।**  
2️⃣ **Change Save करें और Stage करें:**  
   ```bash
   git add .
   git cherry-pick --continue
   ```
3️⃣ **अगर आप इस Cherry-Pick को Cancel करना चाहते हैं:**  
   ```bash
   git cherry-pick --abort
   ```

---

## **📌 Step 5: Cherry-Pick को Undo करना (Commit हटाना)**  
अगर गलती से गलत Commit Cherry-Pick हो गया है, तो इसे हटाने के लिए:  
```bash
git reset --hard HEAD~1
```
📌 **यह Last Commit को हटा देगा।**  

---

## **📌 Use Cases (कब इस्तेमाल करें?)**  
✅ जब किसी Feature Branch में Bug Fix किया गया हो और आपको वही Fix `main` Branch में चाहिए।  
✅ जब आपको किसी पुरानी Branch से कोई जरूरी Change लेनी हो, लेकिन पूरा Merge नहीं करना हो।  
✅ जब एक बड़े PR से सिर्फ एक ही जरूरी Commit लेना हो।  


# **🎯 Next Step: Git Reset और Revert सीखना**  
💡 **क्या आप Git Reset और Revert सीखना चाहेंगे?** 🚀

बहुत बढ़िया! अब हम **Git Reset और Revert** को स्टेप-बाय-स्टेप सीखेंगे। 🚀  

---

# **📌 Step 1: Git Reset क्या है?**  
👉 **Git Reset का इस्तेमाल हम तब करते हैं जब हमें अपने पिछले Commits या Changes को हटाना या पीछे ले जाना हो।**  

✍ **Git Reset के तीन Modes होते हैं:**  
| Mode | क्या होता है? | कब इस्तेमाल करें? |
|------|--------------|--------------------|
| **Soft Reset** | Commit हटता है, लेकिन Changes Stage में रहते हैं | जब सिर्फ Commit हटानी हो, पर Code बचा रहे |
| **Mixed Reset** | Commit और Staging हटती है, लेकिन Code बचता है | जब Commit और Staging हटानी हो, पर Code बचा रहे |
| **Hard Reset** | Commit, Staging, और Code सब हट जाता है | जब Code को पूरी तरह से Revert करना हो |

---

# **📌 Step 2: Git Reset कैसे करें?**  

### ✅ **Step 2.1: Git Soft Reset (Commit हटाएँ, Code बचाएँ)**
```bash
git reset --soft HEAD~1
```
📌 यह **Last Commit हटाएगा, लेकिन Code रहेगा।**  

---

### ✅ **Step 2.2: Git Mixed Reset (Commit और Staging हटाएँ, Code बचाएँ)**
```bash
git reset --mixed HEAD~1
```
📌 **Commit और Staging Area से हट जाएगा, लेकिन Code रहेगा।**  

---

### ✅ **Step 2.3: Git Hard Reset (Commit + Staging + Code सब हटाएँ)**
```bash
git reset --hard HEAD~1
```
📌 **अब आपका Code भी चला जाएगा, सावधान रहें!** ❌  

👉 **अगर Reset के बाद Code वापस चाहिए:**  
```bash
git reflog
git reset --hard <commit-id>
```
📌 **अब पुराना Code वापस आ जाएगा!** ✅  

---

# **📌 Step 3: Git Revert क्या है?**  
👉 **Git Reset पूरे Commit को हटाता है, लेकिन Git Revert Commit को Undo करता है, बिना History को बदले।**  

✍ **Example:**  
अगर आपने **गलती से Code Push कर दिया** और इसे Undo करना है, तो `git revert` सबसे अच्छा तरीका है।  

---

# **📌 Step 4: Git Revert कैसे करें?**  
### ✅ **Step 4.1: उस Commit का ID पता करें जिसे Undo करना है**
```bash
git log --oneline
```
📌 इससे आपको **सभी Commits की IDs** दिखेंगी।  

### ✅ **Step 4.2: Commit को Revert करें**
```bash
git revert <commit-id>
```
📌 **अब Git एक नया Commit बनाएगा, जो पिछली गलती को Undo कर देगा।** ✅  

👉 **अगर बिना Editor के Revert करना है:**  
```bash
git revert -n <commit-id>
git commit -m "Reverted previous commit"
```
📌 **अब बदलाव हो गया!** 🚀  

---

# **🎯 Next Step: Git Bisect और Git Blame सीखना**  
💡 **क्या आप Git Bisect और Git Blame सीखना चाहेंगे?** 🚀

बहुत बढ़िया! अब हम **Git Bisect और Git Blame** को स्टेप-बाय-स्टेप सीखेंगे। 🚀  

---

# **📌 Step 1: Git Bisect क्या है?**  
👉 **Git Bisect एक Powerful Debugging Tool है जो हमें यह पता लगाने में मदद करता है कि कौन-सा Commit किसी Bug की वजह बना।**  

📌 **मान लीजिए:**  
- पहले आपका Code सही चल रहा था।  
- लेकिन अब **Bug आ गई है और आपको समझ नहीं आ रहा कि यह कब और किस Commit में आई।**  
- तो हम **Git Bisect का इस्तेमाल करके पता लगा सकते हैं कि कौन-सा Commit इस Bug की वजह बना।**  

---

# **📌 Step 2: Git Bisect कैसे करें?**  
### ✅ **Step 2.1: Git Bisect शुरू करें**  
```bash
git bisect start
```
📌 **अब Git Bisect Mode चालू हो गया।** ✅  

### ✅ **Step 2.2: अच्छे और खराब Commits को बताएं**  
👉 **अगर आपके पास कोई Commit है जहाँ सब सही चल रहा था:**  
```bash
git bisect good <commit-id>
```
👉 **और जहाँ Bug आ चुकी है:**  
```bash
git bisect bad <commit-id>
```

📌 **अब Git खुद ही Commits को Divide करके आपको बताएगा कि अगला कौन-सा Commit चेक करना है।**  

### ✅ **Step 2.3: हर Commit को चेक करें**  
अब Git आपको एक-एक Commit पर ले जाएगा।  
- अगर Bug नहीं है तो:  
  ```bash
  git bisect good
  ```
- अगर Bug है तो:  
  ```bash
  git bisect bad
  ```

👉 **Git खुद ही आपको उन Commits तक ले जाएगा जहाँ Bug आई थी!**  

### ✅ **Step 2.4: Bisect खत्म करें**
```bash
git bisect reset
```
📌 **अब आप अपनी ब्रांच पर वापस आ चुके हैं!** 🚀  

---

# **📌 Step 3: Git Blame क्या है?**  
👉 **Git Blame से हम किसी फाइल की लाइन-बाय-लाइन History देख सकते हैं और जान सकते हैं कि कौन-से Commit में वह लाइन जोड़ी या बदली गई।**  

---

# **📌 Step 4: Git Blame कैसे करें?**  
### ✅ **Step 4.1: किसी फाइल की History देखें**  
```bash
git blame filename.py
```
📌 **अब Git आपको बताएगा कि कौन-सी लाइन किस Commit में और किसने बदली थी।**  

### ✅ **Step 4.2: ज्यादा Detail में देखना हो**  
```bash
git blame -L 10,20 filename.py
```
📌 **यह सिर्फ 10 से 20 लाइन की History दिखाएगा!** ✅  

---

# **🎯 Next Step: Git Hooks और Git Submodules सीखना**  
💡 **क्या आप Git Hooks और Git Submodules सीखना चाहेंगे?** 🚀

बहुत बढ़िया! अब हम **Git Hooks और Git Submodules** को स्टेप-बाय-स्टेप सीखेंगे। 🚀  

---

# **📌 Step 1: Git Hooks क्या है?**  
👉 **Git Hooks ऐसे Scripts होते हैं, जो Git Commands के साथ ऑटोमैटिक रन होते हैं।**  
👉 **इनका इस्तेमाल हम Git में Custom Automation के लिए कर सकते हैं, जैसे:**
- **Code Push करने से पहले Format चेक करना**
- **Commit Message को फिक्स करना**
- **किसी ब्रांच पर Push रोकना**
- **Auto Deployment करना**  

---

# **📌 Step 2: Git Hooks कैसे इस्तेमाल करें?**  

### ✅ **Step 2.1: Git Hooks फोल्डर में जाएं**  
```bash
cd .git/hooks
ls
```
📌 **यहाँ पर बहुत सारे Default Hooks मिलेंगे, जैसे:**  
- `pre-commit` (Commit करने से पहले रन होगा)  
- `pre-push` (Push करने से पहले रन होगा)  

### ✅ **Step 2.2: Pre-Commit Hook बनाना**  
```bash
nano .git/hooks/pre-commit
```
अब इसमें यह Code लिखें:  
```bash
#!/bin/bash
echo "Commit करने से पहले Code चेक किया जा रहा है..."
flake8   # Python के लिए Linter चेक
exit 1   # Commit को रोकने के लिए
```
### ✅ **Step 2.3: Hook को Executable बनाना**  
```bash
chmod +x .git/hooks/pre-commit
```
📌 अब जब भी आप `git commit` करेंगे, यह Hook रन होगा! 🚀  

---

# **📌 Step 3: Git Submodules क्या है?**  
👉 **Git Submodules का इस्तेमाल हम तब करते हैं जब हमें एक Repository के अंदर दूसरी Repository को रखना होता है।**  
👉 **यह तब काम आता है जब आपका प्रोजेक्ट किसी दूसरी Git Repository पर निर्भर करता हो।**  

---

# **📌 Step 4: Git Submodules कैसे काम करता है?**  

### ✅ **Step 4.1: Submodule को जोड़ना**  
```bash
git submodule add <repo-url> submodule-folder
```
📌 इससे आपकी Repo में एक दूसरी Git Repository जुड़ जाएगी।  

### ✅ **Step 4.2: Submodules को Clone करना**  
अगर कोई Repo पहले से Submodules का इस्तेमाल कर रही है, तो उसे Clone करने के लिए:  
```bash
git clone --recurse-submodules <repo-url>
```
📌 **अब सारी Submodules भी आ जाएँगी!** 🚀  

### ✅ **Step 4.3: Submodules को Update करना**  
```bash
git submodule update --remote
```
📌 इससे Submodules की नई Updates आ जाएँगी।  

### ✅ **Step 4.4: किसी Submodule को हटाना**  
```bash
git submodule deinit -f submodule-folder
git rm -rf submodule-folder
```
📌 **अब Submodule हट गया!** ✅  

---

# **🎯 Next Step: Git Rebase और Git Squash सीखना**  
💡 **क्या आप Git Rebase और Git Squash सीखना चाहेंगे?** 🚀

बहुत बढ़िया! अब हम **Git Rebase और Git Squash** को स्टेप-बाय-स्टेप सीखेंगे। 🚀  

---

# **📌 Step 1: Git Rebase क्या है?**  
👉 **Git Rebase का इस्तेमाल हम तब करते हैं जब हमें एक ब्रांच की History को दूसरी ब्रांच के साथ Merge करना हो, लेकिन बिना नया Merge Commit बनाए।**  
👉 **यह हमें साफ और Linear Git History रखने में मदद करता है।**  

📌 **Git Merge और Git Rebase में अंतर:**  

| Feature | Git Merge | Git Rebase |
|---------|----------|------------|
| **कैसे काम करता है?** | एक नया Merge Commit बनाता है | Commit History को फिर से लिखता है |
| **History कैसी दिखती है?** | Non-linear (extra merge commits) | Linear (clean history) |
| **कब इस्तेमाल करें?** | जब सभी पुराने Commits को संभाल कर रखना हो | जब Clean History चाहिए |

---

# **📌 Step 2: Git Rebase कैसे करें?**  

### ✅ **Step 2.1: सही ब्रांच पर जाएं**  
```bash
git checkout feature-branch
```
📌 **अब हम जिस ब्रांच को Rebase करना है, उस पर आ गए।**  

### ✅ **Step 2.2: Rebase शुरू करें**  
```bash
git rebase main
```
📌 **अब feature-branch की History, main ब्रांच के हिसाब से Update हो जाएगी।** 🚀  

👉 **अगर Conflict आता है:**  
1. फाइलों को मैनुअली एडिट करें  
2. फिर Rebase को Continue करें:  
   ```bash
   git rebase --continue
   ```
3. **अगर गलती हो जाए, तो Rebase को रोक सकते हैं:**  
   ```bash
   git rebase --abort
   ```

---

# **📌 Step 3: Git Squash क्या है?**  
👉 **Git Squash का इस्तेमाल हम तब करते हैं जब हमें Multiple Commits को एक ही Commit में Merge करना हो।**  
👉 **यह तब काम आता है जब हमने बहुत सारे छोटे-छोटे Commits किए हों, लेकिन हम Final Code को Clean रखना चाहते हों।**  

---

# **📌 Step 4: Git Squash कैसे करें?**  

### ✅ **Step 4.1: Squash Mode में जाएं**  
```bash
git rebase -i HEAD~3
```
📌 **यह पिछले 3 Commits को Squash करने का ऑप्शन देगा।**  

### ✅ **Step 4.2: Squash करने के लिए 'pick' को 'squash' में बदलें**  
जब Editor खुलेगा, तो इस तरह दिखेगा:  
```
pick abc123 First commit
pick def456 Second commit
pick ghi789 Third commit
```
📌 **अब 'pick' को नीचे वाले Commits में 'squash' से बदलें:**  
```
pick abc123 First commit
squash def456 Second commit
squash ghi789 Third commit
```
👉 अब **सारे Commits एक में Merge हो जाएँगे!** 🚀  

### ✅ **Step 4.3: Squash को Finalize करें**  
अब Git एक नया Message माँगेगा, जहाँ आप Final Commit Message लिख सकते हैं।  

### ✅ **Step 4.4: अगर गलती हो जाए तो Rebase को Undo करें**  
```bash
git rebase --abort
```
📌 **अब History पहले जैसी हो जाएगी!** ✅  


### **Git Reflog – Git History को Recover करना** 🚀  

Git Reflog एक बहुत ही पावरफुल फीचर है, जिससे हम **डिलीट हुए Commits, गलती से किए गए Reset, Rebase या Checkout को Recover** कर सकते हैं।  

---

## **📌 Step 1: Git Reflog क्या है?**  
👉 **Git Reflog एक Hidden History होती है, जिसमें आपके द्वारा Git में किए गए सभी Actions (जैसे Checkout, Merge, Rebase, Reset) स्टोर होते हैं।**  
👉 **अगर आप गलती से कोई ब्रांच डिलीट कर दें, Rebase कर दें, या Reset कर दें, तो आप Git Reflog की मदद से उसे वापस पा सकते हैं।**  

---

## **📌 Step 2: Git Reflog कैसे देखें?**  
```bash
git reflog
```
📌 **Output कुछ ऐसा दिखेगा:**  
```
a1b2c3d HEAD@{0}: commit: Fixed a bug
b2c3d4e HEAD@{1}: rebase (finish): returning to refs/heads/main
c3d4e5f HEAD@{2}: commit: Added new feature
d4e5f6g HEAD@{3}: reset: moving to previous commit
```
👉 **यहाँ हर Action का एक Unique Commit Hash होता है, जिससे हम पुराने Commits को वापस पा सकते हैं।**  

---

## **📌 Step 3: Git Reflog से पुराना Commit वापस लाना**  
### ✅ **अगर आपने गलती से कोई Commit डिलीट कर दिया हो:**  
```bash
git checkout <commit-hash>
```
📌 **अब आप उस पुराने Commit को देख सकते हैं।**  

---

### ✅ **अगर आपने गलती से Reset कर दिया हो:**  
**मान लीजिए, आपने Hard Reset कर दिया और आपका Commit खो गया:**  
```bash
git reset --hard HEAD@{3}
```
📌 **अब आपका पुराना Code वापस आ जाएगा!**  

---

### ✅ **अगर आपने गलती से कोई ब्रांच डिलीट कर दी हो:**  
```bash
git branch recover-branch <commit-hash>
```
📌 **अब आपकी खोई हुई ब्रांच वापस आ गई!** 🚀  

---

## **🎯 Next Step: Git Worktrees सीखना चाहते हैं या कोई और टॉपिक?** 😊

### **Git Worktrees – एक ही Repo में Multiple Workspaces** 🚀  

Git Worktrees की मदद से आप **एक ही Git Repository में एक साथ Multiple Branches पर काम कर सकते हैं, बिना बार-बार Checkout किए।**  

👉 **अगर आपको एक साथ अलग-अलग Branches पर काम करना हो, तो Worktrees बहुत काम आते हैं।**  
👉 **आप Parallel Development कर सकते हैं, जैसे Production Code और New Feature Code को अलग-अलग Workspaces में Edit करना।**  

---

## **📌 Step 1: Git Worktree क्या है?**  
Git Worktree **एक नया Directory (Folder) बनाता है**, जिसमें आप एक अलग Branch पर काम कर सकते हैं, **बिना अपनी Current Working Directory को बदले।**  

👉 **मतलब, आप एक ही Repo को Multiple Locations पर अलग-अलग Branches के साथ इस्तेमाल कर सकते हैं!**  

---

## **📌 Step 2: Git Worktree कैसे इस्तेमाल करें?**  

### ✅ **Step 2.1: Git Worktree को Enable करें**  
```bash
git worktree list
```
📌 **यह आपके Current Worktree को दिखाएगा।**  

---

### ✅ **Step 2.2: New Worktree बनाना (नई Branch के साथ)**  
```bash
git worktree add ../new-feature-branch feature-branch
```
📌 **अब एक नया Folder (new-feature-branch) बनेगा, जहाँ feature-branch मौजूद होगी।**  

---

### ✅ **Step 2.3: Worktree में जाएं और Code Edit करें**  
```bash
cd ../new-feature-branch
```
📌 **अब आप इस Directory में रहकर Code Change कर सकते हैं।**  

---

### ✅ **Step 2.4: Worktree को हटाना (जब ज़रूरत न हो)**  
```bash
git worktree remove ../new-feature-branch
```
📌 **अब Worktree हट जाएगा, लेकिन Branch बनी रहेगी!** 🚀  

---

## **📌 Git Worktree कब इस्तेमाल करें?**  
✅ जब आपको **एक साथ अलग-अलग Branches पर काम करना हो।**  
✅ जब आपको **Production और Development Code अलग-अलग Workspaces में रखना हो।**  
✅ जब आपको **Testing के लिए एक अलग Work Environment चाहिए।**  

---

## **🎯 Next Step: Git Tagging सीखना चाहेंगे या कोई और टॉपिक?** 😊
## **Git Tagging – किसी खास Version को Mark करना** 🚀  

Git Tagging का इस्तेमाल **किसी खास Commit या Version को Mark करने के लिए** किया जाता है।  
👉 **यह तब काम आता है जब हमें किसी Release (जैसे v1.0, v2.0) को Identify करना हो।**  
👉 **Tagging से हम किसी Commit को नाम देकर उसे Future में आसानी से Access कर सकते हैं।**  

---

## **📌 Step 1: Git Tag के प्रकार**  
1️⃣ **Lightweight Tag** – सिर्फ़ Commit को एक Label देता है।  
2️⃣ **Annotated Tag** – Extra Metadata (Message, Author, Date) स्टोर करता है।  

---

## **📌 Step 2: Git Tag कैसे बनाएं?**  

### ✅ **(1) Lightweight Tag बनाना**  
```bash
git tag v1.0
```
📌 **यह "v1.0" नाम का Tag बना देगा।**  

---

### ✅ **(2) Annotated Tag बनाना**  
```bash
git tag -a v1.0 -m "First stable release"
```
📌 **यह Tag के साथ एक Message भी सेव करेगा।**  

---

## **📌 Step 3: Git Tag कैसे देखें?**  
```bash
git tag
```
📌 **यह सभी Tags को लिस्ट करेगा।**  

---

## **📌 Step 4: किसी खास Commit पर Tag लगाना**  
```bash
git tag -a v1.1 <commit-hash> -m "Bug fixes and improvements"
```
📌 **यह पुराने Commit पर Tag जोड़ देगा।**  

---

## **📌 Step 5: Git Tag को Push करना**  
```bash
git push origin v1.0
```
📌 **अब यह Tag Remote Repository (GitHub) पर चला जाएगा।**  

👉 **अगर सारे Tags एक साथ Push करने हैं:**  
```bash
git push origin --tags
```

---

## **📌 Step 6: Git Tag को Delete करना**  
### ✅ **(1) Local से Delete करना**  
```bash
git tag -d v1.0
```
### ✅ **(2) Remote से Delete करना**  
```bash
git push origin --delete v1.0
```

---

## **🎯 Next Step: Git Bare Repository सीखना चाहेंगे या कोई और टॉपिक?** 😊

## **Git Bare Repository – Central Repository बनाना** 🚀  

Git Bare Repository एक ऐसा Repo होता है, **जिसमें कोई Working Directory नहीं होती**, सिर्फ़ **Version Control Data** स्टोर किया जाता है।  

👉 **Bare Repository का मुख्य इस्तेमाल Centralized Remote Repo बनाने के लिए होता है, जैसे GitHub, GitLab, या कोई Local Server।**  
👉 **यह Dev Team के लिए एक Shared Repository की तरह काम करता है, जहाँ से सभी Developers Code Pull और Push कर सकते हैं।**  

---

## **📌 Step 1: Git Bare Repository क्या होता है?**  
🔹 जब आप एक Normal Git Repo बनाते हैं, तो उसमें Code + Git History दोनों होते हैं।  
🔹 लेकिन **Bare Repo में केवल Git History और Metadata स्टोर होता है, कोई Working Directory नहीं होती।**  
🔹 यह **Remote Repository (जैसे GitHub)** की तरह ही काम करता है, जहाँ से Multiple Developers एक साथ काम कर सकते हैं।  

---

## **📌 Step 2: Git Bare Repository कैसे बनाएं?**  

### ✅ **(1) Bare Repository Initialize करना**  
```bash
git init --bare myproject.git
```
📌 **अब "myproject.git" नाम का Bare Repository बन जाएगा।**  

---

## **📌 Step 3: Bare Repository को Remote के रूप में जोड़ना**  

### ✅ **(1) किसी और मशीन पर इस Repo को Clone करें**  
```bash
git clone user@server:/path/to/myproject.git
```
📌 **अब आप इस Repo को Use कर सकते हैं।**  

---

### ✅ **(2) किसी Existing Repo में इस Bare Repo को Remote जोड़ना**  
```bash
git remote add origin /path/to/myproject.git
git push -u origin main
```
📌 **अब आपकी Local Repo, Bare Repo से Connect हो गई!** 🚀  

---

## **📌 Step 4: Git Bare Repository कब इस्तेमाल करें?**  
✅ जब आपको **GitHub/GitLab की तरह एक Private Remote Server बनाना हो।**  
✅ जब आपको **Local Network में एक Shared Repository बनानी हो।**  
✅ जब आप **CI/CD Pipelines में Centralized Repo इस्तेमाल करना चाहें।**  

---

## **🎯 Next Step: Git LFS (Large File Storage) सीखना चाहेंगे या कोई और टॉपिक?** 😊

## **Git LFS (Large File Storage) – बड़े Files को Manage करना** 🚀  

Git LFS (Large File Storage) एक Extension है, जो **Git में बड़े Files (जैसे Images, Videos, Datasets, और Binaries) को Efficient तरीके से Store और Track करने में मदद करता है।**  

👉 **Normal Git Repo में बड़े Files को Track करना मुश्किल होता है, क्योंकि Git हर बार पूरा File स्टोर करता है।**  
👉 **Git LFS सिर्फ़ File का Pointer (Reference) स्टोर करता है, और असली File को अलग से स्टोर करता है, जिससे Repo का Size छोटा रहता है।**  

---

## **📌 Step 1: Git LFS Install करें**  
### ✅ **Linux/Ubuntu के लिए:**  
```bash
curl -s https://packagecloud.io/install/repositories/github/git-lfs/script.deb.sh | sudo bash
sudo apt install git-lfs
```
  
### ✅ **Windows के लिए:**  
👉 [Git LFS Installer](https://git-lfs.github.com/) डाउनलोड करें और इंस्टॉल करें।  

---

## **📌 Step 2: Git LFS Initialize करें**  
```bash
git lfs install
```
📌 **अब Git LFS आपके Repo में Enable हो जाएगा।**  

---

## **📌 Step 3: किसी बड़े File को Git LFS से Track करें**  
### ✅ **(1) Track करने के लिए File Type Add करें**  
```bash
git lfs track "*.png"
git lfs track "*.mp4"
```
📌 **यह सभी PNG और MP4 Files को Git LFS में Track करेगा।**  

### ✅ **(2) `.gitattributes` File में Rules सेव होंगे**  
```bash
cat .gitattributes
```
```
*.png filter=lfs diff=lfs merge=lfs -text
*.mp4 filter=lfs diff=lfs merge=lfs -text
```

---

## **📌 Step 4: Git LFS Files को Commit और Push करें**  
```bash
git add .gitattributes
git add my_large_file.png
git commit -m "Added large file with LFS"
git push origin main
```
📌 **अब आपका बड़ा File Git LFS में Store होगा, और Repo का Size छोटा रहेगा।** 🚀  

---

## **📌 Step 5: Git LFS File को Clone या Pull करें**  
```bash
git clone https://github.com/user/repo.git
git lfs pull
```
📌 **यह LFS Files को सही तरीके से डाउनलोड करेगा।**  

---

## **📌 Step 6: Git LFS से File हटाना**  
अगर आपको कोई बड़ा File LFS से हटाना हो:  
```bash
git lfs untrack "*.mp4"
git rm --cached my_large_file.mp4
git commit -m "Removed file from LFS"
git push origin main
```

---

## **📌 Git LFS कब इस्तेमाल करें?**  
✅ जब Repo में **High-Resolution Images, Videos, या Large Datasets** हों।  
✅ जब किसी **Machine Learning Model, CAD Files, या Game Assets को Store** करना हो।  
✅ जब **CI/CD Pipelines में Large Files का सही Management चाहिए।**  

---

## **🎯 Next Step: Git Hooks सीखना चाहेंगे या कोई और टॉपिक?** 😊

## **Git Hooks – ऑटोमेशन और कस्टम स्क्रिप्टिंग** 🚀  

Git Hooks ऐसे Scripts होते हैं, जो **Git के अलग-अलग Actions (जैसे Commit, Push, Merge, Rebase) के साथ ऑटोमैटिकली रन होते हैं।**  
👉 **इनका इस्तेमाल Code Formatting, Testing, और Security Checks को ऑटोमेट करने के लिए किया जाता है।**  
👉 **Hooks आपके Workflow को Customize करने और Manual Errors को रोकने में मदद करते हैं।**  

---

## **📌 Step 1: Git Hooks कहाँ होते हैं?**  
हर Git Repository में एक `.git/hooks/` फ़ोल्डर होता है, जिसमें Default Hooks मौजूद होते हैं।  
```bash
ls .git/hooks/
```
📌 **आपको कुछ Sample Hooks दिखेंगे, जैसे `pre-commit.sample`, `pre-push.sample` वगैरह।**  

---

## **📌 Step 2: Git Hook को Activate करना**  

### ✅ **(1) Pre-commit Hook (Commit से पहले Code Check करना)**  
👉 यह Hook **Commit से पहले Code Quality चेक करने** के लिए इस्तेमाल होता है।  

#### **Step 2.1: Hook Script बनाएं**
```bash
nano .git/hooks/pre-commit
```
#### **Step 2.2: Script लिखें**  
```bash
#!/bin/bash
echo "🔍 Running pre-commit checks..."
if ! pylint my_script.py; then
  echo "❌ Code has issues. Fix them before commit!"
  exit 1
fi
echo "✅ Code is clean!"
```
📌 **यह Script `pylint` से Python Code चेक करेगा, अगर Code में Error होगी, तो Commit नहीं होगा।**  

#### **Step 2.3: Executable बनाएं**  
```bash
chmod +x .git/hooks/pre-commit
```
अब यह हर बार **`git commit`** करने पर ऑटोमैटिक रन होगा।

---

### ✅ **(2) Pre-push Hook (Push से पहले Test Run करना)**  
👉 यह Hook **Push से पहले Tests रन करने के लिए** काम आता है।  

#### **Step 2.1: Hook Script बनाएं**  
```bash
nano .git/hooks/pre-push
```
#### **Step 2.2: Script लिखें**  
```bash
#!/bin/bash
echo "🚀 Running tests before push..."
if ! pytest; then
  echo "❌ Tests failed! Fix them before pushing."
  exit 1
fi
echo "✅ All tests passed!"
```
#### **Step 2.3: Executable बनाएं**  
```bash
chmod +x .git/hooks/pre-push
```
📌 **अब `git push` करने से पहले Tests ऑटोमैटिकली रन होंगे।**  

---

## **📌 Step 3: Custom Hooks बनाना**  
अगर आप किसी Custom Task को ऑटोमेट करना चाहते हैं, जैसे:  
✅ **Code Linting**  
✅ **Security Scanning**  
✅ **Auto-Formatting (जैसे Prettier, Black, ESLint)**  
✅ **Deployment Automation**  

तो आप `pre-commit` या `pre-push` में Custom Scripts लिख सकते हैं।

---

## **📌 Step 4: Git Hooks को Disable या Ignore करना**  
अगर आप किसी Hook को Ignore करना चाहते हैं:  
```bash
git commit --no-verify
```
📌 **यह Hook को Bypass करके Commit करेगा।**  

---
## **Git Workflows – Industry में इस्तेमाल होने वाले Best Practices** 🚀  

Git Workflows का मतलब है **"Git को सही तरीके से Manage और Use करने के तरीके"**।  
हर Software Team एक Best Workflow अपनाती है ताकि Code Collaboration और Deployment आसान हो।  

---

## **📌 1. Centralized Workflow (Simple और Basic)**  
**🔹 कब इस्तेमाल करें?** 👉 जब Team छोटी हो और सिर्फ़ एक ही Main Branch पर काम हो रहा हो।  

### **कैसे काम करता है?**  
✅ सब Developers **एक ही Branch** (main) पर काम करते हैं।  
✅ सभी Code **Directly main पर Commit और Push करते हैं।**  

📌 **Commands:**  
```bash
git clone <repo-url>       # Repo को Clone करें
git add .                  # Changes Add करें
git commit -m "Message"     # Commit करें
git push origin main        # Main Branch में Push करें
```

👉 **Cons:** यह छोटा Workflow है, लेकिन बड़ी Teams के लिए Problematic हो सकता है क्योंकि Direct Changes से Code में Bugs आ सकते हैं।  

---

## **📌 2. Feature Branch Workflow (अच्छा तरीका)**  
**🔹 कब इस्तेमाल करें?** 👉 जब अलग-अलग Features पर अलग-अलग लोग काम कर रहे हों।  

### **कैसे काम करता है?**  
✅ Developers **"main" Branch को Touch नहीं करते।**  
✅ हर नया Feature या Bug Fix के लिए **एक नई Branch** बनाई जाती है।  
✅ **Feature पूरा होने के बाद** उसे **Pull Request (PR) के ज़रिए Merge किया जाता है।**  

📌 **Commands:**  
```bash
git checkout -b new-feature   # नई Branch बनाएं
# Code लिखें...
git add .
git commit -m "Added new feature"
git push origin new-feature   # GitHub पर Push करें
```
👉 अब GitHub/GitLab पर **Pull Request (PR) बनाएंगे और Code Review के बाद Merge करेंगे।**  

---

## **📌 3. Git Flow Workflow (Enterprise Level)**  
**🔹 कब इस्तेमाल करें?** 👉 जब Project में **Stable Releases और Development अलग-अलग Manage करना हो।**  

### **कैसे काम करता है?**  
✅ **main (Stable)** – सिर्फ़ Production-Ready Code रहता है।  
✅ **develop (Development)** – Developers इसी पर काम करते हैं।  
✅ **feature Branches** – हर नया Feature अपनी अलग Branch में Develop होता है।  
✅ **release Branches** – जब Code Stable हो जाता है, तो उसे Release Branch में भेजा जाता है।  
✅ **hotfix Branches** – Urgent Bug Fixes के लिए।  

📌 **Commands:**  
```bash
git checkout -b feature-xyz develop  # Feature Branch बनाएं
# Code लिखें...
git commit -m "Feature XYZ added"
git checkout develop
git merge feature-xyz   # Develop में Merge करें
git checkout main
git merge develop       # Final Code Main में लाएं
git tag v1.0            # Release Version Tag करें
```
👉 यह Workflow **Stable Releases और Safe Development** के लिए Best है।  

---

## **📌 4. GitHub Flow (Modern और Simple Approach)**  
**🔹 कब इस्तेमाल करें?** 👉 जब Continuous Deployment और Simple Workflow चाहिए।  

### **कैसे काम करता है?**  
✅ सिर्फ़ **एक main Branch** होती है।  
✅ हर नए Feature के लिए एक **नई Branch** बनाई जाती है।  
✅ **Code Review और Testing के बाद उसे main में Merge कर दिया जाता है।**  

📌 **Commands:**  
```bash
git checkout -b feature-xyz
git add .
git commit -m "Added Feature XYZ"
git push origin feature-xyz
```
👉 GitHub पर Pull Request बनाएं, Review करें और Merge करें।  

---

## **📌 5. Trunk-Based Development (High-Speed DevOps Teams के लिए)**  
**🔹 कब इस्तेमाल करें?** 👉 जब **CI/CD (Continuous Integration & Deployment)** का इस्तेमाल हो।  

### **कैसे काम करता है?**  
✅ **कोई Long-Lived Feature Branches नहीं होतीं।**  
✅ Developers सीधे **"main" या "trunk" Branch** में काम करते हैं।  
✅ **Code छोटे-छोटे Chunks में Merge किया जाता है।**  
✅ **Automated Testing और Deployment बहुत जरूरी होता है।**  

📌 **Commands:**  
```bash
git checkout main
git pull origin main
git commit -m "Small incremental change"
git push origin main
```
👉 **CI/CD Pipelines का इस्तेमाल किया जाता है ताकि हर Change तुरंत Test और Deploy हो सके।**  

---

## **🎯 कौन सा Workflow Best है?**  

| Workflow | कब इस्तेमाल करें? |  
|----------|----------------|  
| **Centralized** | छोटी Teams, Simple Projects |  
| **Feature Branch** | Teams जो Code Review चाहती हैं |  
| **Git Flow** | Enterprise Level Stable Releases के लिए |  
| **GitHub Flow** | Modern Dev Teams, Continuous Deployment के लिए |  
| **Trunk-Based** | High-Speed CI/CD DevOps Teams के लिए |  

📌 अगर आप Beginner हैं तो **Feature Branch Workflow या GitHub Flow Best हैं।**  

---

## **🎯 Next Step: "Git Stash" सीखना चाहेंगे या कोई और टॉपिक?** 😊

# **Git Advanced Debugging – Git में Errors और Issues को Fix करने के तरीके** 🚀  

Git में कभी-कभी ऐसे Issues आते हैं जो Debug करना मुश्किल हो सकता है।  
लेकिन Git के कुछ Powerful Debugging Tools हैं जो आपकी मदद कर सकते हैं।  

---

## **📌 1. `git status` – Repo का Current State Check करें**  
अगर आपको समझ नहीं आ रहा कि Repo में क्या Changes हुए हैं, तो यह Command मदद करेगी:  
```bash
git status
```
✅ यह बताएगा कि कौन से Files Modified, Untracked, या Staged हैं।  

---

## **📌 2. `git log` – Commit History Debug करें**  
अगर आपको देखना है कि कौन से Commits किए गए हैं और किसने किए हैं, तो:  
```bash
git log --oneline --graph --decorate --all
```
✅ यह Commit History को Compact और Clear तरीके से दिखाएगा।  

---

## **📌 3. `git diff` – Changes Compare करें**  
अगर आप देखना चाहते हैं कि कौन से Files में क्या Changes हुए हैं, तो:  
```bash
git diff
```
✅ यह दिखाएगा कि कौन से Lines Modify हुई हैं।  

अगर आप Staged Changes देखना चाहते हैं:  
```bash
git diff --staged
```

---

## **📌 4. `git bisect` – Buggy Commit ढूंढना**  
अगर Code में कोई Bug आ गया है और आपको नहीं पता कि यह कब आया, तो `git bisect` इस्तेमाल करें।  
👉 हमने यह पहले ही सीखा था, जिससे हम जल्दी से Problematic Commit को Trace कर सकते हैं।  

---

## **📌 5. `git blame` – जानें कि Code को किसने बदला**  
अगर आपको किसी Code Line में Bug दिख रहा है और आप जानना चाहते हैं कि इसे **किसने और कब Modify किया था**, तो:  
```bash
git blame filename.py
```
✅ यह दिखाएगा कि File की हर Line को किसने Edit किया और कब।  

---

## **📌 6. `git reflog` – खोए हुए Commits को Recover करें**  
अगर आपने गलती से कोई Commit हटा दिया या Reset कर दिया, तो `git reflog` आपकी मदद कर सकता है:  
```bash
git reflog
```
✅ यह Git के पूरे History को दिखाएगा, ताकि आप पुरानी State पर वापस जा सकें।  

अगर किसी Lost Commit पर वापस जाना हो:  
```bash
git checkout <commit-hash>
```

---

## **📌 7. `git reset` – Changes Undo करें**  
अगर आपने गलत File Commit कर दी है और उसे Undo करना है, तो:  
```bash
git reset HEAD~1
```
✅ यह Last Commit को Undo करेगा, लेकिन Changes को Preserve करेगा।  

अगर Completely Commit को हटाना हो:  
```bash
git reset --hard HEAD~1
```
⚠ **Warning:** यह Commit को Permanently Delete कर देगा।  

---

## **📌 8. `git stash` – Uncommitted Changes Temporarily Save करें**  
अगर आप अभी Commit नहीं करना चाहते लेकिन Changes Save रखना चाहते हैं, तो:  
```bash
git stash
```
✅ इससे Changes Temporary रूप से Store हो जाएंगे।  

अगर वापस लाना हो:  
```bash
git stash pop
```

---

## **📌 9. `git cherry-pick` – Specific Commit को Copy करें**  
अगर किसी पुराने Commit के Changes को Current Branch में Merge करना हो, तो:  
```bash
git cherry-pick <commit-hash>
```
✅ यह केवल उस Specific Commit को Current Branch में Apply कर देगा।  

---

## **📌 10. `git fsck` – Git Repository में Errors ढूंढें**  
अगर आपको लग रहा है कि Git Repository Corrupt हो गई है, तो इसे Fix करने के लिए:  
```bash
git fsck
```
✅ यह Git के अंदर Hidden Issues को Detect करेगा।  

---

## **🎯 Conclusion**  
✅ **Debugging को आसान बनाने के लिए Git के ये Commands बहुत काम आते हैं:**  
1️⃣ **git status** – Repo का Current State देखें  
2️⃣ **git log** – Commit History को Debug करें  
3️⃣ **git diff** – Changes Compare करें  
4️⃣ **git bisect** – Buggy Commit को Trace करें  
5️⃣ **git blame** – जानें कि Code को किसने Change किया  
6️⃣ **git reflog** – खोए हुए Commits Recover करें  
7️⃣ **git reset** – Changes Undo करें  
8️⃣ **git stash** – Uncommitted Changes Save करें  
9️⃣ **git cherry-pick** – Specific Commit को Apply करें  
🔟 **git fsck** – Repository की Integrity Check करें  

---

## **🎯 Next Step: "Git Stash" सीखना चाहेंगे या कोई और टॉपिक?** 😊

# **🚀 Git Best Practices & Tips-Tricks – Pro Level Use करें!**  

Git को सही तरीके से इस्तेमाल करने से **काम का टाइम बचता है, Code Clean रहता है और Mistakes कम होती हैं।**  
नीचे कुछ **Best Practices & Tips-Tricks** दी गई हैं जो आपको Git Pro बना देंगी! 💡  

---

## **✅ 1. Meaningful Commit Messages लिखें**  
❌ **गलत Example:**  
```bash
git commit -m "Update files"
```
✅ **सही Example:**  
```bash
git commit -m "Fix: Login page issue by updating API request"
```
👉 **"क्या बदला और क्यों?"** – यह Clear होना चाहिए।  

---

## **✅ 2. छोटी और Frequent Commits करें**  
❌ **गलत तरीका:** एक साथ बहुत सारे Changes करने के बाद Commit करना।  
✅ **सही तरीका:** छोटे-छोटे Steps में Commit करें ताकि Code Track करना आसान हो।  

---

## **✅ 3. `.gitignore` File को Use करें**  
कई बार Unwanted Files (Logs, Compiled Files, Secrets) Git में चली जाती हैं।  
**Solution:** `.gitignore` फ़ाइल बनाएं और Unnecessary Files को Ignore करें।  

```bash
# .gitignore file example
node_modules/
.env
*.log
.DS_Store
```
📌 `.gitignore` Auto-Generate करने के लिए यह Tool इस्तेमाल करें 👉 [gitignore.io](https://www.toptal.com/developers/gitignore)  

---

## **✅ 4. `git pull --rebase` का इस्तेमाल करें (Merge की जगह)**  
जब आप `git pull` करते हैं, तो **Conflicts** से बचने के लिए **rebase** करें:  
```bash
git pull --rebase origin main
```
👉 यह History को Clean रखता है और Unnecessary Merge Commits से बचाता है।  

---

## **✅ 5. `git stash` से Uncommitted Changes Temporarily Save करें**  
अगर आपको Code Switch करना है लेकिन Current Changes को Save नहीं करना चाहते, तो:  
```bash
git stash
```
बाद में वापस लाने के लिए:  
```bash
git stash pop
```
👉 **Quick Context Switching के लिए बहुत जरूरी है!**  

---

## **✅ 6. `git rebase -i` से Commits को Squash करें (History Clean रखें)**  
अगर आपने बहुत सारे छोटे-छोटे Commits किए हैं और उन्हें एक साथ Merge करना है, तो:  
```bash
git rebase -i HEAD~3
```
👉 यह Last 3 Commits को Interactive Mode में Open करेगा, जहां आप उन्हें Combine कर सकते हैं।  

---

## **✅ 7. Unnecessary Large Files को Git से हटाएं**  
अगर गलती से कोई बड़ा File Git में चला गया है, तो उसे **हटाने के लिए:**  
```bash
git filter-branch --force --index-filter 'git rm --cached --ignore-unmatch large_file.zip' --prune-empty --tag-name-filter cat -- --all
```
📌 **Best Practice:** Large Files के लिए **Git LFS (Large File Storage)** इस्तेमाल करें।  

---

## **✅ 8. Git Hooks Use करें (Auto Checks & Security)**  
Git Hooks से आप **Automatically Code Format, Security Checks और Tests Run** कर सकते हैं।  
Example: **Pre-commit Hook लगाने के लिए:**  
```bash
echo "npm run lint" > .git/hooks/pre-commit
chmod +x .git/hooks/pre-commit
```
👉 अब हर बार Commit करने से पहले Code Lint होगा! 🚀  

---

## **✅ 9. Remote Branches को Delete करना सीखें**  
कई बार पुरानी या Unused Branches Remote Repo में रह जाती हैं।  
👉 **पुरानी Branch Delete करें:**  
```bash
git push origin --delete old-feature-branch
```
👉 **Local Branch को Delete करें:**  
```bash
git branch -d old-feature-branch
```

---

## **✅ 10. `git bisect` से Buggy Commit जल्दी ढूंढें**  
अगर आपको नहीं पता कि कोई Bug किस Commit के कारण आया, तो `git bisect` से जल्दी Trace करें।  
```bash
git bisect start
git bisect bad       # Current Buggy Version
git bisect good <commit-hash>  # Last Working Version
```
👉 अब Git Automatically Commit-by-Commit Debugging करेगा!  

---

## **✅ 11. Multiple Accounts Handle करने के लिए SSH Keys Use करें**  
अगर आपके पास **GitHub Work और Personal Accounts** हैं, तो SSH Keys Use करें।  
```bash
ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
```
👉 फिर **~/.ssh/config** में Add करें ताकि सही Account से Push हो।  

---

## **✅ 12. `git cherry-pick` से Specific Commit को Copy करें**  
अगर आपको किसी एक Specific Commit को दूसरी Branch में Apply करना है, तो:  
```bash
git cherry-pick <commit-hash>
```
👉 **Feature Branch से एक Fix को Main में लाने के लिए बहुत काम आता है!**  

---

## **🎯 Conclusion – Git को Smart तरीके से Use करें!**  
✅ Meaningful Commit Messages लिखें  
✅ Unnecessary Files को `.gitignore` में डालें  
✅ `git stash` का Use करें जब Temporary Save करना हो  
✅ `git rebase` से History Clean रखें  
✅ `git hooks` से Auto-Checks लगाएं  
✅ `git bisect` से Quickly Debug करें  
✅ `git cherry-pick` से Selective Commits Merge करें  

---

## **🎯 Next Step: "Git Security" सीखना चाहेंगे या कोई और टॉपिक?** 😊

# **🔒 Git Security – अपने Git Repository को Secure कैसे करें?**  

Git का सही इस्तेमाल सिर्फ **Version Control** के लिए नहीं, बल्कि **Security** के लिए भी जरूरी है।  
अगर गलत तरीके से Git Manage किया जाए, तो **Sensitive Data Leak** हो सकता है।  
नीचे कुछ **Best Security Practices** दी गई हैं, जिन्हें आपको जरूर फॉलो करना चाहिए।  

---

## **📌 1. Sensitive Data (Passwords, API Keys) को Git में मत रखें**  
Git में गलती से Passwords, API Keys, या Secrets चले जाते हैं, जो **Security Risk** बन सकते हैं।  
👉 **Solution:** `.gitignore` फ़ाइल में Sensitive Files Add करें।  

**Example `.gitignore` में Add करें:**  
```
.env
config.json
secrets.yml
*.pem
```
🚀 **Pro Tip:** अगर गलती से कोई Secret Git में चला गया हो, तो उसे **Git History से Remove** करें:  
```bash
git filter-branch --force --index-filter 'git rm --cached --ignore-unmatch secrets.json' --prune-empty --tag-name-filter cat -- --all
```

---

## **📌 2. SSH Key का इस्तेमाल करें (Password की जगह)**  
GitHub/GitLab में हर बार Password डालने से बचने के लिए SSH Keys इस्तेमाल करें।  
👉 **SSH Key Generate करें:**  
```bash
ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
```
👉 **SSH Key GitHub में Add करें:**  
```bash
cat ~/.ssh/id_rsa.pub
```
🚀 इससे आपको हर बार Password डालने की जरूरत नहीं पड़ेगी, और **Security भी बढ़ेगी**।  

---

## **📌 3. `git-crypt` से Encrypted Data Store करें**  
अगर Git में **Sensitive Files** रखने ही पड़ें, तो **git-crypt** टूल से Encrypt करें।  
👉 **Installation (Linux/Mac):**  
```bash
brew install git-crypt
```
👉 **Encryption Enable करें:**  
```bash
git-crypt init
git-crypt unlock
```
🔐 अब सिर्फ Authorized Users ही Files को Read कर पाएंगे।  

---

## **📌 4. `git hooks` से Security Checks Enable करें**  
👉 **Pre-commit Hook में Secrets Check करें:**  
```bash
echo "gitleaks --staged" > .git/hooks/pre-commit
chmod +x .git/hooks/pre-commit
```
🚀 अब हर Commit से पहले Git Leaks Check करेगा कि कहीं कोई Secret Leak तो नहीं हो रहा।  

---

## **📌 5. `signed commits` Use करें (Authentication & Verification)**  
👉 **GPG Key से Signed Commits करें:**  
```bash
git config --global user.signingkey YOUR_GPG_KEY
git commit -S -m "This is a signed commit"
```
🔒 इससे यह Confirm होगा कि Commit **आपने ही की है** और कोई इसे Modify नहीं कर सकता।  

---

## **📌 6. Unused Branches & Old Repositories को Delete करें**  
👉 पुरानी Branches को Regularly Clean करें:  
```bash
git branch -d old-feature-branch
git push origin --delete old-feature-branch
```
🚀 इससे Unused Code & Security Risks को Reduce किया जा सकता है।  

---

## **📌 7. GitHub/GitLab पर 2FA (Two-Factor Authentication) Enable करें**  
👉 GitHub & GitLab पर **2FA Enable करें** ताकि आपके Account को Extra Security मिले।  
👉 GitHub में **Settings → Security → Enable 2FA** पर जाएं।  

---

## **📌 8. Private Repositories को Public मत करें**  
🚀 अगर कोई Repository Private है, तो गलती से Public ना करें।  
👉 Check करें:  
```bash
gh repo view --json isPrivate
```
अगर Public हो गया है, तो GitHub पर जाकर **Settings → Change to Private** करें।  

---

## **📌 9. `git fsck` से Git Repository की Integrity Check करें**  
अगर आपको लगता है कि आपकी Git Repository Corrupt हो गई है या कोई अनजान Changes हैं, तो:  
```bash
git fsck
```
🚀 यह Git Repository में Hidden Issues को Detect करेगा।  

---

## **📌 10. किसी को भी Push करने से रोकने के लिए Protected Branches Use करें**  
अगर आप Team में काम कर रहे हैं, तो `main` या `develop` पर **Direct Push Block करें**।  
👉 GitHub में **Settings → Branches → Protected Branches** Enable करें।  
👉 इसके बाद कोई भी **Pull Request के बिना Code Merge नहीं कर पाएगा**।  

---

## **🎯 Conclusion – Git को Secure रखने के लिए ये Steps Follow करें!**  
✅ **Sensitive Files** को Git में मत डालें (`.gitignore` Use करें)।  
✅ **SSH Keys** से Authentication करें, Password मत रखें।  
✅ **Encryption (`git-crypt`)** Use करें अगर आपको Secrets Store करने ही हैं।  
✅ **Signed Commits** से Identity Verify करें।  
✅ **Old Branches और Repositories Regularly Clean करें।**  
✅ **GitHub पर Two-Factor Authentication (2FA) Enable करें।**  
✅ **Protected Branches** Use करें, ताकि कोई भी Code को Direct Push ना कर सके।  

---

## **🎯 Next Step: "Git Automation" सीखना चाहेंगे या कोई और टॉपिक?** 😊

ठीक है! अब हम **Git Automation** सीखेंगे, जिससे आपका काम और तेज़ और आसान हो जाएगा।  

# **⚡ Git Automation – अपने Git Workflow को Automate करें!**  

Git में बार-बार **Manual Commands** चलाने से अच्छा है कि **Automation** का इस्तेमाल किया जाए।  
👉 इससे आपका **Time बचेगा** और **गलतियों के चांस भी कम होंगे**।  

---

## **📌 1. Git Aliases – Git Commands को Short करें**  
हर बार लंबा Command लिखने की बजाय, Git में Shortcuts बना सकते हैं।  
👉 **Example:**  
```bash
git config --global alias.co checkout
git config --global alias.st status
git config --global alias.br branch
git config --global alias.cm "commit -m"
```
अब आप ये Use कर सकते हैं:  
```bash
git co main    # Instead of git checkout main
git st         # Instead of git status
git br         # Instead of git branch
git cm "Updated Readme"  # Instead of git commit -m "Updated Readme"
```
🚀 **फायदा:** Typing Time बचेगा और Commands जल्दी चलेंगी।  

---

## **📌 2. Git Hooks – Auto Run Scripts Before/After Commit/Push**  
Git में आप **Hooks** लगाकर Commits या Pushes से पहले Custom Tasks चला सकते हैं।  

👉 **Example: Commit से पहले Code Linting (Formatting) करें:**  
```bash
echo "eslint --fix" > .git/hooks/pre-commit
chmod +x .git/hooks/pre-commit
```
अब जब भी Commit करेंगे, Code **Auto-Format** हो जाएगा! 🎉  

👉 **कुछ और Git Hooks:**  
- `pre-commit` – Commit से पहले Run होगा  
- `pre-push` – Push से पहले Run होगा  
- `post-merge` – जब Merge होगा तब Run होगा  

---

## **📌 3. Git Cron Jobs – Auto Git Pull & Push**  
अगर आपको बार-बार Git **Pull & Push** करना पड़ता है, तो इसे **Automate** कर सकते हैं।  

👉 **Example:** हर 10 मिनट में Git Repo को Auto-Pull करें:  
```bash
crontab -e
```
फाइल में यह Add करें:  
```
*/10 * * * * cd /path/to/repo && git pull origin main
```
🚀 अब हर 10 मिनट में Repo खुद अपडेट हो जाएगा! 🔥  

---

## **📌 4. Auto Sync Multiple Repositories (Git Submodules)**  
अगर आपकी Project में **Multiple Repos** हैं, तो हर Repo में जाकर `git pull` करने की जरूरत नहीं।  
👉 **Git Submodules** से सभी Repositories **Auto-Sync** कर सकते हैं।  

👉 **Submodule Add करें:**  
```bash
git submodule add https://github.com/your-org/another-repo.git
```
👉 **सभी Repos को Auto-Pull करें:**  
```bash
git submodule update --remote --recursive
```
🚀 अब सब Repos **Sync** रहेंगे! 🎯  

---

## **📌 5. GitHub Actions – Full Git Automation!**  
अगर आपको हर बार **Testing, Deployment या Notifications** चाहिए, तो **GitHub Actions** Use करें।  

👉 **Example: Auto-Deploy Code जब भी कोई Push करे**  
`.github/workflows/deploy.yml` बनाएं:  
```yaml
name: Auto Deploy
on: push
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Run Deployment Script
        run: ./deploy.sh
```
🚀 अब जब भी Code Push होगा, Auto-Deploy हो जाएगा! 🔥  

---

## **📌 6. Auto Backup Git Repository**  
अगर GitHub Down हो जाए, तो Backup रखने के लिए **Auto Mirror** करें।  

👉 **Auto Push Backup को दूसरी Remote Repo में:**  
```bash
git remote add backup https://gitlab.com/user/backup-repo.git
git push --mirror backup
```
🚀 अब जब भी आप `git push origin main` करेंगे, Code Backup भी हो जाएगा।  

---

## **📌 7. Auto Delete Merged Branches**  
अगर आप हर बार **Merged Branches** मैन्युअली Delete कर रहे हैं, तो इसे Automate करें।  

👉 **Merged Branches Auto-Delete करें:**  
```bash
git branch --merged | grep -v "main" | xargs git branch -d
```
🚀 अब **पुरानी Branches खुद हट जाएंगी** और Repo Clean रहेगा! 🎯  

---

# **🎯 Conclusion – Git Automation से Life आसान बनाएं!**  
✅ **Git Aliases** से Commands छोटे करें  
✅ **Git Hooks** से Code Formatting और Testing Auto-Run करें  
✅ **Cron Jobs** से Auto Git Pull & Push करें  
✅ **GitHub Actions** से पूरी DevOps Pipeline Automate करें  
✅ **Auto Delete Merged Branches** से Repo Clean रखें  

---

## **🎯 Next Step: "Git Troubleshooting & Debugging" सीखना चाहेंगे?** 😊
# **🐞 Git Troubleshooting & Debugging – Git Errors को Fix कैसे करें?**  

Git बहुत पावरफुल है, लेकिन कई बार इसमें Errors आ जाते हैं, जो Developers के लिए **Headache** बन सकते हैं।  
👉 इस गाइड में **सबसे Common Git Errors** और उनके **Easy Fixes** बताए गए हैं। 🚀  

---

## **📌 1. "fatal: not a git repository" Error**  
👉 **Error:**  
```bash
fatal: not a git repository (or any of the parent directories): .git
```
👉 **Cause:**  
आप Git Command को **ऐसे Folder में चला रहे हैं जो Git Repository नहीं है।**  

✅ **Fix:**  
सबसे पहले **Check करें कि आप सही Repo में हैं:**  
```bash
git status
```
अगर Repo Git में Initialized नहीं है, तो इसे **Initialize करें:**  
```bash
git init
```
🚀 अब आपका Folder एक **Git Repository** बन चुका है!  

---

## **📌 2. "error: failed to push some refs to remote" Error**  
👉 **Error:**  
```bash
error: failed to push some refs to 'https://github.com/user/repo.git'
```
👉 **Cause:**  
कोई और **Team Member** पहले ही Repo में बदलाव कर चुका है, और आपका Local Repo Outdated है।  

✅ **Fix:**  
पहले **Latest Code Pull करें** और फिर Push करें:  
```bash
git pull --rebase origin main
git push origin main
```
🚀 अब कोई Conflict नहीं होगा और Code Successfully Push हो जाएगा!  

---

## **📌 3. "fatal: refusing to merge unrelated histories" Error**  
👉 **Error:**  
```bash
fatal: refusing to merge unrelated histories
```
👉 **Cause:**  
जब दो अलग-अलग Git Histories को Merge करने की कोशिश करते हैं।  

✅ **Fix:**  
Force Merge के लिए यह Command चलाएं:  
```bash
git pull origin main --allow-unrelated-histories
```
🚀 अब Merging Possible हो जाएगी!  

---

## **📌 4. "Your branch is ahead of 'origin/main' by X commits" Warning**  
👉 **Error:**  
```bash
Your branch is ahead of 'origin/main' by 3 commits.
```
👉 **Cause:**  
आपके Local Repo में कुछ **Commits हैं जो Remote Repo में नहीं हैं।**  

✅ **Fix:**  
अगर आप Confident हैं कि आपकी Changes सही हैं, तो Force Push करें:  
```bash
git push origin main --force
```
⚠️ **Warning:** यह दूसरे Devs की Changes को **Overwrite** कर सकता है। इसलिए, पहले `git pull` करके चेक कर लें।  

---

## **📌 5. "Merge conflict" Error**  
👉 **Error:**  
```bash
CONFLICT (content): Merge conflict in file.txt
```
👉 **Cause:**  
दो लोगों ने एक ही File की **अलग-अलग Lines को Modify किया है।**  

✅ **Fix:**  
1. **Conflict वाली File खोलें** (Git Conflict Marks देखें)  
   ```diff
   <<<<<<< HEAD
   My changes
   =======
   Their changes
   >>>>>>> origin/main
   ```
2. **Manually सही Version चुनें** और File Save करें।  
3. **Conflict Resolve करके Commit करें:**  
   ```bash
   git add file.txt
   git commit -m "Resolved merge conflict"
   git push origin main
   ```

🚀 अब आपका Merge Conflict Resolve हो चुका है! 🎉  

---

## **📌 6. "Permission denied (publickey)" Error**  
👉 **Error:**  
```bash
Permission denied (publickey).
fatal: Could not read from remote repository.
```
👉 **Cause:**  
GitHub/GitLab को आपकी SSH Key नहीं मिली।  

✅ **Fix:**  
1. **Check करें कि SSH Key बनी हुई है:**  
   ```bash
   ls -al ~/.ssh
   ```
2. **अगर SSH Key नहीं है, तो नई Key बनाएं:**  
   ```bash
   ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
   ```
3. **SSH Key को GitHub में Add करें:**  
   ```bash
   cat ~/.ssh/id_rsa.pub
   ```
   👉 इस Key को **GitHub → Settings → SSH Keys** में Paste करें।  
4. **Test करें कि SSH सही से काम कर रहा है:**  
   ```bash
   ssh -T git@github.com
   ```

🚀 अब आप बिना Password डाले GitHub पर Push कर सकते हैं! 🔥  

---

## **📌 7. "Detached HEAD" State Warning**  
👉 **Error:**  
```bash
You are in 'detached HEAD' state.
```
👉 **Cause:**  
आप किसी पुराने Commit पर Checkout कर चुके हैं और **Branch से Disconnected हो गए हैं।**  

✅ **Fix:**  
अगर आपको **वापस Main Branch पर आना है:**  
```bash
git checkout main
```
अगर आपको **Current State को एक नई Branch में Save करना है:**  
```bash
git checkout -b my-new-branch
```

🚀 अब आपकी Changes सुरक्षित रहेंगी! 😊  

---

## **📌 8. "fatal: remote origin already exists" Error**  
👉 **Error:**  
```bash
fatal: remote origin already exists.
```
👉 **Cause:**  
आप `git remote add origin` दोबारा चला रहे हैं जबकि **Remote पहले से मौजूद है।**  

✅ **Fix:**  
पहले **Remote Origin Remove करें:**  
```bash
git remote remove origin
```
फिर **Correct Remote URL जोड़ें:**  
```bash
git remote add origin https://github.com/user/repo.git
```
🚀 अब Remote सही से जुड़ जाएगा! 🎯  

---

## **📌 9. "fatal: cannot delete branch 'main'" Error**  
👉 **Error:**  
```bash
error: Cannot delete branch 'main' checked out at '/path/to/repo'
```
👉 **Cause:**  
आप **खुद उस Branch में Checkout हैं**, जिसे Delete करना चाह रहे हैं।  

✅ **Fix:**  
1. **पहले किसी और Branch में Switch करें:**  
   ```bash
   git checkout develop
   ```
2. **अब Main Branch Delete करें:**  
   ```bash
   git branch -D main
   ```

🚀 अब Branch Delete हो चुकी है! 🎯  

---

# **🎯 Conclusion – Git Errors को Debug करने के लिए क्या करें?**  
✅ **Git Repository सही से Initialize करें (`git init`)**  
✅ **Push से पहले Always `git pull` करें**  
✅ **Merge Conflicts को Manually Resolve करें**  
✅ **SSH Key Add करें ताकि Permission Errors ना आएं**  
✅ **Detached HEAD से बचने के लिए Always किसी Branch में काम करें**  

---

## **🎯 Next Step: "Git Collaboration & Team Work" सीखना चाहेंगे?** 😊

## 🚀 **Git Collaboration & Team Work – टीम के साथ Git का सही Use कैसे करें?**  

Git को अकेले Use करना आसान होता है, लेकिन जब आप Team में काम करते हैं, तो Conflicts, Merge Issues और Code Overwrites जैसी Problems आती हैं।  
👉 **इस गाइड में Git को Team के साथ सही तरीके से Use करने के Best Practices बताए गए हैं।**  

---

## **📌 1. GitHub पर Team के साथ Work करने के तरीके**  
Team के साथ GitHub पर काम करने के 3 Common Approaches होते हैं:  

1️⃣ **Single Branch Model (Direct Push to Main)**  
👉 Directly `main` Branch पर Code Push किया जाता है।  
⚠️ **Issue:** अगर एक Developer ने कोई Bug डाल दी, तो पूरी Codebase Impact हो सकती है।  

2️⃣ **Feature Branch Model (Recommended) ✅**  
👉 हर Feature के लिए एक अलग Branch बनाई जाती है और Merge होने से पहले Review किया जाता है।  
✅ **Safe & Organized Approach!**  

3️⃣ **Forking Workflow (For Open Source)**  
👉 GitHub पर Public Repo को Fork करके उसमें Changes किए जाते हैं और फिर **Pull Request (PR)** भेजी जाती है।  

👉 **Team Projects के लिए हमेशा "Feature Branch Model" Follow करें!**  

---

## **📌 2. Feature Branch Workflow (Recommended)**
### **Step 1️⃣: New Feature के लिए Branch Create करें**  
```bash
git checkout -b feature-login
```
🚀 अब आप **feature-login** नाम की नई Branch में काम कर सकते हैं।  

### **Step 2️⃣: Code Add करें और Commit करें**  
```bash
git add .
git commit -m "Added login page UI"
```

### **Step 3️⃣: Remote Repo में Push करें**  
```bash
git push origin feature-login
```

### **Step 4️⃣: GitHub पर Pull Request (PR) बनाएं**  
1️⃣ **GitHub खोलें और अपनी Repo पर जाएं।**  
2️⃣ **Compare & Pull Request** पर Click करें।  
3️⃣ **Review के लिए PR Submit करें।**  

🚀 अब Team के बाकी Members PR को Review और Approve कर सकते हैं।  

### **Step 5️⃣: PR Approve होने के बाद Branch Merge करें**  
```bash
git checkout main
git pull origin main
git merge feature-login
git push origin main
```
👉 अब आपका Code **main** Branch में Merge हो गया है! 🎯  

---

## **📌 3. Merge & Rebase – सही तरीका क्या है?**  
Git में **2 तरीके होते हैं** Code को Merge करने के:  

1️⃣ **Merge (Easy & Safe) ✅**  
👉 जब PR Approve हो जाए, तो `git merge` से उसे Main Branch में जोड़ें।  
```bash
git checkout main
git merge feature-branch
git push origin main
```

2️⃣ **Rebase (Clean History) 🚀**  
👉 अगर आप चाहते हैं कि Git History ज़्यादा Clear हो, तो Rebase Use करें।  
```bash
git checkout feature-branch
git rebase main
```
⚠️ **Rebase केवल तब करें जब आप अकेले उस Branch पर Work कर रहे हों।**  

---

## **📌 4. Code Review के Best Practices**
✅ **1. हर Feature के लिए एक अलग Branch बनाएँ।**  
✅ **2. कोई भी Code Directly `main` में Push ना करें।**  
✅ **3. PR Submit करने से पहले `git pull` ज़रूर करें।**  
✅ **4. हमेशा एक-दूसरे के Code को Review करें।**  
✅ **5. Merge करने से पहले Testing करें।**  

---

## **📌 5. Git Blame & Git Log – Code History Track करें**
कभी-कभी जानना ज़रूरी होता है कि **किसने कौन सा Code लिखा** और **कब Modify किया।**  

👉 किसी Line को **किसने Change किया** यह देखने के लिए:  
```bash
git blame filename.py
```

👉 **Recent Commits & Logs देखने के लिए:**  
```bash
git log --oneline --graph --decorate --all
```

---

## **📌 6. Git Stash – जब Code Save करना हो लेकिन Commit ना करना हो**
अगर आप Code पर काम कर रहे हैं लेकिन **Commit नहीं करना चाहते**, तो उसे Stash कर सकते हैं।  

```bash
git stash
```
🚀 आपका Code Temporarily Save हो गया!  

बाद में वापस लाने के लिए:  
```bash
git stash pop
```

---

## **📌 7. Git Reset & Revert – गलत Commit को Fix करें**
अगर आपने **गलत Commit कर दी**, तो दो तरीके से उसे Fix कर सकते हैं:  

1️⃣ **Commit Undo (Soft Reset)**  
```bash
git reset --soft HEAD~1
```
👉 Last Commit Remove होगी, लेकिन Code रहेगा।  

2️⃣ **Complete Reset (Hard Reset) – सावधानी से करें!**  
```bash
git reset --hard HEAD~1
```
👉 Last Commit और Code दोनों Delete हो जाएंगे।  

3️⃣ **Mistake Fix करने के लिए Revert (Safe Method)**
```bash
git revert HEAD
```
👉 यह एक नया Commit बनाएगा, जो आपकी Mistake को Undo कर देगा।  

---

## **📌 8. Git Team Workflow के लिए Best Practices** 🚀
✅ **Always Feature Branch Use करें।**  
✅ **PR Merge करने से पहले Code Review करें।**  
✅ **Regularly `git pull` करके Latest Code लें।**  
✅ **Avoid Force Push (`git push --force`) जब तक बहुत ज़रूरी ना हो।**  
✅ **Rebase तभी करें जब आप अकेले Work कर रहे हों।**  

---

# 🎯 **Next Step: क्या आप Git के साथ CI/CD (Continuous Integration) सीखना चाहेंगे?** 🚀

### 🚀 **Git के साथ CI/CD (Continuous Integration & Deployment) सीखें!**  

CI/CD (Continuous Integration & Continuous Deployment) Software Development का सबसे Modern तरीका है, जिससे Code को Fast और Error-Free तरीके से Deploy किया जाता है।  

आज हम **Git + CI/CD** को Step-by-Step आसान भाषा में सीखेंगे! 💡  

---

## **📌 1. CI/CD क्या होता है?**  
👉 CI/CD का मतलब है **Code को Automate तरीके से Test, Build और Deploy करना।**  

✅ **CI (Continuous Integration)**  
जब भी कोई Developer GitHub पर Code Push करता है, तो Automatically:  
✔️ Code Compile/Test किया जाता है  
✔️ Bugs Find करके Fix किए जाते हैं  
✔️ Code को Merge करने के लिए Review किया जाता है  

✅ **CD (Continuous Deployment/Delivery)**  
✔️ Code को Staging या Production Server पर Automatically Deploy किया जाता है  
✔️ हर Small Change बिना Manual Process के Live हो जाता है  

⚡ **इसका फायदा?**  
✔️ Code जल्दी Release होता है  
✔️ Bugs जल्दी पकड़ में आते हैं  
✔️ Development Process Fast और Smooth हो जाती है  

---

## **📌 2. CI/CD के लिए GitHub Actions Setup करें**  
👉 **GitHub Actions** GitHub का In-Built CI/CD Tool है, जिससे आप Code Automatically Test और Deploy कर सकते हैं।  

### **🔹 Step 1️⃣: GitHub Repository में CI/CD Workflow बनाएं**
👉 अपनी Repository में एक नया Folder बनाएँ:  
📂 `.github/workflows/`  

फिर इसमें एक YAML File बनाएं:  
📄 `.github/workflows/ci-cd.yml`  

---

### **🔹 Step 2️⃣: Basic CI/CD Pipeline लिखें (Example)**  
👉 यह Code **हर बार जब कोई Code Push होगा तो Test करेगा**  

```yaml
name: CI/CD Pipeline

on: [push, pull_request]

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout Repository
        uses: actions/checkout@v3

      - name: Set up Python
        uses: actions/setup-python@v4
        with:
          python-version: '3.11'

      - name: Install Dependencies
        run: |
          pip install -r requirements.txt

      - name: Run Tests
        run: |
          pytest
```

👉 **इससे होगा क्या?**  
✔️ जब भी कोई Code **Push** करेगा, यह **Automatically Test** Run करेगा!  

---

## **📌 3. Continuous Deployment (CD) – Auto Deploy on Server**  
👉 अब हम GitHub से Server पर Code Automatically Deploy करेंगे!  

### **🔹 Step 1️⃣: SSH Key Generate करें**  
अपने Server में Login करें और SSH Key Generate करें:  
```bash
ssh-keygen -t rsa -b 4096 -C "your-email@example.com"
```
👉 इसकी **Public Key** को GitHub में **Deploy Keys** में Add करें।  

### **🔹 Step 2️⃣: CI/CD में Deploy Script जोड़ें**  
📄 `.github/workflows/deploy.yml` में यह Code डालें:  

```yaml
name: Deploy on Server

on:
  push:
    branches:
      - main

jobs:
  deploy:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout Repository
        uses: actions/checkout@v3

      - name: Deploy on Server
        run: |
          ssh user@your-server-ip "cd /var/www/html && git pull origin main && systemctl restart apache2"
```

👉 **अब जब भी कोई Code `main` में Merge होगा, तो Server पर Automatically Deploy हो जाएगा!** 🚀  

---

## **📌 4. CI/CD के Best Practices**
✅ **हर Project में CI/CD Setup करें।**  
✅ **Code Push करने से पहले Linting & Testing करें।**  
✅ **Production में Auto Deployment से पहले Approval लें।**  
✅ **Deployment Logs Save करें ताकि Errors Debug किए जा सकें।**  
✅ **Secrets को Git में Store करने के बजाय GitHub Secrets में रखें।**  

---

# 🎯 **Next Step: क्या आप Docker और Kubernetes के साथ CI/CD सीखना चाहेंगे?** 🚀