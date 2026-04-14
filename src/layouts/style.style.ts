import { createStyles } from 'antd-style';

const useStyles = createStyles(({ token }) => {
  return {
    baseTabs: {
      '.ant-tabs-nav': {
        marginBottom: 0,
        background: '#fff'
      },
      '.ant-tabs-tab': {
        userSelect: 'none'
      }
    }
  };
});

export default useStyles;
