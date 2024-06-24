// a script that adds a p element with some text to the body of the HTML document

import $ from '../node_modules/jquery/dist/jquery.min.js';

$(document).ready( function () {
    const para = "<p>Holberton Dashboard</p> <p>Dashboard data for the students</p> <p>Copyright - Holberton School</p>"
    $("body").append(para); 
})