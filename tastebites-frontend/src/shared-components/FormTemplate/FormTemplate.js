import style from './FormTemplate.module.scss';
import Row from '../Row/Row';
import {Link} from 'react-router-dom';

function FormTemplate(props) {
  return (
    <div className={style.banner}>
        <div>
        <div className={style.title}>{props.templateData.title}</div>

        {props.children}

        </div>
<img src={props.templateData.image}/>
</div>
  );
}

export default FormTemplate;
