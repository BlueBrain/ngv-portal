import React, { ReactNode, useState } from 'react';
import { Input } from 'antd';
import Fuse from 'fuse.js'

import ResponsiveTable from '@/components/ResponsiveTable';
import HttpDownloadButton from '@/components/HttpDownloadButton';
import { downloadAsJson } from '@/utils';

import styles from './styles.module.scss';

const data = require('@/../public/assets/files/diff_equations_table.json');

type Indices = 'id' | 'value';

type Column = {
  dataIndex: Indices;
  title: string;
  width?: number;
}

type DiffEquationsData = {
  id: string;
  value: string;
}

const columns: Column[] = [
  { dataIndex: 'id', title: 'ID', width: 65, },
  { dataIndex: 'value', title: 'Value' },
];

type FuseOptions = {
  keys: {
    name: Indices;
    weight: number;
  }[];
}

const fuseOptions: FuseOptions = {
  keys: [
    { name: 'id', weight: 1 },
    { name: 'value', weight: 1 },
  ]
};

const fuse = new Fuse(data, fuseOptions);

function fuzzySearch(searchStr) {
  if (!searchStr) return data;
  
  return fuse.search(searchStr).map(result => result.item);
}

export default function MetabolismDiffEquationsTable() {

  const [searchStr, setSearchStr] = useState('');

  const diffEquationsData: DiffEquationsData[] = fuzzySearch(searchStr);

  return (
    <>
      <Input.Search
        placeholder="Search term"
        value={searchStr}
        className={styles.diffEquationsSearch}
        onChange={e => setSearchStr(e.target.value)}
        allowClear
      />

      <ResponsiveTable<DiffEquationsData>
        columns={columns}
        data={diffEquationsData}
        rowKey={({ id }) => id}
        tableLayout="fixed"
        bordered
        pagination={diffEquationsData.length > 10 ? { position: ['bottomRight'] } : false}
      />
    
      <div className="text-right mt-2">
        <HttpDownloadButton
          onClick={() => downloadAsJson(data, 'differential-equations.json')}
        >
          differential equations
        </HttpDownloadButton>
      </div>

    </>
  );
}
