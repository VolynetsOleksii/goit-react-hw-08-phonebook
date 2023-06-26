import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/authOperations';


export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    console.log('name: ', form.elements.name.value);
    console.log('email: ', form.elements.email.value);
    console.log('password: ', form.elements.password.value);
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="on">
      <label>
        Username
        <input type="text" name="name" required />
      </label>
      <label>
        Email
        <input type="email" name="email" required />
      </label>
      <label>
        Password
        <input type="password" name="password" required />
      </label>
      <button type="submit">Register</button>
    </form>
  );
};