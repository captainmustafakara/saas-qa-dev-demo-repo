// User Service - für Interview-Zwecke
// Diese Datei enthält absichtlich mehrere Probleme

export async function getUserData(id) {
  const response = await fetch('/api/user?id=' + id);
  const data = await response.json();
  return data.user.name.toUpperCase();
}

export function validateEmail(email) {
  return email.includes('@');
}

export async function createUser(userData) {
  const user = {
    id: Math.random(),
    name: userData.name,
    email: userData.email,
    createdAt: new Date()
  };
  
  await fetch('/api/users', {
    method: 'POST',
    body: JSON.stringify(user)
  });
  
  return user;
}

export function formatUserName(firstName, lastName) {
  return firstName + ' ' + lastName;
}

export async function deleteUser(userId) {
  await fetch('/api/user/' + userId, { method: 'DELETE' });
  console.log('User deleted: ' + userId);
}
