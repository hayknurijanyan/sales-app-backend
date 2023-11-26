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
   - Create a `.env` file based on the `.env.example` file provided.
   - Add necessary environment variables (e.g., database URI, JWT secret).
4. Run the server using `npm start`.
5. The server should be running on `http://localhost:4000` by default.

## API Endpoints

- **POST /api/auth/register**: Register a new user.
- **POST /api/auth/login**: Login a user and generate a JWT token.
- **GET /api/products**: Get all products.
- **POST /api/products**: Add a new product.
- **GET /api/sales**: Get all sales data.

## Usage

1. Register a new user using the `/api/auth/register` endpoint.
2. Login using the `/api/auth/login` endpoint to obtain a JWT token.
3. Use the obtained token in the headers for authentication in subsequent requests.

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.
