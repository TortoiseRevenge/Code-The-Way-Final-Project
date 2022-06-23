import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import FormControlLabel from '@mui/material/FormControlLabel';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import PropTypes from 'prop-types';

export default function SignUpForm(props) {
  const {
    emailAddress,
    firstName,
    lastName,
    onEmailAddressChange,
    onFirstNameChange,
    onLastNameChange,
    onPasswordChange,
    onSubmit,
    password,
  } = props;

  const onSubmitDisabled =
    !emailAddress || !firstName || !lastName || !password;

  return <div>Deprecated</div>;
}

SignUpForm.propTypes = {
  emailAddress: PropTypes.string.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  onEmailAddressChange: PropTypes.func.isRequired,
  onFirstNameChange: PropTypes.func.isRequired,
  onLastNameChange: PropTypes.func.isRequired,
  onPasswordChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  password: PropTypes.string.isRequired,
};
