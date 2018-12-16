import React, { Component } from 'react';
import axios from 'axios';
import { getToken, getClubId } from '../helper/tokenHelper';

import AdminHeader from './AdminHeader';

class AjouteProjet_Club extends Component {
    render () {
        return (
            <div>
                <div>
                    <AdminHeader/>
                </div>
                <h2>Initialisation projet</h2>
                <h3> Nom de projet</h3> <input type="text" placeholder= "nom de projet"/>
                <h3>Convention </h3>
            </div>
        )
    }
}
export default AjouteProjet_Club; 