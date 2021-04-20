import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  Footer: {
    backgroundColor: "darkorange",
    display: "flex",
    flexDirection: "row",
    fontFamily: "cursive",
    position: "fixed",
    bottom: "0",
    padding: "1rem",
  },
  FooterSmall: {
    fontFamily: "cursive",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "darkorange",
    position: "fixed",
    bottom: "0",
    width: "100%",
    padding: "1rem",
  },
  FooterTelId: { flex: 1 },
}));

export default useStyles;
