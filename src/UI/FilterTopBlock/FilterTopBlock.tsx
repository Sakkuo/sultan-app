import React, { useState } from "react";
import "./FilterTopBlock.css";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { filterSlice } from "../../store/reducers/FilterSlice";
import { Filters } from "../../components/FunctionsField";

const FilterTopBlock = () => {
  const { changeSortingType, changeFilterType } = filterSlice.actions;
  const { filterType } = useAppSelector((state) => state.filterReducer);

  const dispatch = useAppDispatch();
  return (
    <div className="FilterTopBlock">
      <div className="FilterTopBlock__articleAndSort">
        <div className="FilterTopBlock__article">Косметика и гигиена</div>
        <div className="FilterTopBlock__sort">
          Сортировка:
          <select
            className="sortingButton"
            name="sorting-type"
            onChange={(e) => dispatch(changeSortingType(e.target.value))}
          >
            <option value="name-toBottom">Название (Убывание)</option>
            <option value="name-toTop">Название (Возрастание)</option>
            <option value="price-toBottom">Цена (Убывание)</option>
            <option value="price-toTop">Цена (Возрастание)</option>
          </select>
        </div>
      </div>
      <Filters filter={filterType} setFilter={changeFilterType} />
    </div>
  );
};

export default FilterTopBlock;
