type ColorTheme = {
    text: string,
    background: string,
    primary: string,
    secondary: string,
    accent: string,
    highlight: string,
    muted: string,
    error: string,
    input: string
}

const dark: ColorTheme = {
    text: '#EFEFFF',
    background: '#133245',
    primary: '#336ADA',
    secondary: '#232A5A',
    accent: '#CA4534',
    highlight: '#F4E392',
    muted: '#667879',
    error: '#D72332',
    input: '#234255'
};

export const colors = {
    ...dark,
    modes: {
        dark
    }
};
