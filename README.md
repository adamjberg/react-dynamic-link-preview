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

<!DOCTYPE html>
<html >
    <head>
    <title data-react-helmet="true">Server Title</title>
    
    
    <script src="app.js" async defer></script>
    </head>
    <body >
    <div id="root">
        <div class="app" data-reactroot=""><h1>Hello from the server!</h1><h2></h2></div>
    </div>
    </body>
</html>
```

## Resources

https://blog.logrocket.com/search-optimized-spas-react-helmet/
https://reactrouter.com/docs/en/v6/guides/ssr