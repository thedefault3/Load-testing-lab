# k6 load test

## Run examples

### Run locally with k6 installed:
```bash
TARGET_URL=http://localhost:8000 k6 run loadtests/k6/loadtest.js

# start only the target
docker-compose up -d target

# run k6 (it will use the loadtests folder mounted into the container)
docker-compose run --rm -e TARGET_URL=http://target:8000 k6 run /loadtests/k6/loadtest.js


---

## Why this is safe and helpful
- Everything is confined to your local machine (Docker network).
- The k6 script demonstrates real load-testing concepts (ramp, stages, checks, thresholds) without encouraging misuse.
- You learn to interpret metrics and set thresholds — crucial skills before running tests in production or with permission.

---

## Further learning (safe)
- Read k6 docs: https://k6.io/docs (for learning; don’t use on third-party without permission).
- Try `wrk`, `siege`, or `locust` in the same safe lab.
- Add monitoring (Prometheus + Grafana) to visualize the metrics locally.
- Learn about rate-limiting, autoscaling, and how systems mitigate abusive traffic.

---

If you’d like, I can:
- produce a ready-to-paste `LICENSE` (MIT) and the exact files so you can create the repo quickly, **or**
- add a `locust` example instead of k6, or
- add Prometheus + Grafana docker-compose to capture metrics.

Which of those would you prefer? (I’ll include the files directly so you can paste to GitHub.)
