import React from 'react';
import {connect} from 'react-redux';
import {compose, bindActionCreators} from 'redux';
class List extends React.Component {
    constructor(props){
        super(props);
        this.state={
            error:null
        };
    }
    render() {
        let data = {...this.state};
        return(
            <h1>Hi</h1>
        )
    }
}
function mapStateToProps(state) {
    return {};
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
    dispatch
},dispatch)

export default compose(connect(mapDispatchToProps))(List);