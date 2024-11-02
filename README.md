# Optimize Routes

A web application for managing and optimizing delivery routes for orders. The application fetches existing orders, displays them in a table, and provides an optimized routing solution to enhance delivery efficiency.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [API Routes](#api-routes)
- [Technologies Used](#technologies-used)

## Features

- **Display Existing Orders**: View a list of current orders with customer details.
- **Optimize Route**: Calculate and display optimized routes for delivery orders.
- **Loading Spinner**: Indicates route optimization in progress.
- **Responsive Design**: Optimized for both desktop and mobile devices.

## Installation

1. **Clone the Repository**:
    ```bash
    git clone https://github.com/Shree2124/Rentkar
    cd optimize-routes
    ```

2. **Install Dependencies**:
    ```bash
    npm install
    ```

3. **Run the Development Server**:
    ```bash
    npm run dev
    ```

4. **Environment Variables**:
    - Set up a `.env` file in the root directory with any necessary environment variables, such as API base URL.

## Usage

1. Start the server with `npm run dev`.
2. Navigate to `http://localhost:3000` in your browser.
3. The **Optimize Routes** page will display a list of existing orders.
4. Click on the **Optimize Route** button to calculate and display optimized routes below the existing orders.

## API Routes

- **`GET /api/orders`**: Retrieves a list of existing orders.
- **`POST /api/optimize`**: Calculates and returns optimized routes for delivery.

## Technologies Used

- Next.js, TypeScript, Tailwind CSS, Axios

