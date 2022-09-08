import React from 'react'

function PostItem() {
    return (
        <div>
            <div className='post'>
                <div className='post__content'>
                    <strong>1. JavaScript</strong>
                    <div>
                        JavaScript - Programming Language
                    </div>
                </div>
                <div className='post__btns'>
                    <button>Delete</button>
                </div>
            </div>
        </div>
    )
}

export default PostItem