import React, {useState} from 'react';
import {Link} from "@inertiajs/react";

const Home = () => {
    const [projects, setProjects] = useState([]);
    return (
        <>
            <header>
                <Link href={"/"}>Home</Link>
                <Link href={"/about"}>About</Link>
                <Link href={"/contact"}>Contact</Link>
            </header>
        </>
    );
};

export default Home;
