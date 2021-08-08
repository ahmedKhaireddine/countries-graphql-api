import React from 'react';
import { useSelector } from 'react-redux';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';
import Row from './Row';

const createData = (details, name) => {
  return {
    details,
    name
  };
};

const transformData = (country) => {
  const {
    alpha2Code, alpha3Code, area, callingCodes,
    borders, capital, demonym, languages,
    latlng, nativeName, name, region, population,
    numericCode, subregion, topLevelDomain, translations
  } = country;

  return [
    createData([
      { name: "Common", value: name },
      { name: "Common (Native)", value: nativeName },
      { name: "Population", value: `${population} inhabitants` },
    ],"Names"),
    createData(Object.keys(translations).map((key) => {
      return {
        name: key,
        value: translations[key],
      }
    }),"Translations"),
    createData(languages.map((language) => {
      return {
        name: language.iso639_2,
        value: language.name,
      }
    }),"Language"),
    createData([
      { name: "Region", value: region },
      { name: "Subregion", value: subregion },
      { name: "Capital", value: capital },
      { name: "Demonym", value: demonym },
      { name: "Lat/Lng", value: latlng },
      { name: "Area", value: `${area}km²` },
      { name: "Land borders", value: borders },
    ],"Geography"),
    createData([
      { name: "ISO 3166-1 alpha-2", value: alpha2Code },
      { name: "ISO 3166-1 alpha-3", value: alpha3Code },
      { name: "ISO 3166-1 numeric", value: numericCode },
      { name: "International calling code", value: callingCodes },
      { name: " Top level domain", value: topLevelDomain },
    ],"Codes"),
  ];
}

const TableInfo = () => {
  const { country } = useSelector(state => state.countryData);

  const rows = transformData(country);

  return (
    <TableContainer>
      <Table aria-label="collapsible table">
        <TableBody>
          {rows.map((row) => (
            <Row key={row.name} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default TableInfo;