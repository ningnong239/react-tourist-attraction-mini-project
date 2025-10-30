# React Tourist Attraction Mini Project

โปรเจคนี้ประกอบด้วย 2 ส่วนหลัก:
1. **Client** - React App ที่ใช้ Vite
2. **Server** - Express.js API Server

## การติดตั้งและรันโปรเจค

**หมายเหตุ:** คำสั่งทั้งหมดนี้รันจากโฟลเดอร์ root ของโปรเจค (`react-tourist-attraction-mini-project`)

### วิธีที่ 1: ใช้ Scripts จาก Root (แนะนำ - ง่ายที่สุด)

#### ติดตั้ง Dependencies
```bash
npm run install:client
npm run install:server
```

#### รัน Server
```bash
npm run dev:server
```
Server จะรันที่: `http://localhost:4001`

#### รัน Client (ใน Terminal ใหม่)
```bash
npm run dev:client
```
Client จะรันที่: `http://localhost:5173`

---

### วิธีที่ 2: รันแบบแยก Directory

#### ติดตั้ง Dependencies สำหรับ Client
```bash
cd client
npm install
cd ..
```

#### ติดตั้ง Dependencies สำหรับ Server
```bash
cd server
npm install
cd ..
```

#### รัน Server
```bash
cd server
npm start
```
Server จะรันที่: `http://localhost:4001`

#### รัน Client (ใน Terminal ใหม่)  
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

## การ Deploy บน Vercel

โปรเจคนี้มีไฟล์ `vercel.json` ที่ตั้งค่าไว้แล้ว สำหรับ deploy React App (client)

### วิธี Deploy:
1. ติดตั้ง Vercel CLI (ถ้ายังไม่มี):
```bash
npm install -g vercel
```

2. Deploy โปรเจค:
```bash
vercel
```

### หมายเหตุสำหรับการ Deploy:
- Vercel จะ deploy เฉพาะส่วน **Client** (React App) เท่านั้น
- สำหรับ **Server** (Express API) ต้อง deploy แยกบนแพลตฟอร์มอื่น เช่น:
  - Railway
  - Render
  - Heroku
  - หรือ VPS
- อย่าลืมอัพเดต API URL ใน Client ให้ชี้ไปที่ Server ที่ deploy แล้ว
