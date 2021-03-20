import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  row: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
  },
  paginator: {
    display: "flex",
    justifyContent: "center",
    marginTop: 50,
    marginBottom: 50,
  },
}));
