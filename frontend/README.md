# LocalBizHub - Full-Stack Local Business Marketplace

LocalBizHub is a modern, containerized full-stack web application designed to connect local businesses with consumers. It features a React frontend, Node.js/Express backend, and is fully orchestrated using Docker and Nginx reverse proxy.

---

## 🚀 Tech Stack
* **Frontend:** React (Vite), HTML5, CSS3, JavaScript
* **Backend:** Node.js, Express.js (v20-alpine)
* **Web Server & Reverse Proxy:** Nginx
* **Containerization:** Docker & Docker Compose
* **Version Control:** Git & GitHub

---

## 🏗️ Architecture Flow
1. **Client Request:** Users access the application via browser on port `80`.
2. **Nginx Reverse Proxy:** Routes incoming traffic, serving static frontend assets and proxying API calls to the backend server.
3. **Backend API:** Node.js Express server handles business logic and responds to client actions.

---

## 🛠️ Local Development & Docker Setup

To run the application locally using Docker Compose, ensure you have Docker installed and running on your machine (WSL 2 on Windows).

### 1. Clone the Repository
```bash
git clone [https://github.com/jyotirajput2112/LocalBizHub.git](https://github.com/jyotirajput2112/LocalBizHub.git)
cd LocalBizHub