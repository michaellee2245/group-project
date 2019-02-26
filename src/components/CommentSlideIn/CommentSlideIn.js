import React, { Component } from 'react';
import './comment-slide-in.scss';
import axios from 'axios';

class CommentSlideIn extends Component {

    state = {
        open: false,
        taskName: '',
        commentText: '',
        commentList: this.props.commentList,
        currentTask: 'Current task name'
    }

    handleCloseComments = () => {
        this.props.closePanel();
    }





    addComment = ({key, target, target: { value }}) => {
        if (key === 'Enter') {
            target.value = ''

        axios.post('/api/comment', { taskID: this.props.taskID, content: value })
            .then(response => {
               this.props.updateComment(response.data)
               
            })
            this.setState=({commentText:''})
        }
    }



    render() {


        const taskCommentList = this.props.commentList.map((task, i) => {
            return (
                <div
                    key={i}
                    className="comment-container"
                >
                    <div className="inner-comment">
                        <div className="comment-info">
                            <div className="name-pic">
                                <div
                                    id="pic" 
                                    style={{
                                        backgroundColor: '#fb275d',
                                        height: '25px',
                                        width: '25px',
                                        borderRadius: '50%',
                                        backgroundImage: `url(${task.author_pic})`,
                                        backgroundSize: 'contain',
                                        backgroundRepeat: 'no-repeat'
                                    }}
                                
                                />
                                {task.author}
                            </div>
                            <div>{task.time_posted}</div>
                        </div>
                        <div className="content">
                            {task.content}
                        </div>
                    </div>
                </div>
            )
        })

        return (

            <div
                className="slide-in-container"
                style={{
                    transform: this.props.open ? 'translateX(0px)' : 'translateX(555px)'
                }}
            >
                <div className="content-container">
                    <div
                        id="close-button"
                        onClick={this.handleCloseComments}
                    >
                        X
                    </div>
                    <form
                        onSubmit={e => { e.preventDefault(); this.props.updateTaskName() }}
                    >
                        <input
                            className="title-input"
                            type="text"
                            placeholder={this.props.taskName}
                            name="taskName"
                            onChange={this.props.handleChange}
                            
                        />
                    </form>
                    <div className="divider" />
                    <form
                        // onSubmit={e => { e.preventDefault(); this.addComment() }}
                    >
                        <textarea
                            className="comment"
                            placeholder="Write an update..."
                            name="commentText"
                            value={this.props.commentText}
                            onChange={this.props.handleChange}
                            onKeyDown={this.addComment}
                        />
                    </form>
                    {taskCommentList}
                </div>
            </div>

        )
    }
}

export default CommentSlideIn;