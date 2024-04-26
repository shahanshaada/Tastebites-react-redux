import style from './FormTemplate.module.scss';

function FormTemplate(props) {
  return (
    <div className={style.banner}>
        <div>
        <div className={style.title}>{props.templateData.title}</div>

        {props.children}

        </div>
<img alt='form' src={props.templateData.image}/>
</div>
  );
}

export default FormTemplate;
