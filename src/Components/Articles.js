import React, {Component} from 'react';
import PropTypes from 'prop-types';

export const Articles = ({onEdit, item, onChange, index, onDelete}) => (
   <div className="">
   <div className="card mb-3 ">
     <div className="card-body">
       {item.isEditing
           ?
           <div className="mb-4">
             <input
                 type="text"
                 name="title"
                 className="form-control mb-2 mr-sm-2"
                 placeholder="Article"
                 value={item.title}
                 onChange={event => onChange(event, index)}
                 required
             />
             <input
                 type="text"
                 name="body"
                 className="form-control"
                 placeholder="body"
                 value={item.body}
                 onChange={event => onChange(event, index)}
                 required
             />

            <input
                 type="text"
                 name="author"
                 className="form-control"
                 placeholder="author"
                 value={item.author}
                 onChange={event => onChange(event, index)}
                 required
             />
           </div>
           :
           <div>
              <div className="card-header">
             <h4 className="card-title text-center"><u>{item.title}</u></h4>
             </div>
             <br/>
             <h6 className="card-title text-left">{item.body}</h6>
             <br/>
             <h5 className="card-title text-right">{item.author}</h5>
             <div className="row justify-content-center mb-4">
               <p className="card-text">
               </p>
             </div>
           </div>
       }

       <div className="row justify-content-center">
         <div>
           <button
               type="button"
               className="btn btn-primary mr-2"
               onClick={onEdit}>
             {item.isEditing ? "Save" : "Edit"}
           </button>
           <button
               type="button"
               className="btn btn-primary"
               onClick={onDelete}>
             Delete
           </button>
         </div>
       </div>
     </div>
   </div>
 </div>
        );


    Articles.propTypes = {
         item: PropTypes.shape({
           title: PropTypes.string.isRequired,
           body: PropTypes.string.isRequired,
           author: PropTypes.string.isRequired
         }),
         onEdit: PropTypes.func.isRequired,
         onChange: PropTypes.func.isRequired,
         onDelete: PropTypes.func.isRequired,
       };
 