import { history, useAliveController, useLocation } from '@umijs/max';
import { Tabs } from 'antd';
import React, { useState } from 'react';

import useStyles from './style.style';

const { TabPane } = Tabs;

const BaseTabs: React.FC = () => {
  const { styles } = useStyles();

  const location = useLocation();
  const { getCachingNodes, dropScope, refresh, clear } = useAliveController();
  const [activeKey, setActiveKey] = useState(location.pathname);

  // 获取当前所有缓存的页签
  const cachedNodes = getCachingNodes();
  const panes = cachedNodes.map((node: any) => ({
    title: node.tabName || node.name,
    key: node.name,
    closable: node.name !== '/dashboard' // 假设首页不可关闭
  }));

  // 切换页签
  const onChange = (key: string) => {
    setActiveKey(key);
    history.push(key);
  };

  // 关闭页签
  const onEdit = (targetKey: string, action: 'add' | 'remove') => {
    if (action === 'remove') {
      // 如果关闭的是当前激活页签，需先跳转
      if (targetKey === activeKey) {
        const currentIndex = panes.findIndex(p => p.key === targetKey);
        const nextKey = panes[currentIndex + 1]?.key || panes[currentIndex - 1]?.key;
        if (nextKey) history.push(nextKey);
      }
      dropScope(targetKey);
    }
  };

  // 右键菜单处理
  const handleContextMenu = (key: string, e: React.MouseEvent) => {
    e.preventDefault();
    const menuItems = [
      { key: 'refresh', label: '重新加载', onClick: () => refresh(key) },
      { key: 'closeCurrent', label: '关闭当前', onClick: () => onEdit(key, 'remove') },
      { key: 'closeOther', label: '关闭其他', onClick: () => {
          panes.forEach((pane: any) => {
            if (pane.key !== key) dropScope(pane.key);
          });
        }},
      { key: 'closeLeft', label: '关闭左侧', onClick: () => {
          const index = panes.findIndex((p: any) => p.key === key);
          panes.slice(0, index).forEach((pane: any) => dropScope(pane.key));
        }},
      { key: 'closeRight', label: '关闭右侧', onClick: () => {
          const index = panes.findIndex((p: any) => p.key === key);
          panes.slice(index + 1).forEach((pane: any) => dropScope(pane.key));
        }},
      { key: 'closeAll', label: '全部关闭', onClick: () => {
          clear();
          history.push('/dashboard'); // 跳转首页
        }}
    ];
  };

  return (
    <div className={styles.baseTabs}>
      <Tabs
        hideAdd
        type="editable-card"
        activeKey={activeKey}
        onChange={onChange}
        onEdit={onEdit}
      >
        {panes.map((pane: any) => (
          <TabPane
            tab={
              <div onContextMenu={(e) => handleContextMenu(pane.key, e)}>
                {pane.title}
              </div>
            }
            key={pane.key}
            closable={pane.closable}
          />
        ))}
      </Tabs>
    </div>
  );
};

export default BaseTabs;
