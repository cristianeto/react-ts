import { useState } from 'react';

interface IUser {
  uuid: string;
  name: string;
}

// const tempUser: IUser = {
//   uuid: 'XYZ123',
//   name: 'Juanito Perez',
// };

const User = () => {
  const [user, setUser] = useState<IUser>();

  const login = () => {
    setUser({
      uuid: 'ACA123',
      name: 'Cristian Guaman',
    });
  };
  return (
    <div className='mt-5'>
      <h3>User</h3>
      <button className='btn btn-outline-primary' onClick={login}>
        Login
      </button>
      {!user ? 'There is not user' : <pre>{JSON.stringify(user)}</pre>}
    </div>
  );
};

export default User;
