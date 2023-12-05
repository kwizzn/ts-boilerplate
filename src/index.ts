#!/usr/bin/env node

import 'dotenv/config';
import { resolve } from 'path';

const nodePath = resolve(process.argv[1]);
const isCLI = nodePath === __filename;
const { DUMMY } = <{ DUMMY: string }>process.env;

export default class Main {
  dummy: string;

  constructor(dummy: string) {
    this.dummy = dummy;
  }

  log() {
    return this.dummy;
  }

  throw() {
    throw new Error(`error: ${this.dummy}`);
  }
}

(() => {
  if (isCLI) {
    const main = new Main(DUMMY);
    const dummy = main.log(); // main.throw();
    process.stdout.write(`Done. dummy = ${dummy}\n`);
  }
})();
