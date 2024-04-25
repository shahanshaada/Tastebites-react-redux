import style from './CuratedCollection.module.scss';
import Row from '../../shared-components/Row/Row';

function CuratedCollection() {
    const data=[
        {title:'Sushi combos for your next party',image:'/curatedCollection/japanese-food-sushi-sashimi.png',noOfRecipes:150},
        {title:'Everything Bagel',image:'/curatedCollection/bagel-sandwich.png',noOfRecipes:150},
        {title:'Biriyani combos',image:'/curatedCollection/indian-traditional-dish-with-rice-lemon-tomato-coriander-leaf-cutlery-wooden-tray.png',noOfRecipes:150},
        {title:'Dinner recipe ideas',image:'/curatedCollection/cheese-mayyonaise-salad-salted-peppered-tasty-inside-white-plate-brown-wood-desk.png',noOfRecipes:150},
        {title:'The ultimate cookie frenzy',image:'/curatedCollection/delicious-cookies-with-glass-milk.png',noOfRecipes:150},
        {title:'for the love of donuts',image:'/curatedCollection/pexels-alisha-mishra.png',noOfRecipes:150},

    ]
  return (
    <div className={style.container}>
<Row>
    <div className={style.title} >
    curated collections
    </div>
    <div className="row custom-gutter">
        {data.map((card,index)=>{
            return <div key={index} className={`col-md-4 col-sm-12 ${style.card}`} >
                <div className='h-100' style={{position:'relative'}}>
                <img src={card.image}/>
            <div className={style.cardTitle}>{card.title}</div>
            <button className={style.redButton}>{card.noOfRecipes} Recipes</button>
            </div>
            </div>})
        }
    </div>

</Row>
</div>
  );
}

export default CuratedCollection;
