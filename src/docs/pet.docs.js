/**
 * @swagger
 * tags:
 *   name: Mascotas
 *   description: Endpoints para gestión de mascotas
 */

/**
 * @swagger
 * /api/pets:
 *   get:
 *     summary: Obtener todas las mascotas
 *     tags: [Mascotas]
 *     responses:
 *       200:
 *         description: Lista de mascotas
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 */

/**
 * @swagger
 * /api/pets:
 *   post:
 *     summary: Crear una nueva mascota
 *     tags: [Mascotas]
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - specie
 *             properties:
 *               name:
 *                 type: string
 *                 description: Nombre de la mascota
 *               specie:
 *                 type: string
 *                 description: Especie (perro, gato, etc.)
 *               birthDate:
 *                 type: date
 *                 format: date
 *                 description: Fecha de nacimiento (DD-MM-YYYY)
 *               image:
 *                 type: string
 *                 format: binary
 *                 description: Imagen de la mascota
 *     responses:
 *       201:
 *         description: Mascota creada exitosamente
 *       404:
 *         description: Datos inválidos
 */


/**
 * @swagger
 * /api/pets/{id}:
 *   put:
 *     summary: Actualizar una mascota por ID
 *     tags: [Mascotas]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de la mascota
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               specie:
 *                 type: string
 *               birthDate:
 *                 type: string
 *                 format: date
 *               adopted:
 *                 type: boolean
 *                 default: false
 *     responses:
 *       200:
 *         description: Mascota actualizada
 *       400:
 *         description: Datos inválidos
 *       404:
 *         description: Mascota no encontrada
 */

/**
 * @swagger
 * /api/pets/{id}:
 *   delete:
 *     summary: Eliminar una mascota por ID
 *     tags: [Mascotas]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de la mascota
 *         schema:
 *           type: string
 *     responses:
 *       204:
 *         description: Mascota eliminada
 *       404:
 *         description: Mascota no encontrada
 */
