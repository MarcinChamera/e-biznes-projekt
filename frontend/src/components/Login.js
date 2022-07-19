import { Container } from "@mui/system";
import { Typography, Grid } from "@mui/material"
import { GoogleLoginButton, GithubLoginButton, FacebookLoginButton } from "react-social-login-buttons";
import axios from "../axios/axios";
import "../styles/General.css"

const Login = () => {
    const redirectGoogle = () => {
        axios.get("/google/login").then((url) => {
            window.open(url.data, "_self");
        })
    }

    const redirectGithub = () => {
        axios.get("/github/login").then((url) => {
            window.open(url.data, "_self");
        })
    }

    const redirectFacebook = () => {
        axios.get("/facebook/login").then((url) => {
            window.open(url.data, "_self");
        })
    }

    return (
        <Container className="container">
            <Grid container alignItems="center" justify="center" direction="column" spacing={1}>
                <Grid item sm={4}>
                    <Typography variant="h4">
                        Wybierz w jaki sposób chcesz się zalogować
                    </Typography>
                </Grid>
                <Grid item sm={4} marginTop={5}>
                    <GoogleLoginButton className="googleLogin" onClick={redirectGoogle} sx={{ maxWidth: 'md' }}/>
                </Grid>
                <Grid item sm={4}>
                    <GithubLoginButton onClick={redirectGithub}/>
                </Grid>
                <Grid item sm={4}>
                    <FacebookLoginButton onClick={() => alert("Jeszcze niedostępne")}/>
                </Grid>
            </Grid>
        </Container>
        
    )
}

export default Login;