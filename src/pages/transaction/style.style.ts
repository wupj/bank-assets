import { createStyles } from 'antd-style';

const useStyles = createStyles(({ token }) => {
  return {
    consumptionWrapper: {
      '.ant-card-body': {
        height: '100%'
      }
    }
  };
});

export default useStyles;
