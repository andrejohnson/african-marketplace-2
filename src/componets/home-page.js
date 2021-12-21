import react from "react";
import { makeStyles } from '@mui/styles';
// import { CssBaseline } from '@mui/core';


const useStyles = makeStyles((theme) =>({
  root:{
    minHeight: '100vh',
    backgroundImage: `url(${process.env.PUBLIC_URL + '../assets/food background.jpg'})`
  },
}));


function Home(props){

  const classes = useStyles();

return(
  <div>
    <h1>Hello, User</h1>
    <CssBaseline />
</div>
)
}



export default Home;