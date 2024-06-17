'use client'
import { useEffect, useMemo, useState } from 'react';

import { Box } from '@mui/material';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { useTranslation } from 'react-i18next';
import { getSidebarSections } from '@config';
import MainSidebar from '../MainSidebar';
import MainNavbar from '../MainNavbar';

const MainLayoutRoot = styled('div')(({ theme }: any) => ({
  display: 'flex',
  flex: '1 1 auto',
  maxWidth: '100%',
  paddingTop: 64,
  [theme.breakpoints.up('lg')]: {
    paddingLeft: 280,
  },
}));

export default function MainLayout(props: any) {
  const { children } = props;

  const router = useRouter();
  const { status } = useSession();
  const { t } = useTranslation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const sections = useMemo(() => getSidebarSections(router), [router]);

  // useEffect(() => {
  //   if (status !== 'authenticated') {
  //     router.replace(`${routes.auth.login}?return_path=${router.asPath}`);
  //   }
  // }, [router, router.isReady, status]);

  // if (status !== 'authenticated') {
  //   return null;
  // }

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
      <MainNavbar layoutType="lesson" onOpenSidebar={() => setIsSidebarOpen(true)} />
      <MainSidebar
        onClose={() => setIsSidebarOpen(false)}
        open={isSidebarOpen}
        sections={sections}
      />
    </>
  );
}

MainLayout.propTypes = {
  children: PropTypes.node,
};

MainLayout.defaultProps = {
  children: null,
};
