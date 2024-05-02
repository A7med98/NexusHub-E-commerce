import styles from "./login.module.css";
import { useState, useRef } from "react";
import { useRouter } from "next/router";
import { loginAuth } from "../../utils/api";
import { authActions } from "../../store/auth-slice";
import { useDispatch } from "react-redux";
export default function LoginPage() {
  const usernameInputRef = useRef();
  const passwordInputRef = useRef();
  // const upperCase = /[A-Z]/g;
  const lowerCase = /[a-z]/g;
  const numbers = /[0-9]/g;
  const special = /\W|_/g;
  const length = /^[a-zA-Z0-9-\W|_]{6,}$/g;
  const space = / (?!.* )/g;
  const [visible, setVisible] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();

  async function submitHandler(event) {
    event.preventDefault();

    const enteredUsername = usernameInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;
    if (!enteredUsername.match(lowerCase)) {
      console.log("add lowercase letter in username");
      return;
    }
    if (!enteredUsername.match(numbers)) {
      console.log("add number in username");

      return;
    }
    if (!enteredUsername.match(special)) {
      console.log("add special character in username");

      return;
    }
    if (!enteredUsername.match(length)) {
      console.log("at least 6 characters in username");

      return;
    }
    if (enteredUsername.match(space)) {
      console.log("no spaces in username");

      return;
    }
    if (!enteredPassword.match(lowerCase)) {
      console.log("add lowercase letter in password");
      return;
    }
    if (!enteredPassword.match(numbers)) {
      console.log("add number in password");

      return;
    }
    if (!enteredPassword.match(special)) {
      console.log("add special character in password");

      return;
    }
    if (!enteredPassword.match(length)) {
      console.log("at least 6 characters in password");

      return;
    }
    if (enteredPassword.match(space)) {
      console.log("no spaces in password");

      return;
    }

    try {
      const response = await loginAuth(enteredUsername, enteredPassword);
      console.log(JSON.stringify(response));
      console.log("success");
      dispatch(authActions.login());
      router.replace("/");
    } catch (error) {
      console.log("failed");
      console.log(error.response.status);
    }
  }
  return (
    <div className={styles.loginpage}>
      <div className={styles.loginContainer}>
        <h1 className={styles.title}>
          <span>Nexus</span>
          <span className={styles.subTitle}>Hub</span>
        </h1>
        <form className={styles.form} onSubmit={submitHandler}>
          <div className={styles.labelDescription}>
            <div className={styles.label}>Sign in</div>
            <img className={styles.divider} alt="" src="/divider3.svg" />
          </div>
          <div className={styles.form2}>
            <div className={styles.usernamePassword}>
              <div className={styles.inputLabel}>
                <div className={styles.label1}>mobile phone number</div>
                <div className={styles.inputFieldSupportText}>
                  <div className={styles.inputField1}>
                    <input
                      className={styles.container}
                      placeholder="username"
                      type="text"
                      id="username"
                      required
                      ref={usernameInputRef}
                    />
                  </div>
                </div>
              </div>
              <div className={styles.inputCheckbox}>
                <div className={styles.fRAME}>
                  <div className={styles.inputLabel}>
                    <div className={styles.label2}>Password</div>
                    <div className={styles.inputFieldSupportText1}>
                      <div className={styles.inputField3}>
                        <input
                          className={styles.container1}
                          placeholder="Password"
                          type={visible ? "text" : "password"}
                          id="password"
                          name="Password"
                          required
                          ref={passwordInputRef}
                        />
                        <img
                          onClick={() => setVisible(!visible)}
                          className={styles.iconEyeOpen}
                          alt=""
                          src="/icon--eyeopen.svg"
                        />
                      </div>
                    </div>
                  </div>
                  <div className={styles.thePasswordMust}>
                    The password must contain at least eight characters, at
                    least one uppercase letter, one lowercase letter, one number
                    and one special character. Spaces are not allowed.
                  </div>
                </div>
                <div className={styles.checkbox}>
                  <div className={styles.checkboxPassword}>
                    <input className={styles.checkbox1} type="checkbox" />
                    <div className={styles.checkbox2}>Save password</div>
                  </div>
                  <div className={styles.forgotYourPassword}>
                    Forgot your password?
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.buttonInformation}>
              <button type="submit" className={styles.button}>
                <div className={styles.button1}>Sign In</div>
              </button>
              <div className={styles.dontHaveAnContainer}>
                <span className={styles.dontHaveAn}>
                  Don’t have an account?
                </span>
                <span className={styles.register}>
                  <span className={styles.register1}> Register</span>
                </span>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
