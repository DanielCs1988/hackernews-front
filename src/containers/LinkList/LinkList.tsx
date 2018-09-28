import * as React from 'react';
import gql from 'graphql-tag';
import { Query } from "react-apollo";
import RenderedLinkList from "../../components/LinkList/LinkList";
import Loader from "../../hoc/Loader/Loader";
import ErrorHandler from "../../hoc/ErrorHandler/ErrorHandler";

const FEED_QUERY = gql`
    query {
        feed {
            id
            url
            description
            createdAt
        }
    }
`;

const LinkList = () => (
// @ts-ignore
    <Query query={FEED_QUERY}>{
        ({ loading, error, data }) => (
            <Loader loading={loading || !data}>
                <ErrorHandler error={error}>
                    <RenderedLinkList links={data.feed} />
                </ErrorHandler>
            </Loader>
        )
    }</Query>
);

export default LinkList;