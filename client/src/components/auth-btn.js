import React from "react";

import LoginButton from "./LogIn/login-btn";
import LogoutButton from "./Logout/logout-btn";

import { useAuth0 } from "@auth0/auth0-react";

const AuthenticationButton = () => {
    const { isAuthenticated } = useAuth0();

    return isAuthenticated ? <LogoutButton /> : <LoginButton />;
};

export default AuthenticationButton;