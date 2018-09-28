import * as React from 'react';
import {Link} from "../../../models";

const Link = ({ url, description }: Link) => (
    <div>
        <div>
            {description} {url}
        </div>
    </div>
);

export default Link;