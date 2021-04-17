import { Grid } from "@material-ui/core";
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./component/Header";
import LeftSide from "./component/left/LeftSide";
import RightSide from "./component/right/RightSide";
import MainPart from "./component/mainpart/MainPart";
import Footer from "./component/footer/Footer";


const App = () => {
    return (
        <>
          <div>
            <BrowserRouter>
              <Switch>
                <Route exact path="/leftside">
                  <Header/>
                  <Grid container justify="center">
                    <Grid item>
                      <LeftSide />
                    </Grid>
                  </Grid>
                </Route>
                <Route exact path="/rightside">
                  <Header />
                  <Grid container justify="center">
                    <Grid item>
                      <RightSide />
                    </Grid>
                  </Grid>
                </Route>
                <Route exact path="/" component={MainPart} />
              </Switch>
            </BrowserRouter>
          </div>
          <Footer />
        </>
      );
}

export default App;