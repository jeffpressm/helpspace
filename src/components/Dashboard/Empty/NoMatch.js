import React from 'react';

import image from 'assets/illustrations/illustration 3.png';
import InfoBlock from 'components/InfoBlock';
import { CMS_URL } from 'lib/sheets';
import useSpreadsheet from 'utils/hooks/useSpreadsheet';
import { pivotTable } from 'utils/pivotTable';

const NoMatch = () => {
  const [content] = useSpreadsheet(CMS_URL['Dashboard']);
  const DashboardContent = pivotTable(content);

  return (
    <InfoBlock
      title={DashboardContent['No Matches Heading']}
      text={DashboardContent['No Matches Body']}
      image={image}
    />
  );
};

export default NoMatch;
