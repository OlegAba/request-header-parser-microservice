import { Response } from 'express';

export const ok = (res: Response, data?: any): void => {
  res.status(200).json(data);
}