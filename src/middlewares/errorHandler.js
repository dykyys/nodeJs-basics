import { HttpError } from 'http-errors';

export const errorHandler = (err, req, res, next) => {
  // Перевірка, чи отримали ми помилку від createHttpError
  console.log('Перевірка, чи отримали ми помилку від createHttpError');

  console.log('err instanceof HttpError', err instanceof HttpError);

  // Перевірка, чи отримали ми помилку від createHttpError
  if (err instanceof HttpError) {
    res.status(err.status).json({
      status: err.status,
      message: err.name,
      data: err,
    });
    return;
  }

  //   if (isHttpError(err)) {
  //     res.status(err.status).json({
  //       status: err.status,
  //       message: err.name,
  //       data: err,
  //     });
  //     return;
  //   }
  res.status(500).json({
    message: 'Something went wrong',
    error: err.message,
  });
};
