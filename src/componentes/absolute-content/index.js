import styles from './absolute_content.module.css';

function AbsoluteContent({children}) {
    return ( 
        <>
            <div className={styles.content}>
                {children}
            </div>
        </>
     );
}

export default AbsoluteContent;