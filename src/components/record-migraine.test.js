import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import RecordMigraine from './record-migraine'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <RecordMigraine />
    </BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});
