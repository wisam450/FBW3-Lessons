const config = {
    env: process.env.NODE_ENV || "development"
};

const devConfig = {
    db: "mongodb://localhost:27017/password-login",
    jwt_key: "developmentpassword",
    port: 3000,
    email: 'my_email_address',
    email_pass: 'my_email_pass'
};

const prodConfig = {
    db: process.env.MONGO_URI,
    jwt_key: process.env.JWT_SECRET,
    port: process.env.PORT,
    email: process.env.MY_EMAIL,
    email_pass: process.env.MY_PASS
};

const currentConfig = config.env === "production" ? prodConfig : devConfig;

module.exports = Object.assign({}, config, currentConfig);