import React from 'react'
import { Col, Row } from 'react-bootstrap'
import './Workreusable.css'
const Workreusable = (props) => {
  return (
    <>
     
     <Col lg={6}>
                    <div className="main-work">
                <div className="work-text">
                    <h5>{props.number}</h5>
                        </div>
                        <h4>{props.title}</h4>
                         <p className='para'>{props.para}</p>
                        </div>
                     </Col>
                
        
    </>
  )
}

export default Workreusable