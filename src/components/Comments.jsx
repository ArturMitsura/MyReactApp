import React from 'react';
import '../styles/App.css';

const Comments = ({ comments }) => {
   return (
      <div>
         {comments.map(comm =>
            <div className='PostId__comment' key={comm.id}>
               <h3 className='PostId__h3'>{comm.email}</h3>
               <div>{comm.body}</div>
            </div>
         )}
      </div>
   );
};

export default Comments;