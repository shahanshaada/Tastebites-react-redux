import style from './CuratedCollection.module.scss';
import Row from '../../shared-components/Row/Row';
import { CURATED_COLLECTION_DATA } from '../../constants';


function CuratedCollection() {
    const data=CURATED_COLLECTION_DATA;
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
                <img alt='card' src={card.image}/>
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
