# Étape 1 : Utiliser une image PHP avec FPM
FROM php:8.2-fpm

# Définir l'environnement en production
ENV APP_ENV=dev
ENV COMPOSER_ALLOW_SUPERUSER=1

# Installer des dépendances système et extensions PHP
RUN apt-get update && apt-get install -y \
    libpq-dev \
    libzip-dev \
    zip \
    unzip \
    git \
    && docker-php-ext-install pdo pdo_pgsql pdo_mysql \
    && apt-get clean && rm -rf /var/lib/apt/lists/*

# Installer Composer
COPY --from=composer:2.6 /usr/bin/composer /usr/bin/composer

# Définir le répertoire de travail
WORKDIR /var/www/html

# Copier les fichiers nécessaires pour composer install
COPY composer.json composer.lock ./

# Installer les dépendances Composer sans exécuter les auto-scripts
RUN composer install --no-dev --optimize-autoloader --no-scripts

# Copier le reste du code source
COPY . .

# Exécuter les auto-scripts (comme cache:clear) après avoir copié tout le code
RUN composer run-script auto-scripts

# Exposer le port utilisé
EXPOSE 8000

# Commande par défaut pour le serveur de développement Symfony
CMD ["php", "-S", "0.0.0.0:8000", "-t", "public"]