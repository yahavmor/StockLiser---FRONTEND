StockLiser – Modern Full‑Stack Stocks & Memes App end‑to‑end React, Redux, Node.js & Express responsive application built with Vite.  

Database: MongoDB.

StockLiser is a unique web application that combines **stock market tools** with a fun **meme gallery** experience.  
Users can search stocks in real‑time, save them to a personal watchlist, generate memes, and manage a private meme collection.
<img width="1662" height="906" alt="image" src="https://github.com/user-attachments/assets/67f936d0-fc88-4c2c-81b8-e6be49568d37" />

# 🔗 **Links**
- **Live App:** https://backend-stock-sv6k.onrender.com/  
- **Backend Repository:** https://github.com/yahavmor/StockLiser---BACKEND  


# 📦 **Project Setup**

## **Frontend**
```bash
npm i
npm run dev
```

# 🔗 **Links**
 **Live App:** : https://backend-stock-sv6k.onrender.com  

# 🏗️ **Project Structure**

# 🎨 **Components**

## ⭐ **Core Components**

### **Header**  
Navigation bar with login/logout, user greeting, and quick access to memes & stocks.

### **UserMsg**  
Global toast notifications using Redux.

### **Loader**  
Reusable loading spinner for async operations.

### **MemeList**  
Displays the user’s saved memes with delete functionality.

### **MemeDetails**  
Full‑screen meme preview.

---

# 📄 **Pages**

## **HomePage**  
Landing page with quick navigation and user‑based messaging.

## **Login / Signup**  
Authentication using cookies (HTTP‑only) and backend session validation.

## **Meme**  
Random meme generator using external API + save to gallery.

## **UserPage**  
User’s personal meme gallery.

## **StockWorld**  
Real‑time stock search using Finnhub API, with validation and save‑to‑watchlist.

## **WatchList**  
User’s saved stocks with delete functionality.

---

# 🔄 **State Management (Redux Toolkit)**

We use Redux with the following modules:

- **userModule** – Authentication & user data  
- **msgModule** – Global toast notifications  
- **stockModule** – Loader & stock UI state  

---

# 🎯 **Services**

## **REST API Services**
- **auth.service** – Login, signup, logout, session  
- **meme.service** – Meme CRUD  
- **stock.service** – Stock search, save, delete  

## **Utility Services**
- **util.service** – Helpers  
- **LocalStorage** – Storage wrapper  

---

# 🎨 **Styling**

- CSS Grid for layout  
- Flexbox for alignment  
- CSS variables for theme  
- Fully responsive design  

# 🧠 **Key Features**
- 🔐 **Authentication** (cookies + backend session)  
- 📈 **Real‑time stock search** (Finnhub API)  
- ⭐ **Save stocks to watchlist**  
- 😂 **Random meme generator**  
- 💾 **Save memes to personal gallery**  
- 🗑️ **Delete memes & stocks**  
- 🔔 **Global notifications**  
- 🚀 **Fast Vite development environment**  

# 👥 **Author**
- **Yahav Mor**



# 🤝 **Contributions**
Pull requests are welcome.  
Found a bug? Want a feature? Open an issue.



# 📜 **License**
MIT License.


