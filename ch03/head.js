import fs from 'fs-extra-promise'

const linecount = process.argv[2]
const filename = process.argv[3]


const data = await fs.readFileAsync(filename, { encoding: 'utf-8' });
data
    .split('\n')
    .slice(0, linecount)
    .forEach(line => console.log(line))
