import express from 'express';
import { StatusCodes } from 'http-status-codes';

export const errorHandler = (
  err: Error,
  req: express.Request,
  res: express.Response,
  _next: express.NextFunction,
) => {
  const urlWithoutQuery = req.url.split('?')[0];
  res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
    message: err.message,
    status: StatusCodes.INTERNAL_SERVER_ERROR,
    url: urlWithoutQuery,
    query: req.query,
    error: {
      message: err.message,
      stack: err.stack,
    },
  });
};
