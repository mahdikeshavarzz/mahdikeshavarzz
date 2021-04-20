import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  b: {
    color: "white",
  },
  gridCardLeft: {
    display: "flex",
    justifyContent: "center",
    marginTop: "3.4rem",
  },

  cardGridRootLeft: {
    display: "flex",
    flexDirection: "column",
  },

  cardRootLeft: {
    backgroundColor: "black",
    border: "2px solid orange",
    boxShadow: "0px 0px 20px orange",
    width: "25rem",
    borderRadius: "20px",
    height: "15rem",
  },
  smallCardRootLeft: {
    backgroundColor: "black",
    border: "2px solid orange",
    boxShadow: "0px 0px 20px orange",
    width: "100%",
    borderRadius: "20px",
    height: "15rem",
    marginTop: "3.4rem",
  },
}));

export default useStyles;
