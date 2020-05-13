import React, { useContext } from 'react';

import image from 'assets/illustrations/illustration 8.png';
import InfoBlock from 'components/InfoBlock';
import { FormContext } from 'utils/context/Form';
import { CMS_URL } from 'lib/sheets';
import useSpreadsheet from 'utils/hooks/useSpreadsheet';
import { pivotTable } from 'utils/pivotTable';

const EmptyGive = () => {
  const { openForm } = useContext(FormContext);
  const [content] = useSpreadsheet(CMS_URL['Dashboard']);
  const DashboardContent = pivotTable(content);

  return (
    <InfoBlock
      title={DashboardContent['Give CTA Heading']}
      text={DashboardContent['Give CTA Body']}
      image={image}
      cta={{
        text: 'Give',
        action: () => openForm('give'),
      }}
    />
  );
};

export default EmptyGive;
