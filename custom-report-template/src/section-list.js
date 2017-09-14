import React, { Component } from 'react';
import data from './data.js'
class SectionItem extends Component {
    render() {
        const subSections = this.props.section.subSections.map((subSection) => 
            <p key={subSection.name}>{subSection.name}</p>
        );
        return (
            <div className="card">
                <div className="card-body">
                    <p className="card card-title">
                    {this.props.section.name}
                    </p>

                    <div className="card card-text">
                    {subSections}
                    </div>
                </div>
            </div>
        );        

    }
}

class SectionList extends Component {
    render() {
        const sections = data.sections.map((section) => 
            <SectionItem key={section.name} section={section}/>
        );

        return <div>{sections}</div>;
    }
}

export default SectionList;