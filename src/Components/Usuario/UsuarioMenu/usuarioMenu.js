import React, { Components } from 'react';
import {Menu, MenuItem, Button} from '@material-ui/core';

export default class UsuarioMenu extends Components {
    render(){
        return(
            <div>
                <Button>
                    Open Menu
                </Button>
                <Menu>
                    <MenuItem>Profile</MenuItem>
                    <MenuItem>My account</MenuItem>
                    <MenuItem>Logout</MenuItem>
                </Menu>
            </div>
        )
    }
}