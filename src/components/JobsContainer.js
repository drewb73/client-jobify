import React, {useEffect} from 'react'
import { useAppContext } from '../context/appContext'
import Loading from './Loading'
import Job from './Job'
import Wrapper from '../assets/wrappers/JobsContainer'


export const JobsContainer = () => {
    const {getJobs, jobs, isLoading, page, totalJobs, search, searchStatus, searchType, sort} = useAppContext()
    useEffect(() => {
        getJobs()
    }, [search, searchStatus, searchType, sort])

    if (isLoading) {
        return <Loading center />
    }
if (jobs.length === 0) {
    return (
        <Wrapper>
            <h2>No Jobs Found</h2>
        </Wrapper>
      )
    }

    return (
        <Wrapper>
            <h5>{totalJobs} job{jobs.length > 1 && 's'} found</h5>
            <div className='jobs'>
                {jobs.map((job) => {
                    return <Job key={job._id} {...job} />
                } )}
            </div>
        </Wrapper>
    )
}

export default JobsContainer
