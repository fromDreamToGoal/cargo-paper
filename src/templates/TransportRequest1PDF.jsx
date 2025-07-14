

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
    row: { flexDirection: 'row', marginBottom: 30 },
    label: { width: '40%', fontWeight: 'bold' },
    value: { width: '60%' },
    footer: { marginTop: 20 },
    table: { borderWidth: 1, borderColor: '#000', marginBottom: 20 },
    tableRow: { flexDirection: 'row', borderBottomWidth: 1, borderColor: '#000', textAlign: 'center' },
    tableCol: { flex: 1, borderRightWidth: 1, borderColor: '#000', padding: 4 },
    tableColLast: { flex: 1, borderColor: '#000', padding: 4 },
});

const TransportRequest1PDF = ({ data }) => (
    <Document>
        <Page size="A4" style={styles.page}>
            <Text style={styles.title}>ЗАЯВКА-ЗАКАЗ № {data.appNumber || '___'} от {formatDateReadable(data.appDate) || '___'}</Text>

            <View style={styles.table}>
                <View style={styles.tableRow}>
                    <Text style={styles.tableCol}>Маршрут</Text>
                    <Text style={styles.tableColLast}>{data.route || '___'}</Text>
                </View>

                <View style={styles.tableRow}>
                    <Text style={styles.tableCol}>Дата, адрес загрузки и название предприятия</Text>
                    <Text style={styles.tableColLast}>{formatDateReadable(data.loadDate)} {data.loadAddress} {data.loadCompany || ''}</Text>
                </View>

                <View style={styles.tableRow}>
                    <Text style={styles.tableCol}>Характер груза, описание, вес, объем (тн.)</Text>
                    <Text style={styles.tableColLast}>{data.cargoDescription || '___'}</Text>
                </View>

                <View style={styles.tableRow}>
                    <Text style={styles.tableCol}>Загрузка</Text>
                    <Text style={styles.tableColLast}>{data.loadingType || '___'}</Text>
                </View>

                <View style={styles.tableRow}>
                    <Text style={styles.tableCol}>Контактное лицо загрузки, телефон</Text>
                    <Text style={styles.tableColLast}>{data.loadContact || '___'}</Text>
                </View>

                <View style={styles.tableRow}>
                    <Text style={styles.tableCol}>Дата и время выгрузки</Text>
                    <Text style={styles.tableColLast}>{formatDateReadable(data.unloadDate) || '___'}</Text>
                </View>

                <View style={styles.tableRow}>
                    <Text style={styles.tableCol}>Адрес выгрузки и название предприятия</Text>
                    <Text style={styles.tableColLast}>{data.unloadAddress || '___'}</Text>
                </View>

                <View style={styles.tableRow}>
                    <Text style={styles.tableCol}>Контактное лицо при выгрузке, телефон</Text>
                    <Text style={styles.tableColLast}>{data.unloadContact || '___'}</Text>
                </View>

                <View style={styles.tableRow}>
                    <Text style={styles.tableCol}>Дополнительные условия</Text>
                    <Text style={styles.tableColLast}>{data.additionalTerms || '___'}</Text>
                </View>

                <View style={styles.tableRow}>
                    <Text style={styles.tableCol}>Стоимость перевозки, руб.</Text>
                    <Text style={styles.tableColLast}>{data.price || '___'}</Text>
                </View>

                <View style={styles.tableRow}>
                    <Text style={styles.tableCol}>Нормативный простой</Text>
                    <Text style={styles.tableColLast}>{data.waitingNorm || '___'}</Text>
                </View>

            </View>

            <View style={[styles.row, {justifyContent: 'center'}]}>
                <Text style={[styles.label, {textAlign: 'center'}]}>Перевозчик</Text>
            </View>


            <View style={styles.table}>
                <View style={styles.tableRow}>
                    <Text style={styles.tableCol}>Наименование предприятия</Text>
                    <Text style={styles.tableColLast}>ИП {formatToInitials(data.driver?.fullName) || '___'}</Text>
                </View>

                <View style={styles.tableRow}>
                    <Text style={styles.tableCol}>Марка авто</Text>
                    <Text style={styles.tableColLast}>{data.driver?.car || '___'}</Text>
                </View>

                <View style={styles.tableRow}>
                    <Text style={styles.tableCol}>№ авто</Text>
                    <Text style={styles.tableColLast}>{data.driver?.carNumber || '___'}</Text>
                </View>

                <View style={styles.tableRow}>
                    <Text style={styles.tableCol}>№ П/Н</Text>
                    <Text style={styles.tableColLast}>{data.driver?.trailerNumber || '___'}</Text>
                </View>

                <View style={styles.tableRow}>
                    <Text style={styles.tableCol}>Паспортные данные водителя</Text>
                    <Text style={styles.tableColLast}>Пасспорт {data.driver?.passport || '___'} выдан {data.driver?.passportIssued || '____'} {data.driver?.registrationAddress || '____'}</Text>
                </View>

                <View style={styles.tableRow}>
                    <Text style={styles.tableCol}>ФИО</Text>
                    <Text style={styles.tableColLast}>{data.driver?.fullName || '___'}</Text>
                </View>

                <View style={styles.tableRow}>
                    <Text style={styles.tableCol}>Тел. водителя</Text>
                    <Text style={styles.tableColLast}>{data.driver?.phone || '___'}</Text>
                </View>
            </View>

            <View style={[styles.section, {flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20}]}>
                <Text style={[{width:'50%'}]}>ИСПОЛНИТЕЛЬ</Text>
                <Text style={[{width:'50%'}]}>ЗАКАЗЧИК</Text>
            </View>

            <View style={[styles.section, {flexDirection: 'row', justifyContent: 'space-between'}]}>
                <Text style={[{width:'50%'}]}>{formatToInitials(data.driver?.fullName) || '____'}___________</Text>
                <Text style={[{width:'50%'}]}>{formatToInitials(data.client?.director) || '___'} ___________</Text>
            </View>

        </Page>
    </Document>
);

export default TransportRequest1PDF;