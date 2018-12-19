import React, { Component } from 'react';
import axios from 'axios';
import { getToken, getClubId } from '../helper/tokenHelper';

import AdminHeader from './AdminHeader';
import '../CSS/CreationProjetGlobal.scss'

class CreationProjetGlobal extends Component {
    state = {
        isLoaded: false,
        sponsors: undefined,
        sponsor_id: undefined
    }

    componentDidMount() {
        const url = "http://localhost:3030/sponsor"
        axios({
            method: "GET",
            url: url,
            headers: getToken()
        })
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        sponsors: result.data,
                        //sponsor_id:result.date[0].id
                    });
                    console.log(result.data);
                    
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error,
                    });
                })
    }
    handleOnChange =( event)=> {
        event.preventDefault();
        this.setState({ [event.target.name]: event.target.value });
    }
    handleOnSubmit = (e) => {
        e.preventDefault();
        const { project_id, club_id, name, url_contract, url_signed_contract } = this.state;
        const body = {
            project_id,
            club_id,
            name,
            url_contract,
            url_signed_contract
        };

        axios.post("http://localhost:3030/project", body)
            .then((res) => {

                if (res.status == 200) {
                    alert("Contrat est créé");
                }
            }
            )
            .catch(function (error) {
                console.log(error);
            })
    }
    render() {
        if (this.state.isLoaded) {
            return (
                <div>
                    <div>
                    <AdminHeader />
                    </div>
                    <div className="projetglobal">
                        <p>Initialisation un projet global</p>
                        <form className="formulaire" onSubmit={this.handleOnSubmit} method="POST" enctype="multipart/form-data" action="uploaddufichier">
                            <label>
                                Sponsor:
                                <select name="sponsor" value={this.state.sponsor} onChange={this.handleOnChange} >
                                    {this.state.sponsors.map(sponsor => (
                                        <option value={sponsor.id}>{sponsor.name}</option>
                                    ))}
                                </select>
                                {/* <select name="club_id" value={club_id} onChange={this.handleChange}>
                            {clubs.map(club =>
                                <option value={club.id}>{club.name}</option>
                            )}
                        </select> */}
                            </label> <br />
                            <label>
                                Nom de projet:
                                <input type="text" value={this.state.value} onChange={this.handleChange} />
                            </label> <br />
                            <label>
                                Resumé de projet:
                                <input type="file" name="monfichier" /> <br />
                            </label> <br />
                            <label>
                                Visuel de produit:
                                <input type="file" name="monfichier" /> <br />
                            </label> <br />
                            <button type="submit" value="Submit"> envoyer </button>
                        </form>
                    </div>

                </div>

            )
        } else {
            return (<div>Loading...</div>);
        }

    }
}
export default CreationProjetGlobal;