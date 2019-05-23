import { getPostRequest } from '../services/post_api'

export const loadPostAction = async (dispatch) => {
    const res = await getPostRequest()
    dispatch({
        type: 'LOAD_POST',
        payload: res.data
    })
}