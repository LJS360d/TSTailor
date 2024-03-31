import { readFileSync, writeFileSync } from 'node:fs';
import { wordBreak } from '../utils/formatting.utils';

export function getFileGenerationHeader(report?: string): string {
  if (!report) {
    return '';
  }
  const currentDateTime = new Date(Date.now()).toLocaleString();
  const version = process.env.npm_package_version;
  const packageName = process.env.npm_package_name;
  return `/* ${`${currentDateTime}\nThis file was generated with ${packageName} v${version}\n${report}`
    .split('\n')
    .map(wordBreak)
    .join('\n')} */`;
}

export function parseInputObjects(inputPath: string) {
  let json = JSON.parse(readFileSync(inputPath, 'utf-8'));
  if (!Array.isArray(json)) {
    json = [json];
  }
  return json;
}

export function writeInterfaceFile(outputPath: string, interfaces: string, report?: string) {
  const header = getFileGenerationHeader(report);
  writeFileSync(outputPath, `${header}\n${interfaces}`);
}
