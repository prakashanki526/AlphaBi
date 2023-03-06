import React, { useEffect, useState } from 'react';
import styles from './DisplayArea.module.css';
import Card from '../card/Card';
import ReactPaginate from 'react-paginate';

const DisplayArea = (props) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [currentItems, setCurrentItems] = useState([]);

    const lastPostIndex = currentPage * 3 ;
    const firstPostIndex = lastPostIndex - 3 ;
    const pageCount = Math.floor(props.dataList.length/3);

    useEffect(()=>{
        setCurrentItems(props.dataList.slice(firstPostIndex,lastPostIndex));
    },[props.dataList,currentPage])

    function handlePageClick(event){
        const newPage = ((event.selected+1) * 3) % props.dataList.length;
        setCurrentPage(newPage);
    }


    return (
        <div className={styles.container}>
            <div className={styles.cardContainer}>
                {currentItems.map((item,index) => {
                    return (
                        <Card data={item} key={index} />
                    )
                })}
            </div>
            <div className={styles.pages}>
                <ReactPaginate
                    breakLabel="..."
                    nextLabel="next >"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={2}
                    pageCount={pageCount}
                    previousLabel="< previous"
                    renderOnZeroPageCount={null}
                    className={styles.paginationContainer}
                    pageClassName={styles.page}
                    activeClassName={styles.currentPage}
                />
            </div>
        </div>
    );
};

export default DisplayArea;