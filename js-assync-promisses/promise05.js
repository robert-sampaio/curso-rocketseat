// fetch("https://api.github.com/users/robert-sampaio")
//   .then((response) => response.json())
//   .then((data) => fetch(data.repos_url))
//   .then((res) => res.json())
//   .then((d) => console.log(d))
//   .catch((err) => console.log(err));

async function start() {
  const url = "https://api.github.com/users/robert-sampaio";
  const user = await fetch(url).then((r) => r.json());
  const userRepos = await fetch(user.repos_url).then((r) => r.json());
  console.log(userRepos);
}

start().catch((e) => console.log(e));
