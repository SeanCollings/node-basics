const path = require('path');

// Get the main root path of the folder
module.exports = path.dirname(process.mainModule.filename);
