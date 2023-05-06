## Configuration Steps

```
$ cd Project folder
$ npm install

$ cd backend
$ npm install

$ cd..

$ cd fronted
$ npm install
```

This installs all the required dependencies like React, React-router-dom, Concurrently, Express, Mongoose, Passport, etc.

3. dotenv file:

Create a .env file in the backend folder, and write the following code

`SECRET=Anythingyouwant`

and save it. The `SECRET` variable can literally have any value.

4. Configuring MongoDB:

Open your terminal, and go to the directory where you have MongoDB installed and from thereon cd to the directory which has the 'mongod.exe' file inside it. After you reach that directory through your terminal, type `mongod` and press enter, and the MongoDB server starts running locally on your machine on port 27017.

5. Checking if everything works fine:

Now open another terminal and cd to the MovieGo directory. Run the following code:

`$ npm start`

and you shall see that the website is loaded on your localhost port 3000.
