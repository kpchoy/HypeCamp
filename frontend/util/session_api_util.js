export const signup = (user) => (
  $.ajax({
    url: "/api/user",
    type: "POST",
    data: {user}  
  })
);

export const login = (user) => (
  $.ajax({
    url: "/api/session",
    type: "POST",
    data: {user}
  })
);

export const logout = () => (
  $.ajax({
    url: "/api/session",
    type: "DELETE"
  })
); 