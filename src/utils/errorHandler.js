const errorHandler = (controllerFunction) => {
  return async (req, res, next) => {
    try {
      await controllerFunction(req, res, next);
    } catch (error) {
      // console.log(error.message, "FROM ERROR HANDLER");
      res.status(500).json({ message: error.message });
    }
  };
};

export default errorHandler;
