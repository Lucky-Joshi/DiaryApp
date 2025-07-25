export const checkUUID = (req, res, next) => {
  if (req.user) return next(); // Already logged in

  const uuid = req.query.uuid;
  if (!uuid) return res.status(401).json({ message: 'Missing auth (login or guest UUID)' });

  req.uuid = uuid;
  next();
};
