# AppEng Backend

This is the backend for **Technical Test - App Eng** (Question #4).  
It’s built with **Express.js + TypeScript**, and it fetches and manipulates data from `https://randomuser.me/api`.

---

## 🚀 Features

- Fetch data dynamically using query params (`results`, `page`)
- Transform API response into simplified format
- Uses Express + TypeScript + Axios
- Ready for integration with frontend (AppEng Frontend)

---

## 🧠 API Example

### Endpoint

GET /api/random-users?results=10&page=1

### Example Response

```json
{
  "count": 10,
  "users": [
    {
      "name": "Ms, Emma Hakola",
      "location": "9208, Nordenskiöldinkatu, Lieksa, Åland, Finland",
      "email": "emma.hakola@example.com",
      "age": 21,
      "phone": "08-761-811",
      "cell": "048-075-31-27",
      "picture": [
        "https://randomuser.me/api/portraits/women/86.jpg",
        "https://randomuser.me/api/portraits/med/women/86.jpg",
        "https://randomuser.me/api/portraits/thumb/women/86.jpg"
      ]
    }
  ]
}
```

## 🧩 Tech Stack

- Node.js
- Express.js
- Typescript
- Axios

## ⚙️ Setup

npm install

npm run dev

Server runs at http://localhost:3000
