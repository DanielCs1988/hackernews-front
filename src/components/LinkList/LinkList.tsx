import * as React from 'react';
import {Link as ILink} from "../../models";
import Link from "./Link/Link";

const LinkList = ({ links }: Props) => (
    <div>{
        links.map(link => <Link key={link.id} url={link.url} description={link.description} />)
    }</div>
);

export interface Props {
    links: ILink[];
}

export default LinkList;