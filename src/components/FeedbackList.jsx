// import {motion, AnimatePresence} from 'framer-motion'
import { useContext } from 'react'
import React from 'react'
import FeedbackItem from './FeedbackItem'
import FeedbackContext from '../context/FeedbackContext'

function FeedbackList() {
    
    const {feedback} = useContext(FeedbackContext)

    if(!feedback || feedback.length === 0){
        return <p>No Feedback yet!</p>
    }

    //Animation seciton doesn' work, will need further looking into
    // return(
    //     <div className='feedback-list'>
    //         <AnimatePresence>
    //             {feedback.map((item) => (
    //                 <FeedbackItem 
    //                 key={item.id} 
    //                 item={item} 
    //                 handleDelete={handleDelete}
    //                 />
    //             ))}
    //         </AnimatePresence>
            
    // </div>
    // )

    return (
    <div className='feedback-list'>
      {feedback.map((item) => (
          <FeedbackItem 
          key={item.id} 
          item={item} 
          />
      ))}
    </div>
  )
}


export default FeedbackList
