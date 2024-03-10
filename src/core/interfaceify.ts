import { readFileSync, writeFileSync } from 'node:fs';
import { evaluateGeneration } from './report';
import type { KeyTypeMap } from './types/keytypemap.type';

const globalInterfaceRegistry: { [interfaceName: string]: string } = {};

function getType(value: any, parentInterfaceName: string, key: string): string {
  if (Array.isArray(value)) {
    const itemType = value.length > 0 ? getType(value[0], parentInterfaceName, key) : 'any';
    return `${itemType}[]`;
  }
  if (typeof value === 'object' && value !== null) {
    const subInterfaceName = `${parentInterfaceName}${key.charAt(0).toUpperCase() + key.slice(1)}`;
    if (!globalInterfaceRegistry[subInterfaceName]) {
      globalInterfaceRegistry[subInterfaceName] = getInterfaceDefinition([value], subInterfaceName);
    }
    return subInterfaceName;
  }
  return typeof value;
}

export function getInterfaceDefinition(objects: object[], interfaceName: string): string {
  const keyTypeMap: KeyTypeMap = {};
  // Initialize with all keys from the first object as a baseline
  const keyPresenceMap: { [key: string]: boolean } = Object.keys(objects[0]).reduce((acc, key) => {
    acc[key] = true;
    return acc;
  }, {});

  objects.forEach((object, index) => {
    // For subsequent objects, adjust presence map based on actual presence
    if (index > 0) {
      Object.keys(keyPresenceMap).forEach((key) => {
        keyPresenceMap[key] = keyPresenceMap[key] && Object.hasOwnProperty.call(object, key);
      });
    }

    Object.entries(object).forEach(([key, value]) => {
      const valueType = getType(value, interfaceName, key);
      if (!keyTypeMap[key]) {
        keyTypeMap[key] = new Set();
      }
      keyTypeMap[key].add(valueType);
    });
  });

  let interfaceDefinition = `interface ${interfaceName} {\n`;
  Object.entries(keyTypeMap).forEach(([key, types]) => {
    const typeString = Array.from(types).join(' | ');
    // Append '?' to keys not present in all objects
    const optionalMark = !keyPresenceMap[key] ? '?' : '';
    interfaceDefinition += `  ${key}${optionalMark}: ${typeString};\n`;
  });
  interfaceDefinition += '}\n\n';

  return interfaceDefinition;
}

export function interfaceify(
  inputPath: string,
  outputPath = 'generatedInterface.ts',
  interfaceName = 'GeneratedInterface',
  report = ''
) {
  console.log(`Reading JSON from ${inputPath}`);
  let json = JSON.parse(readFileSync(inputPath, 'utf-8'));
  if (!Array.isArray(json)) {
    json = [json];
  }
  console.log('Generating interface definitions...');
  // ? loop for API usage, irrelevant for CLI
  for (const prop of Object.getOwnPropertyNames(globalInterfaceRegistry)) {
    delete globalInterfaceRegistry[prop];
  }
  evaluateGeneration(json, interfaceName, report);
  const mainInterface = getInterfaceDefinition(json, interfaceName);
  const allInterfaces = Object.values(globalInterfaceRegistry).join('\n') + mainInterface;
  console.log(`Writing interface definitions to ${outputPath}`);
  writeFileSync(outputPath, allInterfaces);
}

// ? EXAMPLE API USE
// interfaceify("pokemon.json", "pokemon.parsed.ts", "ParsedPokemonInfo");
