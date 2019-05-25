# Coding Challenge

Build a client/server solution to query providers from a given dataset.

## Server

The server is built with NodeJS & Express. In addition its using AWS libraries to run the API on lambda, makes it easier to deploy and host.

### How to run it

Make sure you are on the `server` folder.

1. Install dependencies

    ```sh
    yarn install
    ```
    
2. Configure environment variables

    Create a .env file to set up the db configuration. Your file needs to have a configuration similar to the following:
    ```sh
    DB_DIALECT=mysql
    DB_HOST=somemysqldb.rds.amazonaws.com
    DB_NAME=dbname
    DB_USERNAME=userhere
    DB_PASSWORD=passwordhere
    ``` 

3. Run server

    ```sh
    yarn server
    ```
    
If all goes well you should see:

```sh
listening on port 3001
```

### API Documentation
Once we are running our solution we can access our endpoints and the documentation. To see the api documentation please access the following link with your browser:

```sh
http://localhost:3001/docs
```

You should now see a screen like the following:

![Swagger Documentation](./assets/swagger.png)

## Front-End

The frontend is built using react with typescript.

### How to run 

Make sure you are on the `client` folder.

1. Install dependencies

    ```sh
    yarn install
    ```
    
2. Configure environment variables

    Create a .env file to set up the api configuration. Your file needs to have a configuration similar to the following:
    ```sh
    REACT_APP_API_HOST=http://localhost:3001
    REACT_APP_API_NS=api
    ``` 

3. Run server

    ```sh
    yarn server
    ```
    
If all goes well you should see:

```sh
Compiled successfully!

You can now view client in the browser.

  Local:            http://localhost:3000/
  On Your Network:  http://x.x.x.x:3000/

Note that the development build is not optimized.
To create a production build, use yarn build.

```

NOTE: the frontend will fail to load if the API is not running. If all goes well you should see a screen like the following:

![React App](./assets/fe.png)