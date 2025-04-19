# GPT Chatbot with NestJS


This is a simple GPT-4 chatbot using NestJS. It allows users to enter a prompt and get a response using the OpenRouter API's free models.


### Author
This project was created by Anthony Ku Ong.


## How It Works

The chatbot uses **OpenRouter API** to generate responses. It only uses free models such as **Mistral-7b-Instruct**. You can enter a prompt, and the chatbot will respond with an AI-generated message.

## Features

- Uses **NestJS** for backend structure.
- Free AI model usage via **OpenRouter API**.
- Hosted on **Render** for free usage.
- Deployable anywhere.



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