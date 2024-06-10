import coursesModule from './modules/courses/module';

export const modules = [
    coursesModule,
];

export function getSidebarSections(router: any) {
    return [
        ...modules.flatMap((module) => module.menu.getSections(router) ?? [])
    ];
}