import { interfaceify } from '../src/core/interfaceify';
const input = 'test/input/pokemon.json';
const options = {
  output: 'test/output/pokemon',
  name: 'pkmn',
  report: '',
};
try {
  interfaceify(input, options.output, options.name, options.report);
  console.log(`${`${options.name} ` ?? ''}Interface generated!`);
} catch (error) {
  console.error(error);
}
