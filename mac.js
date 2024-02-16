import "./MacbookAirM.css";

const MacbookAirM = () => {
  return (
    <div className="macbook-air-m2">
      <div className="frame-parent">
        <div className="welcome-to-exploreme-parent">
          <div className="welcome-to-exploreme">Welcome to ExploreMe 👋</div>
          <div className="kindly-fill-your">
            kindly fill your details below to create an account
          </div>
        </div>
        <div className="frame-group">
          <div className="full-name-parent">
            <div className="full-name">Full Name</div>
            <div className="frame-child" />
            <div className="enter-your-full">Enter your full name</div>
          </div>
          <div className="email-address-parent">
            <div className="full-name">Email Address*</div>
            <div className="frame-child" />
            <div className="enter-your-email">Enter your email address</div>
          </div>
          <div className="select-your-skills-parent">
            <div className="select-your-skills">Select your Skills</div>
            <div className="frame-inner" />
            <div className="search-skills-here">Search skills here...</div>
          </div>
          <div className="frame-container">
            <img className="frame-icon" alt="" src="/frame.svg" />
            <div className="i-agree-to">{`I agree to terms & conditions`}</div>
          </div>
          <div className="rectangle-parent">
            <div className="rectangle-div" />
            <div className="register-account">Register Account</div>
          </div>
          <div className="line-parent">
            <div className="line-div" />
            <div className="or">or</div>
            <div className="frame-child1" />
          </div>
          <div className="rectangle-parent">
            <div className="frame-child2" />
            <img className="layer-1-icon" alt="" src="/layer-1.svg" />
            <div className="register-account">Register with Google</div>
          </div>
          <div className="already-have-an-account-parent">
            <div className="already-have-an">{`Already have an account? `}</div>
            <div className="log-in">Log in</div>
            <div className="frame-child3" />
          </div>
        </div>
      </div>
      <img className="macbook-air-m2-child" alt="" src="/frame-13@2x.png" />
    </div>
  );
};

export default MacbookAirM;
