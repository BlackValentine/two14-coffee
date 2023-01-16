import axiosClient from './axiosClient';

const createUser = (user) => {
  const url = '/user/create-user';
  return axiosClient.post(url, {
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    password: user.password,
  });
}

const userApi = {
  createUser
};

export default userApi;
