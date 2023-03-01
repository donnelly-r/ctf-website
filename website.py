from flask import Flask

app = Flask(__name__)

@app.route("/")
def home():
    return "<h1>landing page</h1>"

@app.route("/flag1")
def home():
    return "<h1>flag 1</h1>"

if __name__ == "__main__":
    app.run()

