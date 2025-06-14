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
                    <Text style={[styles.tableCol, {flex: 3}]}>{data.loadType || '-'}</Text>
                    <Text style={styles.tableCol}>Вид выгрузки:</Text>
                    <Text style={[styles.tableColLast, {flex: 3}]}>{data.unloadType || '-'}</Text>
                </View>




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
            </View>

            <Text style={{ marginTop: 20 }}>Подпись клиента: ______________________</Text>
            <Text style={{ marginTop: 8 }}>Подпись исполнителя: __________________</Text>
        </Page>
    </Document>
);

export default TransportOrderPDF;