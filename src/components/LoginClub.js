import React, { Component } from 'react';
import axios from 'axios';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const handleSubmit = (e) => {
    e.preventDefault()
    console.log("coucou", e.target.name.value, e.target.password.value);
    axios.post("http://localhost:3030/clubs/signin", {
        name: e.target.name.value,
        password: e.target.password.value
    })
        .then((res) => {
            localStorage.setItem("token", res.headers["x-access-token"])
            console.log("token", localStorage.getItem("token"));

        },
            (error) => {
                alert('mauvais info' + { error })
            },
        )

}
const protectedRoute = () => {
    const token = localStorage.getItem("token")
    axios({
        method: "POST",
        url: "http://localhost:3030/clubs/protected",
        headers: {
            Authorization: `Bearer ${token}`
        }
    }).then(res => console.log(res))
}
const LoginClub = () => {
    return (
        <div className="contentGlobal">
            
            <MuiThemeProvider>
                <form onSubmit={handleSubmit}>
                    <TextField
                        type="text" name="name" placeholder="email"
                    />
                    <br />
                    <TextField
                        type="password" name="password" placeholder="mot de pass"
                    />
                    <br />
                    <Button label="Login" primary={true} type="submit" />

                </form>
            </MuiThemeProvider>
        </div>
    )
}
export default LoginClub