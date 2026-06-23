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
