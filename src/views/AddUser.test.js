import React from 'react';
import AddUser from './AddUser';
import Dashboard from './Dashboard';
import { renderWithProviders } from 'helpers/renderWithProviders';
import { fireEvent, screen } from '@testing-library/react';

describe('Form', () => {
  it('Renders the component', () => {
    renderWithProviders(
      <>
        <AddUser />
        <Dashboard />
      </>
    );
    fireEvent.change(screen.getByTestId('Name'), {
      target: { value: 'Grazyna' },
    });
    fireEvent.change(screen.getByTestId('Attendance'), {
      target: { value: '55%' },
    });
    fireEvent.change(screen.getByTestId('Average'), {
      target: { value: '4.5' },
    });
    fireEvent.click(screen.getByText('Add'));
    screen.getByText('Grazyna');
  });
});
