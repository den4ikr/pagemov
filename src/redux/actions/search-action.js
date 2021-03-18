import { API } from "../../Api/api";
import { SET_RESULT } from "../../constants";

const setResult = (result) => ({type: SET_RESULT, result})
export const getResult = (query) => async (dispatch) => {
    const response = await API.getSearch (query)
    dispatch (setResult(response.data))
}