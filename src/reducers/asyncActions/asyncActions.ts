import { AppDispatch, RootState } from "../../app/store";
import { baseURL, createToken } from "../../utils/const";
import { UserRegistration } from "../../utils/types";
import { putToken } from "../tokenSlice";
import { putUser } from "../userSlice";

export const registrationUser = (user: UserRegistration) => {
    return (dispatch: AppDispatch) => {
        fetch(`${baseURL}/user`, {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => {
                if (response.ok) {
                    return response.json()
                }
                else {
                    throw new Error(response.status.toString())
                }
            })
            .then(userProfile => {
                dispatch(putUser(userProfile));
                dispatch(putToken(createToken(user.login, user.password)))
            })
            .catch(e => console.log(e.message))
    }
}

export const fetchUser = (token: string) => {
    return (dispatch: AppDispatch) => {
        fetch(`${baseURL}/login`, {
            method: 'POST',
            headers: {
                Authorization: token
            }
        })
            .then(response => {
                if (response.ok) {
                    return response.json()
                }
                else {
                    throw new Error(response.status.toString())
                }
            })
            .then(userProfile => {
                dispatch(putUser(userProfile));
                dispatch(putToken(token))
            })
            .catch(e => console.log(e.message))
    }
}

export const updateUser = (firstName: string, lastName: string) => {
    return (dispatch: AppDispatch, getState: () => RootState) => {
        fetch(`${baseURL}/user`, {
            method: 'PUT',
            body: JSON.stringify({ firstName, lastName }),
            headers: {
                Authorization: getState().token as string
            }
        })
            .then(response => {
                if (response.ok) {
                    return response.json()
                }
                else {
                    throw new Error(response.status.toString())
                }
            })
            .then(userProfile => {
                dispatch(putUser(userProfile));
            })
            .catch(e => console.log(e.message))
    }
}

export const changePassword = (oldPass: string, newPass: string) => {
    return (dispatch: AppDispatch, getState: () => RootState) => {
        fetch(`${baseURL}/user/password`, {
            method: 'PUT',
            headers: {
                'X-Password' : newPass,
                Authorization: createToken(getState().user!.login, oldPass),
            },
        })
            .then(response => {
                if (response.ok) {
                    dispatch(putToken(createToken(getState().user!.login, newPass)));
                }
                else {
                    throw new Error(response.status.toString());
                }
            })
            .catch(e => console.log(e.message))
    }
}
