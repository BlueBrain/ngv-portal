import React, { ReactNode, useState } from 'react';
import { Input } from 'antd';
import Fuse from 'fuse.js'

import ResponsiveTable from '@/components/ResponsiveTable';
import HttpDownloadButton from '@/components/HttpDownloadButton';
import { downloadAsJson } from '@/utils';

import styles from './styles.module.scss';

const data = require('@/../public/assets/files/metabolism/digital-reconstructions/rate_functions_aged.json');

type Indices = 'id' | 'rate';

type Column = {
  dataIndex: Indices;
  title: string | ReactNode;
  width?: number;
}

type DataType = Record<Indices, string>;
  
const columns: Column[] = [
  { dataIndex: 'rate', title: 'Rate function' },
];

type FuseOptions = {
  keys: {
    name: Indices;
    weight: number;
  }[];
}

const fuseOptions: FuseOptions = {
  keys: [
    { name: 'rate', weight: 1 },
  ]
};

const fuse = new Fuse(data, fuseOptions);

function fuzzySearch(searchStr) {
  if (!searchStr) return data;

  const filtered = fuse.search(searchStr).map(result => result.item);
  return filtered;
}

export default function RatesFunctionsAgedTable() {
  const [searchStr, setSearchStr] = useState('');

  const filteredData: DataType[] = fuzzySearch(searchStr);
  return (
    <>
      <Input.Search
        placeholder="Search term"
        value={searchStr}
        className={styles.searchInput}
        onChange={e => setSearchStr(e.target.value)}
        allowClear
      />

      <ResponsiveTable<DataType>
        columns={columns}
        data={filteredData}
        rowKey={({ id }) => id}
        tableLayout="fixed"
        bordered
        pagination={filteredData.length > 10 ? { position: ['bottomRight'] } : false}
      />
    
      <div className="text-right mt-2">
        <HttpDownloadButton
          onClick={() => downloadAsJson(data, 'rate-functions-aged-factsheet.json')}
        >
          rate functions
        </HttpDownloadButton>
      </div>

    </>
  );
}
