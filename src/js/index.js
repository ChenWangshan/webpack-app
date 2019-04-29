import $ from 'jquery'
import data from './app/app';                                    

import "../css/style.css";

let people = data.people;
$.each(people,function(key,value){
    $("body").append("<h1>" + people[key].name + "</h1>");
});

