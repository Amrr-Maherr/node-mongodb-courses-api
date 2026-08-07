export const logger = (req, res, next) => {
  console.log("Request URL:", req.url);
  console.log("Request Method:", req.method);

  next();
};
