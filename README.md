![demo](./assets/gif.gif)

# 🚗 Fast & Furious Cars — Project Setup Guide

Welcome! This guide will help you get the project up and running smoothly.  
Make sure you have **XAMPP**, **Python**, and **Node.js** installed before starting.

---

## 🔧 Prerequisites

- [XAMPP](https://www.apachefriends.org/index.html) installed on your machine  
- Python installed  
- Node.js installed

---

## ⚙️ Step-by-Step Setup

### 🧱 XAMPP Configuration

1. Open **XAMPP**.
2. Click on **Apache Config** and open `httpd.conf`.
3. Find and replace port `8000` with `8080` (use `Ctrl + F` to search).
4. Start **Apache** and **MySQL** by clicking **Start**.
   - If MySQL starts and then stops, open **Task Manager** and end all `mysql` processes.
5. Click **MySQL Admin** and import the database:
   - Go to the `Database` folder
   - Import `carros_velozes_e_furiosos.sql`

---

### 🐍 BackEnd Setup

1. Navigate to the `BackEnd` folder.
2. Create and activate a virtual environment:

   ```bash
   python -m venv env
   ./env/Scripts/activate
   ```

3. Install dependencies:

    ```bash
    pip install -r requirements.txt

    ```

4. Start the BackEnd server:

    ```bash
    python main.py
    ```

### 🐍 FrontEnd Setup

1. Navigate to the FrontEnd folder.

2. Install dependencies:

    ```bash
    npm i
    ```

3. Run the FrontEnd server:

    ```bash
    npm run dev
    ```

4. Open the link shown in the terminal to access the app in your browser.


