import { createStyles } from 'antd-style';

const useStyles = createStyles(({ token }) => {
  return {
    statisticwrapper: {
      marginBottom: 16,
      '.ant-card': {
        flex: 1,
        '.ant-card-body': {
          display: 'flex',
          alignItems: 'center',
        },
      },
    },
    cardWrapper: {
      '.ant-card-body': {
        height: '100%'
      }
    }
  };
});

export default useStyles;
