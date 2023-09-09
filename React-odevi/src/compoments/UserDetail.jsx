import React from 'react'

const UserDetail = (user) => {
    const {name,surname,age,email} = user.showInfos
  return (
    <div>
      <p>İsim:{name}</p>
      <p>Soyad:{surname}</p>
      <p>Yaş : {age}</p>
      <p>E-mail:{email}</p>
    </div>
  )
}

export default UserDetail
