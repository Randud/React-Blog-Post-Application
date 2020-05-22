import React, {Component} from 'react';
import PropTypes from 'prop-types';

export const AddNewArticle = ({title, body,author, onChange, onSubmit}) => (
    <div className="card card-body my-3">
            <form onSubmit={onSubmit}>
            <div className="form-group">
                <label>Article Title</label>
                <input  type="text" className="form-control" name="title" onChange={onChange} value={title} placeholder="Add new article" required="true"/>
            </div>

            <div className="form-group">
                <label>Article Body</label>
                <textarea name="body" className="form-control" onChange={onChange} value={body} rows="3" placeholder="Add article body" required="true"></textarea>
            </div>

            <div className="form-group">
                <label>Article Author</label>
                <input  name="author" type="text" className="form-control" onChange={onChange} value={author} placeholder="Add author name" required="true"/>
            </div>

            <button type="submit" className="btn btn-primary btn-rounded mt-2 mx-auto ">Submit</button>
            </form> 
        </div>
    );
 
    AddNewArticle.propTypes = {
        title: PropTypes.string.isRequired,
        body: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
        onChange: PropTypes.func.isRequired,
        onSubmit: PropTypes.func.isRequired,
      };
