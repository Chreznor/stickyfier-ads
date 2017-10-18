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

const initializeBtn = document.querySelector('#initialize');
const disableBtn = document.querySelector('#disable');
const crosses = document.querySelectorAll('.cross');
console.log(crosses);

const headlineContainers = document.querySelectorAll('.headline-container');
const listContainers = document.querySelectorAll('.list-container');

//importing the stickyfier module
const stickyfier = require('./stickyfier.js');
//getting the object with the functions
const methods = stickyfier(headlineContainers, listContainers);
console.log(methods);

crosses.forEach(cross => cross.addEventListener('click', methods.removeSticky));
initializeBtn.addEventListener('click', methods.initialize);
disableBtn.addEventListener('click', methods.disable);
