import style from './Recipe.module.scss';
import Row from '../../shared-components/Row/Row';
import {Link} from 'react-router-dom'

function Recipe() {
    const latestRecipes = [
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

    const freshRecipes = [
        {id:'3', image: 'recipes/aloo.png', title: 'Pumpkin marshmallow pie' },
        {id:'4', image: 'recipes/thai.png', title: 'Pumpkin marshmallow pie' },
        {id:'5', image: 'recipes/skewers.png', title: 'Pumpkin marshmallow pie' },
        { id:'6',image: 'recipes/spagathi.png', title: 'Pumpkin marshmallow pie' },

    ]
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
