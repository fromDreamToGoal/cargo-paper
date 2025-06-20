import React from 'react';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
import { Font } from '@react-pdf/renderer';
import { priceToWords } from '../utils/priceToWords';
import { formatDateReadable } from '../utils/formatDateReadable.js';

Font.register({
  family: 'Roboto',
  src: './src/assets/fonts/Roboto.ttf',
});

const styles = StyleSheet.create({
  page: { padding: 30, fontSize: 10, fontFamily: 'Roboto', },
  header: { textAlign: 'center', fontSize: 12, marginBottom: 10, fontWeight: 'bold' },
  section: { marginBottom: 20 },
  row: { flexDirection: 'row', justifyContent: 'space-between' },
  box: { borderWidth: 1, borderColor: '#000', padding: 6, marginBottom: 6 },
  table: { borderWidth: 1, borderColor: '#000' },
  tableRow: { flexDirection: 'row', borderBottomWidth: 1, borderColor: '#000', textAlign: 'center' },
  tableRowHeader: { flexDirection: 'row', borderBottomWidth: 1, borderColor: '#000', textAlign: 'center', fontWeight: 'bold' },
  tableCol: { flex: 1, borderRightWidth: 1, borderColor: '#000', padding: 4 },
  tableColLast: { flex: 1, padding: 5, textAlign: 'center' },
  footer: { marginTop: 12 },
});

const InvoiceTemplatePDF = ({data}) => {
  const totalPriceInWords = priceToWords(data.price);

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <Text style={styles.header}>Счёт на оплату № {data.invoiceNumber} от {formatDateReadable(data.invoiceDate)}</Text>

        <View style={styles.section}>
          <Text>Исполнитель: {data.contractor?.fullName}</Text>
          <Text>ИНН: {data.contractor?.inn || '-'}     Р/С №: {data.contractor?.ras || '-'}    БИК: {data.contractor?.bik || '-'}</Text>
          <Text>К/С: {data.contractor?.kor || '-'}     Банк: {data.contractor?.bankName || '-'}</Text>
        </View>

        <View style={styles.section}>
          <Text>Получатель: {data.client?.name || '-'}</Text>
          <Text>Банк получателя: {data.client?.bankName || '-'}</Text>
          <Text>БИК: {data.client?.bik || '-'}</Text>
          <Text>Сч. №: {data.client?.rs || '-'}</Text>
          <Text>Юр. адрес: {data.client?.address || '-'}</Text>
          <Text>ИНН: {data.client?.inn}   ОКПО: {data.client?.okpo}    ОГРНИП: {data.client?.ogrn || '-'}</Text>
        </View>

        <View style={styles.table}>
          <View style={styles.tableRowHeader}>
            <Text style={styles.tableCol}>Наименование товара</Text>
            <Text style={styles.tableCol}>Ед. изм</Text>
            <Text style={styles.tableCol}>Количество</Text>
            <Text style={styles.tableColLast}>Сумма, руб.</Text>
          </View>
          {[1].map((_, i) => (
            <View key={i} style={styles.tableRow}>
              <Text style={styles.tableCol}> {data.service} </Text>
              <Text style={styles.tableCol}> {data.unit}</Text>
              <Text style={styles.tableCol}> {data.quantity}</Text>
              <Text style={styles.tableColLast}> {data.price}</Text>
            </View>
          ))}
          <View style={styles.tableRow}>
            <Text style={[styles.tableCol, { flex: 3, textAlign: 'left', paddingLeft: 15 }]}>Итого:</Text>
            <Text style={styles.tableColLast}> {data.price} </Text>
          </View>
        </View>

        <View style={styles.footer}>
          <Text>Всего наименований: 1, на сумму: {totalPriceInWords} без НДС</Text>
                    <Text style={{ marginTop: 30 }}>ИП {data.contractor?.fullName || ''}: ___________________________________</Text>
        </View>
      </Page>
    </Document>
  );
};

export default InvoiceTemplatePDF;