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

  return <Fragment>
<form className="w-full max-w-lg mx-auto mt-4">
    
  <div className='relative'>
    <select className="iselect" 
        id="grid-state"
        >
          <option>* Select your professional status</option>
          <option>Junior developer</option>
          <option>Middle developer</option>
          <option>Senior developer</option>
          <option>Tech lead</option>
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex 
        items-center px-2 text-gray-700">
          <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        </div>
  </div>
        <p className="text-gray-700 text-xs italic mb-2">Give us an idea where you are at in your career</p>
  {/* <div className="flex flex-wrap -mx-3 mb-4"> */}
    {/* <div className="w-full md:w-1/2 px-3 mb-4 md:mb-0"> */}
      <input className="iinput" 
       id="grid-first-name" 
       type="text" placeholder="Company"/>
        <p className="text-gray-700 text-xs italic mb-2">
        Could be your own company or one you work for
        </p>
    {/* </div> */}
    {/* <div className="w-full md:w-1/2 px-3"> */}
     
      <input className="iinput" 
      id="grid-last-name" type="text" 
      placeholder="Website"/>
        <p className="text-gray-700 text-xs italic mb-2">
        Could be your own or company website
        </p>
    {/* </div> */}
  {/* </div> */}
      <input className="iinput" 
      id="grid-last-name" type="text" 
      placeholder="Location"/>
        <p className="text-gray-700 text-xs italic mb-2">
        City & state suggested
        </p>
      <input className="iinput" 
      id="grid-last-name" type="text" 
      placeholder="* Skills"/>
        <p className="text-gray-700 text-xs italic mb-2">
        Please use comma separated values (eg. HTML, CSS, JavaScript, React, etc.)
        </p>
      <input className="iinput" 
      id="grid-last-name" type="text" 
      placeholder="Github UserName"/>
        <p className="text-gray-700 text-xs italic mb-2">
        If you want your latest repos and a Github link, include your username
        </p>
  

</form>
  </Fragment>;
};

CreateProfile.propTypes = {};

export default CreateProfile;
