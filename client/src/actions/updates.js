import { baseUrl } from "../constants";
import * as request from 'superagent'


export const FETCH_ALL_UPDATES = 'FETCH_ALL_UPDATES'    

export const fetchUpdates = () => dispatch => {
    // console.log('happening?')
    request
        .get(`${baseUrl}/updates`)
        // .set("Authorization", `Bearer ${jwt}`)
        .then(result => {
            dispatch({
                type: FETCH_ALL_UPDATES,
                payload: result.body
            })
        })
}