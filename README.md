# Task-Mate Setup Guide

Task-Mate is a task management API built using NestJS.

## Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- [PostgreSQL](https://www.postgresql.org/)

## Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/abbaac/task-mate.git
cd task-mate
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env` file in the root directory and add the following variables:

```env
DATABASE_HOST=localhost
DATABASE_PORT=5432
DATABASE_USERNAME=your_postgres_username
DATABASE_PASSWORD=your_postgres_password
DATABASE_NAME=taskmate_db
```

Replace `your_postgres_username` and `your_postgres_password` with your PostgreSQL credentials.

### 4. Set Up the Database

Ensure PostgreSQL is running and create the `taskmate_db` database:

```sql
CREATE DATABASE taskmate_db;
```

### 5. Run Database Migrations

Execute the following command to set up the database schema:

```bash
npm run typeorm migration:run
```

### 6. Start the Application

```bash
npm run start:dev
```

The API will be accessible at `http://localhost:3000`.

### 7. Access API Documentation

Navigate to `http://localhost:3000/api` to view the Swagger API documentation.

## Running Tests

To execute unit tests, run:

```bash
npm run test
```

## Additional Notes

- For production environments, ensure you set appropriate environment variables and configure your database and server settings accordingly.
- Refer to the NestJS [documentation](https://docs.nestjs.com/) for more details on the framework.

For any issues or contributions, please refer to the [Task-Mate GitHub repository](https://github.com/abbaac/task-mate).
