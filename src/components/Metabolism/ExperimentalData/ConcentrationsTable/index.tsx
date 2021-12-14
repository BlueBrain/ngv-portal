import React, { ReactNode} from 'react';

import ResponsiveTable from '@/components/ResponsiveTable';
import HttpDownloadButton from '@/components/HttpDownloadButton';
import ReferenceLink from './ReferenceLink';
import { downloadAsJson } from '@/utils';

// TODO: fetch this from nexus
const data = require('@/../public/assets/files/concentration_table_full.json');

type ConcentrationsData = {
  id: string;
  name: string;
  value: string;
  references: ReactNode;
}

const columns = [
  { dataIndex: 'id' as keyof ConcentrationsData, title: 'ID', width: 150, },
  { dataIndex: 'name' as keyof ConcentrationsData, title: 'Name', width: 250, },
  { dataIndex: 'value' as keyof ConcentrationsData, title: 'Value', width: 120, },
  { dataIndex: 'references' as keyof ConcentrationsData, title: 'Reference', },
];

export default function MetabolismExpDataView() {

  const concentrationsData: ConcentrationsData[] = data.map(row => ({
    ...row,
    references: (<ReferenceLink referenceInfo={row.reference_info} rowId={row.id}/>),
  }));

  return (
    <>

      <ResponsiveTable<ConcentrationsData>
        columns={columns}
        data={concentrationsData}
        rowKey={({ id }) => id}
        tableLayout="fixed"
        bordered
        pagination={concentrationsData.length > 10 ? { position: ['bottomRight'] } : false}
      />
    
      <div className="text-right mt-2">
        <HttpDownloadButton
          onClick={() => downloadAsJson(data, 'concentrations-factsheet.json')}
        >
          concentrations
        </HttpDownloadButton>
      </div>

    </>
  );
}
