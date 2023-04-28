const form = document.querySelector("form");

form.addEventListener("submit", event => {
  event.preventDefault();
  const username = form.elements.username.value;
  const password = form.elements.password.value;

  // Perform authentication (e.g. make an API call)

  // Send response
  if (authenticated) {
    window.location.href = "/dashboard";
  } else {
    alert("Login failed. Please try again.");
  }
});