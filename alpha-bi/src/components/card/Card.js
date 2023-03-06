import React from 'react';
import styles from './Card.module.css';

const Card = (props) => {
    return (
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <img src={props.data.images.original.url} alt='err' className={styles.image}></img>
            </div>
            <div className={styles.detailsContainer}>
                <div className={styles.title}>{props.data.title}</div>
                <div className={styles.subtitle}>@{props.data.username}</div>
            </div>
        </div>
    );
};

export default Card;