const header = document.getElementById('header');
const title = document.getElementById('title');
const excerpt = document.getElementById('excerpt');
const profile_img = document.getElementById('profile_img');
const name = document.getElementById('name');
const date = document.getElementById('date');

const animated_bgs = document.querySelectorAll('.animated-bg');
const animated_bg_texts = document.querySelectorAll('.animated-bg-text');

setTimeout(getData, 2500);

function getData() {
  header.innerHTML =
    '<img src="https://images.unsplash.com/photo-1687628618098-216d396a6ff2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4OTY3MTM1NQ&ixlib=rb-4.0.3&q=80&w=1080" alt="" />';
  title.innerHTML = 'Lorem ipsum dolor sit amet.';
  excerpt.innerHTML =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore perferendis.';
  profile_img.innerHTML = `        <img
              src="https://randomuser.me/api/portraits/women/75.jpg"
              alt=""
            />`;
  name.innerHTML = 'Jane Doe';
  date.innerHTML = 'Oct 08, 2023';

  animated_bgs = forEach((bg) => bg.classList.remove('animated-bg'));
  animated_bg_texts = forEach((bg) => bg.classList.remove('animated-bg-text'));
}
