#!/usr/bin/env node

import 'dotenv/config';
import { resolve } from 'path';

const nodePath = resolve(process.argv[1]);
const isCLI = nodePath === __filename;
const { NUM } = <{ NUM: string }>process.env;

export class Main {
  num: number;

  constructor(num: number) {
    this.num = num;
  }

  async log() {
    await new Promise(resolve => setTimeout(resolve, 50));
    console.log(`Main.log: ${this.num}`);
    return this.num;
  }

  throw() {
    throw new Error(`Main.throw ${this.num}`);
  }
}
export default async function main(num: number): Promise<number> {
  await new Promise(resolve => setTimeout(resolve, 50));
  console.log(`main: ${num}`);
  return num;
}

(async () => {
  if (isCLI) {
    await main(Number(NUM));
    const foo = new Main(Number(NUM));
    await foo.log();
    // foo.throw();
    console.log('Done.');
  }
})();
