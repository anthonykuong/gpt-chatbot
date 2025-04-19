# GPT Chatbot with NestJS

A simple chatbot built with NestJS, using OpenAI's GPT-4 model to generate responses based on user input.

## Features

- **NestJS-based Backend**: Built using NestJS to serve a simple API.
- **GPT-4 Integration**: Uses OpenAI's GPT-4 model to generate dynamic responses.
- **Environment Configuration**: Uses `.env` to securely store the OpenAI API key.

## Requirements

- Node.js
- OpenAI API key (from [OpenAI](https://openai.com/))

## Installation

### 1. Clone the Repository

Clone the repository using the following command:

```bash
git clone https://github.com/your-username/gpt-chatbot.
```

After cloning, move into the project directory:

```bash
cd gpt-chatbot
```

### 2. Install Dependencies
Now, install all the dependencies by running this command:

```bash
npm install
```

### 3. Setup Environment Variables
Create a .env file in the root directory with your OpenAI API key. To do this:

In the root folder of your project, create a new file named .env.

Inside that file, add the following line (replace sk-your-real-key-here with your actual OpenAI API key):

```bash
OPENAI_API_KEY=sk-your-real-key-here
```

###  4. Build the Project
Next, build the project by running:
```bash
npm run build
```

###  5. Start the Server
To run the server, use:

```bash
npm run start
```

###  6. Test the Chatbot
To test the chatbot, open your web browser and go to:

```bash
http://localhost:3000/gpt?prompt=Hello
```

You can replace Hello with any prompt, such as:
```bash
http://localhost:3000/gpt?prompt=Tell me a joke
```

### Contributing
Feel free to fork the repository, make improvements, and submit pull requests!


### License
This project is licensed under the MIT License 