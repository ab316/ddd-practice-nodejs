import express from 'express';
import { StatusCodes } from 'http-status-codes';

export const errorHandler = (
  err: Error,
  req: express.Request,
  res: express.Response,
  _next: express.NextFunction,
) => {
  console.error(err.stack);
  res.status(StatusCodes.INTERNAL_SERVER_ERROR).send('Something broke!');
};
