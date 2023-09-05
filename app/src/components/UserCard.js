import React, { useState, useEffect } from 'react'

import Axios from 'axios';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Rating from '@mui/material/Rating';
import DeleteIcon from '@mui/icons-material/Delete';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';

// import { Grid } from '@mui/material';
// import user from '../../../server/models/user';

// const [value, setValue] = null
// const [deleteUser, setDeleteUser] = ()

// const [deleteUser, setDeleteUser] = useState

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const UserCard = (props) => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [UserName, setUserName] = useState(props.name);
    const [UserSurname, setUserSurname] = useState(props.surename);
    const [UserUsername, setUserUsername] = useState(props.username);
    const [UserEmail, setUserEmail] = useState(props.email);
    const [UserPassword, setUserPassword] = useState(props.password);

    const getName = (e) => {
        let value = e.target.value;
        setUserName(value);
    }
    const getSurname = (e) => {
        let value = e.target.value;
        setUserSurname(value);
    }
    const getUsername = (e) => {
        let value = e.target.value;
        setUserUsername(value);
    }
    const getEmail = (e) => {
        let value = e.target.value;
        setUserEmail(value);
    }
    // maybe add wallet 
    const getPassword = (e) => {
        let value = e.target.value;
        setUserPassword(value);
    }


    const [error, setError] = useState("");

    const refreshUser = () => {
        props.refreshUsers(true);
    }

    let payload = {
        name: UserName,
        surname: UserSurname,
        username: UserUsername,
        email: UserEmail,
        password: UserPassword,
    }

    const updateUser = () => {
        console.log("update")
        // refreshUser()
        // handleClose()

        Axios.put('http://localhost:5000/api/user/' + props.id, payload)
            .then(res => {
                console.log("update")
                refreshUser()
                handleClose()
            })
            .catch(err => {
                console.log(err)
                setError(err)
            });
    }

    const deleteUser = (e) => {
        console.log(props.id);
        //! this breaks the site when i click add user 
        Axios.delete('http://localhost:5000/api/deleteUser/' + props.id)
            .then(res => {
                console.log("delete")
                refreshUser()
            })
            .catch(err => {
                console.log(err)
                setError(err)
            });
    }

    console.log(props);
    return (

        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <div className='addUserForm'>
                        <h1>Add User Form</h1>
                        {/* {user} */}
                        <Stack spacing={2}>
                            {/* !!!!!!!!!!!!! */}
                            {/* {user} */}
                            {/* the get allows the text field to get inf and palce it into the table throught the get */}
                            <TextField
                                required
                                id="userName"
                                label="Name"
                                defaultValue={UserName}
                                onChange={getName}
                                sx={{
                                    width: '400px'
                                }}
                            />
                            <TextField
                                required
                                id="userSurname"
                                label="Surname"
                                sx={{
                                    width: '400px'
                                }}
                                defaultValue={UserSurname}
                                onChange={getSurname}
                            />
                            <TextField
                                required
                                id="userUsername"
                                label="Username"
                                sx={{
                                    width: '400px'
                                }}
                                defaultValue={UserUsername}
                                onChange={getUsername}
                            />
                            <TextField
                                required
                                id="userUsername"
                                label="Username"
                                sx={{
                                    width: '400px'
                                }}
                                defaultValue={UserEmail}
                                onChange={getEmail}
                            />
                            <TextField
                                required
                                id="outlined-required"
                                label="Password"
                                // defaultValue="Hello World"
                                sx={{
                                    width: '400px'
                                }}
                                defaultValue={UserPassword}
                                onChange={getPassword}
                            />

                            <Button onClick={() => updateUser()} variant="contained" sx={{ width: '400px' }}>Update User</Button>
                            <p>{error}</p>
                        </Stack>

                    </div>
                </Box>
            </Modal>


            <div className='card-con'>
                <Card sx={{ minWidth: 300, height: "400px", backgroundColor: "#CBCBCB" }}>
                    <CardContent spacing={5}>
                        {/* {user} */}
                        <Typography sx={{ fontSize: 18 }} color="black" gutterBottom>
                            card
                        </Typography>
                        <Typography variant="h5" component="div">
                            Name: {props.name}
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            Surname: {props.surename}
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            Username: {props.username}
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            Email: {props.email}
                        </Typography>
                        <Typography variant="body2">
                            Password: {props.password}
                        </Typography>
                        <Typography component="legend">Rate:</Typography>
                        <Rating
                            name="simple-controlled"
                            // value={value}
                            onChange={(event, newValue) => {
                                // setValue(newValue);
                            }}
                        />
                    </CardContent>
                    <CardActions>
                        <Stack spacing={2} sx={{ margin: "auto" }}>
                            <Button onClick={() => handleOpen()} variant="contained" size="small" sx={{ margin: "auto" }}>Update</Button>
                            <Button onClick={() => deleteUser()} variant="outlined" startIcon={<DeleteIcon />}>
                                Delete
                            </Button>
                        </Stack>
                    </CardActions>
                </Card>
            </div>
        </div>

    )
}
export default UserCard