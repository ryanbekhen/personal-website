import React, { Component } from 'react';
import './Content.css';

class SectionContentText extends Component {
    render() {
        return (
            <div className="content-text">
                {this.props.children}
            </div>
        );
    }
}

export default SectionContentText;