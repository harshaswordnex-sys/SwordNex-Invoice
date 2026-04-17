import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "../../elements/Loader";
import styles from "./SuperAdminLogin.module.css";

const SuperAdminLogin = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        try {
            // 🔥 Replace this with your backend API
            const res = await fetch("http://192.168.1.31:5000/superadmin/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password }),
            });

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.message || "Login failed");
            }

            // ✅ Store token (if backend sends it)
            localStorage.setItem(
                "auth",
                JSON.stringify({
                    token: "superadmin_token",
                    role: "superadmin",
                })
            );

            // ✅ Redirect to admin panel
            navigate("/superadmin/panel");

        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className={styles.container}>
            <form onSubmit={handleSubmit} className={styles.card}>
                <h2>Super Admin Login</h2>

                {error && <p className={styles.error}>{error}</p>}

                <input
                    type="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className={styles.input}
                />

                <input
                    type="password"
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className={styles.input}
                />

                <button type="submit" disabled={loading} className={styles.button}>
                    {loading ? "Logging in..." : "Login"}
                </button>
            </form>

            {/* Loader */}
            {loading && (
                <div className={styles.loaderOverlay}>
                    <Loader />
                </div>
            )}
        </div>
    );
};

export default SuperAdminLogin;