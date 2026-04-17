import { useState } from "react";
import styles from "./Register.module.css";
import Loader from "../../elements/Loader";
import TypingText from "../../elements/TypingText";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const RegisterForm = () => {
    const [errors, setErrors] = useState({});
    const [step, setStep] = useState(1);
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const totalSteps = 3;

    const [formData, setFormData] = useState({
        companyName: "",
        ownedBy: "",
        address: "",
        gstin: "",
        pan: "",
        hsn: "",
        phone: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData({ ...formData, [name]: value });

        if (errors[name]) {
            setErrors({ ...errors, [name]: "" });
        }
    };
    const validateStep = () => {
        let newErrors = {};
        let message = "";

        if (step === 1) {
            if (!formData.companyName) {
                newErrors.companyName = true;
                message = "Company name is required";
            } else if (!formData.ownedBy) {
                newErrors.ownedBy = true;
                message = "Owner name is required";
            } else if (!formData.address) {
                newErrors.address = true;
                message = "Address is required";
            }
        }

        if (step === 3) {
            if (!formData.phone) {
                newErrors.phone = true;
                message = "Phone is required";
            } else if (!formData.email) {
                newErrors.email = true;
                message = "Email is required";
            } else if (!formData.password) {
                newErrors.password = true;
                message = "Password is required";
            } else if (formData.password.length < 8) {
                newErrors.password = true;
                message = "Password must be at least 8 characters";
            } else if (!formData.confirmPassword) {
                newErrors.confirmPassword = true;
                message = "Confirm your password";
            } else if (formData.password !== formData.confirmPassword) {
                newErrors.confirmPassword = true;
                message = "Password and confirm password must match";
            }
        }

        setErrors(newErrors);

        if (message) {
            toast.error(message);
            return false;
        }

        return true;
    };
    const next = () => {
        if (!validateStep()) return;
        setStep((prev) => Math.min(prev + 1, totalSteps));
    };

    const prev = () => setStep((prev) => Math.max(prev - 1, 1));

    const handleSubmit = async () => {
        if (!validateStep()) return;

        try {
            setLoading(true);

            const payload = {
                companyName: formData.companyName,
                ownedBy: formData.ownedBy,
                address: formData.address,
                gstin: formData.gstin || null,
                pan: formData.pan || null,
                hsn: formData.hsn || null,
                phone: formData.phone,
                email: formData.email,
                password: formData.password,
            };

            const res = await fetch("http://192.168.1.31:5000/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(payload),
            });

            // 🔥 SAFE RESPONSE HANDLING
            const text = await res.text();
            let data;

            try {
                data = JSON.parse(text);
            } catch {
                console.error("Non-JSON response:", text);
                throw new Error("Server error (not JSON)");
            }

            if (!res.ok) {
                throw new Error(data.message || "Registration failed");
            }

            toast.success("Account created successfully 🎉");
            navigate("/dashboard");

            // reset form
            setFormData({
                companyName: "",
                ownedBy: "",
                address: "",
                gstin: "",
                pan: "",
                hsn: "",
                phone: "",
                email: "",
                password: "",
                confirmPassword: "",
            });

            setStep(1);

        } catch (err) {
            console.error(err);
            toast.error(err.message || "Something went wrong");
        } finally {
            setLoading(false);
        }
    };

    const progress = ((step - 1) / totalSteps) * 100;

    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <div className={styles.card}>
                    <h2 className={styles.logo}>🧾 Swordnex Invoice</h2>

                    {/* Progress */}
                    <div className={styles.progressTop}>
                        <span>Step {step} of {totalSteps}</span>
                        <span>{Math.round(progress)}%</span>
                    </div>

                    <div className={styles.progressBar}>
                        <div
                            className={styles.progressFill}
                            style={{ width: `${progress}%` }}
                        />
                    </div>

                    {/* FORM */}
                    <div className={styles.form}>
                        {step === 1 && (
                            <>
                                <h3>Business Information</h3>

                                {["companyName", "ownedBy"].map((field) => (
                                    <div key={field} className={styles.inputGroup}>
                                        <input
                                            name={field}
                                            placeholder={
                                                field === "companyName"
                                                    ? "Company Name"
                                                    : "Owned By"
                                            }
                                            value={formData[field]}
                                            onChange={handleChange}
                                            className={`${styles.input} ${errors[field] ? styles.inputError : ""
                                                }`}
                                        />
                                    </div>
                                ))}

                                <div className={styles.inputGroup}>
                                    <textarea
                                        name="address"
                                        placeholder="Company Address"
                                        value={formData.address}
                                        onChange={handleChange}
                                        className={`${styles.input} ${errors.address ? styles.inputError : ""
                                            }`}
                                    />
                                </div>
                            </>
                        )}

                        {step === 2 && (
                            <>
                                <h3>Tax Information</h3>
                                <input
                                    name="gstin"
                                    placeholder="GSTIN (Optional)"
                                    value={formData.gstin}
                                    onChange={handleChange}
                                    className={styles.input}
                                />
                                <input
                                    name="pan"
                                    placeholder="PAN (Optional)"
                                    value={formData.pan}
                                    onChange={handleChange}
                                    className={styles.input}
                                />
                                <input
                                    name="hsn"
                                    placeholder="HSN / ASC Code (Optional)"
                                    value={formData.hsn}
                                    onChange={handleChange}
                                    className={styles.input}
                                />
                            </>
                        )}

                        {step === 3 && (
                            <>
                                <h3>Account Setup</h3>

                                {["phone", "email", "password", "confirmPassword"].map(
                                    (field) => (
                                        <div key={field} className={styles.inputGroup}>
                                            <input
                                                type={
                                                    field.includes("password") ? "password" : "text"
                                                }
                                                name={field}
                                                placeholder={
                                                    field === "confirmPassword"
                                                        ? "Confirm Password"
                                                        : field.charAt(0).toUpperCase() + field.slice(1)
                                                }
                                                value={formData[field]}
                                                onChange={handleChange}
                                                className={`${styles.input} ${errors[field] ? styles.inputError : ""
                                                    }`}
                                            />
                                        </div>
                                    )
                                )}
                            </>
                        )}
                    </div>

                    {/* ACTIONS */}
                    <div className={styles.actions}>
                        {step > 1 && (
                            <button onClick={prev} className={styles.secondaryBtn}>
                                Back
                            </button>
                        )}

                        {step < totalSteps ? (
                            <button onClick={next} className={styles.primaryBtn}>
                                Next
                            </button>
                        ) : (
                            <button
                                onClick={handleSubmit}
                                className={styles.primaryBtn}
                                disabled={loading}
                            >
                                {loading ? <Loader /> : "Create Account"}
                            </button>
                        )}
                    </div>
                </div>
            </div>

            {/* RIGHT */}
            <div className={styles.right}>
                <div className={styles.rightContent}>
                    <TypingText
                        text="Welcome to Swordnex Invoice"
                        color="white"
                        fontSize="32px"
                    />
                    <p>
                        Manage GST invoices, inventory, reports and payments with a secure
                        and scalable billing platform.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default RegisterForm;