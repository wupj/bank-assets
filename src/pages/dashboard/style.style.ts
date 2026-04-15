import { createStyles } from 'antd-style';

const useStyles = createStyles(({ token }) => {
  return {
    cardWrapper: {
      height: 300,
      '.ant-card-body': {
        height: '100%',
      },
    },
    transferWrapper: {
      height: 194,
      display: 'flex',
      gap: 32,
    },
    inputWrapper: {
      display: 'flex',
      gap: 16,
      marginTop: 16,
      '.ant-input-number': {
        borderRadius: '6px 0 0 6px',
      },
      '.ant-btn': {
        borderRadius: '0 6px 6px 0',
      },
    },
  };
});

export default useStyles;
