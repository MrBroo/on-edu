import { useSession } from 'next-auth/react';

export default function usePermissions() {
  const { data: session } = useSession();
  const permissions = session?.user?.role?.permissions ?? [];
  const result = [];

  Object.keys(permissions).forEach((api) => {
    Object.keys(permissions[api].controllers).forEach((controller) => {
      Object.keys(permissions[api].controllers[controller]).forEach((route) => {
        if (permissions[api].controllers[controller][route].enabled) {
          result.push(`${api}.${controller}.${route}`);
        }
      });
    });
  });

  return result;
}
