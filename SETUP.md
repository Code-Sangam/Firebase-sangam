# Sangam Alumni Network - Setup Guide

This guide provides a comprehensive step-by-step walkthrough for setting up, running, and deploying the Sangam Alumni Network application. This guide will focus on a free deployment using Vercel and a free Turso database.

## 🚀 Prerequisites

Before you begin, ensure you have the following installed and configured:

- **Node.js:** A JavaScript runtime environment. You can download it from [nodejs.org](https://nodejs.org/).
- **npm:** The Node.js package manager, which comes with the Node.js installation.
- **Git:** A version control system for tracking changes in your code. You can download it from [git-scm.com](https://git-scm.com/).
- **GitHub Account:** A GitHub account is required to deploy the application to Vercel. You can create one at [github.com](https://github.com/).
- **Turso Account:** A Turso account is needed to create a free database. You can create one at [turso.tech](https://turso.tech/).
- **Vercel Account:** A Vercel account is required for free deployment. You can create one at [vercel.com](https://vercel.com/).

## 🛠️ Local Setup

Follow these steps to get the application running on your local machine.

### 1. Clone the Repository

First, clone the project repository to your local machine using Git:

```bash
git clone https://github.com/your-username/sangam-alumni-network.git
cd sangam-alumni-network
```

### 2. Install Dependencies

Install the necessary Node.js packages using npm:

```bash
npm install
```

### 3. Set Up the Turso Database

1.  **Create a Turso Account:** Go to [turso.tech](https://turso.tech/) and sign up for a free account.
2.  **Install the Turso CLI:** Follow the instructions on the Turso website to install the command-line interface (CLI).
3.  **Create a New Database:** Use the Turso CLI to create a new database:

    ```bash
    turso db create sangam-alumni-db
    ```

4.  **Get Database Credentials:** Get the database URL and an authentication token:

    ```bash
    turso db show sangam-alumni-db --url # Get the database URL
    turso db tokens create sangam-alumni-db # Get the authentication token
    ```

### 4. Configure Environment Variables

1.  **Create a `.env.local` file:** In the root of your project, create a new file named `.env.local`.
2.  **Add Database Credentials:** Add the database URL and authentication token to the `.env.local` file:

    ```
    DATABASE_URL="your-turso-database-url"
    DATABASE_AUTH_TOKEN="your-turso-auth-token"
    ```

    Replace `your-turso-database-url` and `your-turso-auth-token` with the credentials you obtained from the Turso CLI.

### 5. Run Database Migrations

With the environment variables configured, you can now run the database migrations to set up the database schema:

```bash
npx tsx migrate.ts
```

### 6. Run the Development Server

Start the development server to run the application locally:

```bash
npm run dev
```

Your application should now be running at `http://localhost:3000`.

## 🌐 Deploy to Vercel (Free)

Follow these steps to deploy the application to Vercel for free.

### 1. Push to GitHub

Make sure your code is pushed to a GitHub repository.

### 2. Create a Vercel Project

1.  **Sign up for Vercel:** Go to [vercel.com](https://vercel.com/) and create an account.
2.  **New Project:** From your Vercel dashboard, click on "Add New..." and select "Project".
3.  **Import Repository:** Import your GitHub repository.

### 3. Configure Environment Variables

In the Vercel project settings, go to the "Environment Variables" section and add the `DATABASE_URL` and `DATABASE_AUTH_TOKEN` with the same values from your `.env.local` file.

### 4. Deploy

Vercel will automatically detect that you are using Next.js and will configure the build settings for you. Click the "Deploy" button.

## 🎉 Success!

Once deployed, your Sangam Alumni Network platform will be live and ready for users to:
- Create profiles as alumni or students
- Connect with mentors and mentees
- Chat with community members
- Manage their account settings
- Build meaningful professional relationships

The application is designed to be scalable and can handle growing user bases with proper hosting infrastructure.

## 🎨 Customization

### Update Branding:
1. **Logo:** Replace the logo in the `public/` folder.
2. **Colors:** Modify the colors in `src/app/globals.css` and the Tailwind CSS configuration.
3. **Content:** Update the text content in the component files.

### Add Features:
1. **Database:** The app is ready for database integration with Drizzle ORM.
2. **Authentication:** The authentication system is set up with `better-auth`.
3. **API Routes:** Add API routes in the `src/app/api/` directory.

## 📂 Project Structure

The project follows a standard Next.js application structure.

- `public/`: Static assets like images and fonts.
- `src/app/`: The main application code, including pages and components.
- `src/app/api/`: API routes for your application.
- `db/`: Database-related files, including the schema and connection setup.
- `drizzle/`: Database migration files generated by Drizzle Kit.
- `drizzle.config.ts`: Configuration file for Drizzle Kit.
- `migrate.ts`: Script for running database migrations.
- `next.config.mjs`: Configuration file for Next.js.

## 📜 Available Scripts

- **Development**
  - `npm run dev`: Starts the development server.

- **Production**
  - `npm run build`: Builds the application for production.
  - `npm start`: Starts the production server.

- **Maintenance**
  - `npm run lint`: Runs ESLint for code quality checks.
