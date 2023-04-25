import { Localization } from './type';

export const en: Localization = {
    genericError:
        'An error occurred while performing this action. Please try again later.',
    auth: {
        error: {
            emailAlreadyInUse:
                'An account with that e-mail address already exists',
            passwordMinimum:
                'Make sure your password has at least %{count} characters',
            emailValid: 'Make sure you fill in a valid e-mail',
            usernameMinimum:
                'Make sure your username has at least %{count} characters',
            passwordMismatch: "Passwords don't match"
        },
        welcome: 'Welcome',
        welcomeSubtitle: 'Get started below',
        signIn: 'Sign in',
        signInWithGoogle: 'Sign in with Google',
        createAccount: 'Create account',
        createAccountInstead: 'Create account instead',
        signInInstead: 'Sign in instead',
        username: 'Username',
        password: 'Password',
        confirmPassword: 'Confirm password',
        email: 'E-mail'
    },
    title: 'MyApp'
};
