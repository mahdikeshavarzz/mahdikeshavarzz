import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  b: {
    color: "white",
  },
  cardGridRootLeft: {
    display: "flex",
    flexDirection: "column",
  },

  gridCardLeft: {
    display: "flex",
    justifyContent: "flex-end",
    marginTop: "3.4rem",
  },
  cardRootLeft: {
    backgroundColor: "black",
    border: "2px solid orange",
    boxShadow: "0px 0px 20px orange",
    width: "25rem",
    borderRadius: "20px",
    height: "15rem",
  },
}));

export default useStyles;
