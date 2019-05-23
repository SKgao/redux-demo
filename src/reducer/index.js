import { combineReducers } from 'redux'

import counterReducer from './counter_reducer'
import postReducer from './post_reducer'

const rootReducer = combineReducers({
    counterReducer,
    postReducer
})

export default rootReducer