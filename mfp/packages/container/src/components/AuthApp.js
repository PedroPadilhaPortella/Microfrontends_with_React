import { mount } from 'auth/AuthApp'
import React, { useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom'

export default (props) => {
  const ref = useRef(null);
  const history = useHistory();

  useEffect(() => {
    const { onParentNavigate } = mount(ref.current, {
      initialPath: history.location.pathname,
      onNavigate: ({ pathname: nextPathName }) => {
        const { pathname } = history.location;
        if (pathname !== nextPathName) {
          history.push(nextPathName);
        }
      },
      onSignIn: () => {
        props.onSignIn()
      }
    });

    history.listen(onParentNavigate);
  }, []);

  return <div ref={ref} />;
}