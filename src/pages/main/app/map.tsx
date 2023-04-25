import { FC } from 'react';
import { Button, Flex } from 'theme-ui';

type MapProps = {
    toggleMenu: () => void;
};

export const Map: FC<MapProps> = ({ toggleMenu }) => (
    <Flex
        sx={{
            flex: 4,
            width: '100%',
            height: '100%',
            bg: 'blue'
        }}
    >
        <Button onClick={toggleMenu}>Toggle menu</Button>
    </Flex>
);
