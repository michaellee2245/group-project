import React, { Component } from 'react';
import './comment-slide-in.scss';
import axios from 'axios';

class CommentSlideIn extends Component {

    state = {
        open: false,
        taskName: '',
        commentText: '',
        taskID: 127,
        commentList: []
    }

    componentDidMount = () => {
        axios.get(`api/comment/on-task/${this.state.taskID}`)
            .then(response => {
                const list = response.data.reverse()
                this.setState({
                    commentList: list
                })
            })
    }

    handleClick = () => {
        this.setState({
            open: !this.state.open
        })
    }

    handleChange = ({ target: { value, name } }) => {
        this.setState({
            [name]: value
        })
    }

    taskNameChange = () => {
        axios.put('api/task/name', {taskID: this.state.taskID, name: this.state.taskName})
    }

    addComment = () => {
        axios.post('api/comment', {taskID: this.state.taskID, content: this.state.commentText})
            .then(response => {
                this.setState({
                    commentList: [response.data, ...this.state.commentList]
                })
            })
    }

    

    render() {

        console.log(this.state.commentList)

        const taskCommentList = this.state.commentList.map((task, i) => {
            return (
                <div 
                    key={i}
                    className="comment-container"
                >
                    <div>
                        {task.content}
                    </div>
                </div>
            )
        })

        return (

            <div
                className="slide-in-container"
                style={{
                    transform: this.state.open ? 'translateX(0px)' : 'translateX(350px)'
                }}
            >
                <div className="content-container">
                    <div
                        id="close-button"
                        onClick={this.handleClick}
                    >
                        X
                    </div>
                    <form
                        onSubmit= {e => { e.preventDefault(); this.taskNameChange()} }
                    >
                        <input
                            className="title-input"
                            type="text"
                            placeholder="new"
                            name="taskName"
                            onChange={this.handleChange}
                        />
                    </form>
                    <div className="divider" />
                    <form
                        onSubmit= {e => { e.preventDefault(); this.addComment()} }
                    >
                        <input
                            className="comment"
                            placeholder="Write an update..."
                            name="commentText"
                            onChange={this.handleChange}
                        />
                    </form>
                    {taskCommentList}
                </div>
            </div>

        )
    }
}

export default CommentSlideIn;