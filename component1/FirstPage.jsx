import React, { useState } from "react";
import styles from "./styles.module.css";
import batman from "../assets/batmanimg.png";
// import image from "../assets/image.jpg";
import { FaAmazon } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { TiTick } from "react-icons/ti";
import { FaApple } from "react-icons/fa";
import { FaMicrosoft } from "react-icons/fa";

const FirstPage = () => {
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [showdata, setShowdata] = useState(false);

  const handleSubmit = (e) => {
    // console.log(e.tatget.value);
    e.preventDefault();
    setShowdata(true);
  };

  const handleReset = () => {
    setMail("");
    setPassword("");
  };

  return (
    <main className={styles.mainContainer}>
      <section className={styles.leftContainer}>
        <div className={styles.leftTop}>
          <h1 className={styles.leftHeadingPara}>Welcome to Simple Flow</h1>
          <p className={styles.leftTitlePara}>
            Your gateway to Effortless Management.
          </p>
        </div>
        <div className={styles.leftBottom}>
          <h1 className={styles.leftHeadingPara}>Seamless Collaboration</h1>
          <p className={styles.leftTitleParas}>
            Effortless work together with your
            <span className={styles.smallSpan}> team in real time.</span>
          </p>
        </div>
      </section>
      <section className={styles.rightContainer}>
        <div className={styles.rightInnerContainer}>
          <h1 className={styles.rightHeading}>
            <FaAmazon />
            Simple Flow
          </h1>
          <div className={styles.formBtn}>
            <button className={styles.leftBtns}>Sign Up</button>
            <button className={styles.rightBtns}>Sign In</button>
          </div>
          <form className={styles.formContainer}>
            <div className={styles.innerForm}>
              <label htmlFor="mailid">
                <p className={styles.emailId}>Email Id</p>
                <input
                  type="text"
                  id="mailid"
                  name="mail"
                  className={styles.inputField}
                  value={mail}
                  onChange={(e) => setMail(e.target.value)}
                />
              </label>
              <label htmlFor="pass">
                <div className={styles.boxPara}>
                  <p className={styles.leftPass}>Password</p>
                  <p className={styles.rightPass}>Forgot Password?</p>
                </div>
                <input
                  type="password"
                  id="pass"
                  name="pass"
                  placeholder="Enter Password"
                  className={styles.inputField}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </label>
              <div className={styles.passPara}>
                <p className={styles.paras}>
                  <TiTick /> Password Strength:Weak
                </p>
                <p className={styles.paras}>
                  <TiTick /> Cannot contain your name or email address
                </p>
                <p className={styles.paras}>
                  <TiTick /> At least 8 character's
                </p>
                <p className={styles.paras}>
                  <TiTick /> Contains a number or symbol
                </p>
              </div>
              <div className={styles.btn}>
                <button
                  type="submit"
                  className={styles.sBtn}
                  onClick={handleSubmit}
                >
                  Create Account
                </button>
              </div>
            </div>
          </form>
          <div className={styles.spanHead}>
            <span className={styles.spanOr}>OR</span>
          </div>
          <div className={styles.footerImg}>
            <FcGoogle className={styles.logos} />
            <FaApple className={styles.logos} />
            <FaMicrosoft className={styles.logos} />
          </div>
          {/* </form> */}
        </div>
      </section>
      {/* <section className={styles.footerPara}>
        <p>By signing up to create an account I accept Company's</p>
        <p>Terms of use & Privacy Policy</p>
      </section> */}
    </main>
    // <div className={styles.resetBtn}>
    //   <button type="reset" onClick={handleReset}>
    //     Reset
    //   </button>
    // </div>
    // <div className={styles.showingData}>
    //   {showdata ? (
    //     <>
    //       <li>{mail}</li>
    //       <li>{password}</li>
    //     </>
    //   ) : (
    //     <span>{showdata}</span>
    //   )}
    // </div>
  );
};

export default FirstPage;
