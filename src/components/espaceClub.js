import React, { Component } from 'react';
import axios from 'axios';
import getToken from '../helper/tokenHelper';
class Espace extends Component {
    state = {
        open: true,
        isLoaded: false,
        clubs: undefined
    }

    componentDidMount() {

        axios({
            method: "GET",
            url: "http://localhost:3030/club",
            headers: getToken()
        })
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        clubs: result.data

                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error,
                    });
                })
    }
    render() {
        if (this.state.isLoaded) {
            return (
                <div>
                    <h3> Clubs</h3>
                    {this.state.clubs.map(club => <h1>{club.email}</h1>)}
                    <h3>Sponsore</h3>
                </div>
            )
        } else {
            return (<div>Loading...</div>);
        }

    }
}
export default Espace;