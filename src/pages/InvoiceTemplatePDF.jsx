import React from 'react';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
import { Font } from '@react-pdf/renderer';

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
  tableRow: { flexDirection: 'row', borderBottomWidth: 1, borderColor: '#000' },
  tableRowHeader: { flexDirection: 'row', borderBottomWidth: 1, borderColor: '#000', textAlign: 'center', fontWeight: 'bold' },
  tableCol: { flex: 1, borderRightWidth: 1, borderColor: '#000', padding: 4 },
  tableColLast: { flex: 1, padding: 5 },
  footer: { marginTop: 12 },
});

const InvoiceTemplatePDF = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <Text style={styles.header}>Счёт на оплату № ___ от ___</Text>

      <View style={styles.section}>
        <Text>Исполнитель: _____________________________________________</Text>
        <Text>ИНН ____________ Р/С № ____________________ БИК __________</Text>
        <Text>К/С _______________________ Банк ____________________________</Text>
      </View>

      <View style={styles.section}>
        <Text>Получатель: _____________________________________________</Text>
        <Text>Банк получателя: _________________________________________</Text>
        <Text>БИК: ____________</Text>
        <Text>Сч. №: _______________________</Text>
        <Text>Юр. адрес: ______________________________________________</Text>
        <Text>ИНН ____________ ОКПО ____________ ОГРНИП _______________</Text>
      </View>

      <View style={styles.table}>
        <View style={styles.tableRowHeader}>
          <Text style={styles.tableCol}>Наименование товара</Text>
          <Text style={styles.tableCol}>Ед. изм</Text>
          <Text style={styles.tableCol}>Кол-во</Text>
          <Text style={styles.tableColLast}>Сумма, руб.</Text>
        </View>
        {[1].map((_, i) => (
          <View key={i} style={styles.tableRow}>
            <Text style={styles.tableCol}> </Text>
            <Text style={styles.tableCol}> </Text>
            <Text style={styles.tableCol}> </Text>
            <Text style={styles.tableColLast}> </Text>
          </View>
        ))}
        <View style={styles.tableRow}>
          <Text style={[styles.tableCol, { flex: 4 }]}>Итого:</Text>
          <Text style={styles.tableColLast}> </Text>
        </View>
      </View>

      <View style={styles.footer}>
        <Text>Всего наименований: ___, на сумму: ___________ рублей</Text>
        <Text>__________________________________________________</Text>
        <Text style={{ marginTop: 10 }}>Исполнитель: ___________________________________</Text>
      </View>
    </Page>
  </Document>
);

export default InvoiceTemplatePDF;