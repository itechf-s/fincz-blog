---
title: "5.2 String Functions"
categories: [ Java, Course]
tags: [Basic]
description: "Java String Functions Chart"
date: 2025-06-01T07:00:49+05:30
author: ahmad
type: docs
---

# 📘 **Module 5: Arrays & Strings in Java**

## 📘 **Java String Functions Chart**

| 🔢 Sr. | 🛠 Method Name             | 🔎 उपयोग (Purpose)                                    | ✅ Example                                  |
| ------ | -------------------------- | ----------------------------------------------------- | ------------------------------------------ |
| 1      | `length()`                 | String की लंबाई बताता है                              | `"abc".length()` → `3`                     |
| 2      | `charAt(int index)`        | दिये गए index पर character लौटाता है                  | `"abc".charAt(1)` → `'b'`                  |
| 3      | `toUpperCase()`            | सभी letters को capital में बदलता है                   | `"java".toUpperCase()` → `"JAVA"`          |
| 4      | `toLowerCase()`            | सभी letters को small में बदलता है                     | `"JAVA".toLowerCase()` → `"java"`          |
| 5      | `equals(String s)`         | दो Strings की values compare करता है (case-sensitive) | `"abc".equals("abc")` → `true`             |
| 6      | `equalsIgnoreCase(String)` | दो Strings को बिना case compare करता है               | `"abc".equalsIgnoreCase("ABC")` → `true`   |
| 7      | `contains(String s)`       | Checks अगर substring मौजूद है                         | `"hello".contains("ll")` → `true`          |
| 8      | `startsWith(String s)`     | Checks अगर string किसी value से शुरू होता है          | `"hello".startsWith("he")` → `true`        |
| 9      | `endsWith(String s)`       | Checks अगर string किसी value पर खत्म होता है          | `"hello".endsWith("lo")` → `true`          |
| 10     | `indexOf(char/String)`     | First occurrence का index देता है                     | `"banana".indexOf('n')` → `2`              |
| 11     | `lastIndexOf(char/String)` | Last occurrence का index देता है                      | `"banana".lastIndexOf('n')` → `4`          |
| 12     | `substring(start, end)`    | substring return करता है                              | `"hello".substring(1, 4)` → `"ell"`        |
| 13     | `replace(a, b)`            | Characters को बदलता है                                | `"java".replace('a', 'o')` → `"jovo"`      |
| 14     | `trim()`                   | Leading/trailing spaces हटाता है                      | `" java ".trim()` → `"java"`               |
| 15     | `isEmpty()`                | Checks अगर string empty है या नहीं                    | `"".isEmpty()` → `true`                    |
| 16     | `split(String regex)`      | String को array में तोड़ता है                         | `"a,b,c".split(",")` → `["a", "b", "c"]`   |
| 17     | `compareTo(String s)`      | Lexicographic comparison करता है                      | `"abc".compareTo("abd")` → `-1`            |
| 18     | `concat(String s)`         | दो Strings जोड़ता है                                  | `"Java".concat("Script")` → `"JavaScript"` |

---

## 🔹 टॉप 5 Interview & Coding Practice के लिए Useful Methods:

1. `charAt()`
2. `substring()`
3. `equals()` / `equalsIgnoreCase()`
4. `contains()`
5. `replace()` / `split()`
