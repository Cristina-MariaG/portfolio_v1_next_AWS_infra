# 🌐 Portfolio v1 — Next.js + AWS Infrastructure

> ⚠️ **This is version 1 of my portfolio.** A newer, improved version is available at **[iamcristinadev.xyz](https://iamcristinadev.xyz)** — check it out!

---

## 📌 Overview

This is the first version of my personal developer portfolio, built with **Next.js** and deployed on **AWS** using a Dockerized infrastructure. It includes internationalization support, a CI/CD pipeline via GitLab CI, and is served from an EC2 instance.

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Frontend | Next.js (TypeScript), Tailwind CSS |
| Containerization | Docker, Docker Compose |
| Cloud | AWS EC2 |
| CI/CD | GitLab CI (`.gitlab-ci.yml`) |
| Linting | ESLint |
| i18n | Custom `locales/` setup |

---

## 📁 Project Structure

```
├── app/                  # Next.js app directory (pages & layouts)
├── components/           # Reusable React components
├── lib/                  # Utility functions
├── locales/              # Internationalization files
├── public/               # Static assets
├── types/                # TypeScript type definitions
├── aws/                  # AWS-related config/scripts
├── images_site/          # Site images
├── Dockerfile            # Production Docker image
├── Dockerfile_test       # Test Docker image
├── docker-compose.yml    # Docker Compose config
├── .gitlab-ci.yml        # CI/CD pipeline
├── middleware.ts         # Next.js middleware (i18n routing, etc.)
├── next.config.ts        # Next.js configuration
└── tailwind.config.ts    # Tailwind CSS configuration
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- Docker & Docker Compose

### Run locally (without Docker)

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Run locally with Docker

```bash
docker compose build --no-cache
docker compose up -d
```

---

## ☁️ Deployment (AWS EC2)

The app is deployed on an AWS EC2 instance (Debian) and served via Docker.

### Connect to the instance

```bash
ssh -i ~/cris_portofolio.pem admin@<EC2_PUBLIC_IP>
```

### Push Docker image to Docker Hub

```bash
docker push <your_dockerhub_image_name>
```

### Deploy on EC2

```bash
docker compose up -d
```

### Clean Docker cache after Dockerfile changes

```bash
docker compose down
docker system prune -af
docker compose build --no-cache
docker compose up -d
```

---

## 🔁 CI/CD Pipeline

The project uses **GitLab CI** (`.gitlab-ci.yml`) to automate build and deployment on push.

---

## 🔍 Useful Commands

```bash
# Lint the project
npx eslint . --ext .js,.ts,.tsx --max-warnings=0

# Check env variables inside a running container
docker exec -it <container_name> env
docker compose exec <service_name> env | grep SMTP
```

---

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [AWS EC2 Connection Guide](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/connection-prereqs-general.html)
- [Docker Documentation](https://docs.docker.com/)

---

## 👩‍💻 Author

**Cristina-Maria G.**  
🌍 New version of the portfolio: [iamcristinadev.xyz](https://iamcristinadev.xyz)  
🐙 GitHub: [Cristina-MariaG](https://github.com/Cristina-MariaG)
