import React from 'react';
import styles from './Card.module.css';

const Card = () => {
    return (
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <img src='https://cdn.pixabay.com/photo/2023/02/08/07/32/vietnamese-woman-7775904__340.jpg' alt='err' className={styles.image}></img>
            </div>
            <div className={styles.detailsContainer}>
                <div className={styles.title}>Image name</div>
                <div className={styles.subtitle}>Image subtitle</div>
            </div>
        </div>
    );
};

export default Card;