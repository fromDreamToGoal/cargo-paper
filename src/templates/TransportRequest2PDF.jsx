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
    row: { flexDirection: 'row', marginBottom: 10 },
    label: { width: '40%', fontWeight: 'bold' },
    value: { width: '60%' },
    footer: { marginTop: 20 },
    table: { borderWidth: 1, borderColor: '#000', marginBottom: 20 },
    tableRow: { flexDirection: 'row', borderBottomWidth: 1, borderColor: '#000', textAlign: 'center' },
    tableCol: { flex: 1, borderRightWidth: 1, borderColor: '#000', padding: 4 },
    tableColLast: { flex: 1, borderColor: '#000', padding: 4 },
});

const TransportRequest2PDF = ({ data }) => (
    <Document>
        <Page size="A4" style={styles.page}>
            <Text style={styles.title}>ДОГОВОР № {data.contractNumber}</Text>

            <View style={styles.section}>
                <Text style={[styles.row, { textAlign: 'right' }]}>
                    Приложение № {data.appNumber} к Договору
                    {'\n'}перевозки грузов автомобильным
                    {'\n'}транспортом № {data.contractNumber}
                    {'\n'}от {formatDateReadable(data.contractDate)}
                </Text>
            </View>

            <Text style={styles.title}>СПЕЦИФИКАЦИЯ № {data.specificationNumber || '___'}</Text>

            <View style={[styles.section, { flexDirection: 'row', justifyContent: 'space-between' }]}>
                <Text style={styles.row}>{data.specificationPlace}</Text>
                <Text style={styles.row}>{formatDateReadable(data.specificationDate)}</Text>
            </View>


            <Text style={[styles.row, { textAlign: 'justify', textIndent: 20 }]}>
                Индивидуальный предприниматель {data.driver?.fullName || '___'}, именуемый в дальнейшем «Перевозчик», действующимй на основании Уведомления о государственной регистрации физичесского лица в качестве индивидуального предпринимателя, с одной стороны, и индивидуальный предприниматель {data.client?.director || '______'}, именуемый в дальшейшем «Заказчик» действующего на основании Уведомления о государственной регистрации физичесского лица с другой стороны, при совместном упоминании - «Стороны», а каждой отдельно - «Сторона», заключили настоящую Спецификацию к Договору перевозки грузов автомобильным транспортом, далее по тексту - «Договор», о нижеследующем:
            </Text>

            <Text style={[styles.row, {fontStyle: 'italic', textIndent: 20}]}>
                Руководствуясь п. 3.1 Договора, ст. 450, 452 ГК РФ, Стороны пришли к соглашению:
            </Text>

            <Text style={[styles.row, {textIndent : 20}]}>
                1. Согласовать следующие тарифы на перевозку грузов по Договору:
            </Text>

            <View style={styles.table}>
                <View style={styles.tableRow}>
                    <Text style={[styles.tableCol, { fontWeight: 'bold' }]}>Грузоподъемность ТС</Text>
                    <Text style={[styles.tableCol, { fontWeight: 'bold' }]}>Направление перевозки</Text>
                    <Text style={[styles.tableCol, { fontWeight: 'bold' }]}>Цена за кг</Text>
                    <Text style={[styles.tableColLast, { fontWeight: 'bold' }]}>Цена за перевозку, без НДС</Text>
                </View>
                <View style={styles.tableRow}>
                    <Text style={styles.tableCol}>{data.vehicleCapacity || '___'}</Text>
                    <Text style={styles.tableCol}>{data.route || '___'}</Text>
                    <Text style={styles.tableCol}>{data.pricePerKg || '___'}</Text>
                    <Text style={styles.tableColLast}>{data.totalPrice || '___'}</Text>
                </View>
            </View>

            <View style={styles.section}>
                <Text style={[styles.row, { textAlign: 'justify', textIndent: 20, marginBottom: 0 }]}>
                    2. Если меньше 29 тонн, то перерасчёт осуществляется исходя из стоимости перевозки 3 рубля за 1 кг.
                </Text>
                <Text style={[styles.row, { textAlign: 'justify', textIndent: 20, marginBottom: 0 }]}>
                    3. При междугородних перевозках срок доставки груза рассчитывается исходя из средней скорости движения 60 км/час, 8-ми часового рабочего дня и кратчайшего расстояния до грузополучателя.
                </Text>
                <Text style={[styles.row, { textAlign: 'justify', textIndent: 20, marginBottom: 0 }]}>
                    4. Данная Спецификация вступает в силу с момента ее подписания и является неотъемлемой частью Договора.
                </Text>
                <Text style={[styles.row, { textAlign: 'justify', textIndent: 20, marginBottom: 0 }]}>
                    5. Спецификация составлена в двух экземплярах на русском языке, по одному экземпляру для каждой из Сторон.
                </Text>
            </View>

            <Text style={styles.title}>ПОДПИСИ СТОРОН</Text>
            <View style={[styles.section, { flexDirection: 'row', justifyContent: 'space-between' }]}>
                <Text style={styles.label}>ЗАКАЗЧИК:</Text>
                <Text style={styles.label}>ПЕРЕВОЗЧИК:</Text>
            </View>

            <View style={[styles.section, { flexDirection: 'row', justifyContent: 'space-between' }]}>
                <Text style={styles.value}>Индивидуальный предприниматель
                    {'\n'}{data.client?.director || '___'}
                    {'\n'}{data.client?.address || '___'}
                    {'\n'}ИНН {data.client?.inn || '___'}
                    {'\n'}ОГРН {data.client?.ogrn || '___'}
                    {'\n'}р/с {data.client?.rs || '___'}
                    {'\n'}Банк: {data.client?.bankName || '___'}
                    {'\n'}БИК {data.client?.bik || '___'}
                    {'\n'}К/С {data.client?.ks || '___'}
                    {'\n'}
                    {'\n'}
                    {'\n'}
                    {'\n'}________________________ {formatToInitials(data.client?.director || '___')}
                </Text>
                <Text style={styles.value}>Индивидуальный предприниматель
                    {'\n'}{data.driver?.fullName || '___'}
                    {'\n'}{data.driver?.registrationAddress || '___'}
                    {'\n'}ИНН {data.driver?.inn || '___'}
                    {'\n'}ОГРНИП {data.driver?.ogrnip || '___'}
                    {'\n'}р/с {data.driver?.rs || '___'}
                    {'\n'}Банк: {data.driver?.bankName || '___'}
                    {'\n'}БИК {data.driver?.bik || '___'}
                    {'\n'}К/С {data.driver?.ks || '___'}
                    {'\n'}
                    {'\n'}
                    {'\n'}
                    {'\n'}________________________ {formatToInitials(data.driver?.fullName || '___')}
                </Text>
            </View>

        </Page>
    </Document>
);

export default TransportRequest2PDF;