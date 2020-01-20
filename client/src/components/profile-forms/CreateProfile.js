import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const CreateProfile = props => {
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

  return (
    <Fragment>
      <div className='container mx-auto text-center'>
        <h1 className='text-indigo-500 text-3xl'>Create Your Profile</h1>
        <p className='lead'>
          <i className='fas fa-user' /> Let's get some information to make your
          profile stand out
        </p>
        <small>* = required field</small>
      </div>

      <form className='w-full max-w-lg mx-auto mt-4'>
        <div className='relative'>
          <select className='iselect' id='grid-state'>
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
        {/* <div className="flex flex-wrap -mx-3 mb-4"> */}
        {/* <div className="w-full md:w-1/2 px-3 mb-4 md:mb-0"> */}
        <input
          className='iinput'
          // id='grid-first-name'
          type='text'
          placeholder='Company'
        />
        <p className='text-gray-700 text-xs italic mb-2'>
          Could be your own company or one you work for
        </p>
        {/* </div> */}
        {/* <div className="w-full md:w-1/2 px-3"> */}

        <input
          className='iinput'
          // id='grid-last-name'
          type='text'
          placeholder='Website'
        />
        <p className='text-gray-700 text-xs italic mb-2'>
          Could be your own or company website
        </p>
        {/* </div> */}
        {/* </div> */}
        <input
          className='iinput'
          // id='grid-last-name'
          type='text'
          placeholder='Location'
        />
        <p className='text-gray-700 text-xs italic mb-2'>
          City & state suggested
        </p>
        <input
          className='iinput'
          // id='grid-last-name'
          type='text'
          placeholder='* Skills'
        />
        <p className='text-gray-700 text-xs italic mb-2'>
          Please use comma separated values (eg. HTML, CSS, JavaScript, React,
          etc.)
        </p>
        <input
          className='iinput'
          // id='grid-last-name'
          type='text'
          placeholder='Github UserName'
        />
        <p className='text-gray-700 text-xs italic mb-2'>
          If you want your latest repos and a Github link, include your username
        </p>

        {/* <textarea
          className='iinput'
          placeholder='A short bio of yourself'
          name='bio'
        /> */}
        <p className='text-gray-700 text-xs italic mb-2'>
          Tell us little about yourself
        </p>
        <div className='flex'>
          <button
            type='button'
            onClick={() => toggleSocialInputs(!displaySocialInputs)}
            className='bg-gray-200 text-sm text-center py-0 px-4 mr-4 focus:border-black focus:border-solid'
            //onClick={() => toggleSocialInputs(!displaySocialInputs)}
          >
            Add Social Network links
          </button>
          <div className=' py-1 px-2'>Optional</div>
        </div>
        {displaySocialInputs && (
          <Fragment>
            <div className='flex mt-4'>
              <div className='py-0 px-2 bg-gray-500 mr-2 rounded-sm'>tw</div>
              <input
                className='iinput'
                // id='grid-last-name'
                type='text'
                placeholder='Twitter URL'
              />
            </div>
            <div className='flex mt-4'>
              <div className='py-0 px-2 bg-gray-500 mr-2 rounded-sm'>tw</div>
              <input
                className='iinput'
                // id='grid-last-name'
                type='text'
                placeholder='Facebook URL'
              />
            </div>
            <div className='flex mt-4'>
              <div className='py-0 px-2 bg-gray-500 mr-2 rounded-sm'>tw</div>
              <input
                className='iinput'
                // id='grid-last-name'
                type='text'
                placeholder='Youtube URL'
              />
            </div>
            <div className='flex mt-4'>
              <div className='py-0 px-2 bg-gray-500 mr-2 rounded-sm'>tw</div>
              <input
                className='iinput'
                // id='grid-last-name'
                type='text'
                placeholder='LinkedIn URL'
              />
            </div>
            <div className='flex mt-4'>
              <div className='py-0 px-2 bg-gray-500 mr-2 rounded-sm'>tw</div>
              <input
                className='iinput'
                // id='grid-last-name'
                type='text'
                placeholder='Instagramm URL'
              />
            </div>
            <div className='buttons flex my-4'>
              <button className='btn my-0 mr-4 px-6'>Submit</button>
              <button
                type='button'
                className='btn my-0 bg-gray-500 px-6 hover:bg-gray-600'
              >
                Go Back
              </button>
            </div>
          </Fragment>
        )}
      </form>
    </Fragment>
  );
};

CreateProfile.propTypes = {};

export default CreateProfile;
