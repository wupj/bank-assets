/**
 * @see https://umijs.org/docs/max/access#access
 * */
export default function access(
  initialState: { userAccess?: string[] } | undefined,
) {
  const { userAccess } = initialState ?? {};
  return {
    canAccess: ({ name }: { name: string }) => {
      return userAccess?.includes(name);
    },
  };
}
