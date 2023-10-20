import { combineReducers } from "redux";

import userReducer from "./Users/user-reducer";
import cartReducer from "./Cart/cart-slices";

const rootReducer = combineReducers({ userReducer, cartReducer })

export default rootReducer