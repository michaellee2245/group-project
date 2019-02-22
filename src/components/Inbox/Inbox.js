import React, { Component } from 'react';
import './inbox.scss'
import DefaultInbox from './DefaultInbox';
import InboxPosts from '../InboxPosts/InboxPosts'
import axios from 'axios';


class Inbox extends Component {

    state = {
        directMessages: [],
        comments:[],

    }

    componentDidMount(){
        this.getDirectMessages()
        this.getComments()
    }

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
      return  this.state.comments.filter(comment => {
          return !comment.read
      }).length
    }

    markCommentRead= (commentID) => {
        
        const comments = this.state.comments
        console.log("comments and index", comments, commentID)
       const comment = comments.find(comment=>comment.id === commentID)
       comment.read = !comment.read
        this.setState({comments: [...comments]})
    }

    showAllUpdates = () => {
        return  this.state.comments.map(this.renderInboxPosts)
    }

    showOpenUpdates= () => {
        return this.state.comments.filter( comment => {
            return !comment.read
            
        }).map(this.renderInboxPosts)
    }

    renderInboxPosts = (comment, index)=>{
        return(
            <InboxPosts
                author={comment.author}
                authorPic={comment.author_pic}
                boardName={comment.board}
                content={comment.content}
                taskName={comment.task}
                commentID={comment.id}
                key={index}
                readFunction={this.markCommentRead}
                commentRead={comment.read}
            />
         ) }

         handleAllUpdates=(event)=> {
             event.preventDefault()
             this.setState({allUpdates: true})
         }
        handleOpenUpdates=(event)=>{
            event.preventDefault()
            this.setState({allUpdates:false})
        }

    render() {

       

        return (
            <div className="inbox-wrapper-component">

                <div className="inbox-title-wrapper">
                    <span className="inbox-title">Inbox</span>

                    <div className="inbox-title-actions">
                        <span className="inbox-toggle-mode">
                            <a href="" className="active" onClick={this.handleOpenUpdates}> Open ({this.countComments()}) </a>
                            /
                <a href="" className="inbox-all-updates" onClick={this.handleAllUpdates}> All Updates</a>

                        </span>
                    </div>
                </div>



                <div className="middle-space-wrapper">
                    <div className="middle-space-wall">
                        <div className="posts-list">

                        {this.countComments() > 0 && !this.state.allUpdates || this.state.comments.length > 0 && this.state.allUpdates ?
                        '' :
                        (<DefaultInbox></DefaultInbox>)
                        }
                        {this.state.allUpdates ?  this.showAllUpdates() : this.showOpenUpdates()}
            
                        </div>

                    </div>

                </div>
            </div>
        )
    }
}

export default Inbox;
