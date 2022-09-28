//this file serves as an entry point-- this will pull the logic from both files below
import "./form";
import "./submit";
//allows us to use and import images
import Logo from '../images/logo.png'
import Bear from '../images/bear.png';
import Dog from '../images/dog.png';

window.addEventListener('load', function () {
    document.getElementById('logo').src = Logo;
    document.getElementById('bearThumbnail').src = Bear;
    document.getElementById('dogThumbnail').src = Dog;
  });