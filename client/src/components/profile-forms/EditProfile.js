import React, { Fragment, useState, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createProfile, getUserProfile } from '../../actions/profile';
import { setAlert } from '../../actions/alert';

const EditProfile = ({
  profile: { profile, loading },
  createProfile,
  history
}) => {
  const [formData, setFormData] = useState({
    company: '',
    website: '',
    location: '',
    status: '',
    skills: '',
    bio: '',
    githubusername: '',
    youtube: '',
    facebook: '',
    instagram: '',
    twitter: '',
    linkedin: ''
  });
  const [displaySocialInputs, toggleSocialInputs] = useState(false);
  //console.log(displaySocialInputs);
  useEffect(() => {
    getUserProfile();

    setFormData({
      company: loading || !profile.company ? '' : profile.company,
      website: loading || !profile.website ? '' : profile.website,
      location: loading || !profile.location ? '' : profile.location,
      status: loading || !profile.status ? '' : profile.status,
      skills: loading || !profile.skills ? '' : profile.skills.join(','),
      githubusername:
        loading || !profile.githubusername ? '' : profile.githubusername,
      bio: loading || !profile.bio ? '' : profile.bio,
      twitter: loading || !profile.social ? '' : profile.social.twitter,
      facebook: loading || !profile.social ? '' : profile.social.facebook,
      linkedin: loading || !profile.social ? '' : profile.social.linkedin,
      youtube: loading || !profile.social ? '' : profile.social.youtube,
      instagram: loading || !profile.social ? '' : profile.social.instagram
    });
  }, [loading, getUserProfile]);
  const {
    company,
    website,
    location,
    status,
    skills,
    bio,
    githubusername,
    youtube,
    facebook,
    instagram,
    twitter,
    linkedin
  } = formData;

  const onChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  const onSubmit = e => {
    e.preventDefault();
    createProfile(formData, history, true);
  };
  console.log(JSON.stringify(formData));

  return (
    <Fragment>
      <div className='container mx-auto text-center'>
        <h1 className='text-green-500 text-3xl'>Edit Your Profile</h1>
        <p className='lead'>
          <i className='fas fa-user' /> Let's get some information to make your
          profile stand out
        </p>
        <small>* = required field</small>
      </div>

      <form
        className='w-full max-w-lg mx-auto mt-4'
        onSubmit={e => onSubmit(e)}
      >
        <div className='relative'>
          <select
            name='status'
            className='iselect'
            value={status}
            onChange={e => onChange(e)}
          >
            <option>* Select your professional status</option>
            <option>Junior developer</option>
            <option>Middle developer</option>
            <option>Senior developer</option>
            <option>Tech lead</option>
          </select>
          <div
            className='pointer-events-none absolute inset-y-0 right-0 flex 
        items-center px-2 text-gray-700'
          >
            <svg
              className='fill-current h-4 w-4'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 20 20'
            >
              <path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
            </svg>
          </div>
        </div>
        <p className='text-gray-700 text-xs italic mb-2'>
          Give us an idea where you are at in your career
        </p>
        <input
          name='company'
          onChange={e => onChange(e)}
          value={company}
          className='iinput'
          type='text'
          placeholder='Company'
        />
        <p className='text-gray-700 text-xs italic mb-2'>
          Could be your own company or one you work for
        </p>
        <input
          name='website'
          onChange={e => onChange(e)}
          value={website}
          className='iinput'
          type='text'
          placeholder='Website'
        />
        <p className='text-gray-700 text-xs italic mb-2'>
          Could be your own or company website
        </p>
        <input
          name='location'
          onChange={e => onChange(e)}
          value={location}
          className='iinput'
          type='text'
          placeholder='Location'
        />
        <p className='text-gray-700 text-xs italic mb-2'>
          City & state suggested
        </p>
        <input
          name='skills'
          onChange={e => onChange(e)}
          value={skills}
          className='iinput'
          type='text'
          placeholder='* Skills'
        />
        <p className='text-gray-700 text-xs italic mb-2'>
          Please use comma separated values (eg. HTML, CSS, JavaScript, React,
          etc.)
        </p>
        <input
          name='githubusername'
          onChange={e => onChange(e)}
          value={githubusername}
          className='iinput'
          type='text'
          placeholder='Github UserName'
        />
        <p className='text-gray-700 text-xs italic mb-2'>
          If you want your latest repos and a Github link, include your username
        </p>

        <textarea
          name='bio'
          onChange={e => onChange(e)}
          value={bio}
          className='iinput'
          placeholder='A short bio of yourself'
        />
        <p className='text-gray-700 text-xs italic mb-2'>
          Tell us little about yourself
        </p>
        <div className='flex'>
          <button
            type='button'
            onClick={() => toggleSocialInputs(!displaySocialInputs)}
            className='bg-gray-200 text-sm text-center py-0 px-4 mr-4 focus:outline-none'
          >
            Add Social Network links
          </button>
          <div className=' py-1 px-2'>Optional</div>
        </div>
        {displaySocialInputs && (
          <Fragment>
            <div className='flex mt-4'>
              <i className='fab fa-twitter-square fa-2x mr-2 text-blue-400'></i>
              {/* <div className='py-0 px-2 bg-gray-500 mr-2 rounded-sm'>tw</div> */}
              <input
                name='twitter'
                onChange={e => onChange(e)}
                value={twitter}
                className='iinput'
                type='text'
                placeholder='Twitter URL'
              />
            </div>
            <div className='flex mt-4'>
              <i className='fab fa-facebook-square fa-2x mr-2 text-blue-400'></i>
              {/* <div className='py-0 px-2 bg-gray-500 mr-2 rounded-sm'>tw</div> */}
              <input
                name='facebook'
                onChange={e => onChange(e)}
                value={facebook}
                className='iinput'
                type='text'
                placeholder='Facebook URL'
              />
            </div>
            <div className='flex mt-4'>
              <i className='fab fa-youtube-square fa-2x mr-2 text-red-500'></i>
              {/* <div className='py-0 px-2 bg-gray-500 mr-2 rounded-sm'>tw</div> */}
              <input
                name='youtube'
                onChange={e => onChange(e)}
                value={youtube}
                className='iinput'
                type='text'
                placeholder='Youtube URL'
              />
            </div>
            <div className='flex mt-4'>
              <i className='fab fa-linkedin fa-2x mr-2 text-blue-400'></i>
              {/* <div className='py-0 px-2 bg-gray-500 mr-2 rounded-sm'>tw</div> */}
              <input
                name='linkedin'
                onChange={e => onChange(e)}
                value={linkedin}
                className='iinput'
                type='text'
                placeholder='LinkedIn URL'
              />
            </div>
            <div className='flex mt-4'>
              <i className='fab fa-instagram fa-2x mr-2 text-red-400'></i>
              {/* <div className='py-0 px-2 bg-gray-500 mr-2 rounded-sm'>tw</div> */}
              <input
                name='instagram'
                onChange={e => onChange(e)}
                value={instagram}
                className='iinput'
                type='text'
                placeholder='Instagram URL'
              />
            </div>
          </Fragment>
        )}
        <div className='buttons flex my-4'>
          <button className='btn my-0 mr-4 px-6'>Submit</button>
          <Link
            to='/dashboard'
            type='button'
            className='btn my-0 bg-gray-500 px-6 hover:bg-gray-600'
          >
            Go Back
          </Link>
        </div>
      </form>
    </Fragment>
  );
};

EditProfile.propTypes = {
  createProfile: PropTypes.func.isRequired,
  getUserProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile
});

export default connect(mapStateToProps, { createProfile, getUserProfile })(
  withRouter(EditProfile)
);
