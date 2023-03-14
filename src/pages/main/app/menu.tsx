import { FC } from 'react';
import { Flex } from 'theme-ui';

export const Menu: FC<{}> = () => (
    <Flex
        sx={{
            flex: 1,
            minWidth: '250px',
            width: '100%',
            height: '100%',
            bg: 'green'
        }}
    >
        Test
    </Flex>
);
