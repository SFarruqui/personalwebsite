import React, { useContext } from 'react';
import DataContext from '../contexts/dataContext';
import { TaskBar, List } from '@react95/core';
import styled from 'styled-components';

const Link = styled.a`
    text-decoration: none;
    color: inherit;
`;

function Taskbar() {
    const { projectRepo, react95Repo } = useContext(DataContext).getProjectInfo();
    console.log(projectRepo);

    const showPopup = () => {
        alert("Welcome to my website!");
    };

    return (
        <TaskBar
            list={
                <List>
                    <List.Item className="pointer" icon="progman_2" onClick={showPopup}>
                        <Link href="#">Simon Farruqui</Link>
                    </List.Item>
                    <List.Divider />
                    <List.Item className="pointer" icon="grpconv_100">
                        <Link href={react95Repo} target="_blank">Built with React95</Link>
                    </List.Item>
                    <List.Divider />
                </List>
            }
        />
    );
}

export default Taskbar;
