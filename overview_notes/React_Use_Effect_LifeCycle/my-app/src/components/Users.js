import React, { useState, useEffect } from 'react'
import axios from 'axios'

/// useEffect in icini bos da biraksak render dan sonra calisir. Bu nedenle useEffect kullanmadan direkt component icinde fetch yapmakla, useEffect icinde yapmak farkli seylerdir.

// https://jsonplaceholder.typicode.com/users
// https://avatars.dicebear.com/v2/avataaars/${user.id}.svg

const Users = () => {
  const [users, setUsers] = useState([])
  // baslangic degeri [] olmazsa henüz apiden vri gelmedigi durumda map calismaz ve hata verir. ama [] olursa bos array de map eder hata vermez. bunun alternatifi map kullanirken ? kullanmak

  /// async
  // const getUsers = async () => {
  //   const response = await axios.get("https://jsonplaceholder.typicode.com/users");
  //   console.log(response);
  // }

  // fetch:
  const getUsers = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((error) => console.log(error))
  }

  /// su ana kadar, fetch islemlerini yaptik. Ancak bu islemleri butona bagladik
  // simdi ise bu islemleri useEffect ile yapacagiz
  useEffect(() => {
    getUsers()
    // eger burada [] kullanamzsak sonsuz döngü
  }, [])
  // burada useEffect islem sirasi:
  // ilk etap da render calisti
  // sonra effect calisti ve verileri cekip state e atti
  // state update oldugu icin tekrar render calisti

  console.log(users)

  return (
    <div className="users">
      <h2>Users</h2>
      <button onClick={getUsers}>Get Users</button>

      <div className="users-cards">
        {/* Map de {} kullanirsak return kullanmak gerekir */}
        {/* asagidaki soru isaretine optional chaining denir */}
        {users?.map((user) => {
          return (
            <div className="useritem" key={user.id}>
              <img src={`https://avatars.dicebear.com/v2/avataaars/${user.id}.svg`} alt="" />
              {user.name}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Users

// React de keylerin unique olma hususu:
// eger key atamasi yaparsak mesela id ile;
// bu durumda render asamasinda eger id lerde degisiklik yok ise bu durumd areact dom u tekrar render etmez. ama key atamasi yok ise her seferinde react extra performans sergiler.
// bu nedenle de react bizden key atamsi ister
// bu sadece döngü yapilan islemler icin gecerli
