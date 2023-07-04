// 

// import { Card,Col, Row } from 'antd';
// const gridStyle = {
//   width: '25%',
//   textAlign: 'center',
// };
// const App = () => (
// <div style={{height:'70vh',marginLeft:'20%', marginRight:'auto',border:'1px solid green'}}>
// <Card title="Card Title">
// <Row gutter={16}>
//     <Col span={8}>
//       <Card title="Card title" bordered={false}>
//         Card content
//       </Card>
//     </Col>
//     <Col span={8}>
//       <Card title="Card title" bordered={false}>
//         Card content
//       </Card>
//     </Col>
//     <Col span={8}>
//       <Card title="Card title" bordered={false}>
//         Card content
//       </Card>
//     </Col>
//   </Row>
//   </Card>
// </div>
// );
// export default App;






// import React from 'react';

// import { DollarCircleOutlined, ShoppingCartOutlined, ShoppingOutlined, UserOutlined } from '@ant-design/icons'
// import { Typography, Space, Card, Statistic, Table, Row, Col } from 'antd'

// const MainCard = ({ navText, navColor }) => (
//   <Card style={{ backgroundColor: navColor, color: '#fff' }}>
//     <h2>{navText}</h2>
//     <Row gutter={[30, 30]}>
//       {[...Array(19)].map((_, index) => (
//         <Col span={3} key={index}>
//           <Card    icon={
//               <ShoppingCartOutlined
//                 style={{
//                   color: 'green',
//                   backgroundColor: 'rgba(0,255,0,0.25)',
//                   borderRadius: 20,
//                   fontSize: 24,
//                   padding: 8,
            
//                 }}
//               />
//             }
            
//             >
//           </Card>
//         </Col>
//       ))}
//     </Row>
//   </Card>
// );

// const App = () => {
//   return (
//     <div style={{ padding: '20px' }}>
//       <MainCard navText="App MODULES" navColor="#1890ff" />
//     </div>
//   );
// };

// export default App;

import './App.css';
import Dashboard from './Cards';




function App() {


  return(
    <div>
      <Dashboard/>
    </div>
  )}
      

export default App



// create react js code using antd (in the code create a 19 cards in a box each card has a nav color and text and then icon blow and text so outer box have position center and also have navbar which has text and search box)

// create react js code using antd and create a main card with nav text and color and inside the card create 19 cards please with nav color