# TSTailor

Transform your JSON data into finely fitted TypeScript interfaces with TSTailor, the CLI tool that custom-tailors TypeScript definitions to match your data's shape perfectly. Say goodbye to manual typings and hello to a seamless, automated workflow that understands the nuances of your data structure.

## Features

- **Automatic TypeScript Interface Generation:** Convert JSON files into TypeScript interfaces with precision.
- **Configurable Output:** Choose where to save your generated TypeScript interfaces and customize the interface names.
- **Deviation Reports:** Generate reports highlighting inconsistencies in your data, making it easier to identify outliers and ensure data integrity.
- **CLI Simplicity:** Everything you need is just a command away, making it simple to integrate into your development process.

## Installation

Ensure you have Node.js installed, then run:

```bash
npm install -g tstailor
```

This installs TSTailor globally on your system, making it accessible from anywhere in your terminal.

## Usage
Using TSTailor is as simple as running a command in your terminal. Here's the basic syntax:

```bash
tstailor <inputPath> -o <outputPath> -n <interfaceName> -r <reportPath>
```
- -i, --input <inputPath>: Path to the input JSON file.
- -o, --output <outputPath>: (Optional) Path to save the generated TypeScript interface file. Default is generatedInterface.ts.
- -n, --interfaceName <interfaceName>: (Optional) Name of the generated interface. Default is MainInterface.
- -r, --report <reportPath>: (Optional) Path to save the deviation report. If not provided, the report is printed to the console.

Example
```bash
tstailor ./data/pokemon.json -o ./types/pokemon.ts -n Pokemon -r ./reports/pokemon-report.txt
```

This command reads pokemon.json, generates a TypeScript interface named Pokemon in ./types/pokemon.ts, and saves a deviation report in ./reports/pokemon-report.txt.

