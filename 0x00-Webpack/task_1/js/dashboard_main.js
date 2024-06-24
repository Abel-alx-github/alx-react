import $ from 'jquery'
import _ from 'lodash'

const para1 = "<p>Holberton Dashboard</p>";
const para2 = "<p>Dashboard data for the students</p>";
const btn ="<button>Click here to get started</button>"
const para3 = "<p id='count'></p>"
const para4 = "<p>Copyright - Holberton School</p>" 

$('body').append(para1, para2, btn, para3, para4);

let count = 0
function updateCounter() {
   count += 1;
   $('#count').html(`${count} clicks on the button`);
}

$('button').on('click', _.debounce(updateCounter, 500));