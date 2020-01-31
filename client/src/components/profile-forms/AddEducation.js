import React, { useState, Fragment } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addEducation } from '../../actions/profile';

const AddEducation = ({ addEducation, history }) => {
  const [formData, setFormData] = useState({
    company: '',
    title: '',
    location: '',
    from: '',
    to: '',
    current: false,
    description: ''
  });

  const [toDateDisabled, toggleDisabled] = useState(false);

  const { company, title, location, from, to, current, description } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  return (
    <Fragment>
      <div className='container mx-auto text-center'>
        <h1 className=' text-3xl text-teal-700'>Add An Experience</h1>
        <p className='lead'>
          <i className='text-gray-700 text-xs italic mb-2' /> Add any
          developer/programming positions that you have had in the past
        </p>
        <small>* = required field</small>
      </div>
      <form
        className='w-full max-w-lg mx-auto mt-4'
        onSubmit={e => {
          e.preventDefault();
          addExperience(formData, history);
        }}
      >
        <div className='mb-4'>
          <input
            className='iinput'
            type='text'
            placeholder='* Job Title'
            name='title'
            value={title}
            onChange={e => onChange(e)}
            required
          />
        </div>
        <div className='mb-4'>
          <input
            className='iinput'
            type='text'
            placeholder='* Company'
            name='company'
            value={company}
            onChange={e => onChange(e)}
            required
          />
        </div>
        <div className='mb-4'>
          <input
            className='iinput'
            type='text'
            placeholder='Location'
            name='location'
            value={location}
            onChange={e => onChange(e)}
          />
        </div>
        <div className='mb-4'>
          <label class='block text-gray-700 text-sm font-bold mb-1' for='from'>
            From date
          </label>
          <input
            className='iinput'
            type='date'
            name='from'
            value={from}
            onChange={e => onChange(e)}
          />
        </div>
        <div className='mb-4 '>
          <label className='block text-gray-500 font-bold'>
            <input
              className='mr-2 leading-tight'
              type='checkbox'
              name='current'
              checked={current}
              value={current}
              onChange={() => {
                setFormData({ ...formData, current: !current });
                toggleDisabled(!toDateDisabled);
              }}
            />

            <span className='text-sm'> Current Job</span>
          </label>
        </div>
        <div className='mb-4'>
          <label class='block text-gray-700 text-sm font-bold mb-1' for='to'>
            To date
          </label>
          <input
            className='iinput'
            type='date'
            name='to'
            value={to}
            onChange={e => onChange(e)}
            disabled={toDateDisabled ? 'disabled' : ''}
          />
        </div>
        <div className='form-group'>
          <textarea
            className='iinput'
            name='description'
            cols='30'
            rows='5'
            placeholder='Job Description'
            value={description}
            onChange={e => onChange(e)}
          />
        </div>
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

AddEducation.propTypes = {
  addEducation: PropTypes.func.isRequired
};

export default connect(null, { addEducation })(withRouter(AddEducation));

