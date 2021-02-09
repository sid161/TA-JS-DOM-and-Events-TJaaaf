const game = document.getElementById('game')

// Create a section with a class of grid
const grid = document.createElement('section')
grid.setAttribute('class', 'grid')

// Append the grid section to the game div
game.appendChild(grid)

cardsArray.forEach((item) => {
    // Create a div
    const card = document.createElement('div')
  
    // Apply a card class to that div
    card.classList.add('card')
  
    // Set the data-name attribute of the div to the cardsArray name
    card.dataset.name = item.name
  
    // Apply the background image of the div to the cardsArray image
    card.style.backgroundImage = `url(${item.img})`
  
    // Append the div to the grid section
    grid.appendChild(card)
  })

  let gameGrid = cardsArray.concat(cardsArray)
  gameGrid.sort(() => 0.5 - Math.random())

  gameGrid.forEach((item) => {
    // Create a div
    const card = document.createElement('div')
  
    // Apply a card class to that div
    card.classList.add('card')
  
    // Set the data-name attribute of the div to the cardsArray name
    card.dataset.name = item.name
  
    // Apply the background image of the div to the cardsArray image
    card.style.backgroundImage = `url(${item.img})`
  
    // Append the div to the grid section
    grid.appendChild(card)
  })

 

  grid.addEventListener('click', function (event) {
    // The event target is our clicked item
      
    let count = 0
  
    // Do not allow the grid section itself to be selected; only select divs inside the grid
    if (count < 2) {
        count++
        // Add selected class
        clicked.classList.add('selected')
      }
  })

  let count = 0

  