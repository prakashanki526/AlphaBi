import React, { useState } from 'react';
import styles from './Body.module.css';
import Card from '../../components/card/Card';
import DisplayArea from '../display-area/DisplayArea';

const Body = () => {
    const [inputValue, setInputValue] = useState("");

    function handleChange(e){
        setInputValue(e.target.value);
    }

    return (
        <div className={styles.container}>
            <div className={styles.inputContainer}>
                <div className={styles.inputFieldContainer}>
                    <input className={styles.inputField} type='text' value={inputValue} onChange={handleChange}></input>
                </div>
                <div className={styles.searchBtn}>
                    Search
                </div>
            </div>
            <div className={styles.cardContainer}>
                <DisplayArea />
            </div>
        </div>
    );
};

export default Body;