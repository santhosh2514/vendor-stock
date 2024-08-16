# Vendor Stock Management API

### Project Overview
This project is a Node.js application that provides APIs for managing apparel stock and processing customer orders. The app includes functionalities to:
- Check fulfillment for customer orders based on available stock.
- Calculate the lowest cost for a customer order.
- Manage vendor stock updates, including bulk updates.

### Technology Stack
- **Backend:** Node.js, Express.js
- **Database:** JSON-based file storage 
- **Logging:** Bunyan (for structured logging)

## Prerequisites

- Node.js (>= 14.x)
- npm (>= 6.x)

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/yourusername/vendor-stock.git
    cd vendor-stock
    ```

2. Install the dependencies:
    ```sh
    npm install
    ```

## Running the Server

1. Start the server:
    ```sh
    npm start
    ```

2. The server will be running at `http://localhost:2356`.

## API Endpoints 

For detailed information about the API endpoints, please refer to the [API Documentation](./API-Documentation.md).


## Error Handling

- Any other routes not defined will return a `404 Not Found` error.

## License

This project is licensed under the MIT License.