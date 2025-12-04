import http from "k6/http";
import { check, sleep } from "k6";
import { Rate } from "k6/metrics";

// A simple failure rate metric
let errorRate = new Rate("errors");

// Example options: ramping stages
export let options = {
  stages: [
    { duration: "20s", target: 10 },   // ramp up to 10 VUs over 20s
    { duration: "40s", target: 20 },   // ramp to 20 VUs over 40s
    { duration: "60s", target: 20 },   // stay at 20 VUs for 60s
    { duration: "20s", target: 0 },    // ramp down
  ],
  // thresholds help you fail the test if things are unacceptable
  thresholds: {
    "http_req_duration": ["p(95)<500"], // 95% of requests must finish below 500ms
    "errors": ["rate<0.01"],            // errors less than 1%
  },
};

export default function () {
  // target host — when running via docker-compose, use http://target:8000
  const url = __ENV.TARGET_URL || "http://localhost:8000";

  let res = http.get(`${url}/`);
  let ok = check(res, {
    "status is 200": (r) => r.status === 200,
    "body contains status": (r) => r.body.indexOf("ok") !== -1,
  });

  if (!ok) {
    errorRate.add(1);
  } else {
    errorRate.add(0);
  }

  // occasional heavier request
  if (Math.random() < 0.1) {
    let r2 = http.get(`${url}/compute?n=20000`);
    check(r2, { "compute status 200": (r) => r.status === 200 });
  }

  // sleep a bit; this controls per-VU pacing
  sleep(0.5);
}
