import React from 'react';
import {Link} from 'react-router-dom';
import '../style/component.css';
class Category extends React.Component {
    
    constructor(props){
        super(props);
    }

    render(){
        return(
            <input type="button" value="{this.props.value}"></input>
        );
    }
}

export default Category;