import React, { ReactNode, useState } from 'react';
import { Input } from 'antd';
import Fuse from 'fuse.js'

import ResponsiveTable from '@/components/ResponsiveTable';
import HttpDownloadButton from '@/components/HttpDownloadButton';
import { downloadAsJson } from '@/utils';

import styles from './styles.module.scss';

const data = require('@/../public/assets/files/metabolism/digital-reconstructions/reconstruction_params.json');

type Index = 'id' | 'parameter' | 'value';

type Column = {
  dataIndex: Index;
  title: string | ReactNode;
  width?: number;
}

type ReconstructionParametersData = Record<Index, string>;
  
const columns: Column[] = [
  { dataIndex: 'parameter', title: 'Parameter', width: 30, },
  { dataIndex: 'value', title: 'Value', width: 150, },
];

type FuseOptions = {
  keys: {
    name: Index;
    weight: number;
  }[];
}

const fuseOptions: FuseOptions = {
  keys: [
    { name: 'parameter', weight: 1 },
    { name: 'value', weight: 1 },
  ]
};

const fuse = new Fuse(data, fuseOptions);

function fuzzySearch(searchStr) {
  if (!searchStr) return data;

  const filtered = fuse.search(searchStr).map(result => result.item);
  return filtered;
}

export default function ReconstructionParametersTable() {
  const [searchStr, setSearchStr] = useState('');

  const ReconstructionParametersData: ReconstructionParametersData[] = fuzzySearch(searchStr);
  return (
    <>
      <Input.Search
        placeholder="Search term"
        value={searchStr}
        className={styles.searchInput}
        onChange={e => setSearchStr(e.target.value)}
        allowClear
      />

      <ResponsiveTable<ReconstructionParametersData>
        columns={columns}
        data={ReconstructionParametersData}
        rowKey={({ id }) => id}
        tableLayout="fixed"
        bordered
        pagination={ReconstructionParametersData.length > 10 ? { position: ['bottomRight'] } : false}
      />
    
      <div className="text-right mt-2">
        <HttpDownloadButton
          onClick={() => downloadAsJson(data, 'reconstruction-parameters-factsheet.json')}
        >
          reconstruction parameters
        </HttpDownloadButton>
      </div>

    </>
  );
}
