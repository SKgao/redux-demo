import { get } from 'axios'

export const getPostRequest = () => {
    return get('http://jsonplaceholder.typicode.com/posts')
}