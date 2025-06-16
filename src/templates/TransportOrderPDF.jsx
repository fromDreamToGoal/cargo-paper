import React from 'react';
import { Document, Page, Text, View, StyleSheet, Font } from '@react-pdf/renderer';

Font.register({
    family: 'Roboto',
    src: './src/assets/fonts/Roboto.ttf',
});

// Шрифты и стили
const styles = StyleSheet.create({
    page: { padding: 40, fontSize: 10, fontFamily: 'Roboto' },
    section: { marginBottom: 10 },
    row: { flexDirection: 'row', marginBottom: 4 },
    label: { width: '40%', fontWeight: 'bold' },
    value: { width: '60%' },
    header: { fontSize: 12, marginBottom: 10, textAlign: 'center', fontWeight: 'bold' },
    title: { textAlign: 'center', fontSize: 14, marginBottom: 10, fontWeight: 'bold' },
    data: { fontSize: 10, marginBottom: 5, textAlign: 'right' },
    table: { borderWidth: 1, borderColor: '#000' },
    tableRow: { flexDirection: 'row', borderBottomWidth: 1, borderColor: '#000', textAlign: 'center' },
    tableCol: { flex: 1, borderRightWidth: 1, borderColor: '#000', padding: 4 },
    tableColLast: { flex: 1, borderColor: '#000', padding: 4 },
});

const TransportOrderPDF = ({ data }) => (
    <Document>
        <Page size="A4" style={styles.page}>
            <Text style={styles.title}>ДОГОВОР - ЗАЯВКА НА ЗАКАЗ ТРАНСПОРТНОГО СРЕДСТВА</Text>
            <Text style={styles.data}>{data.issueDate}</Text>
            <Text style={styles.header}>Приём заявок с 9.00 до 17.30. Все пункты обязательны для заполнення!</Text>

            <View style={styles.table}>
                <View style={styles.tableRow}>
                    <Text style={styles.tableCol}>Заказчик:</Text>
                    <Text style={[styles.tableCol, {flex: 3}]}>{data.client?.name || '-'}</Text>
                    <Text style={styles.tableCol}>ИНН/КПП:</Text>
                    <Text style={[styles.tableColLast, {flex: 3}]}>{data.client?.inn || '-'} / {data.client?.kpp || '-'}</Text>
                </View>
                <View style={styles.tableRow}>
                    <Text style={styles.tableCol}>Юридичесский адрес:</Text>
                    <Text style={[styles.tableColLast, {flex: 3}]}>{data.client?.address || '-'}</Text>
                </View>
                <View style={styles.tableRow}>
                    <Text style={styles.tableCol}>Исполнитель:</Text>
                    <Text style={[styles.tableColLast, {flex: 3}]}> {`Индивидуальный предприниматель ${data.driver?.fullName}` || '-'}</Text>
                </View>
                <View style={styles.tableRow}>
                    <Text style={styles.tableCol}>Грузоотправитель:</Text>
                    <Text style={[styles.tableColLast, {flex: 3}]}>{data.client?.name || '-'}</Text>
                </View>
                <View style={styles.tableRow}>
                    <Text style={styles.tableCol}>Факт.Адрес загрузки:</Text>
                    <Text style={[styles.tableColLast, {flex: 3}]}>{data.loadAddress || '-'}</Text>
                </View>
                <View style={styles.tableRow}>
                    <Text style={styles.tableCol}>Конт. лицо при загрузке:</Text>
                    <Text style={[styles.tableColLast, {flex: 3}]}>{data.contactPerson || '-'}</Text>
                </View>
                <View style={styles.tableRow}>
                    <Text style={styles.tableCol}>Грузополучатель:</Text>
                    <Text style={[styles.tableColLast, {flex: 3}]}>{data.consignee || '-'}</Text>
                </View>
                <View style={styles.tableRow}>
                    <Text style={styles.tableCol}>Факт.Адрес выгрузки:</Text>
                    <Text style={[styles.tableColLast, {flex: 3}]}>{data.unloadAddress || '-'}</Text>
                </View>
                <View style={styles.tableRow}>
                    <Text style={styles.tableCol}>Конт. лицо при выгрузке:</Text>
                    <Text style={[styles.tableColLast, {flex: 3}]}>{data.unloadContactPerson || '-'}</Text>
                </View>
                <View style={styles.tableRow}>
                    <Text style={styles.tableCol}>Тип транспортного средства:</Text>
                    <Text style={[styles.tableColLast, {flex: 3}]}>{data.vehicleType || '-'}</Text>
                </View>
                <View style={styles.tableRow}>
                    <Text style={styles.tableCol}>Количество ТС:</Text>
                    <Text style={[styles.tableCol, ]}>{data.vehicleCount || '-'}</Text>
                    <Text style={styles.tableCol}>Количество мест: {data.placesCount || '-'}</Text>
                    <Text style={styles.tableCol}>Характер груза: </Text>
                    <Text style={styles.tableColLast}>{data.cargoType || '-'}</Text>
                </View>
                <View style={styles.tableRow}>
                    <Text style={styles.tableCol}>Вид загрузки:</Text>
                    <Text style={styles.tableCol}>{data.loadType || '-'}</Text>
                    <Text style={styles.tableCol}>Вид выгрузки:</Text>
                    <Text style={styles.tableColLast}>{data.unloadType || '-'}</Text>
                </View>
                <View style={styles.tableRow}>
                    <Text style={styles.tableCol}>Дата и время подачи транспортного средства:</Text>
                    <Text style={styles.tableColLast}>{data.loadDate || '-'}</Text>
                </View>
                <View style={styles.tableRow}>
                    <Text style={styles.tableCol}>Дата и время выгрузки:</Text>
                    <Text style={styles.tableColLast}>{data.unloadDate || '-'}</Text>
                </View>
                <View style={styles.tableRow}>
                    <Text style={styles.tableCol}>Особые отметки/дополнительная информация:</Text>
                    <Text style={styles.tableColLast}>{data.specialNotes || '-'}</Text>
                </View>
                <View style={styles.tableRow}>
                    <Text style={styles.tableCol}>Стоимость перевозки:</Text>
                    <Text style={styles.tableColLast}>{data.price ? `${data.price} рублей 00 копеек без НДС.` : '-'}</Text>
                </View>
                <View style={styles.tableRow}>
                    <Text style={styles.tableCol}>Форма оплаты:</Text>
                    <Text style={styles.tableColLast}>{ data.paymentType + '   ' + data.paymentTerms || '-'}</Text>
                </View>


            </View>

            <Text style={{ marginTop: 20 }}>Подпись клиента: ______________________</Text>
            <Text style={{ marginTop: 8 }}>Подпись исполнителя: __________________</Text>
        </Page>
    </Document>
);

export default TransportOrderPDF;