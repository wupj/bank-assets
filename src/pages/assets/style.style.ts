import { createStyles } from 'antd-style';

const useStyles = createStyles(({ token }) => {
  return {
    wrapper: {
      '.ant-card': {
        flex: 1,
        '.ant-card-body': {
          display: 'flex',
          alignItems: 'center',
        }
      }
    },
    assetWrapper: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      '.ant-card': {
        flex: 1,
        '.ant-card-body': {
          display: 'flex',
          alignItems: 'center',
        }
      }
    },
    cardWrapper: {
      '.ant-card-body': {
        height: '100%'
      }
    }
  }
});

export default useStyles;
