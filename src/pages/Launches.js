import React, { useState } from 'react'
import { GET_ALL_LAUNCHES } from '../graphQl/queries';
import { useQuery } from '@apollo/client';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { Link } from 'react-router-dom';
import moment from "moment";
import DatePickerSpaceX from '../components/DatePickerSpaceX';
import { CircularProgress, Typography, Grid } from '@mui/material';


const Launches = () => {

  const { loading, error, data }  = useQuery(GET_ALL_LAUNCHES);

  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  if (loading) return <CircularProgress />;
  if (error) return <Typography>Error: {error.message}</Typography>;

  
const filterData = () => {
    if (startDate && endDate) {
      // Filter data if both start date and end date are selected
      return data.launches.filter(item => {
        const itemDate = new Date(item.launch_date_local);
        return itemDate >= startDate && itemDate <= endDate;
      });
    } else {
      // If start date or end date is not selected, return all data
      return data.launches;
    }
};


return (
    <>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
    <div style={{padding:'1%', margin: '1%'}}>
    <Grid container spacing={1}>
      <Grid item xs={12} md={2} sm={4}>
      <DatePickerSpaceX
        label="Start Date"
        value={startDate}
        onChange={(date) => setStartDate(date)}
      />

      </Grid>
      <Grid item xs={12} md={3} sm={8}>
      <DatePickerSpaceX
        label="End Date"
        value={endDate}
        onChange={(date) => setEndDate(date)}
      />
      <Button onClick={filterData} style={{left:'5%', margin: '1.5%'}}>Filter</Button>
      </Grid>
      

    </Grid>

    </div>
    
    </LocalizationProvider>

    <div style={{padding:'1%', margin: '1%'}}>
    <Grid container spacing={4} >
     {filterData().map((item)=> (
          <Grid item xs={12} sm={6} md={3} key= { item.id } >
          <Card sx={{ maxWidth: 345 }}>
        <CardHeader
          title={item.mission_name}
          subheader={item.launch_date_local?(moment(new Date(item.launch_date_local)).format('MMMM Do YYYY, h:mm:ss a')):''}
          titleTypographyProps={{ color: 'dodgerblue' }}
        />
        <CardMedia
          component="img"
          alt={!item.links.flickr_images[0]?item.links.flickr_images[0]:'default-image'}
          height="200"
          image={item.links.flickr_images[0]?item.links.flickr_images[0]:'https://techcrunch.com/wp-content/uploads/2019/09/Starship-Mk1-Day.jpg?w=1390&crop=1'}
        />
        <CardContent>
          <Typography gutterBottom variant="body2" >
            launch site: {item.launch_site?item.launch_site.site_name_long: 'TBD' }
          </Typography>
          <Typography gutterBottom variant="body2" >
              <span>
                <RocketLaunchIcon/>
                {item.rocket?item.rocket.rocket_name:'TBD'}
              </span>
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

export default Launches
