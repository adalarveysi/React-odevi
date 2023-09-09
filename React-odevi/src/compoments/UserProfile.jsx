import React, { useState } from 'react';
import UserDetail from './UserDetail';

const UserProfile = () => {
  const [userInfo] = useState({ name: "Veysi", surname: "Adalar", age: 23, email: "veysiadalar@kodluyoruz.org" });

  return (
    <div>
      
      <UserDetail showInfos={userInfo} />
    </div>
  );
}

export default UserProfile;
