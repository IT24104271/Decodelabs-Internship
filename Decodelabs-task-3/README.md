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

Response:

```json
{
  "message": "Database API Running 🚀"
}
```

---

### Get All Interns

```http
GET /interns
```

---

### Get Intern By ID

```http
GET /interns/:id
```

Example:

```http
GET /interns/1
```

---

### Add New Intern

```http
POST /interns
```

Request Body:

```json
{
  "name": "John Doe",
  "role": "Backend Developer Intern"
}
```

---

### Update Intern

```http
PUT /interns/:id
```

Request Body:

```json
{
  "name": "John Doe",
  "role": "Full Stack Developer Intern"
}
```

---

### Delete Intern

```http
DELETE /interns/:id
```

Example:

```http
DELETE /interns/1
```

---

## 🧪 Testing APIs

All APIs were tested using Postman.

#### Get All Interns

![Get All Interns](https://github.com/IT24104271/Decodelabs-Internship/blob/cbc46ec00e942786d4e80dbf3faea69d808ded35/Decodelabs-task-3/images/interns.png)

#### Get Intern By ID

![Get Intern By ID](https://github.com/IT24104271/Decodelabs-Internship/blob/cbc46ec00e942786d4e80dbf3faea69d808ded35/Decodelabs-task-3/images/intern%20by%20id.png)

#### Add New Intern

![Add Intern](https://github.com/IT24104271/Decodelabs-Internship/blob/cbc46ec00e942786d4e80dbf3faea69d808ded35/Decodelabs-task-3/images/insert.png)

#### Update Intern

![Update Intern](https://github.com/IT24104271/Decodelabs-Internship/blob/cbc46ec00e942786d4e80dbf3faea69d808ded35/Decodelabs-task-3/images/update.png)

#### Database connection message

![Database Connection](https://github.com/IT24104271/Decodelabs-Internship/blob/cbc46ec00e942786d4e80dbf3faea69d808ded35/Decodelabs-task-3/images/database.png)
![Database Connection](https://github.com/IT24104271/Decodelabs-Internship/blob/cbc46ec00e942786d4e80dbf3faea69d808ded35/Decodelabs-task-3/images/connection.png)

---

## 🎯 Learning Outcomes

- Database Integration with SQL Server
- REST API Development
- CRUD Operations
- Backend Architecture
- Error Handling
- API Testing with Postman

---
