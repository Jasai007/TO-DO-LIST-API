# Step 1: Use an official Node runtime as a parent image
FROM node:14

# Step 2: Set the working directory in the container
WORKDIR /app

# Step 3: Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Step 4: Install the application dependencies
RUN npm install

# Step 5: Copy the rest of the application code to the working directory
COPY . .

# Step 6: Expose port 3000 to the outside world
EXPOSE 3000

# Step 7: Define the command to run the application
CMD ["node", "index.js"]