import { SET_CURRENT_PAGE } from "../../constants";

export const setCurrentPage = (currentPage) => {
    return {type: SET_CURRENT_PAGE, currentPage}
}