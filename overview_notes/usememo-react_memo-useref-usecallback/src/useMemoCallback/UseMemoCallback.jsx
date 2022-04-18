

// Note: kullanacagimiz useMemo ve digerleri, expensive hesaplamalarda kullanilir her yerde kullanilmaz. dependency lere dikkat. 

// React memo component lar icin
// useMemo degerler degiskenler icin
// useCallback ise func lar icin

// component sarmallansa da bu component a props olarak gönderilen degisken yada func lar degistikce yine de render edilir. bu nedenle useMemo ve useCallback kullanilir.

// state ile useRef arasindaki fark: useRef direkt dom a ulasir. useState ise verileri state de tutar

import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import Users from './Users';

const UseMemoCallback = () => {
    const [users, setUsers] = useState();
    const [text, setText] = useState();
    const inputRef = useRef();
    const [search, setSearch] = useState();

    console.log(text);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => res.json())
        .then(data => setUsers(data))
        
    }, [])

        // simdi useRef ile input da yapilan arama isleminin text ini elde edecegiz ama bu alt component lerin render edilmesini engellemeyecek. 
    // const handleSearch = () => {
    //   setSearch(inputRef.current.value);
    // }
    // console.log("text", text, " search ", search);


    const handleSearch = () => {
      setSearch(text);
    };

      // arama yapacagiz. arama da girilen harfleri iceren sonuclar gelecek
      // Önemli: bizim filter islemimiz normalde butona bastiktan sonra gerceklesir. ama input a girilen her harf de text ve search state leri degisir. bu nedenle js geregi filteredUsers array i de her defasinda yeniden olusturulur. bu nedenle, biz users component ini memo ile sarmallamis olsak da yine de bu component render edilmeye devam eder. iste burada devreye useMemo ve useCallback girer

      // useMemo kullanimi:  filteredUsers komple () icine alinir. () icerisinde bir callback func olusturulur.
      // burada useMemo kullandiktan sonra render etmeye devam edecektir. bunu engellemek icin useMemo ya bir dependency verilir. ve dependency de ilk sefer hafizaya alinir. bu degismedigi sürece bir daha render edilmez. 
      // bu durumda bir problem daha cikar. dependency icine search yazilmadigi icin search arama kelimesi degistiginde render edilmez.

      // normal de search her degistiginde bizim component imiz komple render edilir ama biz burada filteredUsers in render islemini engellemistik. simdi tekrar aciyoruz.

    const filteredUsers = useMemo(() => users?.filter((user) => {
      return (
        user.name?.toLowerCase().includes(search?.toLowerCase())
      )
    }), [users, search]);


      // simdi useCallback kullanimi icin yeni kullanici ekleyecek bir func olusturacagiz. ve bunu users a props olarak gönderecegiz.

        // burada func sarmalliyoruz ama kendi icinde bir callback oldugu icin ekstra dan callback eklemiyoruz.
      const addUser = useCallback(() => {
        setUsers([...users, {
          id : users.length + 1, name : `Clarusway ${users.length +1 }`
        }])
      }, [users])
      // dependency olarak users veriyoruz. Böylece apiden veri geldikten sonra da useCallback calissin ve yeni halini hafizaya alsin. aksi takdirde api den veri gelmeden ki halini yani bos array hafizaya alir. 
      // burada users i aynen al derken [] unutmayalim. yoksa filter func calismaz
      // add user ile users degistigi icib burada render edilme normaldir.


  return (
    <div>
            {/* Bu sekilde yaptigimizda input daki her degisiklikte child elementler yani users ve usercard da render edilir */}
        <input type="text" onChange= {(e) => setText(e.target.value)} />
        <button onClick={handleSearch} >Search User</button>

            {/* simdi ise useRef ile yapacagiz */}
        {/* <input type="text" ref={inputRef} /> <br />
        <button onClick={handleSearch} >Search User</button> */}


        {/* <Users users = {users} /> */}

        
        <Users users = {filteredUsers} addUser = {addUser} />

    </div>
  )
}

export default UseMemoCallback;