const ERROR_HANDLERS = {
  CastError: res =>
    res.status(400).json({ message: 'id used is malformed' }),
  JsonWebTokenError: res =>
    res.status(401).json({ message: 'Error in token' }),
  ValidationError: (res, error) =>
    res.status(409).send({ message: error.message }),
  TokenExpiredError: (res, error) =>
    res.status(401).json({ message: error.message, ExpireAt: new Date(error.expiredAt) }),
  defaultError: res =>
    res.status(500).end()
}

export const handleErrors = (error, req, res, next) => {
  console.log(error.name)
  const handler = ERROR_HANDLERS[error.name] || ERROR_HANDLERS.defaultError
  handler(res, error)
}
