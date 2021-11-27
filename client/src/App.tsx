import React from "react";
import { Route, Routes } from "react-router";
import { Home } from "./Home";
import { Post } from "./Post";

type AppProps = {
    initialData?: any;
}

export const App: React.FC<AppProps> = ({ initialData }) => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/posts/:id" element={<Post initialData={initialData} />} />
        </Routes>
    )
}