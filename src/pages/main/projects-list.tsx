import { FC } from 'react';
import { actions, useAppDispatch, useAppSelector } from 'services/redux/store';
import { Button, Flex, Heading, Text } from 'theme-ui';

export const ProjectsList: FC<{}> = () => {
    const dispatch = useAppDispatch();
    const { setAll } = actions.projectsList;

    const { projects } = useAppSelector((state) => state.projectsList);
    const randomizeProjects = () => {
        dispatch(
            setAll(
                [...Array(Math.floor(Math.random() * 15)).keys()].map((i) => ({
                    name: `Project #${i}`
                }))
            )
        );
    };

    return (
        <Flex variant="layout.center">
            <Flex
                variant="layout.panel"
                sx={{
                    flexDirection: 'column'
                }}
            >
                <Heading>Hello!</Heading>
                {projects.map((pr) => (
                    <Text key={pr.name}>{pr.name}</Text>
                ))}
                <Button onClick={randomizeProjects}>Set projects</Button>
            </Flex>
        </Flex>
    );
};
