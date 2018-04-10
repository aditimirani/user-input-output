import React from 'react'
 const UserOutput = (props) => {
    const pstyle = {
        fontWeight: 'bold'
     }
     const spanStyle ={
        textTransform: 'capitalize'
     }

    return(
        <React.Fragment>
            <p style={pstyle}>My name is : <span style={spanStyle}>{props.name}</span></p>
        </React.Fragment>
    )
}
export default UserOutput