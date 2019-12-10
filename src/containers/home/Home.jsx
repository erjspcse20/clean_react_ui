import React from 'react';
import {connect} from 'react-redux';
import {compose, bindActionCreators} from 'redux';
import HomeDesign from '../../components/home/Home'
class Home extends React.Component {
    constructor(props){
        super(props);
        this.state={};
    }
    render() {
        return(
            <HomeDesign  />
        )
    }
}
function mapStateToProps(state) {
    const {appReducer} = state;
    return {
        userDetail:appReducer.userDetail
    };
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
    dispatch
},dispatch)

export default compose(connect(mapStateToProps,mapDispatchToProps))(Home);