// - Gather 10.000 candies!
// - Clicking the ‘Create candies’ button gives you 1 candy.
// - You can buy a lollipop for 100 candies by clicking the ‘Buy lollipop’ button.
// - 10 lollipops generate 1 candy per second.
//   - Use the 🍭 emoji to display the lollipops you have
// - Display the candy producton rate in the `Candies / Second` row
// - If you press the "make candy rain" button, the candy generation should speed up 10x


const candies = document.querySelector('.stats .candies');
const lollipops = document.querySelector('.stats .lollipops');
const speed = document.querySelector('.stats .speed');
let timer;

const createCandyButton = document.querySelector('button.create-candies');
createCandyButton.addEventListener('click', () => {
  candies.textContent = parseInt(candies.textContent) + 1;
})

const lollipopButton = document.querySelector('button.buy-lollipops');

lollipopButton.addEventListener('click', () => {
  if (parseInt(candies.textContent) >= 100) {
    candies.textContent = parseInt(candies.textContent) - 100;
    lollipops.textContent += '🍭';
    // console.log(lollipops.textContent.length / 2 );
  }

  let lollipopsNum = lollipops.textContent.length / 2;
  lollipopsNum -= parseInt(speed.textContent) * 10;

  if (lollipopsNum >= 10) {
    speed.textContent = parseInt(speed.textContent) + Math.floor(lollipopsNum / 10);
    timer = setInterval(() => {
      candies.textContent = parseInt(candies.textContent) + parseInt(speed.textContent);
      if (candies.textContent >= 10000) {
        alert('You got 10,000 candies!');
        clearInterval(timer);
      }
    }, 1000)

  }


})

const candyMachineButton = document.querySelector('button.candy-machine');

candyMachineButton.addEventListener('click', () => {
  speed.textContent = parseInt(speed.textContent) * 10;
  // clearInterval(timer);
  // timer = setInterval(() => {
  //   candies.textContent = parseInt(candies.textContent) + parseInt(speed.textContent);
  // }, 1000)
})