exports.requrieLogin = (req, res,next) => {
   //如果获取到了用户就执行下一步
   if(req.session.result) return next();
   res.status(402)
   res.redirect('/signin') 
}