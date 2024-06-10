export const routes = {
    default: '/',
    auth: {
      login: '/auth/login',
    },
  };
  
  export const modules = [
    // eventModule,
  ];
  
  export function getSidebarSections(t: any, router: any) {
    return [
      ...modules.flatMap((module) => module.menu?.getSections(t, router) ?? []),
    ];
  }
  