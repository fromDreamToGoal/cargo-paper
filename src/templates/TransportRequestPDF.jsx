

import React from 'react';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
import { Font } from '@react-pdf/renderer';
import { formatDateReadable } from '../utils/formatDateReadable.js';
import { formatToInitials } from '../utils/formatToInitials.js';

Font.register({
  family: 'Roboto',
  src: './src/assets/fonts/Roboto.ttf',
});

const styles = StyleSheet.create({
  page: { padding: 40, fontSize: 10, fontFamily: 'Roboto' },
  title: { fontSize: 14, textAlign: 'center', marginBottom: 10 },
  section: { marginBottom: 8 },
  row: { flexDirection: 'row', marginBottom: 30 },
  label: { width: '40%', fontWeight: 'bold' },
  value: { width: '60%' },
  footer: { marginTop: 20 },
  table: { borderWidth: 1, borderColor: '#000', marginBottom: 20 },
  tableRow: { flexDirection: 'row', borderBottomWidth: 1, borderColor: '#000', textAlign: 'center' },
  tableCol: { flex: 1, borderRightWidth: 1, borderColor: '#000', padding: 4 },
  tableColLast: { flex: 1, borderColor: '#000', padding: 4 },
});

const TransportRequestPDF = ({ data }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={[styles.section, { textAlign: 'right' }]}>
        <Text>Приложение Nº {data.appNumber || '----'}</Text>
        <Text>К Договору оказания транспортных услуг</Text>
        <Text>№ {data.contractNumber || '___'} от {formatDateReadable(data.contractDate) || '___'}</Text>
      </View>

      <Text style={styles.title}>ЗАЯВКА</Text>

      <View style={styles.table}>

        <View style={styles.tableRow}>
          <Text style={styles.tableCol}>Маршрут перевозки</Text>
          <Text style={styles.tableCol}>Пункт загрузки</Text>
          <Text style={styles.tableColLast}>Конечный пункт выгрузки</Text>
        </View>
        
        <View style={styles.tableRow}>
          <Text style={styles.tableCol}></Text>
          <Text style={styles.tableCol}>{data.loadAddress || '___'}</Text>
          <Text style={styles.tableColLast}>{data.unloadAddress || '___'}</Text>
        </View>

        <View style={styles.tableRow}>
          <Text style={styles.tableCol}>Дата загрузки</Text>
          <Text style={[styles.tableColLast, {flex: 2.055}]}>c {formatDateReadable(data.loadDate) || '___'}</Text>
        </View>

        <View style={styles.tableRow}>
          <Text style={styles.tableCol}>Тариф на перевозку</Text>
          <Text style={[styles.tableColLast, {flex: 2.055}]}>{data.rate || '___'} {'\n'}*Расчет стоимости перевозки осуществяется по весу (объему) груза, выгруженному в месте доставки (грузополучателю).  </Text>
        </View>

        <View style={styles.tableRow}>
          <Text style={styles.tableCol}>Транспортное средство</Text>
          <Text style={[styles.tableColLast, {flex: 2.055}]}>{data.vehicle || '___'}</Text>
        </View>

        <View style={styles.tableRow}>
          <Text style={styles.tableCol}>Требования к автомобилю</Text>
          <Text style={[styles.tableColLast, {flex: 2.055}]}>{data.driver?.car || '___'} {data.driver?.carNumber || '____'} прицеп {data.driver?.trailerNumber || '___'}</Text>
        </View>

        <View style={styles.tableRow}>
          <Text style={styles.tableCol}>Наименование груза</Text>
          <Text style={[styles.tableColLast, {flex: 2.055}]}>{data.cargo || '___'} </Text>
        </View>

        <View style={styles.tableRow}>
          <Text style={styles.tableCol}>Объем, тонн</Text>
          <Text style={[styles.tableColLast, {flex: 2.055}]}>{data.weight || '___'} </Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.row}>Заявка согласована. Разногласия отсутствуют</Text>
        <Text style={styles.row}>От ЗАКАЗЧИКА</Text>
        <View style={styles.row}>
          <Text style={styles.label}>_______________________/</Text>
          <Text style={styles.value}>{formatToInitials(data.client?.director) || '___'} Генеральный директор {data.client?.name || '____'}</Text>
        </View>
        <Text style={styles.row}>От ПЕРЕВОЗЧИКА</Text>
        <View style={styles.row}>
          <Text style={styles.label}>_______________________/</Text>
          <Text style={styles.value}>{formatToInitials(data.driver?.fullName) || '___'} </Text>
        </View>
      </View>
    </Page>
  </Document>
);

export default TransportRequestPDF;