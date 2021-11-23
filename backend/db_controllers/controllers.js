// using controllers for best practice
const knex = require("./dbConnection");

//user functions
function createUser(username, hashedPassword) {
  return knex("users")
    .insert({
      username: username,
      password: hashedPassword
    })
    .then(data => data);
}

function getHashedPassword(username) {
  return knex("users")
    .where("username", username)
    .select("password")
    .then(data => data[0].password);
}


//blog functions
function createBlog(title, body, username) {
  return knex("blogs")
    .insert({
      title: title,
      body: body,
      username: username
    })
    .then(data => data);
}

function getAllBlogs() {
  return knex("blogs")
    .select("*")
    .then(data => data);
}
//join might not be correct
function getBlogByUser(username) {
  return knex("blogs")
    .join("users", "blogs.user_id", "=", "users.id")
    .select("*")
    .where("username", username)
    .then(data => data);
}

function deleteBlog(id) {
  return knex("blogs")
    .where("id", id)
    .del()
    .then(data => data);
}

function updateBlog(id, title, body) {
  return knex("blogs")
    .where("id", id)
    .update({
      title: title,
      body: body
    })
    .then(data => data);


  module.exports = { createUser, getHashedPassword };