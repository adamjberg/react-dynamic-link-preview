import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

export const App: React.FC = () => {
    const [clientMessage, setClientMessage] = useState("");

    useEffect(() => {
        setClientMessage("Hello from the client!")
    }, [setClientMessage]);

    return (
        <div className="app">
            <Helmet>
                <title>React Helmet Title</title>
            </Helmet>
            <h1>Hello from the server!</h1>
            <h2>{clientMessage}</h2>
        </div>
    )
}