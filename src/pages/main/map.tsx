import { FC } from 'react';
import { getAuth, signOut } from 'firebase/auth';
import { Button, Flex, Text } from 'theme-ui';

export const Map: FC<{}> = () => (
    <Flex
        sx={{
            flex: 4,
            width: '100%',
            height: '100%',
            bg: 'blue'
        }}
    >
        Test
    </Flex>
);
