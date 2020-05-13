import React, { useContext } from 'react';

import image from 'assets/illustrations/illustration 6.png';
import InfoBlock from 'components/InfoBlock';
import { FormContext } from 'utils/context/Form';
import { CMS_URL } from 'lib/sheets';
import useSpreadsheet from 'utils/hooks/useSpreadsheet';
import { pivotTable } from 'utils/pivotTable';

const EmptyGet = () => {
  const { openForm } = useContext(FormContext);
  const [content] = useSpreadsheet(CMS_URL['Dashboard']);
  const DashboardContent = pivotTable(content);

  return (
    <InfoBlock
      title={DashboardContent['Get CTA Heading']}
      text={DashboardContent['Get CTA Body']}
      image={image}
      cta={{
        text: 'Get',
        action: () => openForm('get'),
      }}
    />
  );
};

export default EmptyGet;
