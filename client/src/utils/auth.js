export const saveUser = (user) => {
  localStorage.setItem('token', user.token);
  localStorage.setItem('user', JSON.stringify(user));
};

export const getUser = () => {
  return JSON.parse(localStorage.getItem('user'));
};

export const logout = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('user');
};

export const isLoggedIn = () => {
  return !!localStorage.getItem('token');
};
