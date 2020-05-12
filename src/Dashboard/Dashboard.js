import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import history from '../history';

const Dashboard = (props) => {
  const user = useSelector((state) => state.main);
  const data = useSelector((state) => state.main.userDetails);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!user.isLoggedIn) {
        history.push('/');
    }
  }, [user.isLoggedIn]);

  return (
    <div className='chat'>
      <h1>Hello {user.username}!</h1>
      <button onClick={() => dispatch({ type: 'LOGOUT'})}>Logout</button>
      <table className='table table-striped'>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>EMail</th>
            <th>Phn No</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.age}</td>
              <td>{item.gender}</td>
              <td>{item.email}</td>
              <td>{item.phoneNo}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
