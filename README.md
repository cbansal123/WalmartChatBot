# Walmart take home - Chat Bot
This is the walmart take home challenge. For this challenge the requirements were to create a chat bot server that clients can connect to and send messages to each other. 

I was able to incorporate following features:
* Connect a client to the server
* Send a message to the server
* The server relays messages to all connected clients, including a timestamp and name of the client sending the message
* Log messages to a file
* Read in config from a config file for port, IP, and log file location
* An HTTP API to post messages
* Support changing clients changing their names

I used socket.io library for communication between server/client and also relaying messages to all clients.
I used expressJS library to expose endpoints for posting messages and delivering index.html home page.
I used log4js library for implementing logging

I did not get enough time to incorporate following features:
* An HTTP API to query for messages - This can be done using a database or cache depending on how extensive querying we want. Currently all messages are only logged in a file but could easily be saved in database for quering.
* Support multiple channels or rooms - For implementing multiple rooms, I went down the path of providing a select drop down for user to select their chat room. I did not get enough time to get the socket.on() to work when room value is changed.
* Tests - Unit or integration. These can be implemented by using libraries like Jasmine or Mocha.

## Getting Started
You can clone the project by running the below commnd.
```
git clone https://github.com/cbansal123/WalmartChatBot
```
You can update the config for server, port, logging level, or file location in config.json.

### Prerequisites
You need to have nodeJS and npm installed on your computer. You can download both on https://nodejs.org/en/

### Installing
After the repository have been cloned. For installing the project dependencies, please run following command from project root director.
```
npm install 
```

### Running the application
Please use following command to run the application.
```
node index.js
```
You can access the application on http://localhost:3000

Once on the application, you can pick clientId and send messages which will be relayed to all clients connected to the server.




