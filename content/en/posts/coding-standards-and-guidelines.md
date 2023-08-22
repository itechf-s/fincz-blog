---
title: "Coding Standards and Guidelines"
categories: [Coding]
tags: [Coding]
description: "Coding Standards and Guidelines"
date: 2023-08-22T08:00:00+05:30
images: ["images/2023/08/coding-standards-for-programming-languages.png"]
author: ahmad
---

## General coding guideline

### variable name
Should not start with an underscore (_) and ($)
Use camelCase
Should have the meaning full name
Common names for temporary variables are I,j,k,m,n for integers and c,d,e for chars

### constant naming
Should not start with an underscore and $
Use UPPER_CASE
Separate by _

### Avoid hard coding
Don't Hard code any data/value within your code
If it's a text or numeric value that needs to be used in your application then convert that into constant

### Avoid code duplication
sometime duplication is purposeful. but avoid when possible.

### functions 
It should start with lowercase
It should be a verb like main(), print()
If name contains multiple word name should start with a lowercase and then camelCase

### Code formatting
Make proper formatting Use tab for spacing use proper naming conventions

### Performance 
Code performance keeps in mind while developing the code
Use data type that best suits such as StringBuilder etc
Use lazy loading
Caching and session/application data
Use builtin functions
Off debug logging when possible

### Documentation
Comments exist and describe the intent of the code
All function should be commented 