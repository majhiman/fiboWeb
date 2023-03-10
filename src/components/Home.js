import React from 'react';
import Box from '@mui/material/Box';
import { makeStyles } from '@mui/styles';
import Logo from '../Asset/Logo.png';
import Feed from '../Asset/Feed.png';
import AvatarImg from '../Asset/Avatar.avif';
import Typography from '@mui/material/Typography';
import GridViewRoundedIcon from '@mui/icons-material/GridViewRounded';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Avatar from '@mui/material/Avatar';
import Toolbar from '@mui/material/Toolbar';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import FitnessCenterOutlinedIcon from '@mui/icons-material/FitnessCenterOutlined';
import TextSnippetOutlinedIcon from '@mui/icons-material/TextSnippetOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import PublishIcon from '@mui/icons-material/Publish';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import AddIcon from '@mui/icons-material/Add';
import SettingsIcon from '@mui/icons-material/Settings';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';

import { Bar } from 'react-chartjs-2';
import { 
    Chart as ChartJS,
    CategoryScale, 
    LineElement, 
    PointElement, 
    LinearScale, 
    Title,
    BarController,
    BarElement,
    Tooltip,
    Legend,
    ArcElement
} from 'chart.js';

ChartJS.register(
    LineElement,
    CategoryScale, 
    PointElement, 
    LinearScale, 
    BarController,
    BarElement,
    ArcElement,
    Tooltip,
    Legend,
    Title);

const useStyles = makeStyles({
    leftbox:{
        width: "20vw",
        height: "100vh",
        backgroundColor: '#272626'
    },

    rightbox:{
        width: "80vw",
        height: "100vh",
        backgroundColor: '#202021',
        marginLeft:"20vw",
        marginTop:"-100vh"
    },

    logoImage:{
        width:"5vw",
        height:"10vh",
        marginTop:"15vh",
        paddingleft:"4vw"
    },

    logoText:{
        color:"#EFEFFF",
        paddingTop:"4vh",
        paddingBottom:"7vh"
    },

    logoTextColor:{
        color:"#FF8D24"
    },

    iconStyle:{
        color:"#FF8D24",
        fontSize:"2vh !important",
        paddingTop:"2vh"
    },

    textStyle:{
        color:"#EFEFFF",
        fontSize:"2.3vh !important",
        paddingBottom:"1.5vh !important",
        opacity: "0.8"
    },

    textStyle2:{
        color:"#FF8D24 !important",
        fontSize:"2.3vh !important",
        paddingBottom:"1.5vh !important"
    },

    iconStyle2:{
        color:"#EFEFFF",
        fontSize:"2vh !important",
        paddingTop:"2vh"
    },

    avatar:{
        marginLeft:"50vw",
        fontSize:"5vh !important",
        color:"#EFEFFF",
        paddingRight:"2vw"
    },

    feedbox:{
        width: "25vw",
        height: "50vh",
        backgroundColor: '#141514',
        marginLeft:"50vw",
        borderRadius:"20px",
        marginTop:"-45vh",
        color:"#EFEFFF",
        textAlign:"left"
    },

    chartbox:{
        width: "50vw",
        height: "40vh",
        backgroundColor: '#202021',
        marginTop:"5vh",
        color:"#FF8D24",
        paddingLeft:"2vw"
    },
    
    chartboxText1:{
        marginLeft:"-40vw !important"
    },

    chartboxText2:{
        marginTop:"-2vw !important"
    },

    chartIcon:{
        fontSize:"3vw !important"
    },

    chartIcon2:{
        fontSize:"3vw !important",
        marginTop:"-20vh !important"
    },

    spanText1:{
        marginTop:"-2vh Important"
    },

    cardbox:{
        width: "72vw",
        height: "30vh",
        backgroundColor: '#202021',
        marginTop:"4vh",
        marginLeft:"3vw",
        color:"#EFEFFF",
        display: 'flex', 
        flexDirection: 'row',
        
    },
    cardboxText:{
        color:"#EFEFFF",
        marginLeft:"-1.5vw !important",
        marginTop:"-25vh !important",
        width:"70vw !important",
        textAlign:"left"
        
    },

    cardStyle1:{
        width:"15vw",
        height:"20vh",
        marginTop:"10vh",
        marginLeft:"-69vw",
        backgroundColor:"#272626 !important",
        textAlign:"center",
        color:"#EFEFFF",
    },

    cardStyle2:{
        width:"15vw",
        height:"20vh",
        marginTop:"10vh",
        marginLeft:"3vw",
        backgroundColor:"#272626 !important",
        textAlign:"center",
        color:"#EFEFFF",
    },

    cardStyle3:{
        width:"15vw",
        height:"20vh",
        marginTop:"10vh",
        marginLeft:"3vw",
        backgroundColor:"#272626 !important",
        textAlign:"center",
        color:"#EFEFFF",
    },

    cardStyle4:{
        width:"15vw",
        height:"20vh",
        marginTop:"10vh",
        marginLeft:"3vw",
        backgroundColor:"#272626 !important",
        textAlign:"center",
        color:"#EFEFFF",
    },

    cardboxTextInside:{
        color:"#EFEFFF",
        paddingTop:"2%"
    },

    cardIconStyle:{
        color:"#EFEFFF",
        fontSize:"5vh !important",
        marginTop:"-1vh !important",
        marginLeft:"11vh !important"
    },

    feedboxText:{
        marginLeft:"1vw !important",
        paddingTop:"1vh !important"
    },

    feedImage:{
        height:"43vh",
        width:"24vw"
    }
    
  });

  

const Home = () => {

    const classes = useStyles();
    const buttons = [
        <div>
            <GridViewRoundedIcon className={classes.iconStyle}/>
            <Button key="one" size="medium" className={classes.textStyle2}>Dashboard
            </Button>
        </div>,
        <div>
            <PeopleOutlineIcon className={classes.iconStyle2}/>
            <Button key="two" size="medium" className={classes.textStyle}>Members
            </Button>
        </div>,
        <div>
            <FitnessCenterOutlinedIcon className={classes.iconStyle2}/>
            <Button key="three" size="medium" className={classes.textStyle}>Exercise Plans
            </Button>
        </div>,
        <div>
            <TextSnippetOutlinedIcon className={classes.iconStyle2}/>
            <Button key="four" size="medium" className={classes.textStyle}>Diet Plans
            </Button>
        </div>,
        <div>
            <PersonOutlineOutlinedIcon className={classes.iconStyle2}/>
            <Button key="five" size="medium" className={classes.textStyle}>Profile
            </Button>
        </div>,
        <div>
            <LogoutOutlinedIcon className={classes.iconStyle2}/>
            <Button key="six" size="medium" className={classes.textStyle}>Logout
            </Button>
        </div>,
    ];

    //===================================================
    const barDdata = {
        labels: ['Jan','Feb','Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
        datasets: [
            {
                label:'Active Members',
                data: [10,50,20,5,30,60,25,15,10],
                borderColor:'#D15439',
                backgroundColor:'#D15439',
                pointBackgroundColor:'#D15439',
                pointBorderColor:'#D15439',
                barThickness: 10
            },
            {
                label:'Inactive Members',
                data: [20,60,30,15,20,50,35,45,20],
                borderColor:'#FEAE34',
                backgroundColor:'#FEAE34',
                pointBackgroundColor:'#FEAE34',
                pointBorderColor:'#FEAE34',
                barThickness: 10
            },
            
          ],
    }
  return (
    <div>
        <Box className={classes.leftbox}>
            <img src={Logo} alt="Registration Image" className={classes.logoImage} ></img>
            <Typography variant="h4" className={classes.logoText}>
                FI<span className={classes.logoTextColor}>T</span>NESS
            </Typography>

            <ButtonGroup
                orientation="vertical"
                aria-label="vertical contained button group"
                variant="string"
                className={classes.textStyle}
            >
                {buttons}
            </ButtonGroup>

        </Box>

        <Box className={classes.rightbox}>
            
           
                <Toolbar disableGutters>                        
                    <Typography
                            variant="h4"
                            noWrap
                            component="a"
                            href="/"
                            sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                            color:'#FF8D24',
                            paddingLeft:"3vw"
                            }}
                        >
                            Dashboard
                    </Typography>    
                    <NotificationsNoneIcon className={classes.avatar}/>                            
                    <Avatar alt="Shouvik Majhi" src={AvatarImg} />                                   
                        
                </Toolbar>
                <Typography
                    variant="subtitle2"
                    noWrap
                    component="a"
                    href="/"
                    sx={{
                        mr: 2,
                        display: { xs: 'none', md: 'flex' },
                        letterSpacing: '.3rem',
                        color: 'inherit',
                        textDecoration: 'none',
                        color:'#EFEFFF',
                        paddingLeft:"3vw",
                        paddingTop:"0.3vh"
                        }}
                >
                    Welcome back, Shouvik
                </Typography>

            <Box className={classes.chartbox}>
                
                <Bar data={barDdata}/>  
            </Box>

            <Box className={classes.feedbox}>
                <Typography variant="h6" className={classes.feedboxText}>
                    Coming Soon
                </Typography>
                <img src={Feed} alt="Registration Image" className={classes.feedImage} ></img>
            </Box>

            <Box className={classes.cardbox}>
                
                    <Toolbar>
                        <Typography variant="h5" component="div" className={classes.cardboxText}>
                            Quick Action
                        </Typography>

                        <Card className={classes.cardStyle1}>
                            <CardActions>
                                <Button size="small"><AddIcon className={classes.cardIconStyle}/></Button>
                            </CardActions>
                            <CardContent>
                                <Typography variant="h6" className={classes.cardboxTextInside}>
                                    Add Members
                                </Typography>
                            </CardContent>
                        </Card>

                        <Card className={classes.cardStyle2}>
                            <CardActions>
                                <Button size="small"><PeopleOutlineIcon className={classes.cardIconStyle}/></Button>
                            </CardActions>
                            <CardContent>
                                <Typography variant="h6" className={classes.cardboxTextInside}>
                                    Manage Staff
                                </Typography>
                            </CardContent>
                        </Card>

                        <Card className={classes.cardStyle3}>
                            <CardActions>
                                <Button size="small"><SettingsIcon className={classes.cardIconStyle}/></Button>
                            </CardActions>
                            <CardContent>
                                <Typography variant="h6" className={classes.cardboxTextInside}>
                                    Set Up Gym branch
                                </Typography>
                            </CardContent>
                        </Card>

                        <Card className={classes.cardStyle4}>
                            <CardActions>
                                <Button size="small"><SubscriptionsIcon className={classes.cardIconStyle}/></Button>
                            </CardActions>
                            <CardContent>
                                <Typography variant="h6" className={classes.cardboxTextInside}>
                                    Manage Subscription Plan
                                </Typography>
                            </CardContent>
                        </Card>
                    
                    </Toolbar>
                
                
                
                
                
            </Box>
            
        </Box>
    </div>
  )
}

export default Home
