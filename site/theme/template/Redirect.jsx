import React from 'react';

const redirect = {
  '/index-cn': '/components/overview-cn/',
};

export default class Redirect extends React.Component {
  componentDidMount() {
    const { location } = this.props;
    const pathname = `/${location.pathname}`;
    Object.keys(redirect).forEach(from => {
      if (pathname.indexOf(from) === 0) {
        window.location.href = redirect[from];
      }
    });
  }

  render() {
    return <div />;
  }
}
