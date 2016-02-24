
import React, {
  ListView
} from 'react-native';

export function buildLiveDataList(data) {
  let dataSource = new ListView.DataSource({
    rowHasChanged: (r1, r2) => r1 !== r2
  });
  dataSource = dataSource.cloneWithRows(data);
  return dataSource;
}

export function buildLiveDataListWithSectionID(data, sectionIds) {
 let dataSource = new ListView.DataSource({
    getSectionHeaderData: (dataBlob, sectionID) => {
      return dataBlob[sectionID];
    },
    rowHasChanged: (r1, r2) => r1 !== r2,
    sectionHeaderHasChanged: (s1, s2) => s1 !== s2
  });
  dataSource = dataSource.cloneWithRowsAndSections(data, sectionIds);
  return dataSource;	
}
