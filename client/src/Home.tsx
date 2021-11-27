import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

type HomeProps = {}

export const Home: React.FC<HomeProps> = ({ title }) => {
    const [clientTitle, setClientTitle] = useState("");
    const [clientMessage, setClientMessage] = useState("");

    useEffect(() => {
        setClientTitle("Client Title");
        setClientMessage("Hello from the client!")
    }, [setClientMessage]);

    return (
        <div className="home">
            <Helmet>
                <title>{clientTitle ? clientTitle : title}</title>
            </Helmet>
            <h1>Hello from the server!</h1>
            <h2>{clientMessage}</h2>
        </div>
    )
}