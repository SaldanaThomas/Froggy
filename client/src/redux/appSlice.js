import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  username: '',
  password: '',
  currentUser: '',
  currentDrink: {},
  userDrinks: [],
  popularDrinks: [],
  latestDrinks: [],
  categories: [],
  ingredients: [],
  alcoholic: [],
  glass: [],
  filter: '',
  filteredDrinks: [],
  query: '',
};

const appSlice = createSlice({
  name: 'App',
  initialState,
  reducers: {
    setUsername: (state, action) => {
      state.username = action.payload;
    },

    setPassword: (state, action) => {
      state.password = action.payload;
    },

    setCurrentUser: (state, action) => {
      state.currentUser = action.payload;
    },

    setCurrentDrink: (state, action) => {
      state.currentDrink = action.payload;
    },

    setUserDrinks: (state, action) => {
      state.userDrinks = action.payload;
    },

    setPopularDrinks: (state, action) => {
      state.popularDrinks = action.payload;
    },

    setLatestDrinks: (state, action) => {
      state.latestDrinks = action.payload;
    },

    setCategories: (state, action) => {
      state.categories = action.payload;
    },

    setIngredients: (state, action) => {
      state.ingredients = action.payload;
    },

    setAlcoholic: (state, action) => {
      state.alcoholic = action.payload;
    },

    setGlass: (state, action) => {
      state.glass = action.payload;
    },

    setFilter: (state, action) => {
      state.filter = action.payload;
    },

    setFilteredDrinks: (state, action) => {
      state.filteredDrinks = action.payload;
    },

    setQuery: (state, action) => {
      state.query = action.payload;
    },

  },
});

export const {
  setUsername,
  setPassword,
  setCurrentUser,
  setCurrentDrink,
  setUserDrinks,
  setPopularDrinks,
  setLatestDrinks,
  setCategories,
  setIngredients,
  setAlcoholic,
  setGlass,
  setFilter,
  setFilteredDrinks,
  setQuery,
} = appSlice.actions;
export default appSlice.reducer;
