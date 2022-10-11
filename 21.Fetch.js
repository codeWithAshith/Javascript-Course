// This allows us to perform declarative HTTP requests to a server.
// For each request, it creates a Promise which must be resolved in order
// to define the content type and access the data

// Get user with id 2
fetch("https://jsonplaceholder.typicode.com/users/2")
  .then((response) => response.json())
  .then((data) => console.log(data));

// Get all users
fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((data) => console.log(data));

// Create a new user
fetch("https://jsonplaceholder.typicode.com/users", {
  headers: { "Content-Type": "application/json; charset=utf-8" },
  method: "POST",
  body: JSON.stringify({
    username: "Elon Musk",
    email: "elonmusk@gmail.com",
  }),
});

// Delete user
fetch("https://jsonplaceholder.typicode.com/users/1", {
  method: "DELETE",
});

// Update user with id 3
fetch("https://jsonplaceholder.typicode.com/users/3", {
  headers: { "Content-Type": "application/json; charset=utf-8" },
  method: "PUT",
  body: JSON.stringify({
    username: "Elon Musk",
    email: "elonmusk@gmail.com",
  }),
});
