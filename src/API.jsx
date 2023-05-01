const COHORT_NAME = "2301-FTB-ET-WEB-AM";
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`;

export async function postUsersRegister(username, password) {
  try {
    const response = await fetch(`${BASE_URL}/users/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          username: `${username}`,
          password: `${password}`,
        },
      }),
    });
    const result = await response.json();
    console.log(result);
    return result;
  } catch (err) {
    console.error(err);
  }
}
export async function postUsersLogin(username, password) {
  try {
    const response = await fetch(`${BASE_URL}/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          username: `${username}`,
          password: `${password}`,
        },
      }),
    });
    const result = await response.json();
    console.log(result);
    return result;
  } catch (err) {
    console.error(err);
  }
}
export async function fetchUser(token) {
  try {
    const response = await fetch(`${BASE_URL}/users/me`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const result = await response.json();

    return result;
  } catch (err) {
    console.error(err);
  }
}
export async function fetchPost() {
  try {
    const response = await fetch(`${BASE_URL}/posts`);

    const result = await response.json();
    console.log(result);
    return result;
  } catch (err) {
    console.error(err);
  }
}
export async function postPost(token, postData) {
  try {
    console.log("fetch token", token);
    console.log("fetch data", postData);
    const response = await fetch(`${BASE_URL}/posts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        post: {
          title: `${postData.title}`,
          description: `${postData.description}`,
          price: `${postData.price}`,
        },
      }),
    });
    const result = await response.json();
    console.log("postPost testing", result);
    return result;
  } catch (err) {
    console.error(err);
  }
}
export async function patchPost() {
  try {
    // You will need to insert a variable into the fetch template literal
    // in order to make the POST_ID dynamic.
    // 5e8d1bd48829fb0017d2233b is just for demonstration.
    const response = await fetch(`${BASE_URL}/posts/5e8d1bd48829fb0017d2233b`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${TOKEN_STRING_HERE}`,
      },
      body: JSON.stringify({
        post: {
          title: "My favorite stuffed animal",
          description:
            "This is a pooh doll from 1973. It has been carefully taken care of since I first got it.",
          price: "$480.00",
          location: "New York, NY",
          willDeliver: true,
        },
      }),
    });
    const result = await response.json();
    console.log(result);
    return result;
  } catch (err) {
    console.error(err);
  }
}
export async function removePost() {
  try {
    const response = await fetch(`${BASE_URL}/posts/5e8d1bd48829fb0017d2233b`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${TOKEN_STRING_HERE}`,
      },
    });
    const result = await response.json();
    console.log(result);
    return result;
  } catch (err) {
    console.error(err);
  }
}
export async function postMessages(data) {
  try {
    console.log("message data",data)
    const response = await fetch(
      `${BASE_URL}/posts/${data.postId}/messages`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${data.token}`,
        },
        body: JSON.stringify({
          message: {
            content: `${data.content}`,
          },
        }),
      }
    );
    const result = await response.json();
    console.log(result);
    return result;
  } catch (err) {
    console.error(err);
  }
}
