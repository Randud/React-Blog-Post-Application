/**
 * IT18165258
 * Rajapakshe R.M.P.R.L
 * Y3.S1.09.2 - weekend
 */
import React, {Component} from 'react';
import { Helmet } from 'react-helmet';
import {AddNewArticle} from "./Components/AddNewArticle";
import {Articles} from "./Components/Articles";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
   
    constructor(props){
        super(props);
        this.state ={
            title:'',
            body:'',
            author:'',
            articleList:[]
    }
    }

    /**
   * Handle  changes in the AddNewarticles.
   * @param event
   */
    onChangeHandler = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState(
            {
                [name]: value,
                
            }
        );
    };


    /**
   * Add an Articles to state.
   * @param event
   */
    onSubmitHandler = event =>
    {
        event.preventDefault();
        const {title, body, author} = this.state;
        const articleInState = this.state.articleList;
        const articleArrayLength = articleInState.length;
        const id = articleArrayLength ? (articleInState[articleArrayLength - 1].id + 1) : 1;
        
        this.setState({
            articleList: [
              ...articleInState,
              Object.assign({}, {
                id,
                title,
                body,
                author
              })
            ],
            title: "",
            body: "",
            author:""
          })
    };

    /**
   * @param index
   */
    onEdit = index => {
        this.setState({
            articleList: this.state.articleList.map((item, itemIndex) => {
            if (itemIndex === index) {
              return {
                ...item,
                isEditing: !item.isEditing
              }
            }
            return item;
          })
        });
      };
    
      /**
       * Update articles.
       * @param event
       * @param index
       */
      handleArticleUpdate = (event, index) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            articleList: this.state.articleList.map((item, itemIndex) => {
            if (itemIndex === index) {
              return {
                ...item,
                [name]: value
              }
            }
            return item;
          })
        });
      };

    
      /**
       * Delete article
       * @param index
       */
      handleArticleDelete = index => {
        this.setState({
            articleList: [
            ...this.state.articleList.slice(0, index),
            ...this.state.articleList.slice(index + 1)
          ]
        });
      };
    
    render() {
      
        const {title, body, author} = this.state;
        return (
            <div className="container">
                <Helmet>
                    <title>My Blog Page</title>
                </Helmet>
                <div className="row card border-primary bg-light mb-3">
                    <div className="col-10 mx-auto col-md-6 mt-4">
                    <h1 className="text-center text-primary text"> My Blog</h1>
                        <AddNewArticle title={title} body={body} author={author} onChange={this.onChangeHandler} onSubmit={this.onSubmitHandler}/>                                        
                        {
                        this.state.articleList.reverse().map((item, index) =>
                        <Articles
                            key={item.id}
                            index={index}
                            item={item}
                            onEdit={() => this.onEdit(index)}
                            onChange={this.handleArticleUpdate}
                            onDelete={() => this.handleArticleDelete(index)}
                         />
                        )
                    }
                    </div>
                </div>
            </div>


        );
    }
}

export default App;
