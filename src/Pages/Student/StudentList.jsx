import React from 'react'

import SideNavBar from '../../components/SideNavBar/SideNavBar'


function StudentList() {

    return (
        <div className='Main'>
            <SideNavBar />
            <div className="Home">
                <div class="container rounded bg-white">
                    <h2>Student List</h2>
                    <hr style={{ border: "1px solid gray" }} />
                    <div className=''>
                        <div className='row'>
                            <div className='col-lg-2'>
                                <h4>Select Class : </h4>
                            </div>
                            <div className='col-lg-3'>
                                
                            </div>
                        </div>
                        <div className='bonafide-content-2'></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StudentList