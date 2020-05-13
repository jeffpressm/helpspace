import React from 'react';
import { CMS_URL } from 'lib/sheets';
import useSpreadsheet from 'utils/hooks/useSpreadsheet';
import { RouteList } from 'lib/routes';
import InfoBlock from 'components/InfoBlock';
import image from 'assets/illustrations/illustration 2.png';
import { pivotTable } from 'utils/pivotTable';

const Register = () => {
  const [content] = useSpreadsheet(CMS_URL['Register']);
  const RegisterContent = pivotTable(content);

  return (
    <InfoBlock
      theme="red"
      title={RegisterContent['Heading']}
      image={image}
      link={{
        text: RegisterContent['CTA'],
        action: `${RouteList.login}`,
      }}
    />
  );
};

export default Register;
