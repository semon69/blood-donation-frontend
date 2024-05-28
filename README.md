# Blood Donation Platform

## Live URL
[Visit the Blood Donation Platform](https://blood-donation-client-nine.vercel.app/)

## Features

### Home Page/Landing Page
- **Header:**
  - Prominently displayed website logo.
  - Navigation bar with links to Home, About Us, Login/Register (if not logged in), and My Profile (if logged in).
- **Hero Section:**
  - Catchy headline promoting blood donation (e.g., "Save Lives, Donate Blood!").
  - "Search Donors" button redirecting to the Donor List page with search options.
- **About Section:**
  - Brief description of the website's purpose and mission.
- **Search Blood Donors:**
  - Search and filter options by blood type, location, and availability.
  - Display up to 10 recent donor profiles in card format.
- **Coverage Area:**
  - Map or list showing areas covered by the blood donation service.
- **Extra Sections:**
  - Success stories and testimonials.
  - Donation tips and guidelines.
- **Footer:**
  - Contact information, copyright details, and additional links (Terms of Use, Privacy Policy).

### Login & Registration
- **Login Form:**
  - Fields for username or email address and password.
- **Registration Form:**
  - Fields for username, email address, password (with confirmation), blood donation option, blood type, and location.

### Donor List Page
- **Features:**
  - Search and filter options by blood type, location, and availability status.
  - Donor profiles in card format with pagination.

### Donor Details Page
- **Features:**
  - Detailed information about the donor.
  - Request Blood button to initiate a request for blood donation.

### Blood Request Page (Private)
- **Features:**
  - Form fields for requester's contact information, additional information (hospital name, date, time), agreement to terms and conditions, and submit button.

### My Profile
- **User Account Information:**
  - Options to edit profile details and change password.
- **Subsections:**
  - My Blood Requests
  - Requests for Blood to Me
  - Change Password

### Admin Dashboard
- **User Management:**
  - View and manage user accounts, activate/deactivate accounts, and edit roles.

## Technology Used
- **Frontend:**
  - HTML, CSS, JavaScript
  - Frameworks: NextJs
- **Backend:**
  - Node.js, Express.js
- **Database:**
  - PostgreSQL
- **Authentication:**
  - JWT (JSON Web Tokens)
- **Hosting:**
  - Vercel
- **Version Control:**
  - Git and GitHub

## Setup Instructions
1. **Clone the repository:**
   ```bash
   git clone https://github.com/semon69/blood-donation-frontend.git
   cd blood-donation-frontend
   npm install
   npm run dev
