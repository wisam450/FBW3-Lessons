const pathFunctions = require('./pathFunctions');

console.log('app: Live Server');

pathFunctions.getConstants();

pathFunctions.getBaseName(__filename);
pathFunctions.getBaseName('/home/user/index.js'); // index.js

pathFunctions.getDirName(__filename);
pathFunctions.getDirName('/home/user/index.js'); // /home/user

pathFunctions.getExtName(__filename); // .js
pathFunctions.getExtName('/home/user/user.png'); //.png
pathFunctions.getExtName('/home/user/Readme.md'); //.md
pathFunctions.getExtName('/home/user/style.css'); //.css