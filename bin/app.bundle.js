/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//It would take a lot of time to create 100 blocks. Therefore, I've made a small function to generate them.
// function generateEntries() {
//     const list = document.querySelector('.list');
//     for (let i = 0; i < 100; i++) {
//         const classes = ['red', 'wheat', 'crimson', 'green', 'coral', 'purple', 'dark-blue', 'red', 'wheat', 'crimson', 'green', 'coral', 'purple', 'dark-blue'];
//         list.innerHTML +=
//         ` <li class="list-container">
//             <div class="headline-container ${classes[Math.floor(Math.random() * classes.length)]}">
//               <script type="text/javascript">
//                 google_ad_client = "ca-pub-6733417337840393";
//                 google_ad_slot = "1294553420";
//                 google_ad_width = 728;
//                 google_ad_height = 90;
//               </script>
//               <!-- leaderboard -->
//               <script type="text/javascript"
//                 src="//pagead2.googlesyndication.com/pagead/show_ads.js">
//               </script>
//             </div>
//             <div class="text-container">
//               <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor nostrum harum assumenda voluptate sed! Ullam repellat eum qui necessitatibus odit illo, harum praesentium omnis reiciendis neque. Vel iure dicta, modi in, quidem aliquid exercitationem autem minima repudiandae hic est numquam totam nesciunt, ipsa ipsum. Velit hic, dolore numquam tempore voluptatum nesciunt! Minima soluta laborum doloremque? Ipsam, at excepturi nam necessitatibus, amet saepe. Velit eos, dolorum debitis? Doloribus vero, dolorum quia nesciunt soluta, sint unde tempora neque provident dolorem explicabo molestiae expedita delectus corporis, aut magni laboriosam cumque. Molestiae aperiam, dolore fugiat dolores amet! Itaque recusandae, repellendus magnam ullam aut accusantium?</p>
//               <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque tenetur dicta, optio cumque adipisci fugit iure? Expedita sit eligendi, recusandae, quia repellat neque quis. Molestiae ab, beatae, laboriosam inventore dolorem esse deserunt, voluptatibus optio consequuntur aliquid distinctio? Aspernatur nemo atque, amet vel similique, voluptatum! Fugiat dolorem quam necessitatibus, ab excepturi ut praesentium quos aliquam soluta quibusdam error fuga voluptas et beatae quae architecto assumenda facere unde voluptates. Maxime, perspiciatis nostrum.</p>
//             </div>
//           </li>
//       `;
//     }
// };
//generateEntries();

//importing the stickyfier module
var stickyfier = __webpack_require__(1);

var initializeBtn = document.querySelector('#initialize');
var disableBtn = document.querySelector('#disable');
var crosses = document.querySelectorAll('.cross-container');

var headlineContainers = document.querySelectorAll('.headline-container');
var listContainers = document.querySelectorAll('.list-container');

//getting the object with the functions
var methods = stickyfier(headlineContainers, listContainers);
console.log(methods);

for (var i = 0; i < crosses.length; i++) {
  crosses[i].addEventListener('click', methods.removeSticky);
}
initializeBtn.addEventListener('click', methods.initialize);
disableBtn.addEventListener('click', methods.disable);

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var stickyfier = function stickyfier(headlineContainers, listContainers) {
  //The headline container's parent element is also needed to correctly identify the distances between the texts

  //the private function that stickyfies the headlines
  var fixedHeadline = function fixedHeadline() {

    //a for loop is used to keep track of every element in the DOM collection
    for (var i = 0; i < headlineContainers.length; i++) {
      var headlineContainer = headlineContainers[i];
      var headlineContainerTop = headlineContainer.getBoundingClientRect().top + window.scrollY;
      var listEntry = listContainers[i];

      if (window.scrollY >= listEntry.getBoundingClientRect().top + window.scrollY) {
        //it's really important to add headline container's height to the padding of its parent element
        //in order to avoid the jumping of the text content once the fixed element leaves the regular DOM flow
        listEntry.style.paddingTop = headlineContainer.getBoundingClientRect().height + 'px';
        headlineContainer.classList.add('fixed-nav');
      } else {
        listEntry.style.paddingTop = 0;
        headlineContainer.classList.remove('fixed-nav');
      }
    }
  };

  var handler = void 0;
  //handles the case when initialize is pressed more than once, after which the event listener cannot be removed with disable
  var preventFire = false;

  //a quickly done scroll optimization
  function throttle(func, wait) {
    var time = Date.now();
    return function () {
      if (time + wait - Date.now() < 0) {
        func();
        time = Date.now();
      }
    };
  }

  //returning two functions that add or remove the event listener to the window scroll
  return {
    initialize: function initialize() {
      if (preventFire === false) {
        handler = throttle(fixedHeadline, 100);
        window.addEventListener('scroll', handler);
      }
      preventFire = true;
    },
    disable: function disable() {
      window.removeEventListener('scroll', handler);
      preventFire = false;
      //once the event lisntener is removed, the attached classes have to go too
      //restoring the listContainers' padding

      for (var i = 0; i < headlineContainers.length; i++) {
        headlineContainers[i].classList.remove('fixed-nav');
        listContainers[i].style.paddingTop = 0;
      }
    },
    removeSticky: function removeSticky(e) {
      e.target.parentElement.style.display = 'none';
      for (var i = 0; i < headlineContainers.length; i++) {
        headlineContainers[i].classList.remove('fixed-nav');
        listContainers[i].style.paddingTop = 0;
      }
    }
  };
};

module.exports = stickyfier;

/***/ })
/******/ ]);
//# sourceMappingURL=app.bundle.js.map