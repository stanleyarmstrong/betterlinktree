import React, {useState, useEffect} from 'react';

function Dashboard(props) {

   return (
    <div>
        {props.match.params.username}'s Dashboard
    </div>
   );
}

export default Dashboard;