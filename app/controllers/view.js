// Home
module.exports.Home = async function (ctx, next) {
  await ctx.render('views/index/index');
}
// Posts
module.exports.Posts = async function (ctx, next) {
  await ctx.render('views/index/index');
}
// Archive
module.exports.Archive = async function (ctx, next) {
  await ctx.render('views/index/index');
}
// Label
module.exports.Label = async function (ctx, next) {
  await ctx.render('views/index/index');
}
// Detail
module.exports.Detail = async function (ctx, next) {
  await ctx.render('views/index/index');
}
// Admin
module.exports.Admin = async function (ctx, next) {
  await ctx.render('admin/index');
}
// Admin
module.exports.Test = async function (ctx, next) {
  await ctx.render('views/test/test');
}
