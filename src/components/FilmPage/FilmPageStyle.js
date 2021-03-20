import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  posterbg: {
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    "&:after": {
      content: '""',
      width: "100%",
      height: "100%",
      backgroundColor: "black",
      position: "absolute",
      opacity: "0.5",
      top: 0,
      left: 0,
    },
  },
  title: {
    color: "#fff",
    zIndex: 2,
    position: "relative",
    padding: "0px 10px 0px 10px",
    textAlign: "center",
    fontSize: 30,
  },
  container: {
    maxWidth: 1000,
    margin: "0 auto",
  },
  cardRow: {
    display: "flex",
    justifyContent: "space-between",
  },
  overview: {
    maxWidth: 600,
  },
  recommendationRow: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
  recTitlte: {
    textAlign: "center",
    paddingTop: 50,
  },
  "@media (max-width: 700px)": {
    cardRow: {
      flexDirection: "column",
    },
    overview: {
      paddingTop: 25,
    },
  },
}));
