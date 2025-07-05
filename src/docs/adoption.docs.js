/**
 * @swagger
 * tags:
 *   name: Adopciones
 *   description: Endpoints para gestión de adopciones
 */ 

/** 
 * @swagger
 * /api/adoptions:
 *   get:
 *     summary: Obtener todas las adopciones
 *     tags: [Adopciones]
 *     responses:
 *       200:
 *         description: Exito al obtener todas las adopciones
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *       400:
 *         description: Error al obtener las adopciones
 */ 

/** 
 * @swagger
 * /api/adoptions/{id}:
 *   get:
 *     summary: Obtener una adopcion por ID
 *     tags: [Adopciones]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de la adopcion
 *         schema:
 *           type: string
 *     responses:
 *       200: 
 *         description: Exito al obtener la adopcion
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *       404:
 *         description: Error al obtener la adopcion
 * 
 */

/**
 * @swagger
 * /api/adoptions/{uid}/{pid}:
 *   post:
 *     summary: Crear una nueva adopcion
 *     tags: [Adopciones]
 *     parameters:
 *       - in: path
 *         name: uid
 *         required: true
 *         description: ID del usuario
 *         schema:
 *           type: string
 *       - in: path
 *         name: pid
 *         required: true
 *         description: ID de la mascota
 *         schema:
 *           type: string
 *     responses:
 *       201:
 *         description: Exito al crear la adopcion
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *       400:
 *         description: Error al crear la adopcion
 */