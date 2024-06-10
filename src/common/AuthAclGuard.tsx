import PropTypes from 'prop-types';
import { Skeleton } from '@mui/material';
import { usePermissions } from '../lib/hooks';
import { useSession } from 'next-auth/react';

export default function AuthAclGuard({ children, fallback, requiredAcl }: any) {
  const { status } = useSession();
  const permissions = usePermissions();

  if (status === 'loading') {
    return <Skeleton />;
  }

  if (status !== 'authenticated') {
    return fallback;
  }

  if (!requiredAcl || requiredAcl.length === 0) {
    return children;
  }

  const satisfiedPermissions = requiredAcl.filter(
    (permission: any) => permissions.includes(permission),
  );

  if (satisfiedPermissions.length !== requiredAcl.length) {
    return fallback;
  }

  return children;
}

AuthAclGuard.propTypes = {
  children: PropTypes.node.isRequired,
  fallback: PropTypes.node,
  requiredAcl: PropTypes.arrayOf(PropTypes.string),
};

AuthAclGuard.defaultProps = {
  fallback: null,
  requiredAcl: [],
};
