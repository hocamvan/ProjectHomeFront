import React, { Component } from 'react';
import axios from 'axios';
import { getToken, getClubId } from '../helper/tokenHelper';

import AdminHeader from './AdminHeader';
import'../CSS/AdminClub.scss'

class AdminClub extends Component {
    state = {
        isLoaded: false,
        club: undefined,
        projet: []
    }

    componentDidMount() {
        const url = "http://localhost:3030/club/" + this.props.match.params.id
        axios({
            method: "GET",
            url: url,
            // headers: getToken()
        })
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        club: result.data[0]
                    });
                    console.log(this.state.club);

                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error,
                    });
                })
        axios({
            method: "GET",
            url: "http://localhost:3030/club/contract/" + this.props.match.params.id
            // headers: getToken()
        })
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        projet: result.data
                    });
                    console.log(this.state.club);

                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error,
                    });
                })
    }
    handleOnCLick = () => {
        this.props.history.push(`/ajoute-projet-club/${this.state.club.id}`)
    }
    render() {
        const { club, projet } = this.state;
        if (this.state.isLoaded) {
            return (
                <div className="AdminClub">
                    <AdminHeader />
                    <h1> CLUB {club.name} </h1>
                    <div className="info">
                    <h3>Address : {club.address}</h3>
                    <h3>Telephone : {club.phone}</h3>
                    <h3>Email : {club.email}</h3>
                    </div>
                    <p> Logo </p><img src={club.url_logo} alt={club.name} width="100px" /> <br/>
                    <button>Télécharger logo </button>
                    <table>
                        <thead>
                            <tr>
                                <th>Projet</th>
                                <th>Convention</th>
                                <th>Bon de commande</th>
                                <th>Formulaire de satisfaction</th>
                            </tr>
                        </thead>
                        <tbody>
                            {projet.map(e => (
                                <tr>
                                    <td>{e.name}</td>
                                    <td><button> {e.url_contract} afficher</button></td>
                                    <td><button>{e.order_id} afficher</button></td>
                                    <td><button>{e.survey_id} afficher</button></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <button onClick={this.handleOnCLick}>Ajouter un projet</button>
                </div>
            )
        } else {
            return (<div>Loading...</div>);
        }
    }
}
export default AdminClub;