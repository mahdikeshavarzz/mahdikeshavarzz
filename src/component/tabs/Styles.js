import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  navDiv: { width: "100%", fontFamily: "cursive" },
  navbar1: {
    backgroundColor: "#333",
  },
  navUl: {
    justifyContent: "center",
    textAlign: "center",
  },
  navLi: {
    display: "inline-block",
    marginInline: "0.4rem",
    backgroundColor: "#666",
    padding: "0.6rem",
    width: "5rem",
  },
  navLink: {
    color: "orange",
    textDecoration: "none",
    fontSize: "1.3rem",
  },
}));

export default useStyles;
