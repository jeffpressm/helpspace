import React, { useContext } from 'react';

import image from 'assets/illustrations/illustration 3.png';
import InfoBlock from 'components/InfoBlock';
import { SpreadsheetContext } from 'utils/context/SpreadsheetContextProvider';
import { pivotTable } from 'utils/pivotTable';

const NoMatch = () => {
  const { content } = useContext(SpreadsheetContext);
  const DashboardContent = pivotTable(content['Dashboard']);

  return (
    <InfoBlock
      title={DashboardContent['No Matches Heading']}
      text={DashboardContent['No Matches Body']}
      image={image}
    />
  );
};

export default NoMatch;
