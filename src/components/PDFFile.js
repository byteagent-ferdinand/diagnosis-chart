import React from 'react';
import { Page, Text, Image, Document, StyleSheet } from '@react-pdf/renderer';
import chartImage from '../test-chart.png';

const styles = StyleSheet.create({
    body: {
        paddingTop: 35,
        paddingBottom: 65,
        paddingHorizontal: 35
    },
    title: {
        fontSize: 24,
        textAlign: "center"
    },
    text: {
        margin: 12,
        fontSize: 14,
        textAlign: "justify",
        fontFamily: "Times-Roman"
    },
    image: {
        image: {
            marginVertical: 15,
            marginHorizontal: 100,
            objectFit: "cover"
        },
    },
    header: {
        fontSize: 12,
        marginBottom: 20,
        textAlign: "center",
        color: "grey"
    },
    pageNumber: {
        position: "absolute",
        top: 12,
        right: 30,
        fontSize: 12,
        position: 0,
        color: "grey",
    }
});

const PDFFile = () => {
    return (
        <Document>
            <Page style={styles.body}>
                <Text style={styles.header} fixed>jooooooooooo</Text>
                <Image style={styles.image}></Image>
                <Text style={styles.text}>
                    jooooooo
                </Text>
                <Text
                    style={styles.pageNumber}
                    render={({pageNumber, totalPages}) => `${pageNumber} / ${totalPages}`}
                    fixed>
                </Text>

            </Page>
        </Document>
    )
}

export default PDFFile;