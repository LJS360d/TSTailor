import { parseInputObjects, writeInterfaceFile } from './interactions/fs.interactions';
import { getInterfaceDefinition, globalInterfaceRegistry } from './tools/interface.generation';
import { evaluateGeneration } from './tools/report.generation';

function main(inputPath: string, outputPath: string, interfaceName: string, doReport: boolean) {
  console.log(`Reading JSON from ${inputPath}`);
  const json = parseInputObjects(inputPath);
  console.log('Generating interface definitions...');
  // ? loop for API usage, irrelevant for CLI
  for (const prop of Object.getOwnPropertyNames(globalInterfaceRegistry)) {
    delete globalInterfaceRegistry[prop];
  }
  const report = evaluateGeneration(json, interfaceName, doReport);
  const mainInterface = getInterfaceDefinition(json, interfaceName);
  const allInterfaces = Object.values(globalInterfaceRegistry).join('\n') + mainInterface;
  console.log(`Writing interface definitions to ${outputPath}`);
  writeInterfaceFile(outputPath, allInterfaces, report);
}

export function interfaceify(
  inputPath: string,
  outputPath = 'generatedInterface.ts',
  interfaceName = 'GeneratedInterface',
  report = true
) {
  return main(inputPath, outputPath, interfaceName, report);
}

// ? EXAMPLE API USE
// interfaceify("pokemon.json", "pokemon.parsed.ts", "ParsedPokemonInfo");
