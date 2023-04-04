const path = require('path');
const {run} = require('../utils/execa')

run(`npm`,['publish','--access', 'public'],  {cwd: path.resolve(__dirname, '../create')});

