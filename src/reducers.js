import { combineReducers } from "redux";
import { ADD_TO_DO, TOGGLE_TODO, DELETE_TO_DO, INIT_TODO } from "./actions";

const todos = (state = [], action) => {
    switch (action.type) {
        case ADD_TO_DO:
            return [...state, action.payload];
        case TOGGLE_TODO:
            return state.map(todo =>
                todo.id === action.payload ? { ...todo, done: !todo.done }
                    : todo);
        case DELETE_TO_DO:
            return state.filter(todo => todo.id !== action.payload);
        case INIT_TODO:
            return action.payload;
        default:
            return state;
    }
}

export default combineReducers({
    todos
});