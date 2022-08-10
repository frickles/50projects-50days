const jokeElement = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn');

//With async/await
const generateJoke = async () => {
  const config = {
    headers: {
      Accept: 'application/json',
    },
  };

  const res = await fetch('https://icanhazdadjoke.com/', config);

  const data = await res.json();

  jokeElement.innerHTML = data.joke;
};

// // With .then
// const generateJoke = () => {
//   const config = {
//     headers: {
//       Accept: 'application/json',
//     },
//   };

//   fetch('https://icanhazdadjoke.com/', config)
//     .then((res) => res.json())
//     .then((data) => {
//       jokeElement.innerHTML = data.joke;
//     });
// };

generateJoke();

jokeBtn.addEventListener('click', generateJoke);
