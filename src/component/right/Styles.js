import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  gridCardRight: {
    display: "flex",
    justifyContent: "flex-end",
    marginTop: "3.4rem",
  },
  cardGridRootRight: {
    display: "flex",
    flexDirection: "column",
  },

  cardRootRight: {
    backgroundColor: "black",
    border: "2px solid orange",
    boxShadow: "0px 0px 20px orange",
    width: "25rem",
    borderRadius: "20px",
    height: "15rem",
  },
  b: {
    color: "white",
  },
}));

export default useStyles;
