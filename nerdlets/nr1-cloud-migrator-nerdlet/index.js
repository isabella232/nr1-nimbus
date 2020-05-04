/* 
eslint no-use-before-define: 0,
no-console: 0,
*/ // --> OFF

import React from 'react';
import { AutoSizer } from 'nr1';
import CloudMigrator from './components/cloud-migrator';
import pkg from '../../package.json';
import { DataProvider } from './context/data';

window.chartColors = {
  red: 'rgb(255, 99, 132)',
  orange: 'rgb(255, 159, 64)',
  yellow: 'rgb(255, 205, 86)',
  green: 'rgb(75, 192, 192)',
  blue: 'rgb(54, 162, 235)',
  purple: 'rgb(153, 102, 255)',
  grey: 'rgb(201, 203, 207)'
};

export default class Root extends React.Component {
  render() {
    console.log(`${pkg.name}: ${pkg.version}`);

    return (
      <AutoSizer>
        {({ height }) => (
          <DataProvider>
            <CloudMigrator height={height - 60} />
          </DataProvider>
        )}
      </AutoSizer>
    );
  }
}
