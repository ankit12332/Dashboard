import React, { useState } from 'react';
import './style.css';

const sidebarButtons = [  
  { id: '1', icon: 'fas fa-user-shield', module: 'Administration' },
  { id: '2', icon: 'fas fa-user-md', module: 'Doctor Desk' },
  { id: '3', icon: 'fas fa-users', module: 'Front Office' },
  { id: '4', icon: 'fas fa-building', module: 'Front Office Administration' },
  { id: '5', icon: 'fas fa-vial', module: 'Laboratory' },
  { id: '6', icon: 'fas fa-user-nurse', module: 'Nursing Desk' },
  { id: '7', icon: 'fas fa-pills', module: 'Pharmacy' },
  { id: '8', icon: 'fas fa-vial', module: 'Phlebotomy' },
  { id: '9', icon: 'fas fa-shield-alt', module: 'Security' },
  { id: '10', icon: 'fas fa-hands-helping', module: 'Services' },
  { id: '11', icon: 'fas fa-store', module: 'Store' }
];

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [moduleItems, setModuleItems] = useState(sidebarButtons);
  const [icon, setIcon] = useState('');
  const [module, setModule] = useState('');

  const toggleSidebar = () => {
    setSidebarOpen(prevState => !prevState);
  };
  
  const handleAddModule = (event) => {
    event.preventDefault();
    const newItem = { id: Date.now(), icon, module };
    const updatedItems = [...moduleItems, newItem];
    setModuleItems(updatedItems);
    setIcon('');
    setModule('');
  };

  return (
    <div className={`app ${sidebarOpen ? 'sidebar-open' : ''}`}>
      <div className="top-bar" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', padding: '10px 20px', position: 'fixed', top: '0', backgroundColor: '#333', color: '#fff', zIndex: '2', }} >
        <p style={{ margin: '5' }}> Siksha O Anusandhan University </p>
        <button className="sidebar-toggle" 
                style={{ marginRight: '30px', background: 'none', border: 'none', color: '#fff', fontSize: '1.2rem', cursor: 'pointer', }}
                onClick={toggleSidebar}
        >
          &#9776;
        </button>
      </div>

      <div
        className="sidebar"
        style={{
            height: 'calc(100vh - 75px)',
          width: '250px',
          backgroundColor: '#ddd',
          position: 'fixed',
          top: '75px',
          left: '0',
          zIndex: '1',
          transform: sidebarOpen ? 'translateX(0)' : 'translateX(-250px)',
          transition: 'transform 0.3s ease-in-out',
          overflowY: 'auto',
        //   overflow: 'hidden'
        }}
      >
        {moduleItems.map((button) => (
          <p key={button.id} className="btn" style={{margin:'10px 10px 10px 10px', width:'76%', fontWeight:'normal'}}><i className={button.icon}></i> {button.module}</p>
        ))}
      </div>

      <div
        className="main-container"
        style={{
          marginLeft: sidebarOpen ? '250px' : '0',
          transition: 'margin 0.3s ease-in-out',
        }}
      >
        <div
          className="main"
          style={{
            padding: '20px',
            marginTop: '90px',
            marginLeft: '20px',
            marginRight: '20px',
            backgroundColor: '#f5f5f5',
          }}
        >
          <p>
            Main ContentMain ContentMain ContentMain ContentMain ContentMain
            ContentMain ContentMain ContentMain ContentMain ContentMain
            ContentMain ContentMain ContentMain ContentMain ContentMain ContentMain ContentMain
            ContentMain ContentMain ContentMain ContentMain ContentMain ContentMain
            ContentMain ContentMain ContentMain ContentMain ContentMain ContentMain
            ContentMain ContentMain
          </p>
          <form onSubmit={handleAddModule}>
            <label htmlFor="icon">Icon:</label>
            <input type="text" id="icon" value={icon} onChange={(event) => setIcon(event.target.value)} />
            <label htmlFor="module">Module:</label>
            <input type="text" id="module" value={module} onChange={(event) => setModule(event.target.value)} />
            <button type="submit">Add Module</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
