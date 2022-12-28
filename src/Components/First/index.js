import {MdEmojiEmotions, MdMenuBook, MdTv, MdGroup} from 'react-icons/md'
import RequestCall from '../RequestCall'
import './index.css'

const First = () => {
    return(
        <div className='main'>
            <div className='content'>
                <h1 className='heading'>Become ACCA in 18 months</h1>
                <p className="para">Acquire globally recognized 
                    accountancy qualification, 
                    ACCA (also called as Global CA), 
                    and get placed in top MNCs & Big4s.
                    Begin ACCA prep with 1FIN now.
                </p>
                <div className='min-card-container'>
                    <div className='mini-card'>
                        <div className='emoji-align'>
                            <MdEmojiEmotions/>
                            <p className='title'>Registered Users</p>
                        </div>
                        <p className='num'>249,022</p>
                    </div>
                    <div className='mini-card'>
                        <div className='emoji-align'>
                            <MdMenuBook/>
                            <p className='title'>Courses Enrolled</p>
                        </div>
                        <p className='num'>65,171</p>
                    </div>
                    <div className='mini-card'>
                        <div className='emoji-align'>
                            <MdTv/>
                            <p className='title'>Minutes Watched</p>
                        </div>
                        <p className='num'>2,090,935,459</p>
                    </div>
                    <div className='mini-card'>
                        <div className='emoji-align'>
                            <MdGroup/>
                            <p className='title'>Faculty</p>
                        </div>
                        <p className='num'>8 Experts</p>
                    </div>
                </div>
                <div className='button-card-container'>
                    <button className='download'>Download Brochure</button>
                    <div className='red'>
                        <p className='silver'>SILVER LEARNING PARTNER</p>
                        <p className='acca'>ACCA</p>
                    </div>
                </div>
            </div>
            <RequestCall/>
        </div>
    )
}
export default First