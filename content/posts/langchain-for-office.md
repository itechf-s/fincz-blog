---
title: "LangChain ke liye Guide"
categories: [ AI, Development ]
tags: [LangChain, LLM, RAG, Guide]
description: "LangChain ek framework hai jo LLMs ko tools, data, aur APIs se connect karke powerful AI applications banata hai. Hindi-medium developers ke liye simple guide."
date: 2026-08-17T08:00:00+05:30
lastmod: 2026-08-17T08:00:00+05:30
images: ["images/2026/08/langchain-for-office.gif"]
author: ahmad
---

## Introduction
**LangChain** ek open-source framework hai jo developers ko Large Language Models (LLMs) se powerful applications banane me help karta hai.
Simple shabdo me, agar ek LLM (jaise GPT-4) ek powerful engine hai, to LangChain us engine ko car ke baaki hisso—jaise steering wheel (tools), GPS (data), aur fuel system (APIs)—se jodne wala chassis hai.

LangChain ecosystem mein aur bhi tools hain jaise **LangSmith** aur **LangGraph**, jo LLM applications ko develop, debug aur deploy karne mein madad karte hain.

## LangChain kya hai?

LangChain aapko LLMs ko aapke private data, external tools, aur APIs se connect karne ke liye building blocks deta hai. Isse aap simple chatbots se aage badhkar complex applications bana sakte hain.

### LangChain vs. ChatGPT

| ChatGPT           | LangChain               |
| ----------------- | ----------------------- |
| **Ek Product Hai:** Ye ek ready-to-use application hai. | **Ek Framework Hai:** Ye developers ke liye applications banane ka ek tool hai. |
| **General Purpose:** Ye aam बातचीत ke liye banaya gaya hai. | **Custom Purpose:** Isse aap specific kaam ke liye custom application banate hain. |
| **Limited Knowledge:** Iski knowledge ek cutoff date tak limited hai. | **Live Data Access:** Ye aapke private documents, databases, aur APIs se connect ho sakta hai. |

## Why Use LangChain?

Aapko LangChain tab use karna chahiye jab aapko ek simple chatbot se zyada kuch chahiye.

**Use Cases:**
1.  **Apne Private Documents par Question-Answering:** Ek aisa chatbot banana jo aapke company ke internal PDFs ya documents se jawab de.
2.  **APIs se Connect karna:** Ek aisa system banana jo user ke sawal par aapke internal database se claim status check kar sake.
3.  **Complex Workflows Banana:** Ek aisa agent banana jo pehle customer ki details nikalta hai, phir unke liye ticket create karta hai, aur aakhir me unhe email bhejta hai.

## Core Concepts of LangChain

LangChain ke 4 main concepts hain:

### 1. Components
Ye LangChain ke building blocks hain, jaise `LLM`, `Prompt Template`, `Output Parser`.

### 2. Chains
Ye components ko ek fixed sequence me jodte hain. **Chain = Step A → Step B → Step C**.
**Example:** Ek chain jo pehle user se input leta hai, use prompt me format karta hai, aur phir LLM ko bhejta hai.

### 3. Tools
Ye external capabilities hain jo ek LLM use kar sakta hai, jaise Google Search, Database query, ya API call.
**Example:** Ek `get_claim_status` tool jo claim ID lekar database se status batata hai.

### 4. Agents
Ye sabse powerful concept hai. Ek Agent LLM ka use karke khud decide karta hai ki kaun sa tool kab use karna hai.
**Example:** Agar user puchta hai, "Mumbai ka weather kya hai aur meri claim ka status kya hai?", to agent pehle weather API tool use karega aur phir claims API tool.

| Concept        | Aasan Matlab           | Insurance Example          |
| -------------- | ---------------------- | -------------------------- |
| **Components** | Building blocks        | LLM, Prompt Template, Retriever |
| **Chain**      | Fixed sequence (Railgaadi) | Retrieve → Prompt → LLM    |
| **Tools**      | External powers (Shaktiyan) | `get_claim_status()` API   |
| **Agent**      | Khud decide karta hai (Dimag) | Kaun sa tool kab use karna hai |

## Building a RAG Application with LangChain

LangChain ka sabse common use case **RAG (Retrieval-Augmented Generation)** applications banana hai.

**RAG ka matlab:** LLM ko jawab dene se pehle aapke private documents se relevant information "retrieve" karke dena. Ye ek "open-book exam" jaisa hai.

### RAG Pipeline ke Steps:

1.  **Document Loading:** `DocumentLoaders` ka use karke apne data (PDFs, text files, web pages) ko load karna.
2.  **Splitting:** `TextSplitters` ka use karke bade documents ko chote, manageable chunks me todna.
3.  **Storage (Embeddings & Vector Stores):**
    *   Har chunk ko **Embedding Model** ka use karke numerical vectors me convert karna. Ye text ke "meaning" ko numbers me badal deta hai.
    *   In vectors ko ek special database, **Vector Store** (jaise Chroma, FAISS, Pinecone), me store karna.
4.  **Retrieval:** Jab user sawal puchta hai, to unke sawal ko bhi vector me convert karke Vector Store me "similarity search" ki jaati hai. Isse sawal se milte-julte sabse relevant chunks mil jaate hain.
5.  **Generation:** In relevant chunks ko (context ke roop me) user ke sawal ke saath LLM ko bheja jaata hai, aur LLM us context ke aadhar par jawab deta hai.

```text
Your Documents (PDFs)
        ↓
1. Load & Split into Chunks
        ↓
2. Convert Chunks to Vectors (Embeddings)
        ↓
3. Store in Vector Database
--- (Indexing Done) ---
User Question
        ↓
4. Retrieve Relevant Chunks
        ↓
5. Pass Chunks + Question to LLM
        ↓
Final Answer
```

### Memory in LangChain

**Memory** ka use conversation ki history ko yaad rakhne ke liye hota hai, taaki LLM pichli baaton ka context samajh sake.

## Key Takeaways

- **LangChain** ek framework hai jo LLMs ko external tools and data ke saath connect karte hain.
- **RAG (Retrieval-Augmented Generation)** iska sabse powerful use case hai, jisse aap apne private data par Q&A systems bana sakte hain.
- **Agents** complex tasks ko automate karte hain by deciding which tools to use.
- **Vector Stores** semantic search ke liye zaroori hain.
- **Memory** se aap stateful, multi-turn conversations bana sakte hain.
