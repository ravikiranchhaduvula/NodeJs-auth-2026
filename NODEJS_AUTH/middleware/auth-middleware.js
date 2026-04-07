const jwt = require('jsonwebtoken')

const authMiddleware = (req, res, next) => {
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(" ")[1]

  // ❗ FIX 1: return
  if (!token) {
    return res.status(401).json({
      success: false,
      message: 'Access Denied, No token provided'
    })
  }

  try {
    const decodedTokenInfo = jwt.verify(token, process.env.JWT_SECRET_KEY)

    console.log(decodedTokenInfo)

    req.userInfo = decodedTokenInfo

    next()
  } catch (error) {
    // ❗ FIX 2: return + correct status
    return res.status(401).json({
      success: false,
      message: 'Invalid token'
    })
  }
}

module.exports = authMiddleware