import { useState } from "react";
import {Modal, Button} from 'react-bootstrap'
import '../First/index.css'
import './index.css'

const RequestCall = () => {
    const [show, setShowValue] = useState(false)
    const onRequest = () => {
        setShowValue(current => !current)
        console.log(show)
    
    }
        return(
            <div className='call-container'>
                <h1 className='call-heading'>Aspiring to be an ACCA? Get in touch with us!</h1>
                <input placeholder='Phone Number'type='text'/>
                <input placeholder='Email ID' type='text'/>
                <select name="cars" id="cars">
                    <option value="Current Qualification">Current Qualification</option>
                    <option value="ca">CA</option>
                    <option value="bcom">Bcom</option>
                    <option value="cs">CS</option>
                    <option value="cma">CMA</option>
                    <option value="other">Other</option>
                    
                </select>
                <select name="cars" id="cars">
                    <option value="">Interested</option>
                    <option value="ACCA Level I">ACCA Level I</option>
                    <option value="ACCA Level II">ACCA Level II</option>
                    <option value="ACCA Level III">ACCA Level III</option>
                </select>
                <button className='req-button' onClick={onRequest}>Request Call Back</button>

                <Modal show={show} className='modal'>
                    <Modal.Header closeButton onClick={onRequest}>
                    <Modal.Title>Success</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <img src="https://res.cloudinary.com/dwhmqaqhj/image/upload/v1672217379/save-removebg-preview_qnnvmx.png"
                         alt="saved"
                         className="img"
                        />
                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="danger" onClick={onRequest}>
                        Close
                    </Button>
                    {/* <Button variant="dark" onClick={initModal}>
                        Store
                    </Button> */}
                    </Modal.Footer>
                </Modal>

            </div>
        )
    }
export default RequestCall