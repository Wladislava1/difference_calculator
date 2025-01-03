import { readFileSync } from 'fs';
import * as path from 'path';

const parseFile = (pathToFile) => {
  const absolutePath = path.relative(process.cwd(), pathToFile);
  return JSON.parse(readFileSync(absolutePath, 'utf-8'));
};
export default parseFile;
