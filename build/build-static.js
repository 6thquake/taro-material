const ora = require('ora');
const fs = require('fs-extra');
const path = require('path');

const spinner = ora('copy h5 website to docs...');

spinner.start();

fs.emptyDirSync(path.resolve(__dirname, '../docs/h5'));

fs.copy(path.resolve(__dirname, '../dist'), path.resolve(__dirname, '../docs/h5'))
  .then(() => {
    spinner.stop();
  })
  .catch(err => console.error(err));

fs.copy(
  path.resolve(__dirname, '../packages/taro-material/dist'),
  path.resolve(__dirname, '../docs/h5'),
);
