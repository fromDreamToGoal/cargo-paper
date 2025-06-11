import React from 'react';
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Font
} from '@react-pdf/renderer';

// Шрифты и стили
Font.register({
  family: 'Roboto',
  fonts: [
    {
      src: './src/assets/fonts/Roboto-Regular.ttf',
      fontWeight: 'normal',
    },
    {
      src: './src/assets/fonts/Roboto-Italic.ttf',
      fontStyle: 'italic',
    },
    {
      src: './src/assets/fonts/Roboto-Bold.ttf',
      fontWeight: 'bold',
    },
  ]
});

const styles = StyleSheet.create({
  page: {fontFamily: 'Roboto', fontSize: 10, padding: 40},
  title: {fontSize: 14, textAlign: 'center', marginBottom: 12, fontWeight: 'bold'},
  table: {display: 'table', width: 'auto', marginVertical: 10, borderWidth: 1, borderColor: '#000'},
  tableRow: {flexDirection: 'row'},
  cellLabel: {width: '40%', padding: 5, borderRightWidth: 1, borderBottomWidth: 1, borderColor: '#000', fontWeight: 'bold' },
  cellValue: {width: '60%', padding: 5, borderBottomWidth: 1, borderColor: '#000'},
  bankHeader: {fontSize: 14, textAlign: 'center', marginBottom: 12, fontWeight: 'bold'},
  bankRow: {flexDirection: 'row'},
  bankCol: {width: '50%', padding: 5, borderWidth: 1, borderColor: '#000'}
});

const DriverCardPDF = ({ driver }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <Text style={styles.title}>Карточка клиента</Text>
        <View style={styles.table}>
        {[
          ['Наименование', `ИП ${driver.fullName}`],
          ['ИНН', driver.inn],
          ['ОГРНИП', driver.ogrnip],
          ['Адрес', driver.registrationAddress],
          ['Телефон', driver.phone],
          ['Система налогообложения', driver.taxSystem],
          ['ОКВЭД', driver.okved],
          ['Эл. почта', driver.email]
        ].map(([label, value]) => (
          <View style={styles.tableRow} key={label}>
            <Text style={styles.cellLabel}>{label}</Text>
            <Text style={styles.cellValue}>{value || '—'}</Text>
          </View>
        ))}
      </View>
      <Text style={styles.bankHeader}>Реквизиты банка</Text>
              <View style={styles.table}>
        {[
          ['БИК', driver.bik],
          ['Наименование', driver.bankName],
          ['кор/сч', driver.kor],
          ['р/сч', driver.ras]
        ].map(([label, value]) => (
          <View style={styles.tableRow} key={label}>
            <Text style={styles.cellLabel}>{label}</Text>
            <Text style={styles.cellValue}>{value || '—'}</Text>
          </View>
        ))}
      </View>
    </Page>
  </Document>
);

export default DriverCardPDF;