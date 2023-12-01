import { statusCodes } from '../@types/constStatusCodes';

export const getStatusTextFromCode = (status: number): string => {
  const res = statusCodes.find(o => o.status === status);
  if (res) return res.message;
  return '';
};
