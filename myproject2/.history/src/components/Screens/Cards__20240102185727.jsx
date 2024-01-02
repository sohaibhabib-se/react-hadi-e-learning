import React from 'react'
import PanelHeading from '../UI/PanelHeading'
import { Box } from 'react-feather'
import Layout from './Layout'

const Cards_ = () => {
  return (
    <Layout>
      <PanelHeading title={'Cards_'} icon={<Box size={25} />} />

      <div className='d-flex justify-content-start align-items-start gap-3 mt-5'>
      {[1,2,3,4].map( x => (<div className='card' style={{width: '18rem'}}>
      <div className='card-body'>
        <h5 className='card-title'>Card title</h5>
        <h6 className='card-subtitle mb-2 text-muted'>Card subtitle</h6>
        <p className='card-text'>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a href='#' className='card-link'>
          Card link
        </a>
        <a href='#' className='card-link'>
          Another link
        </a>
      </div>
    </div>))}
      </div>
    </Layout>
  )
}

export default Cards_
