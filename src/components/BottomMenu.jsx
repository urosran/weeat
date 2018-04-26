import React from 'react';


let locationUser = "usdan";

const handleSubmit = function(){
    fetch("/db/addToUsdan", {
        method: "POST",
        headers: new Headers({
          "Content-Type": "application/JSON"
        }),
        body: JSON.stringify({
          location:locationUser,
        })
      })
}

class BottomMenu extends React.Component{
    render(){
        return(
            <div className="bottomMenu">
                <button className="bottomButton" onSubmit={handleSubmit()}>+</button>
            </div>
        )
    }
}

export default BottomMenu;