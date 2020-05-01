import React, { useContext } from 'react';

import image from 'assets/illustrations/illustration 8.png';
import InfoBlock from 'components/InfoBlock';
import { FormContext, openForm } from 'utils/context/Form';
import { SpreadsheetContext } from 'utils/context/SpreadsheetContextProvider';
import { pivotTable } from 'utils/pivotTable';

const EmptyGive = () => {
  const { giveRef } = useContext(FormContext);
  const { content } = useContext(SpreadsheetContext);
  const DashboardContent = pivotTable(content['Dashboard']);

  return (
    <InfoBlock
      title={DashboardContent['Give CTA Heading']}
      text={DashboardContent['Give CTA Body']}
      image={image}
      cta={{
        text: 'Give',
        action: () => openForm(giveRef),
      }}
    />
  );
};

export default EmptyGive;
