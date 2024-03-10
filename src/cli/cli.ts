#!/usr/bin/env node
import { program } from "commander";
import { interfaceify } from "../core/interfaceify";

program
  .name("tstailor")
  .alias("tstl")
  .description("Generate TypeScript interfaces from JSON.")
  .version("1.0.0")
  .argument("<input>", "Input JSON file")
  .option(
    "-o, --output <output>",
    "Output file for TypeScript interfaces",
    "generatedInterface.ts"
  )
  .option("-n, --name <name>", "Interface name", "MainInterface")
  .option("-r, --report <report>", "Path to save the report file")
  .action((input, options) => {
    try {
      interfaceify(input, options.output, options.name, options.report);
      console.log(`${options.name + " " ?? ""}Interface generated!`);
    } catch (error) {
      console.error(error);
    }
  });

program.parse(process.argv);
