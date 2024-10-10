# Use the official Node.js image as the base image for building the app
FROM node:18 as build

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and yarn.lock (or package-lock.json if using npm)
COPY package.json yarn.lock ./

# Install dependencies (yarn or npm)
RUN yarn install

# Copy the rest of the application code
COPY . .

# Build the React app for production
RUN yarn build

# Use an official Nginx image to serve the built files
FROM nginx:alpine

# Copy the built React app into the Nginx html directory
COPY --from=build /app/build /usr/share/nginx/html

# Expose the default Nginx port
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
