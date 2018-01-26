const tokenAuth = token => (request, response, next) => {
  if (request.query.token !== token) {
    response.status(401).json({
      message: 'Invalid token.',
    });

    return;
  }

  next();
};

module.exports = tokenAuth;
