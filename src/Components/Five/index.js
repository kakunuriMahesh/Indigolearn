import RequestCall from '../RequestCall'

import './index.css'
import '../First/index.css'
const Five = () => {
    return(
        <div className='five-container'>
            <div>
                <div className='five-content'>
                    <h1 className='five-head'>Kick off your ACCA Prep journey with IndigoLearn</h1>
                    <p className='five-para'>Sign-in and get instant acccess to our FREE Courses</p>
                </div>
                <div className='red'>
                    <p className='silver'>SILVER LEARNING PARTNER</p>
                    <p className='acca'>ACCA</p>
                </div>
            </div>
            <div className='req-con'>
                <RequestCall/>
            </div>
        </div>
    )
}
export default Five