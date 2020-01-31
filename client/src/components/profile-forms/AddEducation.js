import React, { useState, Fragment } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addEducation } from '../../actions/profile';

const AddEducation = ({ addEducation, history }) => {
  const [formData, setFormData] = useState({
    school: '',
    degree: '',
    fieldofstudy: '',
    from: '',
    to: '',
    current: false,
    description: ''
  });

  const [toDateDisabled, toggleDisabled] = useState(false);

  const {
    school,
    degree,
    fieldofstudy,
    from,
    to,
    current,
    description
  } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  return (
    <Fragment>
      <div className='container mx-auto text-center'>
        <h1 className=' text-3xl text-teal-700'>Add your education</h1>
        <p className='lead'>
          <i className='text-gray-700 text-xs italic mb-2' /> Add any school or
          bootcamp that you have attended
        </p>
        <small>* = required field</small>
      </div>
      <form
        className='w-full max-w-lg mx-auto mt-4'
        onSubmit={e => {
          e.preventDefault();
          addEducation(formData, history);
        }}
      >
        <div className='mb-4'>
          <input
            className='iinput'
            type='text'
            placeholder='* School or bootcamp'
            name='school'
            value={school}
            onChange={e => onChange(e)}
            required
          />
        </div>
        <div className='mb-4'>
          <input
            className='iinput'
            type='text'
            placeholder='* Degree or sertificate'
            name='degree'
            value={degree}
            onChange={e => onChange(e)}
            required
          />
        </div>
        <div className='mb-4'>
          <input
            className='iinput'
            type='text'
            placeholder='Field of study'
            name='fieldofstudy'
            value={fieldofstudy}
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

            <span className='text-sm'> Current </span>
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
            placeholder='Program description'
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
