import { FC } from 'react';
import { Flex } from 'theme-ui';
import { Menu } from 'pages/main/menu';
import { Map } from 'pages/main/map';

export const MainPage: FC<{}> = () => (
    <Flex
        sx={{
            width: '100%',
            height: '100%',
            bg: 'red'
        }}
    >
        <Menu />
        <Map />
    </Flex>
);
