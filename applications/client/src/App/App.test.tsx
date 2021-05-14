import React from 'react';
import { render } from '@testing-library/react';
import {App} from './';
import {StateProvider} from "../state/Provider";
import {BrowserRouter as Router} from "react-router-dom";

test('renders app without exploding', () => {
  const app = render(
      <StateProvider>
        <Router>
          <App />
        </Router>
      </StateProvider>
  );
  expect(app).toBeDefined();
});
