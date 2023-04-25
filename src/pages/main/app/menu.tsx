import { FC } from 'react';
import { Flex } from 'theme-ui';

export const Menu: FC<{ show: boolean }> = ({ show }) => {
    if (!show) return <></>;
    return (
        <Flex
            sx={{
                position: 'absolute',
                flex: 1,
                width: '250px',
                height: '100%',
                bg: 'green'
            }}
        >
            Test
        </Flex>
    );
};
