import { Container } from "@mui/system";
import { Typography, Grid, Button } from "@mui/material";
import axios from "../axios/axios";
import "../styles/General.css";
import googleIcon from "../images/google.png";
import githubIcon from "../images/github.png";
import facebookIcon from "../images/facebook.png";

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

    // const redirectFacebook = () => {
    //     axios.get("/facebook/login").then((url) => {
    //         window.open(url.data, "_self");
    //     })
    // }

    return (
        <Container className="container">
            <Grid container alignItems="center" justify="center" direction="column" spacing={1}>
                <Grid item sm={4}>
                    <Typography className="loginHeaderInfo" variant="h4">
                        Wybierz w jaki sposób chcesz się zalogować
                    </Typography>
                </Grid>
                <Grid item sm={4} marginTop={5}>
                    <Button className="googleLogin" variant="outlined" onClick={redirectGoogle} sx={{ maxWidth: 'md' }}>
                        <img src={googleIcon} alt="google icon" style={{ width: "30px", marginRight: 10}}/>
                        Zaloguj przez Google
                    </Button>
                </Grid>
                <Grid item sm={4} marginTop={2}>
                    <Button className="githubLogin" variant="outlined" onClick={redirectGithub} sx={{ maxWidth: 'md' }}>
                        <img src={githubIcon} alt="github icon" style={{ width: "30px", marginRight: 10}}/>
                        Zaloguj przez Github
                    </Button>
                </Grid>
                <Grid item sm={4} marginTop={2}>
                    <Button className="facebookLogin" variant="outlined" onClick={() => alert("Jeszcze niedostępne")} sx={{ maxWidth: 'md' }}>
                        <img src={facebookIcon} alt="facebook icon" style={{ width: "30px", marginRight: 10}}/>
                        Zaloguj przez Facebook
                    </Button>
                </Grid>
            </Grid>
        </Container>
        
    )
}

export default Login;