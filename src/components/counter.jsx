import React, { Component } from 'react';


class Counter extends Component {
    state = {
        count: 0,
        tags: ['tag1', 'tag2', 'tag3']
    };

    //You must use constructors if the " => " syntax breaks.

    // constructor() {
    //     super();
    //     this.handleIncrement = this.handleIncrement.bind(this);
    // }

    handleIncrement = (player) => {
        console.log(player);
        this.setState({ count: this.state.count + 1 })
    };

    renderTags() {
        if (this.state.tags.length === 0) return <p> There are no tags! </p>;

        return <ul>{this.state.tags.map(tag => <li key={tag}>{ tag }</li>)}</ul>;

    };

    render() { 
        
        let classes = this.getBadgeClasses();

        return (
            <React.Fragment> 
                <span 
                    className={classes}>
                    {this.formatCount()}
                </span>
                <button 
                    onClick={(player) => this.handleIncrement(player)} 
                    className="btn btn-secondary btn-small"> 
                    Increment 
                </button>

                { this.state.tags.length === 0 && 'Please create a new tag.' }
                {this.renderTags()}
            </React.Fragment>
        );
    };

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.state.count === 0) ? "warning" : "primary";
        return classes;
    };

    formatCount(){
        const {count} = this.state;
        return count === 0 ? 'Zero': count;
    };
}
 
export default Counter;