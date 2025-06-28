import { promises as fs } from 'fs';
import path from 'path';

export default async function handler(req, res) {
  const filePath = path.join(process.cwd(), 'public', 'items.json');
  const jsonData = await fs.readFile(filePath, 'utf8');
  const objectData = JSON.parse(jsonData);
  
  res.status(200).json(objectData);
}
