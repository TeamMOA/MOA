import React from 'react';
import {Link} from 'react-router-dom';
class Category extends React.Component {
    
    constructor(props){
        super(props);
    }

    render(){
        return(
            <input type="button" value={this.props.value}>{this.props.children}</input>
        );
    }
}

export default Category;