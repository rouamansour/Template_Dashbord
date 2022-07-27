// routes
import Router from './routes';
// theme
import ThemeProvider from './theme';
// components
import ScrollToTop from './components/ScrollToTop';
import { BaseOptionChartStyle } from './components/chart/BaseOptionChart';

// ----------------------------------------------------------------------

export default function App() {
  return (
    <ThemeProvider>
      <ScrollToTop />
      <BaseOptionChartStyle />
      <Router />
    </ThemeProvider>
  );
}
// import { BrowserRouter, Route, Routes} from 'react-router-dom';
// import Router from './routes';
// // theme
// import ThemeProvider from './theme';
// // components
// import ScrollToTop from './components/ScrollToTop';
// import { BaseOptionChartStyle } from './components/chart/BaseOptionChart';
// import Request from './pages/Request';
// import Demande from './pages/Demande';
// // ----------------------------------------------------------------------

// export default function App() {
//   return (
//     <ThemeProvider>
//       <ScrollToTop />
//       <BaseOptionChartStyle />
//       <Router />
//       <Route path="Demande" element={<Demande />} /> 
//       {/* <Route path="Request" element={<Request />} /> */}
//     </ThemeProvider>
//     // <BrowserRouter>
//     //   <div className='container' >

//     //     <h3 className="m-3 d-flex justify-content-center">App web AWM</h3>

//     //     <Navigation />
//     //     <Routes>
//     //       {/* <Route path="/" element={<Home />} /> */}
//     //       <Route path="Request" element={<Request />} />
//     //       {/* <Route path="TypeRequest" element={<TypeRequest />} /> */}
//     //     </Routes>

//     //   </div>
//     // </BrowserRouter>
//   );
// }
