import { FC, useState } from 'react';
import { Flex } from 'theme-ui';
import { Menu } from 'pages/main/app/menu';
import { Map } from 'pages/main/app/map';
import { useParams } from 'react-router-dom';
import { ProjectsList } from 'pages/main/projects-list';
import { Provider } from 'react-redux';
import { store } from 'services/redux/store';

export const AppLayout: FC<{}> = () => {
    const { projectId } = useParams();
    const [showMenu, setShowMenu] = useState(false);
    return (
        <Provider store={store}>
            {projectId ? (
                <Flex
                    sx={{
                        width: '100%',
                        height: '100%'
                    }}
                >
                    <Menu show={showMenu} />
                    <Map toggleMenu={() => setShowMenu(!showMenu)} />
                </Flex>
            ) : (
                <ProjectsList />
            )}
        </Provider>
    );
};
