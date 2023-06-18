const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
  // catching the token from the header
  token = req.headers.authorization?.split(" ")[1];
  if (token) {
    // if the token is present, then verify the token
    const decoded = jwt.verify(token, "contribute");
    // adding the userId and userName to the req.body from the decoded token for further use
    req.body.userId = decoded.userId;
    req.body.userName = decoded.agencyname;
    req.body.agencyId = decoded.userId;
    req.body.agencyName = decoded.agencyname;
    next();
  } else {
    res.status(401).json({ message: "Please login first" });
  }
};

module.exports = { auth };
