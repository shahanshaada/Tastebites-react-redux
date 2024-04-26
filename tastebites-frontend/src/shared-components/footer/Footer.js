import style from './Footer.module.scss';
import Row from '../Row/Row';

function Footer() {
const footerItem=['home','about','contact','article']
  return (
<footer className={style.footerContainer}>
<Row>
    <div className={style.innerContainer}>
<img className={style.logo} alt='logo'  src="/Tastebites.png"/>
<ul>
{footerItem.map((item,index)=>{
    return <li key={index}>{item}</li>
})}
</ul>
    </div>
    <div className={style.copywrite}>
    2024 © Copyright | All Rights Reserved
    </div>
</Row>
</footer>
  );
}

export default Footer;
