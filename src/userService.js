export async function getUserData(id) {
  const response = await fetch('/api/user?id=' + id);
  const data = await response.json();
  return data.user.name.toUpperCase();
}
