import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
import { Font } from '@react-pdf/renderer';

Font.register({
  family: 'Roboto',
  src: './src/assets/fonts/Roboto.ttf',
});

const styles = StyleSheet.create({
  page: { padding: 30, fontSize: 8, fontFamily: 'Roboto' },
  header: { textAlign: 'center', fontSize: 12, marginBottom: 10, fontWeight: 'bold' },
  section: { marginBottom: 20 },
  row: { flexDirection: 'row', justifyContent: 'space-between'},
  table: { borderWidth: 1, borderColor: '#000' },
  tableRow: { flexDirection: 'row', borderBottomWidth: 1, borderColor: '#000', textAlign: 'center' },
  tableRowHeader: { flexDirection: 'row', borderBottomWidth: 1, borderColor: '#000', textAlign: 'center', fontWeight: 'bold' },
  tableCol: { flex: 1, borderRightWidth: 1, borderColor: '#000', padding: 4 },
  tableColLast: { flex: 1, padding: 5, textAlign: 'center' },
});

const ProxyPDF = ({ data }) => {
    return (
        <Document>
            <Page size="A4" style={styles.page}>
                <View style={styles.table}>
                    <View style={styles.tableRowHeader}>
                        <Text style={styles.tableCol}>Номер доверенности</Text>
                        <Text style={styles.tableCol}>Дата выдачи</Text>
                        <Text style={styles.tableCol}>Срок действия</Text>
                        <Text style={[styles.tableCol, {flex: 3}]}>Лицо, которому выдана доверенность</Text>
                        <Text style={[styles.tableColLast, {fontSize: 6}]}>Расписка о получении доверенности</Text>
                    </View>
                    <View style={styles.tableRow}>
                        <Text style={styles.tableCol}>{data.proxyNumber}</Text>
                        <Text style={styles.tableCol}>{data.issueDate}</Text>
                        <Text style={styles.tableCol}>{data.expiryDate}</Text>
                        <Text style={[styles.tableCol, {flex: 3}]}>{data.driver?.fullName}</Text>
                        <Text style={[styles.tableColLast, {fontSize: 6}]}></Text>
                    </View>
                    <View style={styles.tableRow}>
                        <Text style={styles.tableCol}>Поставщик</Text>
                        <Text style={styles.tableCol}>Номер и дата наряда (замещающего наряддокумента) или извещения</Text>
                        <Text style={styles.tableColLast}>Номер и дата документа, подтверждающего выполнение поручения</Text>
                    </View>
                    <View style={styles.tableRow}>
                        <Text style={styles.tableCol}>{data.company?.name}</Text>
                        <Text style={styles.tableCol}>{data.orderNumber} от {data.orderDate}</Text>
                        <Text style={styles.tableColLast}>{data.confirmationDocumentNumber} от {data.confirmationDocumentDate}</Text>
                    </View>
                </View>
            </Page>
        </Document>
    );
};

export default ProxyPDF;