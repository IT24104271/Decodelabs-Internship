# DecodeLabs Task 01
## 🎁 RV Creations – Gift Shop Website - Frontend core

## 📌 Project Overview

RV Creations is a modern and responsive gift shop website developed using **HTML, CSS, and JavaScript**. The website showcases personalized gifts such as photo frames, customized mugs, polaroids, and gift hampers in an attractive and user-friendly interface.

The project demonstrates front-end web development concepts including responsive design, interactive UI components, smooth scrolling, dark/light mode, and basic shopping cart functionality.

---

## 🚀 Features

* 🏠 Responsive landing page
* 🎨 Modern and attractive UI design
* 🌙 Dark/Light mode toggle
* 📱 Mobile-friendly navigation menu
* 🎁 Gift categories section
* ⭐ Featured products display
* 🛒 Add to Cart functionality
* 📦 Cart item counter
* 📋 View cart items
* 📧 Email subscription validation
* 🔝 Back-to-top button
* 🎬 Smooth scrolling navigation
* ✨ Card animation using Intersection Observer
* 🖼️ Image hover effects
* 📍 About and Contact sections

---


## 🛠️ Technologies Used

* HTML5
* CSS3
* JavaScript (ES6)
* Google Fonts (Poppins)
* Font Awesome Icons
---

# DecodeLabs Task 02 - Backend API Development

## 📖 Project Description

The objective of this task is to build a simple REST API using Node.js and Express.js. The API manages intern data and demonstrates CRUD (Create, Read, Update, Delete) operations.

---

## 🛠️ Technologies Used

- Node.js
- Express.js
- JavaScript
- REST API

## ✨ Features

- RESTful API Development
- CRUD Operations
- JSON Data Handling
- Input Validation
- Error Handling
- HTTP Status Codes

---

## 🧪 Testing

You can test the API using:

- Postman

---

# DecodeLabs Task 03 - Database Integration CRUD API

## 📌 Project Overview

The objective of this project is to connect a Node.js backend application with Microsoft SQL Server and perform complete CRUD (Create, Read, Update, Delete) operations using REST APIs.

---

## 🚀 Technologies Used

- Node.js
- Express.js
- Microsoft SQL Server (MSSQL)
- JavaScript
- Postman

---

## ⚙️ Features

✅ Database Connection using MSSQL

✅ Get All Interns

✅ Get Intern by ID

✅ Add New Intern

✅ Update Existing Intern

✅ Delete Intern

✅ JSON API Responses

✅ Error Handling

---

## 🗄 Database Table

### Interns Table

| Column | Data Type |
|----------|----------|
| Id | INT (Primary Key) |
| Name | VARCHAR(100) |
| Role | VARCHAR(100) |

---

## 🔌 API Endpoints

### Home Route

```http
GET /
```

---

### Get All Interns

```http
GET /Subscribers
```

---

### Get Intern By ID

```http
GET /Subscribers/:id
```

Example:

```http
GET /Subscribers/1
```

---

### Add New Intern

```http
POST /Subscribers
```

Request Body:

```json
{
  "email": "teat@gmail.com",
}
```

---

### Update Intern

```http
PUT /Subscribers/:id
```

---

### Delete Intern

```http
DELETE /Subscribers/:id
```

Example:

```http
DELETE /Subscribers/1
```

---

# DecodeLabs Task 4 - 🎁 RV Creations - Gift Shop Website

A responsive Gift Shop Website developed using HTML, CSS, JavaScript, Node.js, Express.js, and SQL Server. The application allows users to browse gift categories, view featured products, and subscribe using their email address.

---

## 🚀 Features

- Responsive User Interface
- Gift Categories Section
- Featured Products Section
- Dark Mode Toggle
- Email Subscription System
- REST API Integration
- SQL Server Database Connectivity
- Form Validation
- Error Handling

---

## 🛠 Technologies Used

### Frontend
- HTML5
- CSS3
- JavaScript

### Backend
- Node.js
- Express.js
- CORS

### Database
- Microsoft SQL Server
- mssql
- msnodesqlv8

---

## 📡 API Endpoints

### Get All Subscribers

```http
GET /api/subscribers
```

### Add Subscriber

```http
POST /api/subscribers
```

Request Body

```json
{
  "email": "example@gmail.com"
}
```

Response

```json
{
  "message": "Subscribed Successfully"
}
```

## 👨‍💻 Author
Nikshika Niththiyananthan
* Full-Stack Intern at @Decodelabs
