type User = {
  name: string;
  surname: string;
  email: string;
  password: string;
}

type UserChange = Omit<User, 'name' | 'surname'>
function createOrUpdateUser(initialValues: UserChange) {
}

createOrUpdateUser({ email: 'user@mail.com', password: 'password123' });

export { };

