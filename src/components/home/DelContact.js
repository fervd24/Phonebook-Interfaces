import React from 'react'
import { delContactApiCall } from '../../api/delContactApiCall'

import './DelContact.css';

export const DelContact = ({closeModal, currData}) => {
    const {_id} = currData
    return (
    <div className='delContactContainer'>
        <p>Do you really want to delete this contact ?</p>
        <div className='delContactBtns'>
            <button onClick={() => delContactApiCall(_id)}>Yes</button>
            <button onClick={closeModal}>Cancel</button>
        </div>
    </div>
  )
}
