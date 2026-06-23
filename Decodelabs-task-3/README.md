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

## 🧪 Testing APIs

All APIs were tested using Postman.

#### Get All Interns

![Get All Interns](https://github.com/IT24104271/Decodelabs-Internship/blob/032d6dc0bc8ebbeedae0be2ef6e028d8e013d9d8/Decodelabs-task-3/images/get.png)

#### Get Intern By ID

![Get Intern By ID](https://github.com/IT24104271/Decodelabs-Internship/blob/032d6dc0bc8ebbeedae0be2ef6e028d8e013d9d8/Decodelabs-task-3/images/get%20by%20id.png
)
#### Add New Intern

![Add Intern](https://github.com/IT24104271/Decodelabs-Internship/blob/032d6dc0bc8ebbeedae0be2ef6e028d8e013d9d8/Decodelabs-task-3/images/insert1.png)

#### Update Intern

![Update Intern](https://github.com/IT24104271/Decodelabs-Internship/blob/032d6dc0bc8ebbeedae0be2ef6e028d8e013d9d8/Decodelabs-task-3/images/update1.png)

#### Database connection message

![Database Connection](https://github.com/IT24104271/Decodelabs-Internship/blob/032d6dc0bc8ebbeedae0be2ef6e028d8e013d9d8/Decodelabs-task-3/images/backend%20connect.png)
![Database Connection](https://github.com/IT24104271/Decodelabs-Internship/blob/032d6dc0bc8ebbeedae0be2ef6e028d8e013d9d8/Decodelabs-task-3/images/database1.png)

---

## 🎯 Learning Outcomes

- Database Integration with SQL Server
- REST API Development
- CRUD Operations
- Backend Architecture
- Error Handling
- API Testing with Postman

---
