# 🛍️ Product Store

**Product Store**, PERN yığını (PostgreSQL, Express.js, React.js, Node.js) kullanılarak geliştirilmiş tam işlevli bir ürün mağazası uygulamasıdır. Kullanıcılar ürünleri listeleyebilir, ekleyebilir, güncelleyebilir ve silebilir. Uygulama hem frontend hem de backend bileşenlerini içermektedir.

---

## 📋 İçindekiler

- [Özellikler](#özellikler)
- [Kullanılan Teknolojiler](#kullanılan-teknolojiler)
- [Kurulum](#kurulum)
- [Kullanım](#kullanım)
- [Yapılandırma](#yapılandırma)
- [Dizin Yapısı](#dizin-yapısı)
- [Katkıda Bulunanlar](#katkıda-bulunanlar)
- [Lisans](#lisans)

---

## ✨ Özellikler

- Ürünleri listeleme
- Yeni ürün ekleme
- Mevcut ürünleri güncelleme
- Ürünleri silme
- RESTful API ile backend işlemleri
- Responsive kullanıcı arayüzü

---

## 🛠️ Kullanılan Teknolojiler

- **Backend**: Node.js, Express.js
- **Veritabanı**: PostgreSQL
- **Frontend**: React.js
- **API**: RESTful API

---

## 🚀 Kurulum

### 1. Depoyu Klonlayın

```bash
git clone https://github.com/azizcanbalci/product-store.git
cd product-store
2. PostgreSQL Veritabanını Kurun
PostgreSQL'i sisteminize kurun ve aşağıdaki adımları izleyin:

sql
Kopyala
Düzenle
CREATE DATABASE product_store;
CREATE USER your_user WITH PASSWORD 'your_password';
GRANT ALL PRIVILEGES ON DATABASE product_store TO your_user;
3. Backend Kurulumu
bash
Kopyala
Düzenle
cd backend
npm install
4. Frontend Kurulumu
bash
Kopyala
Düzenle
cd ../frontend
npm install
📦 Kullanım
Backend'i Başlatın
bash
Kopyala
Düzenle
cd backend
npm start
Frontend'i Başlatın
bash
Kopyala
Düzenle
cd ../frontend
npm start
Uygulama varsayılan olarak http://localhost:3000 adresinde çalışacaktır.

⚙️ Yapılandırma
Backend için backend/.env dosyasını oluşturun ve aşağıdaki değişkenleri tanımlayın:

env
Kopyala
Düzenle
DB_USER=your_user
DB_PASSWORD=your_password
DB_HOST=localhost
DB_PORT=5432
DB_NAME=product_store
📁 Dizin Yapısı
plaintext
Kopyala
Düzenle
product-store/
├── backend/       # Express.js sunucusu ve PostgreSQL bağlantıları
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── .env
│   └── index.js
├── frontend/      # React.js istemcisi
│   ├── public/
│   ├── src/
│   └── package.json
├── README.md      # Proje açıklamaları
└── package.json
👥 Katkıda Bulunanlar
Aziz Can Balcı
```
