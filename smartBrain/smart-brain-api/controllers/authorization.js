const redisClient = require('./signin').redisClient;

const requireAuth = (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(401).json("You are unauthorized to see this resource!");
  }

  return redisClient.get(authorization, (err, reply) => {
    if (err || !reply) {
      return res.status(401).json("You are NOT authorized to see this resource!");
    }
    return next();
  })
}

module.exports = {
  requireAuth: requireAuth
}