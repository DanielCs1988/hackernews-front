import * as React from 'react';

const Loader = ({ loading, children }: Props) => (
    <React.Fragment>{
        loading ?
            <div>Loading...</div> :
            children
    }</React.Fragment>
);

export interface Props {
    loading: boolean;
    children: JSX.Element | JSX.Element[] | string | null;
}

export default Loader;