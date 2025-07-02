export const canDeleteUser = (req, res, next) => {
    if (!req.user) {
        return res.status(401).json({ message: 'No autenticado: información de usuario no disponible.' });
    }
    const authenticatedUserId = req.user.id;
    const authenticatedUserRole = req.user.role;
    const targetUserId = req.params.id;
    if (authenticatedUserRole === 'admin' || authenticatedUserId === targetUserId) {
        return next();
    }
    return res.status(403).json({ message: 'No tienes permiso para eliminar esta cuenta.' });
};


