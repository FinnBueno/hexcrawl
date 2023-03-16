import { Localization } from './type';

export const nl: Localization = {
    genericError: 'Er is iets fout gegaan. Probeer het later nog eens.',
    auth: {
        error: {
            emailAlreadyInUse: 'Dit e-mail adres is al in gebruik',
            passwordMinimum:
                'Je wachtwoord moet minimaal uit %{count} tekens bestaan',
            emailValid: 'Dat is geen geldige e-mail',
            usernameMinimum:
                'Je username moet minimaal uit %{count} tekens bestaan',
            passwordMismatch: 'Wachtwoorden matchen niet'
        },
        welcome: 'Welkom',
        welcomeSubtitle: 'Log in of maak een account',
        signIn: 'Log in',
        signInWithGoogle: 'Log in met Google',
        createAccount: 'Maak account',
        createAccountInstead: 'Nog geen account?',
        signInInstead: 'Heb je al een account?',
        username: 'Gebruikersnaam',
        password: 'Wachtwoord',
        confirmPassword: 'Bevestig wachtwoord',
        email: 'E-mail'
    },
    title: 'MyApp'
};
