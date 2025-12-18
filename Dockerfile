FROM node:24-alpine3.20

WORKDIR /app

# Copie les fichiers de lock et package.json/package-lock.json en premier pour optimiser le cache
COPY package.json package-lock.json ./

# Installe les dépendances
RUN npm ci

# Copie le reste du code de l'application
COPY . .

# Expose le port sur lequel Next.js tourne (par défaut 3000)
EXPOSE 3000

# Commande pour lancer le serveur de développement lorsque le conteneur démarre
# CMD ["npm", "run", "dev"]
# Commande par défaut pour le container
CMD ["npm", "run", "dev:strict"]
