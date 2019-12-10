import React from 'react';
import { compose } from 'redux';
class Home extends React.Component {
    render(){
        return (
            <div className="container">
                <h1>First Page</h1>
            </div>
        )
    }
}
export default compose()(Home);