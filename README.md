# Dockerizing and Testing a simple To-do List API in AWS EC2: 
#### Containerize an application using Docker and deploying it on AWS EC2. This includes understanding how to package an API into a Docker container and manage its deployment on a cloud platform.

<a href="https://jasaiblogs.hashnode.dev/simple-steps-to-dockerize-an-application-and-deploy-on-aws-ec2">Introduction to Docker: Dockerize an application and deploy it on AWS EC2</a> 

# Project Overview
This To-do List API allows users to manage their tasks efficiently. Users can create, read, update, and delete tasks, making it a simple yet powerful tool for task management.

# Installation Instructions
To set up the project locally, follow these steps:
1. Ensure you have Node.js and Docker installed on your machine.
2. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
3. Navigate to the project directory:
   ```bash
   cd <project-directory>
   ```
4. Install the necessary dependencies:
   ```bash
   npm install
   ```

# Usage
To run the application, use the following command:
```bash
npm start
```
You can access the API at `http://localhost:3000`. Here are some example API requests:
- **Get all tasks**: `GET /tasks`
- **Create a new task**: `POST /tasks` with a JSON body containing task details.

