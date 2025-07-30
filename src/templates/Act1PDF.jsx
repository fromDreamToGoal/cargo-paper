import React from 'react';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
import { Font } from '@react-pdf/renderer';
import { formatDateReadable } from '../utils/formatDateReadable.js';
import { priceToWords } from '../utils/priceToWords.js';
import { calcTotalPrice } from '../utils/calcTotalPrice.js';
import { formatToInitials } from '../utils/formatToInitials.js';

Font.register({
  family: 'Roboto',
  src: './src/assets/fonts/Roboto.ttf',
});

const styles = StyleSheet.create({
  page: { padding: 30, fontSize: 10, fontFamily: 'Roboto', },
  header: { textAlign: 'center', fontSize: 12, marginBottom: 10, fontWeight: 'bold' },
  section: { marginBottom: 20},
  row: { flexDirection: 'row', justifyContent: 'space-between' },
  box: { borderWidth: 1, borderColor: '#000', padding: 6, marginBottom: 6 },
  table: { borderWidth: 1, borderColor: '#000' },
  tableRow: { flexDirection: 'row', borderBottomWidth: 1, borderColor: '#000', textAlign: 'center' },
  tableRowHeader: { flexDirection: 'row', borderBottomWidth: 1, borderColor: '#000', textAlign: 'center', fontWeight: 'bold' },
  tableCol: { flex: 1, borderRightWidth: 1, borderColor: '#000', padding: 4 },
  tableColLast: { flex: 1, padding: 5, textAlign: 'center' },
  footer: { marginTop: 12 },
  stamp: { marginTop: 20, textAlign: 'center', fontSize: 10, fontStyle: 'italic' },
  value: { width: '50%' },
});

const Act1PDF = ({ data }) => {
    const totalPrice = calcTotalPrice(data.price, data.quantity);
    return (
        <Document>
            <Page size="A4" style={styles.page}>
                <Text style={styles.header}>АКТ {data.actNumber} от {formatDateReadable(data.actDate)} {'\n'}на выполнение работ-услуг</Text>
                <Text style={[styles.row, {textIndent: 20}]}>Мы, нижеподписавшиеся, представитель ИСПОЛНИТЕЛЯ, с одной стороны и представитель ЗАКАЗЧИКА с другой стороны, составили настоящий акт в том, что ИСПОЛНИТЕЛЬ выполнил, а ЗАКАЗЧИК принял следующие работы:</Text>
                <View style={[styles.table, { marginTop: 10, marginBottom: 10 }]}>
                    <View style={styles.tableRowHeader}>
                        <Text style={[styles.tableCol, { fontWeight: 'bold', flex: 4 }]}>Наименование</Text>
                        <Text style={[styles.tableCol, { fontWeight: 'bold' }]}>Цена</Text>
                        <Text style={[styles.tableCol, { fontWeight: 'bold' }]}>Кол-во</Text>
                        <Text style={[styles.tableCol, { fontWeight: 'bold' }]}>Ед. изм.</Text>
                        <Text style={[styles.tableColLast, { fontWeight: 'bold' }]}>Сумма</Text>
                    </View>
                    <View style={styles.tableRow}>
                        <Text style={[styles.tableCol, {flex: 4}]}>{data.service}</Text>
                        <Text style={styles.tableCol}>{data.price} руб/тонна</Text>
                        <Text style={styles.tableCol}>{data.quantity}</Text>
                        <Text style={styles.tableCol}>тонна</Text>
                        <Text style={styles.tableColLast}>{totalPrice} руб.</Text>
                    </View>
                    <View style={styles.tableRow}>
                        <Text style={[styles.tableCol, {flex: 4.23, textAlign: 'left', marginLeft: 15}]}>Сумма прописью: {priceToWords(data.totalPrice)}  Без НДС.</Text>
                        <Text style={styles.tableCol}>{totalPrice} руб.</Text>
                    </View>
                </View>
                <Text style={[styles.row, {textIndent: 20}]}>Работы выполнены в полном объеме, в установленные сроки с надлежащим качеством. Стороны претензий друг к другу не имеют.</Text>

                <View style={[styles.section, { flexDirection: 'row', justifyContent: 'space-around', marginTop: 20 }]}>
                    <Text style={[styles.label, {fontWeight: 700}]}>Исполнитель:</Text>
                    <Text style={[styles.label, {fontWeight: 700}]}>Заказчик:</Text>
                </View>

                <View style={[styles.section, { flexDirection: 'row', justifyContent: 'space-around', gap: 20 }]}>
                    <Text style={styles.value}>ИП {data.driver?.fullName || '___'}
                        {'\n'}{data.driver?.registrationAddress || '___'}
                        {'\n'}ИНН {data.driver?.inn || '___'}
                        {'\n'}Р/С № {data.driver?.ras || '___'}
                        {'\n'}БИК {data.driver?.bik || '___'}
                        {'\n'}{data.driver?.bankName || '___'}
                        {'\n'}К/С № {data.driver?.kor || '___'}
                    </Text>
                    <Text style={styles.value}>{data.client?.name || '___'}
                        {'\n'}{data.client?.address || '___'}
                        {'\n'}ИНН {data.client?.inn || '___'}
                        {'\n'}КПП {data.client?.kpp || '___'}
                        {'\n'}Р/С № {data.client?.rs || '___'}
                        {'\n'}{data.client?.bankName || '___'}
                        {'\n'}К/С № {data.client?.ks || '___'}
                        {'\n'}БИК {data.client?.bik || '___'}
                        {'\n'}Директор __________ {formatToInitials(data.client?.director) || '___'}
                    </Text>
                </View>
                <View style={[styles.section, { flexDirection: 'row', justifyContent: 'space-around', marginTop: 20 }]}>
                    <Text style={styles.label}>Сдал ________________________</Text>
                    <Text style={styles.label}>________________________ Принял</Text>
                </View>
            </Page>
        </Document>
    );
};

export default Act1PDF;