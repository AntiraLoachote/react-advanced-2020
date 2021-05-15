import React, { useEffect, useState } from 'react'

const url = 'https://api.github.com/users'

// Reqiurements: Show Github user from Github API
// Display user info
// 1) Avatar
// 2) Name
// 3) Has link to github profile

// API helper: fetch https://reactjs.org/docs/faq-ajax.html
// CSS Classname helper
/* <ul className="users">
  <li>
    <img  />
    ...
  </li>
</ul> */

const UseEffectFetchData = () => {
  const [users, setUser] = useState([])
  function fetchUser() {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setUser(data))
  }

  useEffect(() => {
    fetchUser()
  }, [])

  return (
    <div>
      <h2>Github users</h2>
      <ul className="users">
        {users.map((user) => {
          return (
            <li>
              <img src={user.avatar_url} alt={user.login} />
              <div>
                <h4>{user.login}</h4>
                <a
                  href={user.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Profile
                </a>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default UseEffectFetchData
