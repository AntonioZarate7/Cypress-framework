# Especificamos la imaen base de cypress
FROM cypress/included:13.15.2

# Establece el directorio de trabajo
WORKDIR /app

# Copiar los aarhivos del proyecto al contenedor
COPY . .

# Instala las dependencias del proyecto
RUN npm install --force

# Ejecucion de cypress
CMD ["npx", "cypress", "run"]

# Para crear la imagen del contenedor
# docker build -f Dockerfile -t cypress-docker .

# Para ejecutar el contenedor 
# docker run cypress-docker