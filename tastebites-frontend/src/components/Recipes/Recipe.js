import style from './Recipe.module.scss';
import Row from '../../shared-components/Row/Row';
import {Link} from 'react-router-dom'
import { FRESH_RECIPES, LATEST_RECIPES } from '../../constants';

function Recipe() {
    const latestRecipes = LATEST_RECIPES;
    const freshRecipes = FRESH_RECIPES;
    return (
        <Row>
            <div className={`row ${style.container}`}>
        
                {/* Latest Recipes */}
                <div className="col-md-8">
                    <div className={style.title}>Latest Recipes</div>
                    <div >
                        {latestRecipes.map((card, index) => {
                            return <Link  to={`/recipe/${card.id}`}>
                            <div key={index} className={style.cardOuter}>
                                <img className={style.latestCardImage} alt="card" src={card.image} />
                                <div className={style.latestCards}>
                                    <div className={style.titleCard}>{card.title}</div>
                                    <p>{card.description}</p>
                                    <div className={style.authorBox}>
                                        <div className={style.author}><img alt="card" src={card.authorPic} /> <span>{card.authorName}</span></div>
                                        <div className={style.date}>{card.postedOn}</div>
                                    </div>
                                </div>
                            </div>
                            </Link>
                        })}
                    </div>
                </div>

                {/* Fresh Recipes */}
                <div className="col-md-4">
                    <div className={style.title}>Fresh Recipes</div>
                    <div>
                        {freshRecipes.map((card, index) => {
                            return <div key={index}>
                                <img alt="card" className={style.freshCardImage} src={card.image} />
                                <div className={style.freshCard}>{card.title}</div>

                            </div>
                        })}
                    </div>
                </div>
            </div>
        </Row>
    );
}

export default Recipe;
