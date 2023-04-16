import {Component} from "react";
import {Navigate, Outlet} from "react-router-dom";

export const ProtectedRoute = () => {
    if (localStorage.getItem("user")) {
        return <Outlet />;
    }
    return <Navigate to="/" />;
}