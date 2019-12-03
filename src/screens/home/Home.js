import React, { Component } from 'react';
import Header from '../../common/header/Header';

class Home extends Component {

    render() {
        
        return (
            <div>
                {/* Rendering the Header Component */}
                <Header baseUrl={this.props.baseUrl} showHeaderSearchBox={true} updateSearchRestaurant={this.updateSearchRestaurant}></Header>
            </div>
        )
    }
}
