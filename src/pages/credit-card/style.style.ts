import { createStyles } from 'antd-style';

const useStyles = createStyles(({ token }) => {
  return {
    pieWrapper: {
      height: 314,
      '.ant-card-body': {
        height: '100%',
      },
    },
    listWrapper: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      maxHeight: 314,
      overflowY: 'auto',
      '.ant-card': {
        flex: 1,
        '.ant-card-body': {
          display: 'flex',
          alignItems: 'center',
          padding: 16,
        },
      },
    },
  };
});

export default useStyles;
