import { AppBar, Toolbar, Typography } from "@material-ui/core"
import { NavLink } from "react-router-dom"

export const Header = () => {
    return (
        <AppBar position="static" >
            <Toolbar>
                <Typography variant="h6" >
                    <NavLink to="/" >
                        Movie DB
                    </NavLink>
                </Typography>
            </Toolbar>
        </AppBar>
    )
}