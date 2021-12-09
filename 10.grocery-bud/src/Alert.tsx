import React, { useEffect } from 'react';
import { ListValue } from './App';

const Alert = ( props:{ type: string , msg: string, removeAlert: () => void, list:ListValue[] }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      props.removeAlert();
    }, 3000);
    return () => clearTimeout(timeout);
  },[props.list]);
  return <p className={`alert alert-${props.type}`}>{props.msg}</p>;
};

export default Alert;