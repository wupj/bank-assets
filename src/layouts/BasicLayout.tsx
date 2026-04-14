import { AliveScope, KeepAlive, Outlet, useRouteProps } from '@umijs/max';
import React from 'react';
import BaseTabs from './BaseTabs';

const BasicLayout: React.FC = () => {
  const { path, name } = useRouteProps();
  return (
    <>
      {/*<AliveScope>*/}
        <BaseTabs />
        <KeepAlive id={path} name={path} tabName={name}>
          <Outlet />
        </KeepAlive>
      {/*</AliveScope>*/}
    </>
  );
};

export default BasicLayout;
