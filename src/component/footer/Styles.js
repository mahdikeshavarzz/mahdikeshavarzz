import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  Footer: {
    marginTop: "8rem",
    backgroundColor: "darkorange",
    display: "flex",
    padding: "2rem",
    fontFamily: "cursive",
  },
  FooterSmall: {
    marginTop: "8rem",
    fontFamily: "cursive",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "darkorange",
    padding: "1.3rem",
  },
  FooterTelId: { flex: 1 },
}));

export default useStyles;
