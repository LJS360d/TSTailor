import { readFileSync } from 'node:fs';
import { interfaceify } from '../../src/core/entry';
import { assert, test } from 'vitest';
test('Generate simple interface with report', () => {
  const options = {
    input: 'test/input/pokemon.json',
    output: 'test/output/pokemon.ts',
    name: 'pkmn',
    report: true,
  };

  try {
    interfaceify(options.input, options.output, options.name, options.report);
    const generatedFile = readFileSync(options.output, 'utf-8');
    assert.isNotNull(generatedFile);
  } catch (error) {
    console.error(error);
    assert(false);
  }
});
