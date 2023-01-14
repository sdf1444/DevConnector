import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const ProfileItem = (props) => {
  return (
    <div className='profile bg-light'>
      {/* <img src={avatar} alt='' className='round-img' /> */}
      <div>
        {/* <h2>{name}</h2>  */}
        <p>
          {status} {props.company && <span> at {props.company}</span>}
        </p>
        <p className='my-1'>{props.location && <span>{props.location}</span>}</p>
        {/* <Link to={`/profile/${_id}`} className='btn btn-primary'>
          View Profile
        </Link> */}
      </div>
      <ul>
        {props.skills.slice(0, 4).map((skill, index) => (
          <li key={index} className='text-primary'>
            <i className='fas fa-check' /> {skill}
          </li>
        ))}
      </ul>
    </div>
  );
};

ProfileItem.propTypes = {
  profile: PropTypes.object.isRequired
};

export default ProfileItem;
