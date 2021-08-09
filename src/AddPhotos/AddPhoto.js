import React from 'react';
import styles from './addPhoto.module.css';

function AddPhotos(){
    return(
        <form className={styles.fieldWrapper}>
            <label className={styles.fieldFileWrapper}>
                <input type="file" name="file" id="field__file-2" className={styles.fieldFile} multiple/>
                <div className={styles.fieldFileFake}>Файл не выбран</div>
                <div className={styles.fieldFileButton}>Выбрать</div>
            </label>
        </form>
    );
}

export default AddPhotos;