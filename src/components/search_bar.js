import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = { term: 'Search something...' };
    }

    render() {
        return (
            <div>
                <input
                    value={this.state.term}
                    onClick={event => this.setState({ term: '' })}
                    onChange={event => this.setState({ term: event.target.value })} />
            </div>
        )
    }
}

export default SearchBar;