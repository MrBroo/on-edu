import CourseLayout from '../components/layouts/CourseLayout';
import LessonLayout from '../components/layouts/LessonLayout';

export const withLayout = (Component: any, layoutType = 'main') => {
  return (props: any) => {
    let Layout = CourseLayout;
    if (layoutType === 'lesson') {
      Layout = LessonLayout;
    } 
    return (
      <Layout>
        <Component {...props} />
      </Layout>
    );
  };
};
