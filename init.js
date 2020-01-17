console.log('TP starting ...')
const yargs = require('yargs').scriptName('tp-node-sornin');
const {importToDatabase} = require('./utils');

yargs.command('import [file]', ' - Import file', (y) => {
  y.positional('file', {
    type: 'string',
    default: './json/ingredients-sample.json',
    describe: 'Import a file json file into the database'
    })
  }, (argv) => {
    console.log(`Importing the following file into the database - ${argv.file}`);
    importToDatabase(argv.file);
  }).help().argv

