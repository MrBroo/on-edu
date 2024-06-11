export const rootPath = '/courses';

const config = {
    name: 'courses',
    menu: {
        getSections: (router: any) => ({
            title: 'Courses',
            acl: [],
            items: [
                {
                    title: 'Frontend',
                    path: `${rootPath}/frontend`,
                    icon: '',
                    acl: [],
                },
                {
                    title: 'Backend',
                    path: `${rootPath}/backend`,
                    icon: '',
                    acl: [],
                }
            ]
        })
    }
}

export default config;