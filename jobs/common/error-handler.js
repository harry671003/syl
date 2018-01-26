function ErrorHandler(logger) {
  this.logger = logger;
}

ErrorHandler.prototype.handleError = function handleError(error) {
  console.error(
    `[-] ${(new Date()).toUTCString()} uncaughtException: `,
    error.message,
  );
  console.error(error.stack);

  this.logger.trackException({
    exception: error,
  });
};

module.exports = ErrorHandler;
