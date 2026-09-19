---
title: "AI Agents aur Tools Guide: LangChain, Memory, AWS Bedrock aur Core Libraries"
categories: [ AI, Development ]
tags: [AI Agents, LangChain, Tools, AWS Bedrock, HuggingFace, Guide]
description: "AI Agents, LangChain Tools, Conversation Memory, AWS Bedrock aur popular AI softwares (Sentence-Transformers, Hugging Face, Unstructured, Haystack) ki complete guide Hindi/Urdu me."
date: 2026-08-19T16:00:00+05:30
lastmod: 2026-08-19T16:00:00+05:30
images: ["images/2026/08/ai-agents-and-tools-guide.gif"]
author: ahmad
---

## Introduction

AI ki duniya me ab hum sirf simple prompt dekar jawab lene (chatbots) se aage nikal chuke hain. Aaj ka sabse bada trend hai **Autonomous AI Agents** — aise smart systems jo user ke goal ko samajh kar khud plan banate hain, jaruri tools (Google Search, SQL DB, APIs) ko chalate hain aur complex tasks ko bina bar-bar human input ke poora karte hain.

Is guide me hum seekhenge:
1. **AI Agents kya hain aur kaise kaam karte hain?**
2. **LLM, Tools aur Agents ka aapsi rishta (Relation)**
3. **LangChain me Agents aur Tools kaise implement hote hain**
4. **Conversation Memory ke types**
5. **AWS Bedrock aur Foundation Models**
6. **Top AI Softwares & Libraries (LangChain, Hugging Face, Sentence-Transformers, Unstructured, Haystack)**

---

## 1. AI Agents kya hain? (Agent Fundamentals)

Ek aam LLM (jaise GPT-4) sirf text generate kar sakta hai, wo khud se bahar ki duniya me koi action nahi le sakta. Lekin jab hum LLM ko **Tools** aur **Decision-making Loop** de dete hain, tab wo ban jata hai ek **AI Agent**.

### ReAct Framework (Reason + Act)
Agents aam taur par **ReAct Pattern** par kaam karte hain:

```text
User Goal: "TCS ka stock price check karo aur summary team ko Slack par bhejo"
   │
   ▼
[ Thought ] ──► "Mujhe pehle stock API se live price nikalna chahiye."
   │
   ▼
[ Action  ] ──► Call Tool: get_stock_price("TCS")
   │
   ▼
[ Observe ] ──► Tool Output: "₹3,950 (+1.2%)"
   │
   ▼
[ Thought ] ──► "Ab mere paas data hai, ab mujhe Slack message bhejna hai."
   │
   ▼
[ Action  ] ──► Call Tool: send_slack_message(channel="#finance", msg="...")
   │
   ▼
[ Final Answer ] ──► "TCS ka price check karke Slack par post kar diya gaya hai."
```

---

## 2. Relation: LLM vs Tools vs Agents

In teeno ke beech ka farq samajhne ke liye ye analogy dekhein:

| Component | Analogy | Asli Role |
| :--- | :--- | :--- |
| **LLM** | **Dimag (Brain)** | Language samajhna, plan banana aur text generate karna. |
| **Tools** | **Hath-Pair (Hands & Legs)** | Bahar ki duniya se data lana ya actions execute karna (API, DB, Web search). |
| **Agent** | **Driver / Coordinator** | LLM ki reasoning se decide karna ki kab kaun sa Tool use karna hai. |

```text
┌────────────────────────────────────────────────────────┐
│                        AI AGENT                        │
│                                                        │
│   ┌────────────────┐            ┌──────────────────┐   │
│   │   LLM (Brain)  │ ◄────────► │ Memory (History) │   │
│   └───────┬────────┘            └──────────────────┘   │
│           │ Decides tool & params                      │
│           ▼                                            │
│   ┌────────────────────────────────────────────────┐   │
│   │               TOOLS (Shaktiyan)                │   │
│   │  [Google Search]  [SQL DB]  [API Call]  [Code] │   │
│   └────────────────────────────────────────────────┘   │
└────────────────────────────────────────────────────────┘
```

---

## 3. LangChain me Tools aur Agents

LangChain agents aur tools ko aapas me connect karne ke liye ready-made classes provide karta hai.

### A. Tools in LangChain
Tools wo functions hote hain jinhe LLM call kar sakta hai.

**1. Custom Tool Kaise Banayein (@tool decorator):**
```python
from langchain.tools import tool

@tool
def calculate_insurance_premium(age: int, coverage_amount: float) -> float:
    """Calculates yearly insurance premium based on age and coverage."""
    base_rate = 0.02
    if age > 50:
        base_rate = 0.05
    return coverage_amount * base_rate
```

**2. Built-in Tools provided by LangChain:**
- **Search Tools:** DuckDuckGoSearchRun, TavilySearch, GoogleSearchAPIWrapper
- **Database Tools:** SQLDatabaseToolkit (Natural language se SQL query run karna)
- **API & Web Tools:** RequestsToolkit (REST APIs call karna), WikipediaQueryRun
- **Code Execution:** PythonREPLTool (Python code likhna aur execute karna)
- **File System:** FileManagementToolkit (Files read/write karna)

---

## 4. Conversation Memory (Chat History)

LLMs by default stateless hote hain. LangChain alag-alag memory strategies deta hai:

| Memory Strategy | Aasan Matlab | Best Use Case |
| :--- | :--- | :--- |
| **Buffer Memory** | Har message as-it-is save karta hai. | Choti chats ke liye. |
| **Window Memory** | Sirf pichle **K** messages yaad rakhta hai (e.g., last 5). | Token bachane ke liye. |
| **Summary Memory** | Purani baaton ki LLM se live summary banwata hai. | Lambi discussions ke liye. |
| **Entity Memory** | Specific facts (e.g., User Name = Ahmad, Car = Swift) alag se yaad rakhta hai. | Personalized assistant ke liye. |

---

## 5. AWS Bedrock Overview

**AWS Bedrock** Amazon ki ek fully managed service hai jo top AI foundation models ko API ke zariye provide karti hai bina kisi infrastructure ko manage kiye.

### AWS Bedrock kyu use karein?
1. **Multiple Foundation Models:** Anthropic Claude (Claude 3.5 Sonnet), Meta Llama 3, Amazon Titan, Mistral AI, Cohere sab ek hi jagah.
2. **Enterprise Security:** Aapka data AWS VPC ke andar private rehta hai aur public internet par expose nahi hota (HIPAA / GDPR compliant).
3. **Bedrock Agents & Knowledge Bases:** Bedrock khud ke agents aur RAG pipelines (Knowledge Bases) support karta hai.

**LangChain + AWS Bedrock Example:**
```python
from langchain_aws import ChatBedrock

llm = ChatBedrock(
    model_id="anthropic.claude-3-5-sonnet-20240620-v1:0",
    model_kwargs={"temperature": 0.2},
    region_name="us-east-1"
)

response = llm.invoke("Explain AI Agents in one sentence.")
print(response.content)
```

---

## 6. Zaroori AI Softwares & Libraries (Comparison)

AI application develop karte waqt in 5 libraries ka sabse zyada use hota hai:

| Software / Library | Kya Hai? | Asli Kaam (Main Use Case) |
| :--- | :--- | :--- |
| **LangChain** | Orchestration Framework | LLMs, Prompts, Tools, aur Chains ko aapas me jodna. |
| **Sentence-Transformers** | Python Library (`sbert`) | Local machine par text ko fast aur accurate **Embeddings (vectors)** me convert karna. |
| **Hugging Face** | AI Hub & Ecosystem | Thousands of open-source models (Llama, Mistral), Datasets aur Transformers library ka ghar. |
| **Unstructured** | Data Extraction Toolkit | Gande aur complex files (PDFs, Word docs, Scanned images, PPTs) ko saaf text chunks me extract karna. |
| **Haystack (by deepset)** | End-to-End RAG Framework | LangChain jaisa alternative framework jo specifically **Search, Q&A aur RAG** pipelines ke liye optimize hai. |

### Quick Workflow: Ye sab aapas me kaise milte hain?
```text
[ Raw Complex PDFs ] ──► (1. Unstructured) ──► Clean Text Chunks
                                                    │
                                                    ▼
[ Text Chunks ] ───────► (2. Sentence-Transformers / Hugging Face) ──► Embeddings
                                                                          │
                                                                          ▼
[ Vector DB ] ─────────► (3. LangChain / Haystack Pipeline) ────────► RAG Output
                                                                          │
                                                                          ▼
[ AWS Bedrock / Claude ] ◄── (4. Intelligent Reasoning & Actions) ◄───────┘
```

---

## 7. Quick Revision Summary

- **Agent = LLM + Tools + Planning Loop (ReAct).**
- **Tools** LLM ko calculation, web search aur database access ki shakti dete hain.
- **Memory** chat history maintain karti hai (Buffer, Window, Summary).
- **AWS Bedrock** enterprise-grade cloud service hai jaha Claude aur Llama 3 secure tarike se milte hain.
- **Unstructured** document parse karta hai, **Sentence-Transformers** embeddings banata hai, aur **LangChain/Haystack** poore system ko jodte hain.
