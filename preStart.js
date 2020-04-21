const fs = require('fs-extra');
const execSync = require('child_process').execSync;

if (fs.existsSync("./dist")) {
    fs.removeSync('./dist');
}
// execSync('npm run build', {encoding: 'utf-8'});
