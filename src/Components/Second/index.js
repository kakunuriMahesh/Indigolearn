import {MdMenuBook} from 'react-icons/md'
import {GiAlarmClock} from 'react-icons/gi'
import {BsLaptop, BsCalendarCheck} from 'react-icons/bs'
import './index.css'

const Second = () => {
    return(
        <div className='second-main-container'>
            <h1>Why Choose Us?</h1>
            <hr/>
            <div className='card-container'>
                <div className='card'>
                    <img
                    src='https://res.cloudinary.com/dwhmqaqhj/image/upload/v1672193042/ca_concept_qcvflm.png'
                    alt='concept'
                    className="choose-img"
                    />
                    <h1 className='choose-head'>Expert Faculty</h1>
                    <p className='choose-para'>Our Faculty are subject matter expertise with practical experience.
                     They believe in #StudentFirst principle</p>
                </div>
                <div className='card'>
                    <img
                    src='https://res.cloudinary.com/dwhmqaqhj/image/upload/v1672193065/ca_top_faculties_z7mwyw.png'
                    alt='faculties'
                    className="choose-img"
                    />
                    <h1 className='choose-head'>Complete Success Package</h1>
                    <p className='choose-para'>Leading Exam Prep Destination with Video classes, Live sessions, Doubt resolution Forums,
                     E-notes from Kaplan, MCQs, Practice tests, Webinars.</p>
                </div>
                <div className='card'>
                    <img
                    src='https://res.cloudinary.com/dwhmqaqhj/image/upload/v1672193054/ca_unlimited_views_t8jw1w.png'
                    alt='views'
                    className="choose-img"
                    />
                    <h1 className='choose-head'>Placements</h1>
                    <p className='choose-para'>Resume building workshops, mock interviews and placement drives will help you 
                    impress the top employers and get the dream job.</p>
                </div>
            </div>

            <div className='second-mini-cards-container'>
                <div className='card mini-card choose-sub-cards'>
                        <p className='tit'>Levels</p>
                    <div className='emoji-align'>
                        <MdMenuBook/>
                        <p className='num'>Three (13 papers)</p>
                    </div>
                </div>
                <div className='card mini-card choose-sub-cards'>
                        <p className='tit'>Duration</p>
                    <div className='emoji-align'>
                        <GiAlarmClock/>
                        <p className='num'>6-30 months</p>
                    </div>
                </div>
                <div className='card mini-card choose-sub-cards'>
                        <p className='tit'>Exams</p>
                    <div className='emoji-align'>
                        <BsLaptop/>
                        <p className='num'>Quarterly (Online)</p>
                    </div>
                </div>
                <div className='card mini-card choose-sub-cards'>
                        <p className='tit'>Exemptions</p>
                    <div className='emoji-align'>
                        <BsCalendarCheck/>
                        <p className='num'>Upto 9 papers</p>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default Second