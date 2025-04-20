# 🛍️ Product Store - PERN + Neon + Arcjet

Product Store, modern web teknolojileri kullanılarak geliştirilmiş tam özellikli bir ürün mağazası uygulamasıdır. Proje PostgreSQL, Express.js, React.js ve Node.js (PERN stack) üzerine kuruludur. Veritabanı olarak **Neon** (sunucusuz PostgreSQL) kullanılmakta olup, güvenlik ve performans için **Arcjet** entegre edilmiştir.

---

## 📋 İçindekiler

- [Özellikler](#özellikler)
- [Kullanılan Teknolojiler](#kullanılan-teknolojiler)
- [Kurulum](#kurulum)
- [Kullanım](#kullanım)
- [Yapılandırma](#yapılandırma)
- [.env Örneği](#env-örneği)
- [Dizin Yapısı](#dizin-yapısı)
- [Katkıda Bulunanlar](#katkıda-bulunanlar)
- [Lisans](#lisans)

---

## ✨ Özellikler

- Ürünleri listeleme, ekleme, güncelleme ve silme
- RESTful API desteği
- Responsive React.js arayüz
- **Neon** ile hızlı ve sunucusuz PostgreSQL veritabanı
- **Arcjet** ile gelişmiş güvenlik ve edge-native performans

---

## 🛠️ Kullanılan Teknolojiler

- **Backend**: Node.js, Express.js
- **Veritabanı**: PostgreSQL (Neon.tech)
- **Frontend**: React.js
- **API**: RESTful servisler
- **Servisler**:
  - [Neon](https://neon.tech) – Serverless PostgreSQL
  - [Arcjet](https://arcjet.com) – Auth ve edge-native güvenlik

---

## 🚀 Kurulum

### 1. Depoyu Klonlayın

```bash
git clone https://github.com/azizcanbalci/product-store.git
cd product-store
```

### 2. Neon Veritabanı Oluşturun

[https://neon.tech](https://neon.tech) üzerinden ücretsiz bir veritabanı oluşturun. Veritabanı bağlantı bilgilerini `.env` dosyasına ekleyeceğiz.

### 3. Backend Kurulumu

```bash
cd backend
npm install
```

### 4. Frontend Kurulumu

```bash
cd ../frontend
npm install
```

---

## 📦 Kullanım

### Backend'i Başlatın

```bash
cd backend
npm start
```

### Frontend'i Başlatın

```bash
cd ../frontend
npm start
```

Uygulama varsayılan olarak `http://localhost:3000` adresinde çalışacaktır.

---

## ⚙️ Yapılandırma

Projeyi çalıştırmadan önce `backend/` dizininde bir `.env` dosyası oluşturun ve gerekli değişkenleri tanımlayın.

---

## 🧪 .env Örneği

```env
# Uygulama portu
PORT=3000

# Neon veritabanı bağlantı bilgileri
PGUSER=your_neon_username
PGPASSWORD=your_neon_password
PGHOST=your_neon_host_url
PGDATABASE=your_neon_database_name

# Arcjet ayarları
ARCJET_KEY=your_arcjet_api_key
ARCJET_ENV=development

# Node çalışma ortamı
NODE_ENV=production
```

> 🔐 Gerçek değerleri `.env` dosyasına yazın ama bu dosyayı asla commit etmeyin. `.gitignore` içinde olduğundan emin olun.

---

## 📁 Dizin Yapısı

```plaintext
product-store/
├── backend/       # Express.js API ve veritabanı işlemleri
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── .env
│   └── index.js
├── frontend/      # React.js istemcisi
│   ├── public/
│   ├── src/
│   └── package.json
├── README.md
└── package.json
```

---

## 👥 Katkıda Bulunanlar

- [Aziz Can Balcı](https://github.com/azizcanbalci)

---
