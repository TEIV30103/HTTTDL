const sendUsername = (req, res, next) => {
    // Kiểm tra nếu có session và có avatar, thì truyền avatar vào locals
    res.locals.username = req.session.username;
    next();
};
module.exports = sendUsername