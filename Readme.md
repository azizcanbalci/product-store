# 🛍️ Product Store

Bu proje, PERN stack kullanılarak geliştirilmiş tam işlevli bir ürün mağazası uygulamasıdır. Kullanıcılar ürünleri görüntüleyebilir, ekleyebilir, güncelleyebilir ve silebilir. Uygulama hem frontend hem backend bileşenlerini içerir.

## 🧱 Kullanılan Teknolojiler

- 🔙 **Backend**: Node.js, Express.js
- 🧠 **Veritabanı**: PostgreSQL
- 💻 **Frontend**: React.js
- 🔗 **API**: RESTful API

## 📁 Proje Yapısı

product-store/ ├── backend/ # Express.js sunucusu ve PostgreSQL bağlantıları ├── frontend/ # React.js istemcisi ├── README.md # Bu dosya

bash
Kopyala
Düzenle

## 🚀 Kurulum ve Çalıştırma

### 1. Depoyu Klonlayın

```bash
git clone https://github.com/azizcanbalci/product-store.git
cd product-store
2. PostgreSQL Veritabanını Kurun
Veritabanı yapılandırmasını backend/.env dosyasına uygun şekilde ayarlayın:

ini
Kopyala
Düzenle
DB_USER=your_user
DB_PASSWORD=your_password
DB_HOST=localhost
DB_PORT=5432
DB_NAME=product_store
Ayrıca backend/db.sql gibi bir dosya varsa, tablo oluşturmak için kullanabilirsiniz.

3. Backend Kurulumu
bash
Kopyala
Düzenle
cd backend
npm install
npm run dev
Express.js API varsayılan olarak http://localhost:5000'de çalışır.

4. Frontend Kurulumu
bash
Kopyala
Düzenle
cd ../frontend
npm install
npm start
React uygulaması http://localhost:3000'de çalışacaktır.

🧩 Özellikler
Ürün listeleme

Ürün ekleme, düzenleme ve silme (CRUD)

PostgreSQL veritabanı ile veri kalıcılığı

RESTful API yapısı

Modern ve kullanıcı dostu React arayüzü

🔒 Ortam Değişkenleri
backend/.env dosyasına aşağıdaki değişkenleri eklemeniz gerekir:

bash
Kopyala
Düzenle
PORT=5000
DB_USER=your_user
DB_PASSWORD=your_password
DB_HOST=localhost
DB_PORT=5432
DB_NAME=product_store
🤝 Katkıda Bulunma
Katkılarınızı memnuniyetle karşılıyoruz! Lütfen bir fork oluşturun, değişikliklerinizi yeni bir dalda yapın ve bir pull request gönderin.
```
