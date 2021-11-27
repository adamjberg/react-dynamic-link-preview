`npm i react-helmet`

```
// App.tsx
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
```

```
curl http://localhost:4242
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Server Side Rendering With React</title>
    <script src="app.js" async defer></script>
</head>
<body>
    <div id="root"><div class="app" data-reactroot=""><h1>Hello from the server!</h1><h2></h2></div></div>
</body>
</html>
```

## Resources

https://www.digitalocean.com/community/tutorials/react-server-side-rendering