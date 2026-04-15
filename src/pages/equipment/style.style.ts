import { createStyles } from 'antd-style';

const useStyles = createStyles(({ token }) => {
  return {
    wrapper: {
      marginBottom: 16,
      '.ant-card': {
        flex: 1,
        '.ant-card-body': {
          display: 'flex',
          alignItems: 'center',
        },
      },
    },
    listWrapper: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      '.ant-card': {
        flex: 1,
        '.ant-card-body': {
          display: 'flex',
          alignItems: 'center',
        },
      },
    },
  };
});

export default useStyles;
