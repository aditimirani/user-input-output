import React from 'react'

 const UserInput = (props) => {
    return(
        <React.Fragment>
            <input value={props.name} placeholder='name'></input>
        </React.Fragment>
    )
}
export default UserInput