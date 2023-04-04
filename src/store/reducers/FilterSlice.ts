import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FilterState {
  sortingType: string
  error: string;
  searchContent: string;
  filterType: string;
  minPrice: string;
  maxPrice: string;
  manufacturer: string;
  basketObject: IBasketObject,
  allPrice: number,
  id: string|undefined
}

interface IBasketObject {
  [key: string]: any;
}

const initialState: FilterState = {
  sortingType: "name-toBottom",
  error: "",
  searchContent: "",
  filterType: "",
  minPrice: '1',
  maxPrice: '3000',
  manufacturer: '',
  basketObject: {},
  allPrice: 0,
  id: ''
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    changeSortingType(state, action: PayloadAction<string>) {
      state.sortingType = action.payload;
    },
    changeErrorState(state, action: PayloadAction<string>) {
      state.error = action.payload;
    },
    changeSearchContent(state, action: PayloadAction<string>) {
      state.searchContent = action.payload;
    },
    changeFilterType(state, action: PayloadAction<string>) {
      state.filterType = action.payload;
    },
    changeMaxPrice(state, action: PayloadAction<string>) {
      state.maxPrice = action.payload;
    },
    changeMinPrice(state, action: PayloadAction<string>) {
      state.minPrice = action.payload;
    },
    changeManufacturer(state, action: PayloadAction<string>) {
      state.manufacturer = action.payload;
    },
    reportId(state, action: PayloadAction<string>) {
      state.id = action.payload;
    },
    updateBasketObject(state, action: PayloadAction<{ property: keyof IBasketObject; value: any }>) {
      state.basketObject[action.payload.property] = action.payload.value;
    },
    addBasketProperty: (state, action: PayloadAction<{ property: string; value: any }>) => {
      state.basketObject[action.payload.property] = action.payload.value;
    },
    deleteBasketProperty: (state, action) => {
      delete state.basketObject[action.payload]
    },
    deleteAllBasketProperty: (state) => {
      for (const key of Object.keys(state.basketObject)) {
        delete state.basketObject[key as keyof IBasketObject];
      }
    },
    setAllPrice(state, action: PayloadAction<number>) {
      state.allPrice = action.payload;
    },
  },
});

export default filterSlice.reducer;
