import React from 'react';
import {Document, Page, Text, View, StyleSheet, Font} from '@react-pdf/renderer';

Font.register({
  family: 'Roboto',
  src: './src/assets/fonts/Roboto.ttf',
});

// Шрифты и стили
const styles = StyleSheet.create({
  page: {padding: 40, fontSize: 10, fontFamily: 'Roboto'},
  section: {marginBottom: 10},
  row: {flexDirection: 'row', marginBottom: 4},
  label: {width: '40%', fontWeight: 'bold'},
  value: {width: '60%'},
  title: {textAlign: 'center', fontSize: 14, marginBottom: 10, fontWeight: 'bold'}
});

const TransportOrderPDF = ({ data }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <Text style={styles.title}>ДОГОВОР - ЗАЯВКА НА ЗАКАЗ ТРАНСПОРТНОГО СРЕДСТВА</Text>

      <View style={styles.section}>
        <View style={styles.row}>
          <Text style={styles.label}>Исполнитель (водитель):</Text>
          <Text style={styles.value}>ИП {data.driver?.fullName}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Клиент:</Text>
          <Text style={styles.value}>{data.client?.name}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Дата выставления:</Text>
          <Text style={styles.value}>{data.issueDate}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Дата загрузки:</Text>
          <Text style={styles.value}>{data.loadDate}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Адрес загрузки:</Text>
          <Text style={styles.value}>{data.loadAddress}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Дата выгрузки:</Text>
          <Text style={styles.value}>{data.unloadDate}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Адрес выгрузки:</Text>
          <Text style={styles.value}>{data.unloadAddress}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Характер груза:</Text>
          <Text style={styles.value}>{data.cargoType}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Упаковка:</Text>
          <Text style={styles.value}>{data.packaging}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Форма оплаты:</Text>
          <Text style={styles.value}>{data.paymentType}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Условия оплаты:</Text>
          <Text style={styles.value}>{data.paymentTerms}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Стоимость:</Text>
          <Text style={styles.value}>{data.price} руб.</Text>
        </View>
      </View>

      <Text style={{ marginTop: 20 }}>Подпись клиента: ______________________</Text>
      <Text style={{ marginTop: 8 }}>Подпись исполнителя: __________________</Text>
    </Page>
  </Document>
);

export default TransportOrderPDF;