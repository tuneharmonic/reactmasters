import React from 'react';

class Salutations extends React.Component {
    render() {
        return <h1>Salutations to you, { this.props['name'] || 'buddy' }!</h1>;
    }
}

export default Salutations;