import { useEffect, useState } from 'react';
import { Layout } from '../layouts';
import { client as userApi } from './../api/users';

export const Home = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    userApi.get('/users').then((response) => {
      const { data } = response;

      setUsers(data);
    });
  }, [setUsers]);

  return (
    <Layout>
      <div class="mx-auto px-4 container">Home: {JSON.stringify(users)}</div>
    </Layout>
  );
};
