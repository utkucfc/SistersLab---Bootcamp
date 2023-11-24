import { useDispatch } from 'react-redux';
import { Box, Button, Container, TextField, Typography } from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { registerUser } from '../store/userSlice';

const Signup = () => {
    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            confirmPassword: '',
        },
        validationSchema: Yup.object({
            email: Yup.string().email('Geçerli bir email adresi giriniz').required('Email gerekli'),
            password: Yup.string().required('Şifre gerekli').min(6, 'Şifre en az 6 karakter olmalıdır'),
            confirmPassword: Yup.string()
                .oneOf([Yup.ref('password'), null], 'Şifreler eşleşmiyor')
                .required('Şifre tekrarı gerekli'),
        }),
        onSubmit: (values) => {
            console.log('Form submitted with values:', values);
            const userData = {
                email: values.email,
                password: values.password,
            };
            dispatch(registerUser(userData));
        },
    });

    return (
        <Container component="main" maxWidth="xs">
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Typography component="h1" variant="h5">
                    Üye Ol
                </Typography>
                <Box component="form" onSubmit={formik.handleSubmit} noValidate sx={{ mt: 1 }}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Adresi"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
                        error={formik.touched.email && Boolean(formik.errors.email)}
                        helperText={formik.touched.email && formik.errors.email}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Şifre"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.password}
                        error={formik.touched.password && Boolean(formik.errors.password)}
                        helperText={formik.touched.password && formik.errors.password}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="confirmPassword"
                        label="Şifre Tekrarı"
                        type="password"
                        id="confirmPassword"
                        autoComplete="current-password"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.confirmPassword}
                        error={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
                        helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}
                    />
                    <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                        Üye Ol
                    </Button>
                </Box>
            </Box>
        </Container>
    );
};

export default Signup;