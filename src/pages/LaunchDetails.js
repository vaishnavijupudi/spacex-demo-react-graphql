import React from 'react'
import { useParams } from 'react-router-dom';
import { GET_LAUNCH_DETAILS } from '../graphQl/queries';
import { useQuery } from '@apollo/client';
import { CircularProgress, Typography, Paper, Grid } from '@mui/material';
import moment from "moment";
import FlagIcon from '@mui/icons-material/Flag';
import PaidIcon from '@mui/icons-material/Paid';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';

const LaunchDetails = () => {

    const { id } = useParams();
    const { loading, error, data } = useQuery(GET_LAUNCH_DETAILS, {
        variables: { id },
    });


    if (loading) return <CircularProgress />;
    if (error) return <Typography>Error: {error.message}</Typography>;

  return (
    <div>
  <Grid
    container
    justifyContent="center"
    rowSpacing={1}
    columnSpacing={{ xs: 1, sm: 2, md: 3 }}
    marginTop={2}
    direction="column"
  >
    <Grid
      item
      xs={12}
      md={8}
      lg={6} 
      style={{ display: "flex", alignItems: "center" }}
    >
      <img
        className="col"
        src={data.launch.links.flickr_images[0] ? data.launch.links.flickr_images[0] : 'https://techcrunch.com/wp-content/uploads/2019/09/Starship-Mk1-Day.jpg?w=1390&crop=1'}
        alt="Not found"
        style={{
          width: '100%',
          height: 'auto',
        }}
      />
    </Grid>
    <Grid item xs={12} md={8} lg={6}>
      <Paper sx={{ p: 3 }} key={data.launch.id}>
        <Typography variant="button" display="block" gutterBottom color="dodgerblue">
          {data.launch.mission_name}
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary">
          {moment(new Date(data.launch.launch_date_local)).format('MMMM Do YYYY, h:mm:ss a')}
        </Typography>
        <Typography sx={{ mb: 2 }} color="text.secondary" gutterBottom>
          {data.launch.details?data.launch.details:''}
        </Typography>
        <Typography variant="button" display="block" gutterBottom color="dodgerblue">
          {data.launch.rocket.rocket_name?data.launch.rocket.rocket_name:''}
        </Typography>
        <Typography sx={{ mb: 2 }} color="text.secondary" gutterBottom>
          {data.launch.rocket.rocket.description ? data.launch.rocket.rocket.description : ''}
        </Typography>
        <Typography sx={{ mb: 2 }} color="text.secondary" gutterBottom>
          <FlagIcon /> {data.launch.rocket.rocket.country ? data.launch.rocket.rocket.country : ''}
        </Typography>
        <Typography sx={{ mb: 2 }} color="text.secondary" gutterBottom>
          <PaidIcon /> {data.launch.rocket.rocket.country ? data.launch.rocket.rocket.cost_per_launch : ''}
        </Typography>
        <Typography sx={{ mb: 2 }} color="text.secondary" gutterBottom>
          {data.launch.links.article_link && (
            <Link to={data.launch.links.article_link}>
              <Button size="small" variant="contained" sx={{
            right: '0.5%'}}>ARTICLE</Button>
            </Link>
          )}
        
          {data.launch.links.video_link && (
            <Link to={data.launch.links.video_link}>
              <Button size="small" variant="contained">VIDEO</Button>
            </Link>
          )}

        </Typography>
      </Paper>
    </Grid>
  </Grid>
</div>
  )
}

export default LaunchDetails
