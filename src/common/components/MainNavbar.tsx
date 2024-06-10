import {
  AppBar,
  Avatar,
  Badge,
  Box,
  ButtonBase,
  IconButton,
  Toolbar,
  Tooltip,
} from '@mui/material';
import { FiBell, FiMenu, FiUser } from 'react-icons/fi';
import { useRef, useState } from 'react';

import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import { useTranslation } from 'react-i18next';
import { useSession } from 'next-auth/react';
// import LanguagePopover from './LanguagePopover';
// import AccountPopover from './account/AccountPopover';
// import NavbarTitle from './NavbarTitle';


const MainNavbarRoot = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  ...(theme.palette.mode === 'light'
    ? {
      boxShadow: theme.shadows[3],
    }
    : {
      backgroundColor: theme.palette.background.paper,
      borderBottomColor: theme.palette.divider,
      borderBottomStyle: 'solid',
      borderBottomWidth: 1,
      boxShadow: 'none',
    }),
}));

function LanguageButton() {
  const anchorRef = useRef(null);
  const { i18n } = useTranslation();
  const [openPopover, setOpenPopover] = useState(false);

  const handleOpenPopover = () => {
    setOpenPopover(true);
  };

  const handleClosePopover = () => {
    setOpenPopover(false);
  };

  return (
    <>
      <IconButton
        onClick={handleOpenPopover}
        ref={anchorRef}
        sx={{ ml: 1 }}
      >
        <Box
          sx={{
            display: 'flex',
            height: 20,
            width: 20,
            '& img': {
              width: '100%',
            },
          }}
        >
          {/* <img
            alt=""
            src={languages[i18n.language]}
          /> */}
        </Box>
      </IconButton>
      {/* <LanguagePopover
        anchorEl={anchorRef.current}
        onClose={handleClosePopover}
        open={openPopover}
      /> */}
    </>
  );
}

function NotificationsButton() {
  const anchorRef = useRef(null);
  const [unread, setUnread] = useState(0);
  const [openPopover, setOpenPopover] = useState(false);
  // Unread notifications should come from a context and be shared with both this component and
  // notifications popover. To simplify the demo, we get it from the popover

  const handleOpenPopover = () => {
    setOpenPopover(true);
  };

  const handleClosePopover = () => {
    setOpenPopover(false);
  };

  const handleUpdateUnread = (value: any) => {
    setUnread(value);
  };

  return (
    <>
      <Tooltip title="Notifications">
        <IconButton
          ref={anchorRef}
          sx={{ ml: 1 }}
          onClick={handleOpenPopover}
        >
          <Badge
            color="error"
            badgeContent={unread}
          >
            <FiBell />
          </Badge>
        </IconButton>
      </Tooltip>
      {/*
      <NotificationsPopover
        anchorEl={anchorRef.current}
        onClose={handleClosePopover}
        onUpdateUnread={handleUpdateUnread}
        open={openPopover}
      />
      */}
    </>
  );
}

function AccountButton() {
  // const { data: session } = useSession();
  const anchorRef = useRef(null);
  const [openPopover, setOpenPopover] = useState(false);

  // const { user } = session ?? {};

  const handleOpenPopover = () => {
    setOpenPopover(true);
  };

  const handleClosePopover = () => {
    setOpenPopover(false);
  };

  return (
    <>
      <Box
        component={ButtonBase}
        onClick={handleOpenPopover}
        ref={anchorRef}
        sx={{
          alignItems: 'center',
          display: 'flex',
          ml: 2,
        }}
      >
        <Avatar
          sx={{
            height: 40,
            width: 40,
          }}
          src=""
        >
          <FiUser />
        </Avatar>
      </Box>
      {/* <AccountPopover
        anchorEl={anchorRef.current}
        onClose={handleClosePopover}
        open={openPopover}
      /> */}
    </>
  );
}

export default function MainNavbar(props: any) {
  const { onOpenSidebar, ...other } = props;

  return (
    <MainNavbarRoot
      sx={{
        left: {
          lg: 280,
        },
        width: {
          lg: 'calc(100% - 280px)',
        },
      }}
      {...other}
    >
      <Toolbar
        disableGutters
        sx={{
          minHeight: 64,
          left: 0,
          px: 2,
        }}
      >
        <IconButton
          onClick={onOpenSidebar}
          sx={{
            display: {
              xs: 'inline-flex',
              lg: 'none',
            },
          }}
        >
          <FiMenu />
        </IconButton>
        <Box sx={{ flex: 1 }} />
        <LanguageButton />
        <NotificationsButton />
        <AccountButton />
      </Toolbar>
    </MainNavbarRoot>
  );
}

MainNavbar.propTypes = {
  onOpenSidebar: PropTypes.func,
};

MainNavbar.defaultProps = {
  onOpenSidebar: null,
};
