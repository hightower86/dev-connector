import React, { useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getUserProfile } from '../../actions/profile';
import Spinner from '../layout/Spinner';
import DashboardActions from './DashboardActions';

const Dashboard = ({
  getUserProfile,
  auth: { user },
  profile: { profile, loading }
}) => {
  useEffect(() => {
    getUserProfile();
  }, []);
  console.log(profile);

  return loading && profile === null ? (
    <Spinner />
  ) : (
    <Fragment>
      <div className='container text-center '>
        <h1 className='text-4xl text-blue-700'>Dashboard</h1>
        <p className='text-lg'>Welcome, {user && user.name}</p>
        {profile !== null ? (
          <Fragment>
            <DashboardActions />
          </Fragment>
        ) : (
          <Fragment>
            You have not yet setup a profile. Please, add some info.
            <button className=' block mt-6 mx-auto border-black border-2 border-solid px-2 py-1'>
              <Link to='/create-profile'>create profile</Link>
            </button>
          </Fragment>
        )}
      </div>
    </Fragment>
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
