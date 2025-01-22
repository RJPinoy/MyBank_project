FROM node:18

# Définir le répertoire de travail
WORKDIR /app

# Copier uniquement les fichiers nécessaires
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier le reste des fichiers de l'application
COPY . .

# Exposer le port utilisé par Vite (par défaut 5173)
EXPOSE 5173

# Lancer le serveur de développement Vite
CMD ["npm", "run", "dev", "--", "--host"]