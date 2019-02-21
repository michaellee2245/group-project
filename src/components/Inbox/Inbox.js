import React, { Component } from 'react';
import './inbox.scss'
import DefaultInbox from './DefaultInbox';
import InboxPosts from '../InboxPosts/InboxPosts'
import axios from 'axios';


class Inbox extends Component {

    state = {
        toggleDefaultInbox: true,
        allUpdates: false,
        directMessages: [],
        comments:[],


    }

    componentDidMount(){
        this.getDirectMessages()
        this.getComments()
    }

    allUpdateShow = () => {}

    getDirectMessages= () => {
        axios.get(`api/message`)
        .then((response) => {
            console.log("these are the messages", response)
            this.setState({directMessages: response.data})
        })
    }
    
    getComments = () => {
        axios.get(`api/comment`)
        .then((comments) => {
            console.log("these are the comments", comments)
            this.setState({comments: comments.data})
        })
    }

    countComments =() => {
      return  this.state.comments.length
    }

    render() {

       

        return (
            <div className="inbox-wrapper-component">

                <div className="inbox-title-wrapper">
                    <span className="inbox-title">Inbox</span>

                    <div className="inbox-title-actions">
                        <span className="inbox-toggle-mode">
                            <a href="" className="active"> Open ({this.countComments()}) </a>
                            /
                <a href="" className="inbox-all-updates"> All Updates</a>

                        </span>
                    </div>
                </div>



                <div className="middle-space-wrapper">
                    <div className="middle-space-wall">
                        <div className="posts-list">
                            {/* <DefaultInbox></DefaultInbox> */}
                            {/* <InboxPosts /> */}
                            {this.state.comments.map( comment => {
                                return(
                                    // <div className="extra-div" style={{backgroundColor: 'chartruse'}}> div
                                    <InboxPosts
                                        author={comment.author}
                                        authorPic={comment.author_pic}
                                        boardName={comment.board}
                                        content={comment.content}
                                        taskName={comment.task}


                                    />
                                    
                                )
                            }
                            )}
                            
                        

                        </div>

                    </div>

                </div>
            </div>
        )
    }
}

export default Inbox;
