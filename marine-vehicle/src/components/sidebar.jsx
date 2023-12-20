// src/components/Sidebar.js
import React, { useState, useEffect } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import axios from 'axios';
import env from "../env-config";
import { Link } from 'react-router-dom';
import {Collapse} from "@material-ui/core";


const apiUrl = env.apiUrl
const allServices = `${apiUrl}/api/v1/unauth/service`
const Sidebar = () => {
    const [subitems, setSubitems] = useState([]);
    const [open, setOpen] = useState(false);

    const handleToggle = () => {
        setOpen(!open);
    };

    useEffect(() => {
        const fetchSubitems = async () => {
            try {
                const response = await axios.get(allServices);
                console.log(response, 'llll')
                setSubitems(response.data.data || []);
            } catch (error) {
                console.error('Error fetching subitems:', error);
            }
        };

        fetchSubitems();
    }, []);

    return (
        <div style={{ width: '300px', backgroundColor: '#042a5f', color: '#fff', height: '100vh' }}>
                <ListItem button onClick={handleToggle}>
                    <ListItemText primary="الخدمات" style={{ textAlign: 'right', backgroundColor:'white', color:'#042a5f', padding:'10px' }} />
                </ListItem>
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        {Array.isArray(subitems) &&
                        subitems.map((subitem) => (
                            <ListItem
                                key={subitem.id}
                                button
                                component={Link}
                                to={`/service/${subitem.id}`}
                                style={{ textAlign: 'right', paddingLeft: 40 }}
                            >
                                <ListItemText primary={subitem.name} />
                            </ListItem>
                        ))}
                    </List>
                </Collapse>
        </div>
    );
};

export default Sidebar;
