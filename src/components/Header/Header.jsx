import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import useStyles from "./HeaderStyle";

export const Header = () => {
  const style = useStyles();
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">
          <NavLink className={style.link} to="/pagemovie">
            Movie DB
          </NavLink>
          <NavLink className={style.link} to="/favorite">
            Favorite
          </NavLink>
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
