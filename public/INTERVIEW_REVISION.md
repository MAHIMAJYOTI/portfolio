# Interview revision — 1 day before

Every bullet on the **general resume** maps to a short answer you can learn in ~30 min per project.

---

## GameNexus (15 min)

**Deployed on Vercel + Railway + PostgreSQL**  
→ Frontend on Vercel, backend on Railway, database is Postgres (via Supabase). Browser hits Next.js, which calls FastAPI for data.

**Supabase login → FastAPI validates JWT**  
→ User signs in on frontend with Supabase. Frontend sends JWT in API headers. FastAPI checks token is valid, then loads or creates user row in Postgres.

**Backlog, follows, feed, WebSocket chat**  
→ Backlog = which games you play/want/completed + rating. Follow = social graph. Feed = friends' activity. Chat = one WebSocket room per game; messages saved so history loads on refresh.

**FreeToGame API**  
→ Third-party REST API for game catalog. Backend or frontend fetches search/browse results; we don't store the whole catalog ourselves.

**If stuck:** open [game-nexus-full.vercel.app](https://game-nexus-full.vercel.app/) and walk through: sign in → search → backlog → chat.

---

## ROADGAURD-X (20 min)

**Pipeline in one sentence**  
→ Video frame → OpenCV finds lanes and moving objects → 9 numbers describe the scene → Random Forest picks LOW, MEDIUM, or HIGH risk.

**9 features (pick 3 to name)**  
→ Lane offset (how far from lane center), object count, motion variance, edge density, scene complexity — all from classical CV, not a neural net.

**99.6% on synthetic data**  
→ Trained on 5,000 generated samples with known labels. Honest caveat: synthetic, not real-world driving data — but pipeline and evaluation are real.

**Explainability**  
→ Besides LOW/MED/HIGH, output says *why* (e.g. lane departure) and which features pushed the score — from rules + feature importance.

**FastAPI + Next.js + offline**  
→ Upload video to API, poll until done, dashboard shows video + charts. No ChatGPT/cloud ML — runs on your machine.

**If stuck:** run `python roadguard_x/main.py --source sample` or open the live demo and upload demo video.

---

## UIDAI District Stress Analytics (15 min)

**ETL on 4.8M rows**  
→ Raw CSV → handle missing values → aggregate by district/time → build features → train Random Forest → save model file. `run_pipeline.py` does it all.

**Service Stress Ratio**  
→ Custom formula measuring how "stressed" a district's service capacity is. You designed it; the model uses it as a key input.

**~70% feature importance**  
→ After training, scikit-learn shows which inputs matter most; your engineered ratio dominated — good story for "feature engineering matters."

**Z-score thresholds**  
→ Instead of "above 100 = bad," compare each district to national mean using z-scores — adapts when data shifts.

**If stuck:** open [uidai-data-hackathon-2026.vercel.app](https://uidai-data-hackathon-2026.vercel.app/) and walk through the dashboard, then trace `run_pipeline.py` on GitHub.

---

## CloudCollab (10 min)

**Socket.IO editor**  
→ When you type, server broadcasts change to everyone in the room. Cursors show where others are typing — same pattern as Google Docs lite.

**WebRTC video**  
→ Peer-to-peer video between browsers for pair programming — separate from Socket.IO text sync.

**AWS EB + DynamoDB**  
→ Node app hosted on Elastic Beanstalk; session/user data in DynamoDB (NoSQL). JWT checks user on protected routes.

**If stuck:** draw three boxes: Browser ↔ Node server (Socket.IO) ↔ DynamoDB.

---

## Skills — quick definitions

| Skill | One-line if asked |
|-------|-------------------|
| REST API | HTTP endpoints (GET/POST) that return JSON |
| JWT | Signed token proving who logged in; server verifies signature |
| WebSockets | Persistent connection for real-time push (chat), vs request/response |
| Random Forest | Many decision trees vote; good for tabular/structured features |
| ETL | Extract data → transform (clean, aggregate) → load (train/store) |
| Feature engineering | Creating new input columns (like Stress Ratio) from raw data |
| PostgreSQL | Relational database — tables, rows, SQL queries |
| DynamoDB | AWS NoSQL key-value/document store |

---

## Experience (5 min)

**Ethnus MERN** — Built CRUD apps: React pages, Express routes, MongoDB collections. Login/signup flow.  
**Microsoft Azure cert** — Learned blob storage, SQL vs NoSQL on Azure, basic data pipeline concepts — no need to deep-dive unless JD mentions Azure.

---

## Numbers to remember

| Fact | Value |
|------|-------|
| CGPA | 9.18 |
| Class X / XII | 95.4% / 94.6% |
| LeetCode | 150+ (leetcode.com/u/Mahima4) |
| UIDAI District Stress Analytics scale | ~4.8M rows |
| ROADGAURD-X accuracy | 99.6% (synthetic test set) |
| ROADGAURD-X features | 9 |
| Stress ratio importance | ~70% |

---

## Day-before schedule (~2 hours total)

| Time | Task |
|------|------|
| 30 min | Read this doc + skim each project's README on GitHub |
| 30 min | Demo GameNexus live + ROADGAURD-X demo or CLI |
| 20 min | Trace UIDAI District Stress Analytics pipeline (`adhaarzones` repo) |
| 15 min | Draw CloudCollab architecture on paper |
| 15 min | Practice 60-sec intro: "I'm Mahima, final year VIT, I build full-stack apps and ML pipelines…" |
| 10 min | Re-read resume; every line should feel familiar |
