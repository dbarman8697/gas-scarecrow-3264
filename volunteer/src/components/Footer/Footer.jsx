import React from "react";
import { AiOutlineTwitter } from "react-icons/ai";
import styles from "./Footer.module.css";
import "./style.css";

function Footer() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.div1}>
          <a
            href="/ourpartners"
            className="sqsbutton"
            data-initialized="true"
            style={{ marginBottom: "35px", fontSize: "20px" }}
          >
            Learn more about our community partnerships
          </a>
        </div>
        <div style={{ display: "flex" }}>
          <div className={styles.container1}>
            <h1 style={{ fontWeight: "bold", fontSize: "19px" }}>
              © 2019 VOLUNTEERNOW
            </h1>
            <br />
            <div>
              <p>2800 Live Oak Street</p>
              <p>Dallas, TX 75204</p>
            </div>
            <br />
            <div>
              <p>(214) 826-6767</p>
              <p>info@volnow.org</p>
            </div>
          </div>
          <div className={styles.container2}>
            <h1 style={{ fontWeight: "bold", fontSize: "19px" }}>INFO</h1>
            <br />
            <div>
              <a href="">About</a>
              <hr style={{ width: "44px", marginBottom: "7px" }} />

              <a href="">Programs</a>
              <hr style={{ marginBottom: "7px" }} />

              <a href="">Blog</a>
              <hr style={{ width: "33px", marginBottom: "7px" }} />
              <br />
            </div>
          </div>
          <div className={styles.container2}>
            <h1 style={{ fontWeight: "bold", fontSize: "19px" }}>ACTION</h1>
            <br />
            <div>
              <a href="">Volunteer</a>
              <hr style={{ width: "68px", marginBottom: "7px" }} />

              <a href="">License VOLY.org</a>
              <hr style={{ marginBottom: "7px" }} />

              <a href="">Donate</a>
              <hr style={{ width: "52px", marginBottom: "7px" }} />
              <br />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
