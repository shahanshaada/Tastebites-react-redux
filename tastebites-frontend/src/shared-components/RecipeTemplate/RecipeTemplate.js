import style from './RecipeTemplate.module.scss';
import { useState } from 'react';
import Row from '../Row/Row';

function RecipeTemplate() {
    const recipe = {
        image: 'http://localhost:3000/recipes/pumpkin-pie.png',
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
    return (
        <Row>
            <div>
            <img className={style.image} src={recipe.image} alt="recipe"/>
            <div className={style.title}>
                {recipe.title}
            </div>
            <div className={style.content}>
                <div className={style.recipe}>Recipe</div>
                <div className={style.intro}>Here's a simple Recipe for {recipe.title}</div>
                <div>Ingredients:</div>
                {recipe.ingredients.map((ingredient,index)=>{
                    return <div>- {ingredient}</div>
                })}
                <div style={{marginTop:30}}>Instructions:</div>
                   {recipe.instructions.map((instruction,index)=>{
                    return <div>{index+1}. {instruction}</div>
                })}
                <div style={{marginTop:30}}>Enjoy your delicious {recipe.title}</div>

            </div>
            </div>
        </Row>
    );
}

export default RecipeTemplate;
