// import { ChangeEvent, useState } from 'react';
import { useForm } from '../hooks/useForm';

interface formData {
  postal: string;
  city: string;
}
export const Form2 = () => {
  const { form, handleChange } = useForm<formData>({
    postal: 'ABC',
    city: 'UIO',
  });

  const { postal, city } = form;
  return (
    <form autoComplete='off'>
      <div className='mb-3'>
        <label className='form-label'>Postal Code: </label>
        <input
          type='text'
          className='form-control'
          name='postal'
          value={postal}
          onChange={handleChange}
        />
      </div>
      <div className='mb-3'>
        <label className='form-label'>City: </label>
        <input
          type='text'
          className='form-control'
          name='city'
          value={city}
          onChange={handleChange}
        />
      </div>
      <pre>{JSON.stringify(form)}</pre>
    </form>
  );
};
