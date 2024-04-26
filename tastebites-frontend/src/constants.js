import { REPO_URL } from "./environments/env";

export const REGEXEMAIL = /^[^\s@]+@[^\s@]+\.(com)$/;
export const REGEXPASSWORD = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
export const REGEXDIGIT=/^\d+$/;
// actionTypes.js
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const ADD_RATING = 'ADD_RATING';
export const LOGOUT = 'LOGOUT';
export const CURATED_COLLECTION_DATA=[
    {title:'Sushi combos for your next party',image:'/curatedCollection/japanese-food-sushi-sashimi.png',noOfRecipes:150},
    {title:'Everything Bagel',image:'/curatedCollection/bagel-sandwich.png',noOfRecipes:150},
    {title:'Biriyani combos',image:'/curatedCollection/indian-traditional-dish-with-rice-lemon-tomato-coriander-leaf-cutlery-wooden-tray.png',noOfRecipes:150},
    {title:'Dinner recipe ideas',image:'/curatedCollection/cheese-mayyonaise-salad-salted-peppered-tasty-inside-white-plate-brown-wood-desk.png',noOfRecipes:150},
    {title:'The ultimate cookie frenzy',image:'/curatedCollection/delicious-cookies-with-glass-milk.png',noOfRecipes:150},
    {title:'for the love of donuts',image:'/curatedCollection/pexels-alisha-mishra.png',noOfRecipes:150},

]
export const RECIPE = {
    image: `${REPO_URL}recipes/pumpkin-pie.png`,
    title: 'Pumpkin marshmallow pie',
    ingredients: ['1 9-inch pie crust (pre-made or homemade)',
        '1 cup canned pumpkin puree',
        '3/4 cup granulated sugar',
        '1 tsp ground cinnamon',
        '1/2 tsp ground ginger',
        '1/4 tsp ground nutmeg',
        '1/4 tsp salt',
        '2 large eggs',
        '1 cup evaporated milk',
        '1 cup mini marshmallows'],
    instructions: [
        'Preheat your oven to 425°F (220°C).',
        'Place the pie crust in a 9-inch pie dish and crimp the edges as desired.',
        'In a large mixing bowl, combine the pumpkin puree, sugar, cinnamon, ginger, nutmeg, and salt. Mix until well combined.',
        'Beat in the eggs, one at a time, until fully incorporated.',
        'Gradually stir in the evaporated milk until the mixture is smooth.',
        'Pour the pumpkin mixture into the prepared pie crust.',
        'Bake the pie in the preheated oven for 15 minutes.',
        'After 15 minutes, remove the pie from the oven and carefully sprinkle the mini marshmallows over the top.',
        'Return the pie to the oven and bake for an additional 20-25 minutes, or until the marshmallows are golden brown and the filling is set.',
        'Once done, remove the pie from the oven and allow it to cool completely before serving.'
    ]
}

export const LATEST_RECIPES = [
    {
        id:'1',
        image: 'recipes/pie.png', title: 'Pumpkin marshmallow pie', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. '
        , authorName: 'John Doe', authorPic: 'recipes/author.svg', postedOn: 'yesterday'
    },
    {   id:'2',
        image: 'recipes/pie.png', title: 'Pumpkin marshmallow pie', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. '
        , authorName: 'John Doe', authorPic: 'recipes/author.svg', postedOn: 'yesterday'
    }
]

export const FRESH_RECIPES = [
    {id:'3', image: 'recipes/aloo.png', title: 'Pumpkin marshmallow pie' },
    {id:'4', image: 'recipes/thai.png', title: 'Pumpkin marshmallow pie' },
    {id:'5', image: 'recipes/skewers.png', title: 'Pumpkin marshmallow pie' },
    { id:'6',image: 'recipes/spagathi.png', title: 'Pumpkin marshmallow pie' },

]

export const RATED_RECIPES = [
    { id:'very-berry',title: 'Very berry Healthy Summer Smoothie', image: '/ratedRecipes/very-berry.png', rating: '' },
    { id:'ginger',title: 'Carrot and ginger soup', image: '/ratedRecipes/carrot-ginger.png', rating: '' },
    { id:'loaded-berry',title: 'Loaded mixed berries Minitart', image: '/ratedRecipes/loaded-berry.png', rating: '' },

]