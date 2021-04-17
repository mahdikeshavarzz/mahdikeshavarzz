import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  cardRootUserProfile: {
    backgroundColor: "black",
    border: "2px solid orange",
    borderRadius: "20px",
    boxShadow: "0px 0px 20px orange",
    width: "25rem",
    height: "15rem",
  },

  cardGridRootUserProfile: {
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
  },
  gridRootUserProfile: {
    display: "flex",
    justifyContent: "flex-end",
  },

  userProfImg: {
    width: "110px",
    height:"7rem",
    alignSelf: "center",
    border: "3px solid orange",
    borderRadius: "2rem",marginBottom:"0.5rem"
  },
  b: {
    color: "white",
  },
}));

export default useStyles;