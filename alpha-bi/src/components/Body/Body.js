import React, { useState } from 'react';
import styles from './Body.module.css';
import DisplayArea from '../display-area/DisplayArea';
import { getData } from '../api/discover';
import Spinner from '../Spinner/Spinner'

const Body = () => {
    const [inputValue, setInputValue] = useState("");
    const [dataList, setDataList] = useState([]);
    const [loader, setLoader] = useState(false);

    function handleChange(e){
        setInputValue(e.target.value);
    }

    async function handleSearch(inputValue){
        setLoader(true);
        const data = await getData(inputValue);
        setDataList(data.data);
        setLoader(false);
    }

    return (
        <div className={styles.container}>
            <div className={styles.inputContainer}>
                <div className={styles.inputFieldContainer}>
                    <input className={styles.inputField} type='text' value={inputValue} onChange={handleChange}></input>
                </div>
                <div className={styles.searchBtn} onClick={()=>handleSearch(inputValue)}>
                    Search
                </div>
            </div>
            <div className={styles.cardContainer}>
                {loader && <Spinner />}
                {!loader && <DisplayArea dataList={dataList} setLoader={setLoader} />}
            </div>
        </div>
    );
};

export default Body;