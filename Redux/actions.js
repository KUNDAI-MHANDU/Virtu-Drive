export const SET_EMAIL = 'SET_EMAIL';

export const setEmail = email => dispatch => {
    dispatch({
        type: SET_EMAIL,
        payload: email,
    });
};
