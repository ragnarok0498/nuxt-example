import { defineEventHandler } from 'h3';
import * as path from 'path';
import { readFileSync } from 'fs';

export default defineEventHandler(() => {
  const products = JSON.parse(readFileSync(path.resolve('server/api/products.json'), 'utf-8'));
  return products;
});