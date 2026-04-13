import { createStyles } from 'antd-style';

const useStyles = createStyles(({ token }) => {
  return {
    container: {
      display: 'flex',
      flexDirection: 'column',
      height: '100vh',
      overflow: 'auto',
      backgroundImage:
        "url('https://mdn.alipayobjects.com/yuyan_qk0oxh/afts/img/V-_oS6r-i7wAAAAAAAAAAAAAFl94AQBr')",
      backgroundSize: '100% 100%',
    },
    lang: {
      width: 42,
      height: 42,
      lineHeight: '42px',
      position: 'fixed',
      right: 16,
      borderRadius: token.borderRadius,
      ':hover': {
        backgroundColor: token.colorBgTextHover,
      },
    },
    wrapper: {
      flex: '1',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      '.ant-pro-form-login-container': {
        '.ant-pro-form-login-top': {
          marginBottom: 30,
        },
        '.ant-pro-form-login-main': {
          '.ant-btn': {
            marginTop: 24,
          },
        },
      },
    },
  };
});

export default useStyles;
