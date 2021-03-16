import { API } from "../../components/Api/api";
import { SET_RESULT } from "../../constants";

const setResult = (result) => ({type: SET_RESULT, result})
export const getResult = (query) => async (dispatch) => {
    const response = await API.getSearch (query)
    debugger
}