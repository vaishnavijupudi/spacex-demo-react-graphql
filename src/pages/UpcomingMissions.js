import React from 'react'
import { GET_UPCOMING_MISSIONS } from '../graphQl/queries';
import { useQuery } from '@apollo/client';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import { CircularProgress, Typography, Grid } from '@mui/material';
import moment from "moment";
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import { Link } from 'react-router-dom';


const UpcomingMissions = () => {

const { loading, error, data }  = useQuery(GET_UPCOMING_MISSIONS);
if (loading) return <CircularProgress />;
if (error) return <Typography>Error: {error.message}</Typography>;

console.log(data.launchesUpcoming[0]);
  return (
    <>
    <div style={{padding:'1%', margin: '1%'}}>
    <Grid container spacing={4} >
    {data.launchesUpcoming.map((item)=> (
          <Grid item xs={12} sm={6} md={3} key= { item.id } >
          <Card sx={{ maxWidth: 345 }}>
        <CardHeader
          title={item.mission_name}
          subheader={item.launch_date_local?(moment(new Date(item.launch_date_local)).format('MMMM Do YYYY, h:mm:ss a')):''}
          titleTypographyProps={{ color: 'dodgerblue' }}
        />
        <CardMedia
          component="img"
          alt={!item.ships?item.ships.image:'default-image'}
          height="200"
          image={!item.ships?item.ships.image:'https://techcrunch.com/wp-content/uploads/2019/09/Starship-Mk1-Day.jpg?w=1390&crop=1'}
        />
        <CardContent>
          <Typography gutterBottom variant="body2" >
            launch site: {item.launch_site?item.launch_site.site_name_long: 'TBD' }
          </Typography>
          <Typography gutterBottom variant="body2" >
              <span>
                <RocketLaunchIcon/>
                {item.rocket?item.rocket.rocket_name: 'TBD' }
              </span>
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {item.rocket.rocket.description.length <=150?item.rocket.rocket.description:item.rocket.rocket.description.substring(0,150)+'...'}
          </Typography>
        </CardContent>
        <CardActions>
          <Link to={`/launch-details/${item.id}`}>
            <Button size="small" >Learn More</Button>
          </Link>
        </CardActions>
      </Card>
          </Grid>
       
        
      ))}
      </Grid>
    </div>
     
    </>
      
  )
}



export default UpcomingMissions
