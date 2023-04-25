import { FC } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Container, Flex, Heading, Text } from 'theme-ui';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import {
    createUserWithEmailAndPassword,
    getAuth,
    updateProfile
} from 'firebase/auth';
import { Translate, translate } from 'react-i18nify';
import { toast } from 'react-toastify';
import { InputField } from 'components/molecules';

type SignUpForm = {
    username: string;
    email: string;
    password: string;
    confirmPassword: string;
};

export const SignUpPage: FC<{}> = () => {
    const auth = getAuth();

    const schema = yup.object().shape({
        username: yup
            .string()
            .min(3, translate('auth.error.usernameMinimum', { count: 3 }))
            .required(translate('auth.error.usernameMinimum', { count: 3 })),
        email: yup
            .string()
            .email(translate('auth.error.emailValid'))
            .required(translate('auth.error.emailValid')),
        password: yup
            .string()
            .min(5, translate('auth.error.passwordMinimum', { count: 5 }))
            .required(translate('auth.error.passwordMinimum', { count: 5 })),
        confirmPassword: yup
            .string()
            .oneOf(
                [yup.ref('password')],
                translate('auth.error.passwordMismatch')
            )
    });

    const {
        handleSubmit,
        register,
        formState: { errors }
    } = useForm<SignUpForm>({
        resolver: yupResolver(schema)
    });

    const navigate = useNavigate();

    const signUp = ({ email, password, username }: SignUpForm) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(({ user }) => {
                updateProfile(user, {
                    displayName: username
                }).catch(() => toast.error(translate('genericError')));
                return username;
            })
            .then((displayName) => {
                toast.success(`Welcome ${displayName}!`);
            })
            .catch(() => {
                toast.error(translate('auth.error.emailAlreadyInUse'));
            });
    };

    return (
        <Container
            sx={{
                display: 'flex',
                justifyContent: 'center'
            }}
        >
            <Flex
                sx={{
                    flexDirection: 'column',
                    alignItems: 'center',
                    width: 'narrow'
                }}
                as="form"
                onSubmit={handleSubmit(signUp)}
            >
                <Flex
                    sx={{
                        alignItems: 'center',
                        flexDirection: 'column',
                        mb: 5
                    }}
                >
                    <Heading as="h1">Hexcrawl</Heading>
                    <Text>
                        <Translate value="auth.welcome" />
                    </Text>
                    <Text>
                        <Translate value="auth.welcomeSubtitle" />
                    </Text>
                </Flex>
                <InputField
                    {...register('username', { required: true })}
                    defaultValue=""
                    label={translate('auth.username')}
                    errors={errors}
                    type="text"
                />
                <InputField
                    {...register('email', { required: true })}
                    defaultValue=""
                    label={translate('auth.email')}
                    errors={errors}
                    type="email"
                />
                <InputField
                    {...register('password', { required: true })}
                    defaultValue=""
                    type="password"
                    label={translate('auth.password')}
                    errors={errors}
                />
                <InputField
                    {...register('confirmPassword', { required: true })}
                    defaultValue=""
                    type="password"
                    label={translate('auth.confirmPassword')}
                    errors={errors}
                />
                <Button sx={{ mt: 5 }} type="submit">
                    <Translate value="auth.createAccount" />
                </Button>
                <Button variant="text" onClick={() => navigate('/sign-in')}>
                    <Translate value="auth.signInInstead" />
                </Button>
            </Flex>
        </Container>
    );
};
