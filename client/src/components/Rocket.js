import React from 'react';
// import LaunchesContext from '../context/LaunchesContext';

import { gql, useQuery } from '@apollo/client';

import { Link } from 'react-router-dom';

const ROCKET_QUERY = gql`
  query RocketQuery($id: String! = "falconheavy") {
    rocket(id: $id) {
      rocket_id
      rocket_name
      rocket_type
    }
  }
`;

export default function Rocket(props) {
  const rocketId = props.match.params.rocket_id;

  const { loading, error, data } = useQuery(ROCKET_QUERY, {
    variables: { id: rocketId },
  });
  if (loading) return 'Loading...';
  if (error) return `Error: ${error}`;

  if (data) {
    console.log(data.rocket);
  }

  return (
    <div>
      <h1 className='display-4 my-3'>
        <span className='text-dark'>Rocket:</span> {data.rocket.rocket_name}
      </h1>

      <ul className='list-group'>
        <li className='list-group-item'>Rocket ID: {data.rocket.rocket_id}</li>
        <li className='list-group-item'>
          Rocket Name: {data.rocket.rocket_name}
        </li>
        <li className='list-group-item'>
          Rocket Type: {data.rocket.rocket_type}
        </li>
      </ul>
      <hr />
      <Link to='/' className='btn btn-secondary'>
        Back
      </Link>
    </div>
  );
}
