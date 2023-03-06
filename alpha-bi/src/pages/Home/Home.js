import React from 'react';
import styles from './Home.module.css';
import Body from '../../components/Body/Body';

const Home = () => {
    return (
        <div className={styles.home}>
            <Body />
        </div>
    );
};

export default Home;