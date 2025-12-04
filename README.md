# Safe Load-Testing Lab (k6 + Local Flask Target)

**⚠️ This project is for *learning* load testing only.  
It does NOT contain or support DDoS scripts, attacks, or harmful traffic tools.  
All testing must be performed ONLY on your own systems or systems with explicit written permission.**

This repository provides a **fully controlled, local-only environment** to learn the fundamentals of load testing using:

- A lightweight Flask web server (the “target”)
- k6 load-testing scripts (the “load generator”)
- Docker Compose for easy setup

This lets you understand concepts like concurrency, throughput, ramp-up, saturation, and performance metrics **without violating any laws or harming any real systems**.

---

## 📘 **Why this project exists**

Beginners often want to learn how high traffic affects servers.  
Standard internet DDoS testing is **illegal**, but **safe load testing** in a **local sandbox** teaches the same skills:

- How servers behave under increasing load  
- How to measure latency, throughput, error rates  
- How to observe bottlenecks and scaling issues  
- How to write and run load-testing scripts professionally  

This repo gives you a safe playground.

---

# ⚖️ **Legal & Ethical Notice (Must Read)**

- You may **ONLY** run these load tests against:
  - Your own machine
  - Your own local Docker environment
  - Servers you explicitly own or operate
  - Systems where you have **written permission**

- You may **NOT** run these tests against:
  - Any website, API, organization, or server that is not yours  
  - School networks, office networks, government networks, etc.

**Unauthorized load testing is illegal and punishable under cybercrime laws.**

This repository teaches safe engineering — not harmful activity.

---


