const requireUser = async (req, res, next) => {
    if (!req.user) {
      res.status(401);
      next({ message: "User is not authorized" });
    } else {
      next();
    }
  };
  module.exports = { requireUser };