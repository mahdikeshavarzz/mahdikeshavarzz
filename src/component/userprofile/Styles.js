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
  smallCardRootUserProfile: {
    backgroundColor: "black",
    border: "2px solid orange",
    borderRadius: "20px",
    boxShadow: "0px 0px 20px orange",
    width: "100%",
    height: "100%",
  },

  cardGridRootUserProfile: {
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
  },
  gridRootUserProfile: {
    display: "flex",
    justifyContent: "center",
  },
  smallGridRootUserProfile: {
    display: "flex",
    justifyContent: "center",
  },

  userProfImg: {
    width: "110px",
    height: "7rem",
    alignSelf: "center",
    border: "3px solid orange",
    borderRadius: "2rem",
  },
  b: {
    color: "white",
  },
}));

export default useStyles;
