# IEEE WIE International Leadership Summit 2025 - Registration System

A production-ready registration system built with Next.js 15, Prisma, PostgreSQL, Tailwind v4, shadcn/ui, and Zod.

## Features

- **User Registration**: Complete registration form with name, email, country, and password
- **Bank Transfer Integration**: Built-in bank transfer instructions and receipt upload
- **Payment Status Management**: Three-tier payment status (UNPAID, PENDING, APPROVED)
- **Admin Dashboard**: Complete admin interface for managing registrations
- **File Upload**: Secure receipt upload handling
- **Mobile-First Design**: Responsive and accessible UI
- **Security**: Password hashing, input validation, and admin authentication

## Tech Stack

- **Frontend**: Next.js 15 (App Router), React 19, TypeScript
- **Styling**: Tailwind CSS v4, shadcn/ui components
- **Database**: PostgreSQL with Prisma ORM
- **Validation**: Zod schema validation
- **Authentication**: bcryptjs for password hashing
- **File Upload**: Built-in file handling with multer

## Setup Instructions

### 1. Install Dependencies

```bash
pnpm install
```

### 2. Database Setup

1. Create a PostgreSQL database
2. Update the `DATABASE_URL` in `.env` file:
   ```
   DATABASE_URL="postgresql://username:password@localhost:5432/wie_summit_2025?schema=public"
   ```

3. Run database migrations:
   ```bash
   pnpm prisma migrate dev
   ```

4. Generate Prisma client:
   ```bash
   pnpm prisma generate
   ```

### 3. Environment Variables

Create a `.env` file in the root directory:

```env
# Database
DATABASE_URL="postgresql://username:password@localhost:5432/wie_summit_2025?schema=public"

# Next.js
NEXTAUTH_SECRET="your-secret-key-here"
NEXTAUTH_URL="http://localhost:3000"

# Admin credentials (for demo purposes)
ADMIN_EMAIL="admin@wie-summit.com"
ADMIN_PASSWORD="admin123"

# Admin credentials for frontend
NEXT_PUBLIC_ADMIN_EMAIL="admin@wie-summit.com"
NEXT_PUBLIC_ADMIN_PASSWORD="admin123"
```

### 4. Run the Application

```bash
pnpm dev
```

The application will be available at `http://localhost:3000`

## Usage

### User Registration

1. Visit `/register` to access the registration form
2. Fill in all required fields (name, email, country, password)
3. Optionally upload a bank transfer receipt
4. Submit the form

**Bank Transfer Details:**
- Account Number: 090006286808
- IBAN: JO73CAAB1100000000090006286808 USD
- Swift #: CAABJOAM
- Account Name: IEEE JORDAN SECTION
- Bank Name: Cario Amman Bank
- Bank Address: University of Jordan Branch
- Bank City: Amman
- Bank Country: Jordan

### Admin Dashboard

1. Visit `/admin` to access the admin dashboard
2. Login with admin credentials (admin@wie-summit.com / admin123)
3. View all user registrations
4. Approve pending payments
5. View uploaded receipts

## API Endpoints

- `POST /api/register` - User registration
- `GET /api/admin/users` - Get all users (admin only)
- `POST /api/admin/approve/[userId]` - Approve user payment (admin only)

## Database Schema

### User Model

```prisma
model User {
  id            String        @id @default(cuid())
  name          String
  email         String        @unique
  country       String
  passwordHash  String
  paymentStatus PaymentStatus @default(UNPAID)
  receiptUrl    String?
  createdAt     DateTime      @default(now())
  updatedAt     DateTime      @updatedAt
}

enum PaymentStatus {
  UNPAID
  PENDING
  APPROVED
}
```

## Security Features

- Password hashing with bcryptjs
- Input validation with Zod schemas
- Admin authentication
- File upload validation
- SQL injection protection via Prisma

## Mobile Responsiveness

The application is built with a mobile-first approach using Tailwind CSS responsive utilities and shadcn/ui components that are optimized for all screen sizes.

## Production Deployment

1. Set up a PostgreSQL database (recommended: Supabase, Railway, or AWS RDS)
2. Update environment variables for production
3. Deploy to Vercel, Netlify, or your preferred platform
4. Run database migrations in production
5. Set up proper admin authentication (consider using NextAuth.js)

## License

This project is created for the IEEE WIE International Leadership Summit 2025.
# wie
