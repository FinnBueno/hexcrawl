import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchProjects } from 'services/redux/projects-list';
import { useAppDispatch, useAppSelector } from 'services/redux/store';
import { Button, Flex, Heading, Text } from 'theme-ui';

export const ProjectsList: FC<{}> = () => {
    const dispatch = useAppDispatch();

    const { projects, loading } = useAppSelector((state) => state.projectsList);

    const navigate = useNavigate();

    const randomizeProjects = () => {
        dispatch(fetchProjects());
    };

    return (
        <Flex variant="layout.center">
            <Flex
                variant="layout.panel"
                sx={{
                    flexDirection: 'column',
                    alignItems: 'center'
                }}
            >
                <Heading>Hello!</Heading>
                {loading === 'loading' && <Text>Loading...</Text>}
                {projects.map((pr, index) => (
                    <Button
                        key={pr.name}
                        sx={{ width: '100%' }}
                        onClick={() => navigate(`/${index}`)}
                        variant="text"
                    >
                        <Text>{pr.name}</Text>
                    </Button>
                ))}
                <Button onClick={randomizeProjects}>Set projects</Button>
            </Flex>
        </Flex>
    );
};
