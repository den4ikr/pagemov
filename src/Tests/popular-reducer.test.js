import {
  setIsFavorite,
  removeFavoriteAction,
} from "../redux/actions/favorite-action";
import { FavoriteReducer } from "../redux/reducers/favorite-reducer";

const state = {
  favorite: [
    { id: 1, title: "Film 1" },
    { id: 2, title: "Film 2" },
  ],
  isFavorite: false,
};

test("remove", () => {
  let action = removeFavoriteAction(2);
  let newState = FavoriteReducer(state, action);

  expect(newState.favorite.length).toBe(1);
});

test("set is favorite", () => {
  let action = setIsFavorite(2);
  let newState = FavoriteReducer(state, action);

  expect(newState.isFavorite).toBeTruthy();
});
