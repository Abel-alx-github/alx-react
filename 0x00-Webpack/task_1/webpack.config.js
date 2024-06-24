// how to start 
const path = require('path');

module.exports = {
 mode: 'production', // mode  'production'

    // --- Entry Point ---
  entry: {
    main: path.resolve(__dirname, './js/dashboard_main.js') //  main entry point
  },
  // --- Output ---
  output: {
    filename: 'bundle.js', // bundled file
    path: path.resolve(__dirname, 'public'), // Output directory 'public')
  },

 }