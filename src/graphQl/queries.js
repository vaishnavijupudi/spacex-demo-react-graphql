import { gql } from "@apollo/client";


export const GET_UPCOMING_MISSIONS  = gql`

query getUpcomingMissions {
    launchesUpcoming{
        id
        mission_name
        launch_date_local
        launch_site {
            site_id
            site_name_long
        }
        rocket {
            rocket_name
            rocket_type
            rocket {
              country
              description
            }
        }
        ships {
            image
            name
            home_port
        }

    }
}
`;


export const GET_ALL_LAUNCHES  = gql`

query getAllLaunches {
    launches{
        id
        mission_name
        launch_date_local
        launch_year
        launch_success
        mission_id
        upcoming
        launch_site {
            site_id
            site_name_long
        }
        rocket {
            rocket_name
            rocket_type
            rocket {
              country
              description
              company
            }
        }
        links {
            flickr_images
        }

    }
}
`;

export const GET_LAUNCH_DETAILS = gql`
  query GetLaunchDetails($id: ID!) {
    launch(id: $id) {
    id
    details
    launch_date_local
    launch_success
    mission_name
    mission_id
    launch_site {
      site_name_long
    }
    launch_year
    links {
      flickr_images
      article_link
      video_link
    }
    rocket {
      rocket_name
      rocket_type
      rocket {
        company
        country
        description
        cost_per_launch
      }
    }
    ships {
      successful_landings
      url
      missions {
        name
      }
    }
    }
  }
`;