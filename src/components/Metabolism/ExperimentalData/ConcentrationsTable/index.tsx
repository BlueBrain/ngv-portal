import React, { ReactNode, useState } from 'react';
import { Input } from 'antd';
import Fuse from 'fuse.js'

import ResponsiveTable from '@/components/ResponsiveTable';
import HttpDownloadButton from '@/components/HttpDownloadButton';
import ReferenceLink from './ReferenceLink';
import { downloadAsJson } from '@/utils';

import styles from './styles.module.scss';

const data = require('@/../public/assets/files/concentration_table_full.json');

type Indices = '#id' | 'id' | 'big_id' | 'name' | 'value' | 'references' | 'reference_info.title';

type Column = {
  dataIndex: Indices
  title: string | ReactNode;
  width?: number;
}

type ConcentrationsData = Record<Indices, string> & {
  references: ReactNode;
}

type ReferenceInfo = {
  title: string;
  url: string;
}

  
const bigIdColumnTitle = (
  <div
    title='(format is u_ + bigg_id (if available) + compartment_id)'
    className={styles.cursorHelp}
  >
    IDs using <a href="http://bigg.ucsd.edu" target="_blank" rel="noreferrer">http://bigg.ucsd.edu</a>
  </div>
)

const columns: Column[] = [
  { dataIndex: '#id', title: '#ID', width: 30, },
  { dataIndex: 'id', title: 'ID', width: 150, },
  { dataIndex: 'big_id', title: bigIdColumnTitle, width: 150, },
  { dataIndex: 'name', title: 'Name', width: 250, },
  { dataIndex: 'value', title: 'Value', width: 120, },
  { dataIndex: 'references', title: 'Reference', width: 100 },
];

type FuseOptions = {
  keys: {
    name: Indices;
    weight: number;
  }[];
}

const fuseOptions: FuseOptions = {
  keys: [
    { name: '#id', weight: 1 },
    { name: 'id', weight: 2 },
    { name: 'big_id', weight: 1 },
    { name: 'name', weight: 1 },
    { name: 'value', weight: 0.5 },
    { name: 'reference_info.title', weight: 0.5 },
  ]
};

const fuse = new Fuse(data, fuseOptions);

function fuzzySearch(searchStr) {
  if (!searchStr) return data;
  
  const filtered = fuse.search(searchStr).map(result => result.item);
  return filtered;
}

export default function MetabolismExpDataView() {

  const [searchStr, setSearchStr] = useState('');

  const concentrationsData: ConcentrationsData[] = fuzzySearch(searchStr)
    .map(row => ({
      ...row,
      references: row.reference_info.map((referenceInfo: ReferenceInfo) => (
        <ReferenceLink referenceInfo={referenceInfo} key={row.id + referenceInfo.url}/>
      )),
    }));

  return (
    <>
      <Input.Search
        placeholder="Search term"
        value={searchStr}
        className={styles.concentrationsSearch}
        onChange={e => setSearchStr(e.target.value)}
        allowClear
      />

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
          initial values
        </HttpDownloadButton>
      </div>

    </>
  );
}
