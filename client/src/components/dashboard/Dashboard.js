import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getUserProfile } from '../../actions/profile';

const Dashboard = ({ getUserProfile, auth, profile }) => {
  useEffect(() => {
    getUserProfile();
  }, []);
  console.log(profile);

  return (
    <div className='container mx-auto mt-10 w-full max-w-sm'>
      <h2 className='text-5xl'>Dashboard</h2>
      <p>{JSON.stringify(profile)}</p>
    </div>
  );
};

Dashboard.propTypes = {
  getUserProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile
});

export default connect(mapStateToProps, { getUserProfile })(Dashboard);
