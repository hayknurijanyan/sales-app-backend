# Sales App - Backend

This is the backend repository for the Sales App project. It manages product sales, user authentication, and product management.

## Features

- **User Authentication:** Register and login functionality with JWT authentication.
- **Product Management:** CRUD operations for products.
- **Sales Tracking:** Record and view sales data.

## Technologies Used

- Node.js
- Express.js
- MongoDB
- JWT for authentication
- Bcrypt for password hashing

## Setup

1. Clone the repository.
2. Install dependencies using `npm install`.
3. Set up environment variables:
   - Create a `.env` file.
   - Add necessary environment variables from .env.sample file.
4. Run the server using `npm start`.
5. The server should be running on `http://localhost:4000` by default.

## API Endpoints

- **POST /auth/register**: Register a new user.
- **POST /auth/login**: Login a user and generate a JWT token.
- **GET /api/products**: Get all products.
- **POST /api/products**: Add a new product.
- **GET /api/sell-products**: Get all sales data.

## Usage

1. Register a new user using the `/auth/register` endpoint.
2. Login using the `/auth/login` endpoint.
3. Use the `/api/products` to get all products and add new product.
4. Use the `/api/sell-products` to sel products.
   etc.
