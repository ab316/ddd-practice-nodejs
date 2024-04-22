import express from 'express';

export const errorHandler = (
  err: Error,
  req: express.Request,
  res: express.Response,
  _next: express.NextFunction,
) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
};
