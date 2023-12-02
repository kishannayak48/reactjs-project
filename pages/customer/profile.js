import React from 'react'
import DisplayText from './displayText'

function Profile(props) {
    const { fontSize } = props
    return (
        <div>
            <DisplayText
                text="This is my Fist page"
            />
        </div>
    )
}

export default Profile
