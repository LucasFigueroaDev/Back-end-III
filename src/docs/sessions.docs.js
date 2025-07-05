/**
 * tags:
 *   name: Sesiones
 *   description: Endpoints para gestión de sesiones
 */

/**
 * @swagger
 * /api/sessions/register:
 *   post:
 *     summary: Registrar un nuevo usuario
 *     tags: [Sesiones]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               first_name:
 *                 type: string
 *               last_name:
 *                 type: string
 *               email:
 *                 type: string
 *               passwordHash:
 *                 type: string
 *     responses:
 *       200:
 *         description: Usuario registrado con exito
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 name:
 *                   type: string
 *                 role:
 *                   type: string
 *                   default: user
 *                 email:
 *                   type: string
 *                 pets:
 *                   type: array
 *  
 *       400:
 *         description: Error al registrar el usuario
 */ 

/**
 * @swagger
 * /api/sessions/login:
 *   post:
 *     summary: Iniciar sesión
 *     tags: [Sesiones]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               passwordHash:
 *                 type: string
 *     responses:
 *       200:
 *         description: Sesión iniciada con exito
 *         content:
 *           application/json:
 *             schema:  
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *       400:
 *         description: Error al iniciar sesion
 */ 

/**
 * @swagger
 * /api/sessions/current:
 *   get:
 *     summary: Obtener información de la sesión actual
 *     tags: [Sesiones]
 *     responses:
 *       200:
 *         description: Información de la sesión actual
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 name:
 *                   type: string
 *                 role:
 *                   type: string
 *                 email:
 *                   type: string
 *                 pets:
 *                   type: array
 *       400:
 *         description: Error al obtener el usuario
 */ 