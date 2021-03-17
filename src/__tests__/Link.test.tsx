import React from 'react';
import Link from '../components/Link/Link';
import ReactDOM from 'react-dom';

test('calls onSubmit with the username and password when submitted',() => {
    const container = document.createElement('div');
    ReactDOM.render(<Link href={'check'} >1111</Link>, container);
});
