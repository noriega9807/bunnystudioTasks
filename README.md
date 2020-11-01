# Bunny Studio Task Test

# Run API server
The first thing to do is to set up your mongodb database, to set it up run on yout terminal:
```sh
$ mongo
> use bunny-studio-task-api 
```
Note: The API is setup to run in bunny-studio-task-api DB, if you wish to change it, modify `bunnystudioTasks/todo/config/dev.env` MONGODB_URL variable to your database name.

To run the API server endpoints run the following commands from the project root:
```sh
$ cd todo
$ npm install
$ npm run dev
```

# Run API tests
To run the tests:
 - Create another mongodb database and modify `bunnystudioTasks/todo/config/test.env` to set up your tests DB
  - Run `npm run test`

# Front End

Go to `bunnystudioTasks/todo-front` and run the following commands from your terminal:
```sh
$ npm install
$ npm run watch
```
Then in your browser go to http://localhost:3002/

# ToDo
Some things that are missing due to running out of time are:
  - Implement csrf tokens
  - Lazy load components and create chunks
  - Create a test suite for react
