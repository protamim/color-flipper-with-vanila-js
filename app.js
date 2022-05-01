const colors = ['AliceBlue', 'Blue', 'AntiqueWhite', 'Orange', 'Yellow', 'Purple', 'Aqua', 'red', 'grey', 'Aquamarine', 'Azure', 'Beige', 'Bisque', 'Cyan', 'Coral', 'Indigo', 'Magenta rose', 'BlueViolet', 'Brown', 'BurlyWood', 'CadetBlue', 'Chartreuse', 'Violet', 'Chocolate', 'CornflowerBlue', 'Plum', 'Cornsilk', 'Pink', 'Crimson', 'DarkBlue', 'DarkCyan', 'DarkGoldenRod', 'DarkGray', 'DarkOliveGreen', 'DarkOrchid', 'DarkSlateBlue', 'DarkViolet', 'DeepPink', 'DodgerBlue', 'FireBrick', 'GhostWhite', 'Gold', 'GreenYellow', 'HoneyDew', 'HotPink', 'IndianRed', 'Ivory', 'Khaki', 'Lavender', 'LavenderBlush', 'LawnGreen', 'LemonChiffon', 'LightBlue', 'LightCoral', 'LightCyan', 'LightGoldenRodYellow', 'LightGrey', 'LightGreen', 'LightPink', 'LightSkyBlue', 'Lime', 'Linen', 'MediumBlue', 'MediumVioletRed', 'Navy', 'PapayaWhip', 'RoyalBlue', 'SeaShell', 'SkyBlue', 'Tomato']

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