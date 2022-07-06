import React from 'react'
import {FormRow, Alert, FormRowSelect} from '../../components'
import { useAppContext } from '../../context/appContext'
import Wrapper from '../../assets/wrappers/DashboardFormPage'



const AddJob = () => {
  const {
    isEditing,
    showAlert,
    displayAlert,
    position,
    company,
    jobLocation,
    jobType,
    jobTypeOptions,
    status,
    statusOptions,
    handleChange,
  } = useAppContext()

const handleSubmit = (e) => {
  e.preventDefault()

  if (!position || !company || !jobLocation) {
    displayAlert()
    return
  }
  console.log('Create Job')
}

const handleJobInput = (e) => {
 handleChange({name: e.target.name, value: e.target.value})
}

  return (
    <Wrapper>
      <form className='form'>
        <h3>{isEditing ? 'edit job' : 'add job'} </h3>
        {showAlert && <Alert />}
        <div className='form-center'>
          <FormRow type='text' name='position' value={position} handleChange={handleJobInput}/>
          <FormRow type='text' name='company' value={company} handleChange={handleJobInput}/>
          <FormRow type='text' labelText='location' name='jobLocation' value={jobLocation} handleChange={handleJobInput}/>

          <FormRowSelect name ='status' value={status} handleChange={handleJobInput} list={statusOptions} />
          <FormRowSelect name ='jobType' labelText='job type' value={jobType} handleChange={handleJobInput} list={jobTypeOptions} />


          <div className='btn-container'>
           <button className='btn btn-block submit-btn' type='submit' onClick={handleSubmit}>submit</button>
          </div>
        </div>
      </form>
    </Wrapper>
  )
}

export default AddJob