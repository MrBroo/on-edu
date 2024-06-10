import { Alert, AlertTitle } from '@mui/material';

import { styled } from '@mui/material/styles';
import { useTranslation } from 'react-i18next';

const PermissionDeniedRoot = styled('div')(({ theme }) => ({
  display: 'flex',
  flex: '1 1 auto',
  justifyContent: 'center',
  alignItems: 'center',
}));

export default function PermissionDenied() {
  const { t } = useTranslation();

  return (
    <PermissionDeniedRoot>
      <Alert severity="error">
        <AlertTitle>
          {t('components.PermissionDenied.title')}
        </AlertTitle>
        {t('components.PermissionDenied.message')}
      </Alert>
    </PermissionDeniedRoot>
  );
}
