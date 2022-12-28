// import '../Second/index.css'
import './index.css'

const Third = () => {
    return(
        <div >
            <div className='third-main-container'>
                <h1>What will you Learn in ACCA?</h1>
                <hr/>
            </div>
            <div className='container'>
                <div className='third-card'>
                    <h1 className='header-heading'>Knowledge Level</h1>
                    <ul>
                        <li>Business and Technology (BT)</li>
                        <li>Management Accounting (MA)</li>
                        <li>Financial Accounting (FA)</li>
                    </ul>
                    <div className='footer d-flex flex-column justify-content-bottom'>
                        <h1 className='bottom-heading'>3 papers</h1>
                    </div>
                </div>

                <div className='third-card'>
                <h1 className='header-heading'>Skill Level</h1>
                    <ul>
                        <li>Corporate and Business Law (LW)</li>
                        <li>Performance Management (PM)</li>
                        <li>Taxation (TX)</li>
                        <li>Financial Reporting (FR)</li>
                        <li>Audit and Assurance (AA)</li>
                        <li>Financial Management (FM)</li>

                    </ul>
                    <div className='footer'>
                        <h1 className='bottom-heading'>6 papers</h1>
                    </div>
                </div>

                <div className='third-card'>
                    <h1 className='header-heading'>Professional Level</h1>
                    <p className='sub-heading'>Compulsory</p>
                    <ul>
                        <li>SBL - Strategic Business Leader</li>
                        <li>SBR - Strategic Business Reporting</li>
                    </ul>
                    <p className='sub-heading'>Two out of the following</p>
                    <ul>
                        <li>Advanced Financial Management (AFM)</li>
                        <li>Advanced Performance Management (APM)</li>
                        <li>Advanced Taxation (ATX)</li>
                        <li>Advanced Audit and Assurance (AAA)</li>
                    </ul>
                    <div className='footer'>
                        <h1 className='bottom-heading'>4 papers</h1>
                    </div> 
                </div>
            </div>
        </div>

    )
}
export default Third