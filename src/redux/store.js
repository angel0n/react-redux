import { configureStore } from '@reduxjs/toolkit'
import logger from 'redux-logger'

import rootReducer from './reducers/root-reducer'

const store = configureStore({
    reducer: rootReducer,
    middleware: [logger]
})

export default store