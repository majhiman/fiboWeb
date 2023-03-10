import React from 'react';
import Box from '@mui/material/Box';
import { makeStyles } from '@mui/styles';
import Typography from '@mui/material/Typography';
import Reg from '../Asset/Registration.png';
import Logo from '../Asset/Logo.png';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import GoogleIcon from '@mui/icons-material/Google';
import {Route, useNavigate} from 'react-router-dom';

const useStyles = makeStyles({
    leftbox:{
        width: "50vw",
        height: "100vh",
        backgroundColor: '#272626'
    },

    rightbox:{
        width: "50vw",
        height: "100vh",
        backgroundColor: '#202021',
        marginLeft:"50vw",
        marginTop:"-100vh"
    },

    regImage:{
        width:"20vw",
        height:"30vh",
        borderRadius:"20px",
        marginTop:"30vh"
    },

    logoImage:{
        width:"4vw",
        height:"8vh",
        marginTop:"18vh",
        paddingRight:"15vw"
    },

    captionText:{
        color:"#EFEFFF",
        paddingTop:"6vh"
    },

    leftText:{
        color:"#EFEFFF",
        paddingTop:"1vh",
        width:"23vw",
        paddingLeft:"14vw",
        paddingTop:"2vh"
    },

    logo:{
        paddingTop:"18vh",
        marginLeft:"20wv"
    },

    logoText:{
        color:"#EFEFFF",
        marginTop:"-7.5vh !important"
    },

    logoTextColor:{
        color:"#FF8D24"
    },

    loginText:{
        paddingTop:"15vh",
        color:"#EFEFFF",
    },

    loginText2:{
        paddingTop:"6vh",
        color:"#EFEFFF",
        opacity: "0.5"
    },

    textfield:{
        marginTop:"4vh !important",
        color:"#EFEFFF !important"
    },

    hrStyle:{
        width:"80%",
        marginTop:"4vh"
    },

    button:{
        marginTop:"4vh !important",
        backgroundColor:"#FF8D24 !important"
    },

    button2:{
        marginTop:"4vh !important",
        backgroundColor:"#202021 !important",
        color:"#EFEFFF !important"
    },
    
  });
  

const Registration = () => {

    const navigate = useNavigate();
    const click = () => {
        navigate('/home')        
      };
    const classes = useStyles();
  return (
    <div>
        <Box className={classes.leftbox}>
            <img src={Reg} alt="Registration Image" className={classes.regImage}/>
            <Typography variant="h5" component="h5" className={classes.captionText}>
                Fitness Made Easy
            </Typography>
            <Typography variant="subtitle2" className={classes.leftText}>
                FiBO helps you tack your fitness goals, and manage your gyms, clients and branches in a one stop solution, saving you time and money! 
            </Typography>
        </Box>
        <Box className={classes.rightbox}>
            <img src={Logo} alt="Registration Image" className={classes.logoImage} ></img>
            <Typography variant="h4" className={classes.logoText}>
                FI<span className={classes.logoTextColor}>T</span>NESS
            </Typography>

            <Typography variant="h5" component="h5" className={classes.loginText}>
                Login To Your Account
            </Typography>
            <Typography variant="subtitle1" component="subtitle1" className={classes.loginText2}>
                Your Own Digital Campaign
            </Typography>
            <br/>
            <TextField 
                id="outlined-basic" 
                label="Phone Number" 
                variant="outlined" 
                className={classes.textfield}
                focused
            />
            <br/>
            <Button variant="contained" className={classes.button} onClick={click}>
                Login To Your Account
            </Button>

            <hr className={classes.hrStyle}/>

            <Button variant="Text" className={classes.button2} onClick={click}>
                <GoogleIcon/>
                &nbsp; Login With Google
            </Button>
        </Box>
        
        
    </div>
  )
}

export default Registration