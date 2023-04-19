const readlineSync = require('readline-sync');

// exercício 8
const convertionScripts = ['mass', 'length', 'volume', 'area', 'capacity'];
const index = readlineSync.keyInSelect(convertionScripts, 'Which convertionScript?');
const scriptSelected = convertionScripts[index];
switch (scriptSelected) {
  case 'length': {
    require('./length') 
    break;
  }
  case 'mass': {
    require('./mass');
    break
  }
  case 'volume': {
    require('./volume');
    break
  }
  case 'area': {
    require('./area');
    break
  } 
  case 'capacity': {
    require('./capacity');
    break
  }
};