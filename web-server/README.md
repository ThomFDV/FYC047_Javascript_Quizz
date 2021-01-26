# Web Server

### Install

At the root of the web-server folder run these commands:
- `npm install`
- `docker-compose up --build` (the `--build` is not necessary at the first install)

Then, you should see at http://localhost:3001 the adminer interface which helps you to manage the database.

After the database is up and running run `npm start` or `npm run dev` to start the server.

Now you can use it on http://localhost:3000.

### Manage the DB

With *adminer* you can manage the database by connecting to it.

Connection credentials :

System: MySQL  
Server: db  
Username: root  
Password: example  
Database: dbfyc

And your done.
