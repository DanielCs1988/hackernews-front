import * as React from 'react';
import { Link } from "react-router-dom";

const Header = () => (
    <div className="flex pa1 justify-between nowrap orange">
        <div className="flex flex-fixed black">
            <div className="fw7 mr1">Hacker News</div>
            <Link to="/" className="ml1 no-underline black">
                Links
            </Link>
            <div className="ml1">|</div>
            <Link to="/create" className="ml1 no-underline black">
                Submit link
            </Link>
        </div>
    </div>
);

export default Header;