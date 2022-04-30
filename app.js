const colors = ['#112B3C', '#205375', '#DAE5D0', '#AB46D2', '#AC7D88', '#83BD75', 'red', 'grey']

const btn = document.getElementById('btn')
const color = document.querySelector('.color')

btn.addEventListener('click', function () {
  // Get random number between 0 - 3 => colors[0]
  const randomNumber = getRandomNumber()
  // console.log(randomNumber)

  document.body.style.backgroundColor = colors[randomNumber]
  color.textContent = colors[randomNumber]
})

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length)
}