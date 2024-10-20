import React from 'react'
import styled from 'styled-components'
import { Icon } from '@react95/core'
import {startWebamp} from '../utils/startWebamp.js';


const StyledShorcut = styled.div`
    margin-left: 20px;
    margin-top: 20px;
	align-items: center;
`;

function Shortcuts({ openExplorer }) {
    return (
        <div>
            <StyledShorcut>
                <Icon
                    className="pointer"
                    name="windows_explorer"
                    onClick={() => openExplorer()}
                />
                <div>Explorer</div>
            </StyledShorcut>
            <StyledShorcut>
                <Icon
                    className="pointer"
                    name="bulb"
                    onClick={()=>window.open('https://scholar.google.com/citations?view_op=list_works&hl=en&authuser=6&hl=en&user=qOqwY2wAAAAJ&authuser=6', '_blank')}
                />
                <div>Research</div>
            </StyledShorcut>
            <StyledShorcut>
                <Icon
                    className="pointer"
                    name="media_cd"
                    onClick={()=>startWebamp()}
                />
                <div>Music</div>
            </StyledShorcut>
            <StyledShorcut>
                <Icon
                    className="pointer"
                    name="mcm_3203"
                    onClick={()=>window.open('https://youtube.com/playlist?list=PLU8LwA9mfWk0t7VaBzSYtxHiPjGWUIrX4&si=Ufse5Zd5S80567ab', '_blank')}
                />
                <div>Travels</div>
            </StyledShorcut>
            <StyledShorcut>
                <Icon
                    className="pointer"
                    name="progman_16"
                    onClick={()=>window.open('https://youtube.com/playlist?list=PLU8LwA9mfWk0t7VaBzSYtxHiPjGWUIrX4&si=Ufse5Zd5S80567ab', '_blank')}
                />
                <div>Brickfilms</div>
            </StyledShorcut>
        </div>
    )
}

export default Shortcuts
