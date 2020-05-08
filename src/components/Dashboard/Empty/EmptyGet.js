import React, { useContext } from 'react';

import image from 'assets/illustrations/illustration 6.png';
import InfoBlock from 'components/InfoBlock';
import { FormContext } from 'utils/context/Form';
import { SpreadsheetContext } from 'utils/context/SpreadsheetContextProvider';
import { pivotTable } from 'utils/pivotTable';

const EmptyGet = () => {
  const { openForm } = useContext(FormContext);
  const { content } = useContext(SpreadsheetContext);
  const DashboardContent = pivotTable(content['Dashboard']);

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
