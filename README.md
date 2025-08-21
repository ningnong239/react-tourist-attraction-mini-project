# React Tourist Attraction Mini Project

โปรเจคนี้ประกอบด้วย 2 ส่วนหลัก:
1. **Client** - React App ที่ใช้ Vite
2. **Server** - Express.js API Server

## การติดตั้งและรันโปรเจค

### ขั้นตอนที่ 1: ติดตั้ง Dependencies สำหรับ Client
```bash
cd client
npm install
```

### ขั้นตอนที่ 2: ติดตั้ง Dependencies สำหรับ Server
```bash
cd server
npm install
```

### ขั้นตอนที่ 3: รัน Server
```bash
cd server
npm start
```
Server จะรันที่: `http://localhost:4001`

### ขั้นตอนที่ 4: รัน Client (ใน Terminal ใหม่)
```bash
cd client
npm run dev
```
Client จะรันที่: `http://localhost:5173`

## โครงสร้างโปรเจค

```
react-tourist-attraction-mini-project/
├── client/                 # React App
│   ├── src/
│   ├── package.json
│   └── ...
├── server/                 # Express.js API
│   ├── app.js
│   ├── db.js
│   ├── package.json
│   └── ...
└── README.md
```

## API Endpoints

- `GET /` - Hello World
- `GET /trips?keywords=<search_term>` - ค้นหาทริปตามคำค้นหา

## หมายเหตุ

- ต้องรัน Server ก่อน แล้วค่อยรัน Client
- ใช้ Terminal แยกกันสำหรับ Server และ Client
- Server รันที่ port 4001, Client รันที่ port 5173
