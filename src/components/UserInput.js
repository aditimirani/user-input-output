import React from 'react'

 const UserInput = (props) => {
     const style={
         fontSize: '20px',
         border:'1px solid blue',
         padding: '10px',
         borderRadius: '5px',
         textTransform: 'capitalize'
     }
    return(
        <React.Fragment>
            <input style={style} type='input' value={props.name} onChange={props.changed} />
        </React.Fragment>
    )
}
export default UserInput