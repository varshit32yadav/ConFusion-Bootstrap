const { escapeSelector } = require("jquery");

const x=document.getElementById('#hov');
x.addEventListener('hover',function(){
    const c=('[data-toggle="tooltip"]').tooltip() ;
    c.style.animation='0s ease ';
});