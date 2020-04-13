import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useTabletop from '../utils/hooks/useTabletop';

const User = () => {
  const tData = useTabletop('1SMus2rG-kjfy2SXASC-V8trxB4BFF7ITx-QvaoBOags');
  const [userData, setUserData] = useState();
  const { userId } = useParams();

  useEffect(() => {
    if (!tData) {
      return;
    }

    const newUserData = tData.find((c) => c['ID'] === userId);

    setUserData(newUserData);
  }, [tData, setUserData, userId]);

  if (!userData) {
    // TODO: loading indicator
    return null;
  }

  const { Name: name, Topic: topic, Email: email } = userData;

  return (
    <div>
      Thanks for Guilding, {name}. We'll email you at {email} when we've found
      an {topic} expert to help you.
    </div>
  );
};

export default User;
