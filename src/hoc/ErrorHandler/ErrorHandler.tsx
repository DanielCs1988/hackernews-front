import * as React from 'react';

const ErrorHandler = ({ error, children }: Props) => (
    <React.Fragment>{
        error ?
            <div>{error.message}</div> :
            children
    }</React.Fragment>
);

export interface Props {
    error: any;
    children: JSX.Element | JSX.Element[] | string | null;
}

export default ErrorHandler;