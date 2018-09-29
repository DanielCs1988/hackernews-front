import * as React from 'react';
import gql from 'graphql-tag';
import { Query } from "react-apollo";
import RenderedLinkList from "../../components/LinkList/LinkList";
import HandleLoadingAndError from "../../hoc/HandleLoadingAndError/HandleLoadingAndError";

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
            <HandleLoadingAndError loading={loading} error={error}>
                <RenderedLinkList links={data ? data.feed: []} />
            </HandleLoadingAndError>
        )
    }</Query>
);

export default LinkList;