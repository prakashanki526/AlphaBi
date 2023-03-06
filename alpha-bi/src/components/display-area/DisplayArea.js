import React from 'react';
import styles from './DisplayArea.module.css';
import Card from '../card/Card';

const DisplayArea = () => {
    return (
        <div className={styles.container}>
            <div className={styles.cardContainer}>
                <Card />
                <Card />
                <Card />
            </div>
            <div className={styles.pages}>

            </div>
        </div>
    );
};

export default DisplayArea;