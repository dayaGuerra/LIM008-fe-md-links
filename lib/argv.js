#!/usr/bin/env node
import cli from './modules/cli';

const arg = process.argv.slice(2);

cli(arg).then(msg => console.log(msg));
