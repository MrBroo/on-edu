import { List, ListSubheader } from '@mui/material';

import PropTypes from 'prop-types';
import AuthAclGuard from './AuthAclGuard';
import MainSidebarItem from './MainSidebarItem';

const renderNavItems = ({ depth = 0, items, path}: any) => (
  <List disablePadding>
    {items.reduce((acc: any, item: any) => reduceChildRoutes({
      acc,
      item,
      depth,
      path,
    }), [])}
  </List>
);

const reduceChildRoutes = ({
  acc, item, depth, path,
}: any) => {
  const key = `${item.title}-${depth}`;
  const partialMatch = path.includes(item.path);
  const exactMatch = path === item.path;
  const WrapperComponent = item.wrapperComponent ?? EmptyWrapper;

  if (item.children) {
    acc.push(
      <WrapperComponent key={key}>
        <AuthAclGuard requiredAcl={item.acl ?? []}>
          <MainSidebarItem
            active={partialMatch}
            chip={item.chip}
            depth={depth}
            icon={item.icon}
            info={item.info}
            open={partialMatch}
            path={item.path}
            title={item.title}
          >
            {renderNavItems({
              depth: depth + 1,
              items: item.children,
              path,
            })}
          </MainSidebarItem>
        </AuthAclGuard>
      </WrapperComponent>,
    );
  } else {
    acc.push(
      <WrapperComponent key={key}>
        <AuthAclGuard requiredAcl={item.acl ?? []}>
          <MainSidebarItem
            active={exactMatch}
            chip={item.chip}
            depth={depth}
            icon={item.icon}
            info={item.info}
            path={item.path}
            title={item.title}
          />
        </AuthAclGuard>
      </WrapperComponent>,
    );
  }

  return acc;
};

export default function MainSidebarSection(props: any) {
  const {
    items, path, title, ...other
  } = props;

  return (
    <List
      subheader={(
        <ListSubheader
          disableGutters
          disableSticky
          sx={{
            color: 'neutral.500',
            fontSize: '0.75rem',
            fontWeight: 700,
            lineHeight: 2.5,
            ml: 4,
            textTransform: 'uppercase',
          }}
        >
          {title}
        </ListSubheader>
      )}
      {...other}
    >
      {renderNavItems({
        items,
        path,
      })}
    </List>
  );
}

MainSidebarSection.propTypes = {
  items: PropTypes.array.isRequired,
  path: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

function EmptyWrapper({ children }: any) {
  return children;
}
