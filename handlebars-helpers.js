const Handlebars = require('handlebars')

Handlebars.registerHelper('categoryIcon', (category) => {
  // category icon
  const categoryImage = {
    'living': '<i class="fas fa-home"></i>',
    'traffic': '<i class="fas fa-shuttle-van"></i>',
    'recreation': '<i class="fas fa-grin-beam"></i>',
    'food': '<i class="fas fa-utensils"></i>',
    'other': '<i class="fas fa-pen"></i>',
  }
  // gategory match categoryImage key return value
  return categoryImage[category]
})