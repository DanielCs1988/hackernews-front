import * as React from 'react';

const HandleLoadingAndError = ({ loading, error, children }: Props) => {
    console.log(loading, error);
    if (loading) {
        return <div>Loading...</div>;
    }
    if (error) {
        return <div>{error.message || 'Could not fetch data from the server!'}</div>;
    }
    return <React.Fragment>{children}</React.Fragment>;
};

export interface Props {
    loading?: boolean;
    error?: any;
    children: JSX.Element | JSX.Element[] | string | null;
}

export default HandleLoadingAndError;