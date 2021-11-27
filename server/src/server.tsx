import express from "express";
import fs from 'fs';
import path from 'path';
import * as React from 'react';
import * as ReactDOMServer from 'react-dom/server';
import { Helmet } from "react-helmet";
import { StaticRouter } from "react-router-dom/server";
import { matchPath } from "react-router-dom";
import { PathMatch } from "react-router";
import { App } from "../../client/src/App";

const app = express();

app.use("/static", express.static("./built"));

app.get('*', async (req, res, next) => {
    try {
        const routes = [
            {
                path: "/posts/:id",
                async loadData(match: PathMatch<string>) {
                    return {
                        title: "Server Post Title"
                    }
                }
            }
        ]

        let data: any = null;
        for (const route of routes) {
            const match = matchPath(route, req.path);
            if (match) {
                data = await route.loadData(match);
                break;
            }
        }

        const app = ReactDOMServer.renderToString(
            <StaticRouter location={req.url}>
                <App initialData={data}/>
            </StaticRouter>
        );
        const helmet = Helmet.renderStatic();

        const html = `
        <!DOCTYPE html>
        <html ${helmet.htmlAttributes.toString()}>
          <head>
            ${helmet.title.toString()}
            ${helmet.meta.toString()}
            ${helmet.link.toString()}
            <script src="/static/app.js" async defer></script>
            <script>
              window.__INITIAL_DATA__ = ${JSON.stringify(data)}
            </script>
          </head>
          <body ${helmet.bodyAttributes.toString()}>
            <div id="root">
              ${app}
            </div>
            </body>
        </html>
      `;

        res.send(html);
    } catch (err) {
        next(err);
    }
});

app.listen(4242);