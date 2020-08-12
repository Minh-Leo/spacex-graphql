import React, { Fragment } from 'react';
// import LaunchesContext from '../context/LaunchesContext';

import { gql, useQuery } from '@apollo/client';

import LaunchItem from './LaunchItem';
import MissionKey from './MissionKey';

const LAUNCHES_QUERY = gql`
  query LaunchesQuery {
    launches {
      flight_number
      mission_name
      launch_date_local
      launch_success
      rocket {
        rocket_id
        rocket_name
        rocket_type
      }
    }
  }
`;

export default function Launches() {
  const { loading, error, data } = useQuery(LAUNCHES_QUERY);

  if (loading) return 'Loading...';
  if (error) return `Error: ${error}`;

  // const [launches, setLaunches] = useState([]);

  // useEffect(() => {
  //   setLaunches(data.launches);
  // }, []);

  // if (data) {
  //   setLaunches(data.launches);
  // }

  return (
    <Fragment>
      <h1 className='display-4 my-3'>Launches</h1>
      <button
        className='btn btn-primary'
        // onClick={() => setLaunches(data.launches)}
      >
        Save
      </button>
      <MissionKey />
      {data.launches.map((launch) => (
        <LaunchItem key={launch.flight_number} launch={launch} />
      ))}
    </Fragment>
  );
}
