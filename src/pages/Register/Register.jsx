import { useState } from "react";
import styles from "./Register.module.css";
import Loader from "../../elements/Loader";
import TypingText from "../../elements/TypingText";

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);

  const totalSteps = 3;

  const [formData, setFormData] = useState({
    companyName: "",
    ownedBy: "",
    address: "",
    gstin: "",
    pan: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const next = () => setStep((prev) => Math.min(prev + 1, totalSteps));
  const prev = () => setStep((prev) => Math.max(prev - 1, 1));

  const handleSubmit = async () => {
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      setLoading(true);

      // 👉 Replace with your backend API
      await new Promise((res) => setTimeout(res, 2000));

      console.log("Form Data:", formData);

      alert("Account Created Successfully!");
    } catch (err) {
      console.error(err);
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const progress = ((step - 1) / totalSteps) * 100;

  return (
    <div className={styles.container}>
      {/* LEFT */}
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
                <input name="companyName" placeholder="Company Name" onChange={handleChange} className={styles.input} />
                <input name="ownedBy" placeholder="Owned By" onChange={handleChange} className={styles.input} />
                <textarea name="address" placeholder="Company Address" onChange={handleChange} className={styles.input} />
              </>
            )}

            {step === 2 && (
              <>
                <h3>Tax Information</h3>
                <input name="gstin" placeholder="GSTIN" onChange={handleChange} className={styles.input} />
                <input name="pan" placeholder="PAN" onChange={handleChange} className={styles.input} />
              </>
            )}

            {step === 3 && (
              <>
                <h3>Account Setup</h3>
                <input name="phone" placeholder="Phone" onChange={handleChange} className={styles.input} />
                <input name="email" placeholder="Email" onChange={handleChange} className={styles.input} />
                <input type="password" name="password" placeholder="Password" onChange={handleChange} className={styles.input} />
                <input type="password" name="confirmPassword" placeholder="Confirm Password" onChange={handleChange} className={styles.input} />
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
              <TypingText text="Welcome to Swordnex Invoice" color="white" fontSize="32px"/>
          <p>
            Manage GST invoices, inventory, reports and payments with a secure
            and scalable billing platform.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MultiStepForm;