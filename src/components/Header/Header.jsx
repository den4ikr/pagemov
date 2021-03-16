import { AppBar, Toolbar, Typography } from "@material-ui/core"

export const Header = () => {
    return (
        <AppBar position="static" >
            <Toolbar>
                <Typography variant="h6" >
                    Movie DB
                </Typography>
            </Toolbar>
        </AppBar>
    )
}