import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/authOperations';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Form, Title } from 'components/RegisterForm/RegisterForm.styled';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Title>Login form</Title>
      <TextField
        sx={{
          marginBottom: 2,
        }}
        type="email"
        name="email"
        autoComplete="email"
        label="Email"
        required
      />

      <TextField
        sx={{
          marginBottom: 2,
        }}
        type="password"
        name="password"
        autoComplete="current-password"
        label="Password"
        required
      />

      <Button type="submit" variant="outlined" size="large">Log In</Button>
    </Form>
  );
};
