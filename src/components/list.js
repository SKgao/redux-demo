import React, { Component } from 'react'
import { connect } from 'react-redux'

import { loadPostAction } from '../actions/post_action'

class List extends Component {
    constructor(props) {
        super(props)
        console.log(this.props)
    }

    componentDidMount() {
        this.props.dispatch(loadPostAction)
    }

    render() {
        const { list } = this.props.post;
        const Posts = list.map(post=>{
            return (<li key={post.id}>{post.title}</li>)
        })

        return (
            <div>
                <ul>{ Posts }</ul>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        post: state.postReducer
    }
}

export default connect(mapStateToProps)(List)