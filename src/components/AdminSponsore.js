import React, { Component } from 'react';

import { withStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';

import AdminHeader from './AdminHeader'

const styles = theme => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
    nested: {
        paddingLeft: theme.spacing.unit * 4,
    },
});

class AdminSponsore extends Component {
    state = {
        open: true,
        isLoaded: false,
        sponsors: [],
        projet: [],
        selectedSponsor: undefined,
    }
    // fetchProjet=(id)=>{
    //     fetch('http://localhost:3030/project/'+id)
    //     .then (res => res.json())
    //     .then ((result) => {
    //         this.setState ({
    //             project:result
    //         })
    //     })
    // }
    componentDidMount() {
        fetch('http://localhost:3030/sponsor/')
            .then(res => res.json())
            .then(
                (result) => {
                    console.log(result);
                    this.setState({
                        isLoaded: true,
                        sponsors: result,
                        // selectedSponsor: sponsors[0]
                    });
                    // fetchProjet();
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error,
                    });
                })

    }
    handleClick = () => {
        this.setState(state => ({ open: !state.open }));
      };
    render() {
        const { classes } = this.props;
        return (
            <div>
                <AdminHeader />
                <List component="nav"
                    subheader={<ListSubheader component="div">List sponsor - project</ListSubheader>}
                    className={classes.root}>
                    <ListItem button onClick={this.handleClick}></ListItem>
                </List>


            </div>
        )
    }
}
export default withStyles(styles)(AdminSponsore);