import React, { useState } from "react";
import s from "./Paginator.module.css";

const Paginator = (props) => {
  let pageCount = Math.ceil(props.totalCount / props.pageSize);
  let pages = [];
  let portionSize = 10
  for (let i = 1; i <= pageCount; i++) {  
    pages.push(i);
  }

  let portionCount = Math.ceil(pageCount / portionSize);
  let [portionNumber, setPortionNumber] = useState(1);
  let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
  let rightPortionPageNumber = portionNumber * portionSize;

  return (
    <div className={s.item}>
      {portionNumber > 1 && 
      <button onClick={() => {setPortionNumber(portionNumber - 1)}} className={s.btn}>Prev</button>}
      {pages.filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber )
      .map((p) => {
        return (
          <>
            <span
              className={props.currentPage === p && s.selectedPage}
              onClick={() => {
                props.onPageChanged(p);
              }}
            >
              {p}
            </span>
          </>
        );
      })}
      {portionCount > portionNumber && 
      <button onClick={() => {setPortionNumber(portionNumber + 1)}} className={s.btn}>Next</button>}
    </div>
  );
};

export default Paginator;
