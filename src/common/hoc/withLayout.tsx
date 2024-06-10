import MainLayout from '../components/layouts/MainLayout';

export const withLayout = (Component: any, layoutType = 'main') => {
  return (props: any) => {
    let Layout = MainLayout;
    if (layoutType === 'guest') {
      Layout = MainLayout;
    }
    return (
      <Layout>
        <Component {...props} />
      </Layout>
    );
  };
};
