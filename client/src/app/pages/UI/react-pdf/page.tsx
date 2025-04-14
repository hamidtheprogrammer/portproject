// "use client";

// import React, { Suspense } from "react";
// import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";
// import dynamic from "next/dynamic";

// // Dynamically import PDFDownloadLink with SSR disabled
// const PDFDownloadLink = dynamic(
//   () => import("@react-pdf/renderer").then((mod) => mod.PDFDownloadLink),
//   { ssr: false }
// );

// // Define styles
// const styles = StyleSheet.create({
//   page: { padding: 30 },
//   section: { marginBottom: 10 },
//   title: { fontSize: 20, fontWeight: "bold" },
//   text: { fontSize: 12 },
// });

// // Create PDF document
// const MyDocument = () => (
//   <Document>
//     <Page size="A4" style={styles.page}>
//       <View style={styles.section}>
//         <Text style={styles.title}>Hello, React PDF!</Text>
//       </View>
//       <View style={styles.section}>
//         <Text style={styles.text}>This is a dynamically generated PDF.</Text>
//       </View>
//     </Page>
//   </Document>
// );

// const App = () => {
//   return (
//     <div className="p-5">
//       <h1 className="font-bold text-3xl mb-3">Hello, React PDF!</h1>
//       <p>This is a dynamically generated PDF.</p>

//       <Suspense fallback={<div>Loading PDF component...</div>}>
//         <PDFDownloadLink document={<MyDocument />} fileName="example.pdf">
//           {({ loading }) =>
//             loading ? (
//               "Loading document..."
//             ) : (
//               <button className="h-8 px-4 bg-blueish rounded-md text-xs text-white mt-5">
//                 Download PDF
//               </button>
//             )
//           }
//         </PDFDownloadLink>
//       </Suspense>
//     </div>
//   );
// };

// export default App;

import React from "react";

const page = () => {
  return <div>This page is still in development....</div>;
};

export default page;
