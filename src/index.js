// import destructuring from './destructuring';     
 import promise from './promise';
//import generator from './generator';
import class1 from "./class";

import decorator from './decorator';

import {fetch} from 'whatwg-fetch';
// destructuring();
// promise();





import axios from 'axios';

axios('/json/1.json').
    then(function (res) {
        console.log(res);
    });

fetch('/json/1.json')
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    console.log(myJson);
  });


//   fetch('/json/img.png').then(function(response) {
//       let dd=response.blob();
    
//     console.log(dd);
//     return dd;
//   }).then(function(response) {
//       console.log(response);
//     var objectURL = URL.createObjectURL(response);
//     var img=document.createElement('img');
//     img.src=objectURL;
//     document.body.appendChild(img);
//     console.log(objectURL);
//   });

  