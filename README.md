# 🧪 Luxora E2E Automation Test (Selenium + Mocha + POM)

A professional End-to-End (E2E) automation testing framework for the **Luxora E-commerce Web Application**, built using **Selenium WebDriver**, **Mocha**, and **Page Object Model (POM)** design pattern.

---

## 🚀 Features

* ✅ End-to-End UI Automation
* ✅ Page Object Model (POM) architecture
* ✅ Reusable components (BasePage, Driver, Config)
* ✅ Clean and maintainable code structure
* ✅ Scalable test design
* ✅ Async/Await modern JavaScript support

---

## 🧱 Project Structure

```
luxora-test/
│
├── tests/
│   └── luxora.test.js        # Main test scenarios
│
├── pages/
│   ├── BasePage.js           # Common reusable methods
│   ├── HomePage.js           # Homepage actions
│   ├── LoginPage.js          # Login functionality
│   ├── ProductPage.js        # Product actions
│   └── AccountPage.js        # Logout & account actions
│
├── utils/
│   ├── driver.js             # WebDriver setup
│   └── config.js             # Configurations (URL, credentials)
│
├── package.json
└── README.md
```

---

## ⚙️ Tech Stack

* **JavaScript (ES6+)**
* **Selenium WebDriver**
* **Mocha (Test Runner)**
* **Chai (Assertion Library)**

---

## 📦 Installation

Clone the repository:

```bash
git clone https://github.com/Mahmud256/luxora-test.git
cd luxora-test
```

Install dependencies:

```bash
npm install
```

---

## ▶️ Run Tests

```bash
npm test
```

---

## 🧪 Test Scenarios

* ✅ Verify Homepage loads successfully
* ✅ User Login with valid credentials
* ✅ Add product to cart
* ✅ User Logout

---

## 🔐 Configuration

Update your credentials and base URL in:

```
utils/config.js
```

```javascript
export const config = {
    baseUrl: 'https://luxora-kappa.vercel.app',
    email: 'your-email@gmail.com',
    password: 'your-password'
};
```

---

## 🧠 Design Pattern

This project follows **Page Object Model (POM)**:

* Separates test logic from UI interaction
* Improves maintainability and readability
* Enables code reuse across tests

---

## 🚀 Future Improvements

* 📸 Screenshot on test failure
* 📊 Mochawesome / Allure reporting
* ⚙️ CI/CD integration (GitHub Actions)
* 🧪 Parallel test execution
* 🌐 Cross-browser testing

---

## 👨‍💻 Author

**Mahmudul Hasan Sarkar**

* 💼 SQA Engineer (Automation)
* 💻 Web Scraping | Data Analysis | Testing

---

## ⭐ Support

If you like this project, give it a ⭐ on GitHub!

---
