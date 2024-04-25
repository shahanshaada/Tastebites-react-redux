import style from './Banner.module.scss';
import {Link} from 'react-router-dom';
import Row from '../../shared-components/Row/Row';

function Banner() {
  return (
<Row>
    <div className={style.container}>
    <img src="banner.png"/>
<div className={style.content}>
    <div>About US</div>
    <p>
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

    </p>
    <Link to="/about">
    <button className='dark-button'>Read More</button>

    </Link>
</div>
    </div>
</Row>
  );
}

export default Banner;
