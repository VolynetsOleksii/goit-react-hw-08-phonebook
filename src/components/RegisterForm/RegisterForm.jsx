import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/authOperations';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Form, Title } from './RegisterForm.styled';

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
    form.reset();
  };

  return (
    
      <Form onSubmit={handleSubmit}>
        <Title>Register form</Title>
        <TextField
          sx={{
            marginBottom: 2,
          }}
          type="text"
          name="name"
          autoComplete="given-name"
          label="User name"
          required
        />

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
          autoComplete="new-password"
          label="Password"
          required
        />

        <Button type="submit" variant="outlined" size="large">
          Register
        </Button>
      </Form>
    
  );
};
