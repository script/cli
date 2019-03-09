#!/usr/bin/env node

import * as commander from 'commander';

import list from './commands/list';
import run from './commands/run';

const PROJECT_NAME = 's';

commander
  .name(PROJECT_NAME)
  .usage(`<command> [options]`)
  .description(`${PROJECT_NAME} - The Script CLI`);

/**
 * Lists all functions
 * @name list
 * @example list
 */
commander
  .command('list')
  .description('Lists all functions')
  .option('--json', 'Lists functions as JSON')
  .action(list);

/**
 * Runs a function
 * @name run
 * @example run
 */
commander
  .command('run')
  .description('Runs a function')
  .action(run);

// defaults to help if commands are not provided
if (!process.argv.slice(2).length) {
  commander.outputHelp();
}
// User input is provided from the process' arguments
commander.parse(process.argv);