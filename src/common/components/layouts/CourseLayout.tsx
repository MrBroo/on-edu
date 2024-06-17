'use client'

import { styled } from '@mui/material/styles';
import { Box, Container } from '@mui/material';
import MainNavbar from '../MainNavbar';
import { useState } from 'react';

const MainLayoutRoot = styled('div')(({ theme }: any) => ({
    display: 'flex',
    flex: '1 1 auto',
    maxWidth: '100%',
    paddingTop: 64,
  }));

export default function CourseLayout(props) {
  const { children } = props;
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <>
        <MainLayoutRoot>
          <Box
            sx={{
              display: 'flex',
              flex: '1 1 auto',
              flexDirection: 'column',
              width: '100%',
            }}
          >
            {children}
          </Box>
        </MainLayoutRoot>
        <MainNavbar layoutType="course" onOpenSidebar={() => setIsSidebarOpen(true)} />
      </>
    )
}