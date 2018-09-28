import * as React from 'react';
import gql from 'graphql-tag';
import {Mutation} from "react-apollo";
import RenderedCreateLink from '../../components/CreateLink/CreateLink';

const POST_MUTATION = gql`
    mutation PostMutation($description: String!, $url: String!) {
        post(description: $description, url: $url) {
            id
            url
            description
            createdAt
        }
    }
`;

const CreateLink = () => (
    <Mutation mutation={POST_MUTATION}>{
        postLink => <RenderedCreateLink postLink={postLink} />
    }</Mutation>
);

export default CreateLink;