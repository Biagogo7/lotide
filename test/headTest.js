const assertEqual = require('../assertEqual');

const head = require('../head');
//const head = require('/home/labber/w1/lotide/head.js');

//TEST CODE - head

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([7]), 7);
assertEqual(head([]), 5);


