import {makeStyles} from "@material-ui/core/styles";

export default makeStyles ( () => ({
    card: {
        width: 320,
        height: 500,
        marginTop: 25,
    },
    poster: {
        width: 300,
        height: 400,
        margin: "0 auto",
        marginTop: 10,
    },
    subRow: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    addIcon: {
        hover: {
            cursor: 'pointer',
        }
    },
    genre: {
        fontSize: 12,
    }
}) )