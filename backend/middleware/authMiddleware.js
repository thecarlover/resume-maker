import jwt from 'jsonwebtoken';



const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1]; // Bearer token

  if (!token) {
    return res.status(403).json({ msg: "No token provided" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET); // Ensure JWT_SECRET is set in your environment
    req.userId = decoded.id; // Set the userId for later use
    next();
  } catch (error) {
    console.error(error);
    return res.status(401).json({ msg: "Token is not valid" });
  }
};

export default authMiddleware;
