import { ReactiveFormsModule } from '@angular/forms';
import { fireEvent, render, screen } from '@testing-library/angular';
import userEvent from '@testing-library/user-event';
import { SecondComponent } from './second.component';


describe('SecondTestComponent', () => {

  it('should create', async () => {
    await render(SecondComponent, {
      imports: [
        ReactiveFormsModule
      ]
    });
    expect(screen.getByText('second works!')).toBeTruthy();
  });

  it('should show the sended field', async () => {
    await render(SecondComponent, {
      imports: [
        ReactiveFormsModule
      ]
    });
    const nameControl = document.querySelector('#name-gretting');
    userEvent.type(nameControl as Element, 'David');

    fireEvent.click(screen.getByText('Saluda'));

    const label = document.querySelector('#gretting');
    expect(label?.textContent).toEqual('Hola, David');


  });
});
