import React from 'react';
import styles from './addPhoto.module.css';

function AddPhotos(){
    function defineTypeFile(e){
        const allowFormat = /jpeg|json/gm;
       let files = Object.values(e.target.files);
       let extens;
       let startRegExp = /^[a-zA-Zа-яА-Я\d]+./gm;
       let endRegExp = /\.\D+/gm;
       let formatArr = files.reduce((prev, item) => {
           extens = item.name.replace(startRegExp, '').replace(endRegExp, '');
           if (extens.match(allowFormat) !== null) prev.push(item);
           return prev;
       }, [])
       console.log(formatArr)
    }

    return(
        <form className={styles.fieldWrapper}>
            <label className={styles.fieldFileWrapper}>
                <input type="file" name="file" id="field__file-2" className={styles.fieldFile} multiple onChange={defineTypeFile}/>
                <div className={styles.fieldFileFake}>Файл не выбран</div>
                <div className={styles.fieldFileButton}>Выбрать</div>
            </label>
        </form>
    );
}

export default AddPhotos;