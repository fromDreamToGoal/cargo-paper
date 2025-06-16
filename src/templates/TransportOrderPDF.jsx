import React from 'react';
import { Document, Page, Text, View, StyleSheet, Font } from '@react-pdf/renderer';

Font.register({
    family: 'Roboto',
    src: './src/assets/fonts/Roboto.ttf',
});

// Шрифты и стили
const styles = StyleSheet.create({
    page: { padding: 40, fontSize: 8, fontFamily: 'Roboto' },
    section: { marginBottom: 10 },
    row: { flexDirection: 'row', marginBottom: 4 },
    label: { width: '40%', fontWeight: 'bold' },
    value: { width: '60%' },
    header: { fontSize: 12, marginBottom: 10, textAlign: 'center', fontWeight: 'bold' },
    title: { textAlign: 'center', fontSize: 14, marginBottom: 10, fontWeight: 'bold' },
    data: { fontSize: 8, marginBottom: 5, textAlign: 'right' },
    table: { borderWidth: 1, borderColor: '#000' },
    tableRow: { flexDirection: 'row', borderBottomWidth: 1, borderColor: '#000', textAlign: 'center' },
    tableCol: { flex: 1, borderRightWidth: 1, borderColor: '#000', padding: 4 },
    tableColLast: { flex: 1, borderColor: '#000', padding: 4 },
    conditionsOfTransportation: { borderColor: '#000', margin: 5, fontSize: 8, textAlign: 'justify' },
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
                <View style={styles.tableRow}>
                    <Text style={styles.tableCol}>ФИО Водителя:</Text>
                    <Text style={[styles.tableColLast, {flex: 2}]}>{data.driver?.fullName || '-'}</Text> 
                </View>
                <View style={styles.tableRow}>
                    <Text style={styles.tableCol}>Пасспортные данные водителя:</Text>
                    <Text style={[styles.tableColLast, {flex: 2}]}>{'Пасспорт ' + data.driver?.passport + ' выдан ' + data.driver?.passportDate + ' ' + data.driver?.passportIssued || '-'}</Text>
                </View>
                <View style={styles.tableRow}>
                    <Text style={styles.tableCol}>Марка/гос.номер тягача/полуприцепа:</Text>
                    <Text style={[styles.tableColLast, {flex: 2}]}>{data.driver?.car + ' ' + data.driver?.carNumber + ' прицеп ' + data.driver?.trailerNumber || '-'}</Text> 
                </View>
                <View style={styles.tableRow}>
                    <Text style={styles.conditionsOfTransportation}>Условия перевозки:
                        {'\n'}- Исполнитель принимает на сеюбя полную материальную ответственность за сохранность всего количества перевозимиго груза от поста загрузки до пункта разгрузки.
                        {'\n'}- В случае задержки в предоставлении транспортного средства под погрузку в указанный в заявке срок возместить заказчику все документально подтвержденные убытки, вызванные нарушением перевозчиком своих обязательств по настоящей заявке, а также обязуется выплатить заказчику штраф в размере 10% от стоимости перевозки.
                        {'\n'}- Отказ от загрузки менее чем за 24 часа оплачивается в размере 10% от стоимости перевозки.
                        {'\n'}- За простой автомобиля под погрузкой/разгрузкойпо вине Заказчика, последний обязуется уплатить Исполнителю неустойку(штраф) в размере 1000(одна тысяча) рублей за каждые полные сутки простоя, наступающие с 0-00 часов после согласования даты разгрузки.
                        {'\n'}- Грузоотправитель обязан передать водителю надлежащие оформленные документы для перевозки груза.
                        {'\n'}- Подписанные оригиналы документов(Договор-Заявку, ТТН, Акт сверки выполненых работ, Счет на оплату) Исполнитель обязуется отправить на почтовый адрес заказчика не позднее 3(трех) дней после даты разгрузки.
                        {'\n'}Данная заявка подтверждает факт заключения договора перевозки груза.
                        {'\n'}С условиями договора перевозки ознакомлен (а) и согласен (а).
                        {'\n'}С тарифами и условиями на доставку грузов ознакомлен (а) и согласен (а).
                    </Text>
                </View>

            </View>

            <Text style={{ marginTop: 20 }}>Подпись клиента: ______________________</Text>
            <Text style={{ marginTop: 8 }}>Подпись исполнителя: __________________</Text>
        </Page>
    </Document>
);

export default TransportOrderPDF;