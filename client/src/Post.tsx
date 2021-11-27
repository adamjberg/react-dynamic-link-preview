import React from "react";
import { Helmet } from "react-helmet";

type PostProps = {
    initialData?: {
        title: string;
    }
}

export const Post: React.FC<PostProps> = ({ initialData }) => {
    return (
        <div className="post">
            <Helmet>
                <title>{initialData?.title}</title>
            </Helmet>
            <h1>Post</h1>
        </div>
    )
}