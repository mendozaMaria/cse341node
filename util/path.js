const path = require('path'); //Import path module

//Old one module.exports = path.dirname(process.mainModule.filename);
module.exports = path.dirname(require.main.filename);