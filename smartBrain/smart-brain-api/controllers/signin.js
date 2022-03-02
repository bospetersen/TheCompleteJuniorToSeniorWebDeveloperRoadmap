var jwt = require('jsonwebtoken');
const redis = require("redis");

//Setup Redis
const redisClient = redis.createClient(process.env.REDIS_URI);
// const redisClient = redis.createClient({ host: '127.0.0.1' });
// const redisClient = redis.createClient({ host: 'localhost' });



const handleSignin = (db, bcrypt, req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return Promise.reject('incorrect form submission');
  }
  return db.select('email', 'hash').from('login')
    .where('email', '=', email)
    .then(data => {
      const isValid = bcrypt.compareSync(password, data[0].hash);
      if (isValid) {
        return db.select('*').from('users')
          .where('email', '=', email)
          .then(user => user[0])
          .catch(err => Promise.reject('unable to get user'))
      } else {
        Promise.reject('wrong credentials')
      }
    })
    .catch(err => Promise.reject('wrong credentials'))
}

//--------------------------------------------------------------
const getAuthToken = (req, res) => {
  // console.log("auth ok");
  const { authorization } = req.headers;
  return redisClient.get(authorization, (err, reply) => {
    if (err || !reply) {
      return res.status(400).json('Unauthorized');
    }
    return res.json({ id: reply })
  });
}

const signToken = (email) => {
  const jwtPayload = { email };
  const token = jwt.sign(jwtPayload, process.env.JSON_WEBTOKEN_SECRET, { expiresIn: '2 days' });
  return token
}

const setToken = (key, value) => {
  return Promise.resolve(redisClient.set(key, value));
}

const createSessions = (user) => {
  const { email, id } = user;
  const token = signToken(email);
  return setToken(token, id)
    .then(() => {
      return { success: true, userId: id, token: token }
    })
    .catch(console.log);
}

const signinAuthentication = (db, bcrypt) => (req, res) => {
  const { authorization } = req.headers;
  return authorization ? getAuthToken(req, res) :
    handleSignin(db, bcrypt, req, res)
      .then(data => {
        return data.id && data.email ? createSessions(data) : Promise.reject(data);
      })
      .then(session => res.json(session))
      .catch(err => res.status(400).json(err));
}

//--------------------------------------------------------------


module.exports = {
  signinAuthentication: signinAuthentication,
  redisClient: redisClient
}