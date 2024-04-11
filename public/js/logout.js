const logout = async () => {
  const response = await fetch('/api/user/logout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  });
  console.log('bang')
  if (response.ok) {
    document.location.replace('/');
  } else {
    alert('Failed to log out');
  }
};

document.querySelector('#logoutBtn').addEventListener('click', logout);
