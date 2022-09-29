//this file serves as an entry point-- this will pull the logic from both files below
import "./form";
import "./submit";
//allows us to use and import images
import Logo from '../images/logo.png'
import Bear from '../images/bear.png';
import Dog from '../images/dog.png';
// Import CSS files
import "../css/index.css";
//import bootstap and popper as dependencies
import { Tooltip, Toast, Popover } from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

window.addEventListener('load', function () {
    document.getElementById('logo').src = Logo;
    document.getElementById('bearThumbnail').src = Bear;
    document.getElementById('dogThumbnail').src = Dog;
  });