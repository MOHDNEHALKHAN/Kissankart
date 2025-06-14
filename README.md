[![License: CC BY-NC-ND 4.0](https://img.shields.io/badge/License-CC%20BY--NC--ND%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nc-nd/4.0/)


# FARMER TRADING APP

 <h3>Tech Stack💻</h3>

**Frontend (Client):** `React.js, Tailwind.css, `

**Backend (Server):** `Node.js, Appwrite`

**Database:** `MongoDB`


<h3>Outcomes🌟</h3>

- User can log in & log out of the application  
- Logged-in users can view the list of available products  
- Users can add products to their cart and proceed to purchase them  
- Payments are securely processed using third-party gateways like Razorpay or Stripe  
- After successful payment, users receive a confirmation and can track orders in their profile


 <h3>Project Structure 📂</h3>

```markdown

/farmers-trading-app
│
├── public/                  # Static assets like index.html, favicon
│
├── src/
│   ├── assets/              # Images, icons, videos
│   ├── components/          # Reusable UI components
│   │   ├── ui/              # Atomic components: Button, Input, Loader
│   │   └── shared/          # Shared UI like Navbar, Footer
│   │
│   ├── features/            # Redux slices + logic per domain
│   │   ├── auth/            # Auth slice, services, hooks
│   │   ├── products/        # Product listing, details, CRUD
│   │   ├── cart/            # Cart logic and UI
│   │   ├── orders/          # Order state, list, details
│   │   └── seller/          # Seller-specific logic
│   │
│   ├── layouts/             # Page layouts (PublicLayout, DashboardLayout)
│   ├── pages/               # Route-level components
│   │   ├── auth/            # login, signup, seller-login etc.
│   │   ├── home/            # Start as Seller/Customer landing
│   │   ├── buyer/           # Buyer-side pages (Products, Checkout)
│   │   └── seller/          # Seller dashboard, product management
│   │
│   ├── services/            # API and Appwrite integrations
│   │   ├── appwrite/        # Appwrite client & methods (auth, DB)
│   │   └── razorpay/        # Payment methods & flow
│   │
│   ├── store/               # Redux store config + slices
│   ├── App.jsx              # Main app component
│   ├── main.jsx             # Vite entry point
│   └── index.css            # Tailwind base styles
│
├── .env                    # API keys, Appwrite, Razorpay envs
├── vite.config.js
├── eslint.config.js
├── package.json
└── README.md
```

 <h3>Feedback📝</h3>
If you have any feedback, please reach out to me at nehalk482@gmail.com
