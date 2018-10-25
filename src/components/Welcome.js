import React from 'react';

function Welcome(props) {
    return <h1>Welcome { props['name'] || 'person' }!</h1>;
}

export default Welcome;