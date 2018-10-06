module TokenManager
  extend ActiveSupport::Concern

  JWT_ISSUER_ID = 'http://localhost:3000'
  JWT_SECRET = 'railsreduxex.secret'
  JWT_ALGORITHM = 'HS256'

  def jwt_encode(user)
    logger.debug '=============== Token Manager Start =============='
    logger.debug user.inspect
    payload = {
      iss: JWT_ISSUER_ID,
      sub: "railsreduxex.#{user[:id]}",
      aud: "railsreduxex.#{user[:id]}",
      jti: Time.zone.now.to_i,
      iat: Time.zone.now.to_i,
      exp: Time.zone.now.to_i + 3600
    }
    secret = JWT_SECRET
    algorithm = JWT_ALGORITHM
    logger.debug payload.inspect
    token = JWT.encode(payload, secret, algorithm)
    logger.debug token
    logger.debug '=============== Token Manager End ================'

    token
  end

  def jwt_decode(token)
    logger.debug '=============== Token Manager Start =============='
    decoded = JWT.decode(token, JWT_SECRET, true, { algorithm: JWT_ALGORITHM })
    logger.debug decoded.inspect
    logger.debug '=============== Token Manager End ================'

    decoded.first
  end

end