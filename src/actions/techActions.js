import { SET_LOADING, ADD_TECH, GET_TECHS, DELETE_TECH, TECHS_ERROR } from './types';

// Get Logs from server
export const getTechs = () => async (dispatch) => {

    try {
        setLoading();

        const res = await fetch('/techs');
        const data = await res.json();

        dispatch({
            type: GET_TECHS,
            payload: data
        })
    }
    catch (err) {
        dispatch({
            type: TECHS_ERROR,
            payload: err.response.statusText
        })
    }
};


// Add tech to server
export const addTech = (tech) => async (dispatch) => {

    try {
        setLoading();

        const res = await fetch('/techs', {
            method: "POST",
            body: JSON.stringify(tech),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await res.json();

        dispatch({
            type: ADD_TECH,
            payload: data
        })
    }
    catch (err) {
        dispatch({
            type: TECHS_ERROR,
            payload: err.response.statusText
        })
    }

};


// Delete Tech from server
export const deleteTech = (id) => async (dispatch) => {

    try {
        setLoading();

        await fetch(`/techs/${id}`, {
            method: "DELETE",

        });

        dispatch({
            type: DELETE_TECH,
            payload: id
        })
    }
    catch (err) {
        dispatch({
            type: TECHS_ERROR,
            payload: err.response.statusText
        })
    }

};



// set loading to true 
export const setLoading = () => {
    return {
        type: SET_LOADING
    }
}