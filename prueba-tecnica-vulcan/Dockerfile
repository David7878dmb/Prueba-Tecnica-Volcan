# 1. Partimos de una imagen oficial de Node.js
FROM node:20

# 2. Establecemos el directorio de trabajo
WORKDIR /app

# 3. Copiamos package.json e instalamos dependencias
COPY package*.json ./
RUN npm install

# 4. Copiamos el resto del código y construimos la app
COPY . .
RUN npm run build

# 5. Instalamos un servidor estático y exponemos el puerto 9778
RUN npm install -g serve
EXPOSE 9778

# 6. Indicamos el comando por defecto
CMD ["serve", "-s", "dist", "-l", "9778"]
