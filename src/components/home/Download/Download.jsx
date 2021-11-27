import React, { useContext } from 'react';
import { ThemeContext } from '../../../providers/ThemeProvider';
import { Container, Section } from '../../common';
import { Wrapper, DownloadWrapper, Badge } from './styles';

export const Download = () => {
    const { theme } = useContext(ThemeContext);

    return (
        <Wrapper as={Section} id="download">
            <DownloadWrapper as={Container}>
                <h2>
                    Get Cboard for Android!
                </h2>
                <p>
                    Cboard app is available for Android mobile devices. Download now to
                    start communicate
                </p>
                <Badge></Badge>
            </DownloadWrapper>
        </Wrapper>
    );
};