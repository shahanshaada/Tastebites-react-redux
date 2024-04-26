import style from './RecipeTemplate.module.scss';
import Row from '../Row/Row';
import { RECIPE } from '../../constants';

function RecipeTemplate() {
    const recipe = RECIPE;
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
