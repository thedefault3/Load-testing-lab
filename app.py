from flask import Flask, jsonify, request
import time
import random

app = Flask(__name__)

@app.route("/")
def index():
    # simulate small, realistic processing time
    time.sleep(random.uniform(0.01, 0.05))
    return jsonify({"status": "ok", "message": "Hello from safe target"})

@app.route("/compute")
def compute():
    # simulate heavier operation
    n = int(request.args.get("n", 10000))
    s = 0
    for i in range(n):
        s += i
    time.sleep(random.uniform(0.05, 0.2))
    return jsonify({"result": s, "n": n})

@app.route("/health")
def health():
    return jsonify({"status": "healthy"})
