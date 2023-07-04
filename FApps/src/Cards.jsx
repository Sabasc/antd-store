import { DollarCircleOutlined, ShoppingCartOutlined, ShoppingOutlined, UserOutlined } from '@ant-design/icons'
import { Typography, Space, Card, Statistic, Table } from 'antd'

const Dashboard = () => {
  return (
    <div className='maindiv' style={{ border: '1px solid black', padding: '20px', borderRadius: '10px', margin:100 }}>
      <Space className='sp1' size={20} direction='vertical' style={{margin:50}}>
        <Typography.Title level={3} style={{ backgroundColor: 'grey', height: 50}}>

          Dashboard
        </Typography.Title>
        <Space style={{textAlign:'center'}}>
          <DashboardCard 
            icon={
              <ShoppingCartOutlined
                style={{
                  color: 'green',
                  backgroundColor: 'rgba(0,255,0,0.25)',
                  borderRadius: 20,
                  fontSize: 24,
                  padding: 8,
                  margin:10,
                }}
              />
            }
            title={'7'}
            value={'DashBoards'}
          />
          <DashboardCard
            icon={
              <ShoppingOutlined
                style={{
                  color: 'blue',
                  backgroundColor: 'rgba(0,0,255,0.25)',
                  borderRadius: 20,
                  fontSize: 24,
                  padding: 8,
                  margin:10,
                }}
              />
            }
            title={'4'}
            value={'Analytics Dashboard'}
          />
          <DashboardCard
            icon={
              <UserOutlined
                style={{
                  color: 'purple',
                  backgroundColor: 'rgba(0,255,255,0.25)',
                  borderRadius: 20,
                  fontSize: 24,
                  padding: 8,
                  margin:10,
                }}
              />
            }
            title={'3'}
            value={'System Admin'}
          />
          <DashboardCard
            icon={
              <DollarCircleOutlined
                style={{
                  color: 'red',
                  backgroundColor: 'rgba(255,0,0,0.25)',
                  borderRadius: 20,
                  fontSize: 24,
                  padding: 8,
                  margin:10,
                }}
              />
            }
            title={'6'}
            value={'Account Definition'}
          />

          <DashboardCard
            icon={
              <ShoppingCartOutlined
                style={{
                  color: 'green',
                  backgroundColor: 'rgba(0,255,0,0.25)',
                  borderRadius: 20,
                  fontSize: 24,
                  padding: 8,
                  margin:10,
                }}
              />
            }
            title={'11'}
            value={'Accounts Transaction'}
          />

<DashboardCard
            icon={
              <ShoppingCartOutlined
                style={{
                  color: 'green',
                  backgroundColor: 'rgba(0,255,0,0.25)',
                  borderRadius: 20,
                  fontSize: 24,
                  padding: 8,
                  margin:10,
                }}
              />
            }
            title={18}
            value={'Account Reports'}
          />

<DashboardCard
            icon={
              <ShoppingCartOutlined
                style={{
                  color: 'green',
                  backgroundColor: 'rgba(0,255,0,0.25)',
                  borderRadius: 20,
                  fontSize: 24,
                  padding: 8,
                  margin:10,
                }}
              />
            }
            title={'6'}
            value={'Inventory Defination'}
          />

          
      
          {/* Repeat the above DashboardCard component for additional revenue cards */}
        </Space>



        <Space>
          <DashboardCard
            icon={
              <ShoppingCartOutlined
                style={{
                  color: 'green',
                  backgroundColor: 'rgba(0,255,0,0.25)',
                  borderRadius: 20,
                  fontSize: 24,
                  padding: 8,
                  margin:10,
                }}
              />
            }
            title={'1'}
            value={'Inventory Management'}
          />
          <DashboardCard
            icon={
              <ShoppingOutlined
                style={{
                  color: 'blue',
                  backgroundColor: 'rgba(0,0,255,0.25)',
                  borderRadius: 20,
                  fontSize: 24,
                  padding: 8,
                  margin:10,
                }}
              />
            }
            title={'8'}
            value={'Supplier Puchases'}
          />
          <DashboardCard
            icon={
              <UserOutlined
                style={{
                  color: 'purple',
                  backgroundColor: 'rgba(0,255,255,0.25)',
                  borderRadius: 20,
                  fontSize: 24,
                  padding: 8,
                  margin:10,
                }}
              />
            }
            title={'6'}
            value={'Customer Sales'}
          />
          <DashboardCard
            icon={
              <DollarCircleOutlined
                style={{
                  color: 'red',
                  backgroundColor: 'rgba(255,0,0,0.25)',
                  borderRadius: 20,
                  fontSize: 24,
                  padding: 8,
                  margin:10,
                }}
              />
            }
            title={'2'}
            value={'Commission Agent Services'}
          />

          <DashboardCard
            icon={
              <ShoppingCartOutlined
                style={{
                  color: 'green',
                  backgroundColor: 'rgba(0,255,0,0.25)',
                  borderRadius: 20,
                  fontSize: 24,
                  padding: 8,
                  margin:10,
                }}
              />
            }
            title={'12'}
            value={'Inventory Reports'}
          />

<DashboardCard
            icon={
              <ShoppingCartOutlined
                style={{
                  color: 'green',
                  backgroundColor: 'rgba(0,255,0,0.25)',
                  borderRadius: 20,
                  fontSize: 24,
                  padding: 8,
                  margin:10,
                }}
              />
            }
            title={'13'}
            value={'Store Management'}
          />

<DashboardCard
            icon={
              <ShoppingCartOutlined
                style={{
                  color: 'green',
                  backgroundColor: 'rgba(0,255,0,0.25)',
                  borderRadius: 20,
                  fontSize: 24,
                  padding: 8,
                  margin:10,
                }}
              />
            }
            title={'7'}
            value={'Lab'}
          />

          
      
          {/* Repeat the above DashboardCard component for additional revenue cards */}
        </Space>



        <Space style={{height:100}}>
        <DashboardCard 
            icon={
              <ShoppingCartOutlined
                style={{
                  color: 'green',
                  backgroundColor: 'rgba(0,255,0,0.25)',
                  borderRadius: 20,
                  fontSize: 24,
                  padding: 8,
                  margin:10,
                }}
              />
            }
            title={'1'}
            value={'Lab Report'}
          />
          <DashboardCard
            icon={
              <ShoppingOutlined
                style={{
                  color: 'blue',
                  backgroundColor: 'rgba(0,0,255,0.25)',
                  borderRadius: 20,
                  fontSize: 24,
                  padding: 8,
                  margin:10,
                }}
              />
            }
            title={'3'}
            value={'Fixed Assets'}
          />
          <DashboardCard
            icon={
              <UserOutlined
                style={{
                  color: 'purple',
                  backgroundColor: 'rgba(0,255,255,0.25)',
                  borderRadius: 20,
                  fontSize: 24,
                  padding: 8,
                  margin:10,
                }}
              />
            }
            title={'10'}
            value={'Export'}
          />
          <DashboardCard
            icon={
              <DollarCircleOutlined
                style={{
                  color: 'red',
                  backgroundColor: 'rgba(255,0,0,0.25)',
                  borderRadius: 20,
                  fontSize: 24,
                  padding: 8,
                  margin:10,
                }}
              />
            }
            title={'13'}
            value={'Export Reports'}
          />

          <DashboardCard
            icon={
              <ShoppingCartOutlined
                style={{
                  color: 'green',
                  backgroundColor: 'rgba(0,255,0,0.25)',
                  borderRadius: 20,
                  fontSize: 24,
                  padding: 8,
                  margin:10,
                }}
              />
            }
            title={'1'}
            value={'Production  '}
          />

<DashboardCard
            icon={
              <ShoppingCartOutlined
                style={{
                  color: 'green',
                  backgroundColor: 'rgba(0,255,0,0.25)',
                  borderRadius: 20,
                  fontSize: 24,
                  padding: 8,
                  margin:10,
                }}
              />
            }
            title={'3'}
            value={'Stock Reports'}
          />
        </Space>
        <br /><br />
        <Space>{/* Add any additional components or elements within this Space */}</Space>
      </Space>
    </div>
  )
}

const DashboardCard = ({ title, value, icon }) => {
  return (
    <Card>
      <Space direction='horizontal'>
        {icon}
        <Statistic title={title} value={value} />
      </Space>
    </Card>
  )
}

export default Dashboard


