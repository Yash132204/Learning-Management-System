import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { 
    Container, 
    Typography, 
    Grid, 
    Card, 
    CardContent, 
    CardMedia, 
    Button 
} from '@material-ui/core';
import videoBackground from '../Assests/lms_about_vid.mp4'; 

const useStyles = makeStyles((theme) => ({
    About: {
        position: 'relative',
        overflow: 'hidden',
        paddingTop: '80px', // Added padding to account for the fixed navbar
    },
    root: {
        textAlign: 'center',
        marginTop: '50px',
        marginBottom: '100px',
        padding: '20px',
        maxWidth: '1000px',
        margin: 'auto',
        backgroundColor: 'rgba(255, 255, 255, 0.8)', // Solid white background for main container
        borderRadius: '10px',
        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)',
    },
    video: {
        position: 'fixed',
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        zIndex: '-1',
    },
    title: {
        fontSize: '2.5rem',
        marginBottom: '10px',
        color: '#333',
        fontWeight: 'bold',
    },
    team:{
        fontSize: '2rem',
        margin: '20px 0',
        color: 'black',
        textDecoration: 'underline',
        transition: 'transform 0.15s ease-in-out',
        '&:hover': {
            transform: 'scale(1.1)',
        }
        
    },
    subtitle: {
        fontSize: '1.5rem',
        margin: '10px 0',
        color: '#76ABAE',
        transition: 'transform 0.15s ease-in-out',
        '&:hover': {
            textDecoration: 'underline',
            transform: 'scale(1.1)',
        },
        
    },
    text: {
        fontSize: '1.2rem',
        color: '#333',
        margin: '10px 0',
    },
    card: {
        margin: '20px auto',
        padding: '20px',
        backgroundColor: '#ffffff', // Solid white background for cards
        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
    },
    teammates:{
        margin: '20px auto',
        padding: '20px',
        backgroundColor: '#ffffff', // Solid white background for cards
        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
    },
    media: {
        height: 200,
        objectFit: 'cover',
    },
    button: {
        margin: theme.spacing(2),
        backgroundColor: '#76ABAE',
        color: 'white',
        '&:hover': {
            backgroundColor: '#609396',
        },
    },
    nav: {
        width: '100%',
        height: '80px',
        backgroundColor: '#76ABAE',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        position: 'fixed',
        top: '0',
        left: '0',
        right: '0',
        zIndex: '1000',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0 20px',
        
    },
    logo: {
        fontSize: '32px',
        fontWeight: 'bold',
        color: '#333',
        textDecoration: 'none',
    },

    menu: {
        listStyle: 'none',
        display: 'flex',
        margin: '0',
        padding: '0',
        
    },
    menuItem: {
        marginLeft: '20px',
        
    },
    menuLink: {
        color: '#333',
        textDecoration: 'none',
        fontSize: '16px',
        transition: 'color 0.3s ease',
        '&:hover': {
            textDecoration: 'underline',
        },
    },
    footer: {
        marginTop: '50px',
        padding: '20px 0',
        backgroundColor: '#f5f5f5',
        textAlign: 'center',
    },
    
    footerText: {
        fontSize: '1rem',
        color: '#666',
    },
    contactSection: {
        marginTop: '40px',
        padding: '20px',
        backgroundColor: '#ffffff', // Solid white background for contact section
        borderRadius: '10px',
        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
    },
    contactDetails: {
        display: 'flex',
        justifyContent: 'center', // Center the content
        alignItems: 'center', // Vertically align the items
        gap: '20px', // Add space between items
    },
    
    contactItem: {
        margin: '10px 0',
        color: '#333',
    },
    featuresSection: {
        marginTop: '40px',
        padding: '20px',
        backgroundColor: '#ffffff', // Solid white background for features section
        borderRadius: '10px',
        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
    },
    featureItem: {
        margin: '10px 0',
        color: '#333',
    },
    m: {
        color: 'white',
    },
}));

const About = () => {
    const classes = useStyles();

    return (
        <div className={classes.About}>
            <video autoPlay loop muted className={classes.video}>
                <source src={videoBackground} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <nav className={classes.nav}>
                <Link to="/" className={classes.logo}>
                <img src="https://ik.imagekit.io/yash13/EM.jpg?updatedAt=1716522375492" alt="EduMatrix Logo" style={{ marginLeft: '10px', width: '40px', height: 'auto' }} className="nav-logo-img" />
                    EduMatrix
                </Link>
                <ul className={classes.menu}>
                    <li className={classes.menuItem}>
                        <Link to="/" className={classes.menuLink}><i className="fas fa-home"></i> Home</Link>
                    </li>
                    <li className={classes.menuItem}>
                        <Link to="/about" className={classes.menuLink}><i className="fas fa-info-circle"></i> About</Link>
                    </li>
                    <li className={classes.menuItem}>
                        <Link to="/courses" className={classes.menuLink}><i className="fas fa-book"></i> Courses</Link>
                    </li>
                    <li className={classes.menuItem}>
                        <Link to="/login" className={classes.menuLink}><i className="fas fa-sign-in-alt"></i> Login</Link>
                    </li>
                </ul>
            </nav>
            <Container className={classes.root}>
                <br></br>
                <h1 className="title">About Us</h1>
                <div>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={6}>
                            <Card className={classes.card}>
                                <CardContent>
                                    <Typography variant="h2" className={classes.subtitle}>
                                        The Mission
                                    </Typography>
                                    <Typography className={classes.text}>
                                        At LMS, the mission is to democratize education by providing accessible, high-quality learning opportunities for everyone, everywhere. We believe in the transformative power of education and are committed to creating a platform that supports lifelong learning and skill development.
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Card className={classes.card}>
                                <CardContent>
                                    <Typography variant="h2" className={classes.subtitle}>
                                        The Vision
                                    </Typography>
                                    <Typography className={classes.text}>
                                        The vision is to become the leading online learning platform, empowering individuals to achieve their full potential through personalized, engaging, and accessible education. We strive to create a world where learning knows no boundaries and where anyone can pursue their passions and goals.
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </div>
                <Typography variant="h2" className={classes.team}>Meet the Team</Typography>
                <Grid container spacing={4} justifyContent="center">
                    {[
                        { id: 1, name: 'Venky', role: 'CEO', image: 'https://via.placeholder.com/150?text=Venky', description: 'Venky is the visionary behind LMS, with a passion for education and technology.' },
                        { id: 2, name: 'Sara', role: 'CTO', image: 'https://via.placeholder.com/150?text=Sara', description: 'Sara leads our tech team, ensuring our platform is robust and user-friendly.' },
                        { id: 3, name: 'Yash', role: 'COO', image: 'https://via.placeholder.com/150?text=Yash', description: 'Yash oversees operations, making sure everything runs smoothly and efficiently.' },
                    ].map((member) => (
                        <Grid item xs={12} sm={4} md={4} key={member.id}>
                            <Card className={classes.teammates}>
                                <CardMedia
                                    className={classes.media}
                                    image={member.image}
                                    title={member.name}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        {member.name}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        {member.role}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        {member.description}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
                <div className={classes.featuresSection}>
                    <Typography variant="h2" className={classes.subtitle}>
                        Key Features
                    </Typography>
                    <div className='m'>
                        <Typography className={classes.featureItem}><strong>Interactive Courses:</strong> Our courses are designed to be engaging and interactive, with a mix of videos, quizzes, and assignments.</Typography>
                        <Typography className={classes.featureItem}><strong>Expert Instructors:</strong> Learn from industry experts who bring real-world experience to the virtual classroom.</Typography>
                        <Typography className={classes.featureItem}><strong>Flexible Learning:</strong> Access courses anytime, anywhere, and learn at your own pace.</Typography>
                        <Typography className={classes.featureItem}><strong>Community Support:</strong> Join a vibrant community of learners and get support from peers and instructors.</Typography>
                        <Typography className={classes.featureItem}><strong>Certifications:</strong> Earn certificates of completion to showcase your new skills and knowledge.</Typography>
                    </div>
                </div>
                <br></br>
                <div className={classes.contactSection}>
                    <Typography variant="h2" className={classes.subtitle}>Contact Us</Typography>
                    <div className={classes.contactDetails}>
                        <Typography className={classes.contactItem}><strong>Email:</strong> support@lms.com</Typography>
                        <Typography className={classes.contactItem}><strong>Phone:</strong> +91 1234567890</Typography>
                    </div>
                </div>
                <Button 
                    component={Link} 
                    to="/" 
                    variant="contained" 
                    className={classes.button}
                >
                    Go to Home
                </Button>
            </Container>
        </div>
    );
};

export default About;