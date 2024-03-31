#!/usr/bin/env node
import { program } from 'commander';
import { interfaceify } from '../core/entry';

program
  .name('tstailor')
  .alias('tstl')
  .alias('tsify')
  .description('Generate TypeScript interfaces from JSON.')
  .version('1.0.0')
  .argument('<input>', 'Input JSON file')
  .option('-o, --output <output>', 'Output file for TypeScript interfaces', 'generatedInterface.ts')
  .option('-n, --name <name>', 'Interface name', 'GeneratedInterface')
  .option(
    '-r, --report <report>',
    'Specify wether to add the report to the generated file or not',
    true
  )
  .action((input, options) => {
    try {
      interfaceify(input, options.output, options.name, options.report);
      console.log(`${`${options.name} ` ?? ''}Interface generated!`);
    } catch (error) {
      console.error(error);
    }
  });

program.parse(process.argv);
