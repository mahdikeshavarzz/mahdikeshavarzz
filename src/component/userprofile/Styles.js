import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  cardRootUserProfile: {
    backgroundColor: "black",
    border: "2px solid orange",
    borderRadius: "20px",
    boxShadow: "0px 0px 20px orange",
    width: "25rem",
    height: "20rem",
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
    alignSelf: "center",
  },

  b: {
    color: "white",
  },
}));

export default useStyles;
