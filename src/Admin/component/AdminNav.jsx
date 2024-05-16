import React from 'react'

export default function AdminNav() {
  return (
    <div>
        <nav>
            <ul>
            <li>
                <Link to="/stock">Stock</Link>
            </li>
            <li>
                <Link to="/item-management">Item Management</Link>
            </li>
            {isAuthenticated ? (
                <>
                <li>
                    <span>Welcome, {user.role}</span>
                </li>
                <li>
                    <Link to="/logout">Logout</Link>
                </li>
                </>
            ) : (
                <li>
                <Link to="/login">Login</Link>
                </li>
            )}
            </ul>
        </nav>
    </div>
  )
}
