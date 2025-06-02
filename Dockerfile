# Step 1: Build the app
FROM node:20-alpine AS build

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build               # Build files go into /app/dist

# Step 2: Serve the built app with a lightweight static server
FROM node:20-alpine AS production

WORKDIR /app

# Install a static file server
RUN npm install -g http-server

# Copy the built files from the build stage
COPY --from=build /app/dist /app/dist

EXPOSE 3000

# Serve the app
CMD ["http-server", "dist", "-p", "3000"]
