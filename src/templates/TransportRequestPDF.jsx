

import React from 'react';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
import { Font } from '@react-pdf/renderer';

Font.register({
  family: 'Roboto',
  src: './src/assets/fonts/Roboto.ttf',
});

const styles = StyleSheet.create({
  page: { padding: 40, fontSize: 10, fontFamily: 'Roboto' },
  title: { fontSize: 14, textAlign: 'center', marginBottom: 10 },
  section: { marginBottom: 8 },
  row: { flexDirection: 'row', marginBottom: 4 },
  label: { width: '40%', fontWeight: 'bold' },
  value: { width: '60%' },
  footer: { marginTop: 20 }
});

const TransportRequestPDF = ({ data }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <Text style={styles.title}>ЗАЯВКА НА ЗАКАЗ ТРАНСПОРТНОГО СРЕДСТВА</Text>

      <View style={styles.section}>
        <Text>Заявка № {data.requestNumber || '___'} от {data.requestDate || '___'}</Text>
        <Text>Приложение к договору № {data.contractNumber || '___'} от {data.contractDate || '___'}</Text>
      </View>

      <View style={styles.section}>
        <Text style={{ fontWeight: 'bold' }}>1. Данные перевозки</Text>
        <Text>Маршрут: {data.route || '___'}</Text>
        <Text>Дата загрузки: {data.loadDate || '___'}</Text>
        <Text>Адрес загрузки: {data.loadAddress || '___'}</Text>
        <Text>Дата выгрузки: {data.unloadDate || '___'}</Text>
        <Text>Адрес выгрузки: {data.unloadAddress || '___'}</Text>
        <Text>Груз: {data.cargo || '___'} ({data.weight || '___'} кг)</Text>
        <Text>Погрузка: {data.loadingType || '___'}</Text>
        <Text>ТС: {data.truckInfo || '___'}</Text>
      </View>

      <View style={styles.section}>
        <Text style={{ fontWeight: 'bold' }}>2. Условия</Text>
        <Text>Тариф: {data.rate || '___'} {data.currency || 'руб.'}</Text>
        <Text>Стоимость: {data.total || '___'} ({data.totalWords || '___'})</Text>
        <Text>Доп. условия: {data.terms || '___'}</Text>
      </View>

      <View style={styles.section}>
        <Text style={{ fontWeight: 'bold' }}>3. Контакты</Text>
        <Text>Контакт при погрузке: {data.loadContact || '___'}</Text>
        <Text>Контакт при выгрузке: {data.unloadContact || '___'}</Text>
      </View>

      <View style={styles.section}>
        <Text style={{ fontWeight: 'bold' }}>4. Стороны</Text>
        <Text>Заказчик: {data.client?.name || '___'}</Text>
        <Text>Перевозчик: ИП {data.driver?.fullName || '___'}</Text>
      </View>

      <View style={styles.footer}>
        <Text>Подпись заказчика: ____________________</Text>
        <Text>Подпись перевозчика: __________________</Text>
      </View>
    </Page>
  </Document>
);

export default TransportRequestPDF;