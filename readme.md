# Backend3 Project

Este proyecto es un backend desarrollado en **Node.js** para gestionar un sistema de adopciones de mascotas. 
Está estructurado siguiendo principios de **arquitectura modular**, y hace uso de diversas tecnologías para 
garantizar seguridad, escalabilidad y buenas prácticas de desarrollo.

---

## 🚀 Tecnologías utilizadas

- **Node.js** + **Express.js**
- **MongoDB** (conexión mediante Mongoose)
- **JWT (JSON Web Token)** para autenticación
- **bcrypt** para hash de contraseñas
- **Multer** para manejo de archivos
- **Validator** para validaciones de datos
- **dotenv** para variables de entorno
- **Swagger** para documentación de API
- **Mocha + Chai + Supertest** para testing

---

## 📁 Estructura del Proyecto

```
src/
├── config/           # Configuraciones generales
├── controllers/      # Controladores para manejar peticiones
├── dao/              # Data Access Objects
├── docs/             # Documentación Swagger
├── dto/              # Data Transfer Objects
├── middlewares/      # Middlewares personalizados
├── models/           # Modelos de Mongoose
├── public/           # Archivos públicos
├── repository/       # Repositorios de acceso a datos
├── routes/           # Definición de rutas
├── services/         # Lógica de negocio
├── test/             # Tests automatizados
├── utils/            # Utilidades auxiliares
```

---

## Clonar repositorio

```bash
git clone https://github.com/LucasFigueroaDev/Back-end-III.git
```
---

## 📦 Instalación

```bash
npm install
```

---

## 🛠 Scripts disponibles

| Comando        | Descripción                      |
|----------------|----------------------------------|
| `npm start`    | Inicia el servidor en modo producción |
| `npm run dev`  | Inicia el servidor en modo desarrollo con nodemon |
| `npm test`     | Ejecuta los tests con Mocha y Chai |

---

## 🌐 Documentación de la API

La documentación está generada con **Swagger**.

### Acceso:
1. Correr el servidor con `npm start` o `npm run dev`.
2. Acceder al endpoint:

```
http://localhost:PORT/api/docs
```

Reemplazar `PORT` con el puerto especificado en el archivo `.env`.

---

## 🔐 Autenticación

- El sistema utiliza **JWT** para proteger rutas privadas.
- Las contraseñas son **hasheadas con bcrypt** antes de ser almacenadas.
- Para acceder a rutas protegidas, enviar el token en el header:

```
Authorization: Cookie <token>
```

---

## 📂 Subida de archivos

Se utiliza **Multer** para procesar archivos enviados por `multipart/form-data`.

---

## 🔧 Variables de entorno

Crear un archivo `.env` con las siguientes claves:

```env
PORT=3000
MONGO_URI=mongodb://localhost:27017/mi_basededatos
JWT_SECRET=tu_clave_secreta
```

---

## ✅ Validación de datos

Se utiliza la biblioteca **validator** y los DTOs para asegurar la integridad de los datos recibidos en las peticiones.

---

## 🐳 Imagen Docker

Puedes acceder a la imagen Docker publicada desde el siguiente enlace:

[🐳 Imagen en Docker Hub](https://hub.docker.com/r/figueroalucas/backend3)

---

## 📬 Contacto

Proyecto desarrollado por Lucas Figueroa.

**[figueroa.dev93@gmail.com](figueroa.dev93@gmail.com)**

[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](www.linkedin.com/in/lucas-figueroa-94711b260)

---

¡Listo para usar y escalar! 🚀