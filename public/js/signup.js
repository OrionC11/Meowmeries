const signupFormHandler = async (event) => {
  event.preventDefault();

  const username = document.querySelector("#su-user").value.trim();
  const password = document.querySelector("#su-pass").value.trim();
  const first_name = document.querySelector("#su-FName").value.trim();
  const last_name = document.querySelector("#su-LName").value.trim();
  const email = document.querySelector("#su-email").value.trim();
  const cat_name = document.querySelector("#su-CName").value.trim();
  const cat_breed = document.querySelector("#su-CBreed").value.trim();
  const cat_age = document.querySelector("#su-CAge").value.trim();

  if (
    username &&
    password &&
    first_name &&
    last_name &&
    email &&
    cat_name &&
    cat_breed &&
    cat_age
  ) {
    const response = await fetch("/api/user/signup", {
      method: "POST",
      body: JSON.stringify({
        username,
        password,
        first_name,
        last_name,
        email,
        cat_name,
        cat_breed,
        cat_age,
      }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/");
    } else {
      alert("Failed SignUp Cat");
    }
  }
};

document.querySelector("#suBtn").addEventListener("click", signupFormHandler);
