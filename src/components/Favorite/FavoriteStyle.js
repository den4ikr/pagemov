import {makeStyles} from "@material-ui/core/styles";

export default makeStyles ( () => ({
    row: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: "wrap",
    },
    epmtyList: {
        textAlign: "center",
        paddingTop: 100,        
    }
}) )