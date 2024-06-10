import {
  Box, Divider, Drawer, useMediaQuery,
} from '@mui/material';

import NextLink from 'next/link';
import PropTypes from 'prop-types';
import { useNavigation } from '@lib/hooks/useNavigation';
import Scrollbar from '../Scrollbar';
import MainSidebarSection from '../MainSidebarSection';
import AuthAclGuard from '../AuthAclGuard';

export default function MainSidebar(props: any) {
  const { onClose, open, sections } = props;
  const router = useNavigation();
  const lgUp = useMediaQuery((theme: any) => theme.breakpoints.up('lg'), {
    noSsr: true,
  });

  const content = (
    <Scrollbar
      sx={{
        height: '100%',
        '& .simplebar-content': {
          height: '100%',
        },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
        }}
      >
        <Box
          display="flex"
          alignItems="center"
          sx={{ px: 3, py: 1, height: 64 }}
        >
          <NextLink
            href="/"
            passHref
            legacyBehavior
          >
            <a style={{ display: 'block' }}>
              LOGO
            </a>
          </NextLink>
        </Box>
        <Divider
          sx={{
            borderColor: '#2D3748',
            mb: 2,
          }}
        />
        <Box sx={{ flexGrow: 1 }}>
          {sections.map((section: any) => (
            <MainSidebarSection
              path={router.pathname}
              sx={{
                mt: 1,
                '& + &': {
                  mt: 1.5,
                },
              }}
              {...section}
            />
          ))}
        </Box>
      </Box>
    </Scrollbar>
  );

  if (lgUp) {
    return (
      <Drawer
        anchor="left"
        open
        PaperProps={{
          sx: {
            backgroundColor: 'neutral.900',
            borderRightColor: 'divider',
            borderRightStyle: 'solid',
            borderRightWidth: (theme: any) => (theme.palette.mode === 'dark' ? 1 : 0),
            color: '#FFFFFF',
            width: 280,
          },
        }}
        variant="permanent"
      >
        {content}
      </Drawer>
    );
  }

  return (
    <Drawer
      anchor="left"
      onClose={onClose}
      open={open}
      PaperProps={{
        sx: {
          backgroundColor: 'neutral.900',
          color: '#FFFFFF',
          width: 280,
        },
      }}
      sx={{ zIndex: (theme: any) => theme.zIndex.appBar + 100 }}
      variant="temporary"
    >
      {content}
    </Drawer>
  );
}

MainSidebar.propTypes = {
  onClose: PropTypes.func,
  open: PropTypes.bool,
  sections: PropTypes.array,
};

MainSidebar.defaultProps = {
  onClose: null,
  open: false,
  sections: [],
};
