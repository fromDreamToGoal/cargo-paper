import React from 'react';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
import { Font } from '@react-pdf/renderer';
import { formatDateReadable } from '../utils/formatDateReadable.js';
import { priceToWords } from '../utils/priceToWords.js';

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
  stamp: { marginTop: 20, textAlign: 'center', fontSize: 10, fontStyle: 'italic' },
});


const AcceptanceActPDF = ({ data }) => {
    
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <Text style={styles.header}>Акт сдачи-приемки выполненных работ (оказанных услуг) № {data.actNumber} от {formatDateReadable(data.actDate)}</Text>

        <View style={styles.section}>
          <Text>Исполнитель: ИП {data.driver?.fullName}</Text>
          <Text>Адрес регистрации: {data.driver?.registrationAddress || '-'}</Text>
          <Text>ИНН: {data.driver?.inn || '-'}     Р/С №: {data.driver?.ras || '-'}    БИК: {data.driver?.bik || '-'}</Text>
          <Text>К/С: {data.driver?.kor || '-'}     Банк: {data.driver?.bankName || '-'}</Text>
        </View>

        <View style={styles.section}>
          <Text>Заказчик: {data.client?.name || '-'}</Text>
          <Text>Юр. адрес: {data.client?.address || '-'}</Text>
          <Text>Банк заказчика: {data.client?.bankName || '-'}</Text>
          <Text>БИК: {data.client?.bik || '-'} Р/с: {data.client?.rs || '-'}</Text>
          <Text>ИНН: {data.client?.inn}   ОКПО: {data.client?.okpo}    ОГРНИП: {data.client?.ogrn || '-'}</Text>
        </View>

        <View style={styles.table}>
          <View style={styles.tableRowHeader}>
            <Text style={[styles.tableCol, {flex: 3}]}>Наименование товаров, работ, услуг</Text>
            <Text style={styles.tableCol}>Цена</Text>
            <Text style={styles.tableCol}>Количество</Text>
            <Text style={styles.tableCol}>Ед. изм</Text>
            <Text style={styles.tableColLast}>Сумма, руб.</Text>
          </View>
          {[1].map((_, i) => (
            <View key={i} style={styles.tableRow}>
              <Text style={[styles.tableCol, {flex: 3}]}>{data.service}</Text>
              <Text style={styles.tableCol}>{data.price}</Text>
              <Text style={styles.tableCol}>{data.quantity}</Text>
              <Text style={styles.tableCol}>{data.unit}</Text>
              <Text style={styles.tableColLast}>{data.price}</Text>
            </View>
          ))}
          <View style={styles.tableRow}>
            <Text style={[styles.tableCol, {flex: 6, textAlign: 'left', marginLeft: 5}]}>Итого</Text>
            <Text style={styles.tableColLast}>{data.price}</Text>
          </View>
        </View>

        <View style={styles.footer}>
          <Text>Всего оказано услуг на сумму: {priceToWords(data.price)} без НДС</Text>
          <Text> </Text>
          <Text>Вышеперечисленные услуги выполнены полностью и в срок. Заказчик претензий по обьему, качеству и срокам оказания услуг не имеет</Text>
          
        </View>
              <View style={styles.stamp}>
                  <View style={[styles.row, { marginTop: 20 }]}>
                      <Text>Исполнитель: {data.driver?.fullName}</Text>
                      <Text>Заказчик: {data.client?.name || '-'}</Text>
                  </View>
                    <View style={[styles.row, { marginTop: 10, textAlign: 'center' }]}>
                        <Text>____________________</Text>
                        <Text>____________________</Text>
                    </View>
                  <View style={[styles.row, { marginTop: 30 }]}>
                      <Text>М.П.</Text>
                      <Text>М.П.</Text>
                  </View>
              </View>
      </Page>
    </Document>
  );
}
export default AcceptanceActPDF;