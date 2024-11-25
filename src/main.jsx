// Imports
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider , useNavigate } from 'react-router-dom'
import { ClerkProvider , useAuth } from '@clerk/clerk-react'
import { ReactNotifications } from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'
// Pages imports
import Search from './search'
import Compare from './compare'
import Upload from './upload'
import Specs from './specs'
import License from './license'

// ProtectedRoute Component
function ProtectedRoute({ children }) {
    const navigate = useNavigate();
    const { orgRole, orgSlug } = useAuth();
    // Redirect unauthorized users to the home page or a login page
    if (orgRole !== "org:admin" || orgSlug !== "software") {
        return navigate("/"); // Redirect unauthorized users
    }
    return children; // Render the protected route
}

// Router
const router = createBrowserRouter([
    {
        path:'/',
        element:<Search/>
    },
    {
        path:'/compare',
        element:<Compare/>
    },
    {
        path:'/upload',
        element:<ProtectedRoute><Upload /></ProtectedRoute>
    },
    {
        path:'/specs/:id',
        element:<Specs/>
    },
    {
        path:'/license',
        element:<License/>
    },
])

// Accessing publishable key via the key in the .env.local file
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
    throw new Error("Missing Publishable Key") // handle error when key is not found
}

createRoot(document.getElementById('root')).render(
    <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
        <ReactNotifications />
        <RouterProvider router = {router} />
    </ClerkProvider>
    </StrictMode>,
)
