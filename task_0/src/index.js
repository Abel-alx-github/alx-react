import $ from '../node_modules/jquery/dist/jquery.min.js';
// how to import jquery
// import '../node_modules/jquery/dist/jquery.min.js'
$(document).ready( function () {
    const para = "<p>Holberton Dashboard</p> <p>Dashboard data for the students</p> <p>Copyright - Holberton School</p>"
    $("body").append(para); 
})