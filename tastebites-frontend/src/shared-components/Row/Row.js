import styles from './Row.module.scss'
export default function Row(props) { 
    return (
      <div className={styles.rowcontainer}>
        {props.children}
      </div>
    );  
}