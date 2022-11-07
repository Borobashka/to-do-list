import React from 'react';
import 'boxicons';

function Sidebar() {
  const [open, setOpen] = React.useState(false);

  const onClickListItem = () => {
    open ? setOpen(true) : setOpen(false);
  };

  return (
    <div className={`sidebar ${setOpen ? 'active' : ''} `}>
      <div className="logo_content">
        <div className="logo">
          <div className="logo_name">Category</div>
        </div>
        <i onClick={() => onClickListItem()} className="bx bx-menu" id="btn"></i>
      </div>
      <ul className="nav_list">
        <li>
          <a>
            <i className="bx bx-grid-alt"></i>
            <span className="links_name">Home</span>
          </a>
          <span className="tooltip">Home</span>
        </li>
        <li>
          <a>
            <i className="bx bx-user"></i>
            <span className="links_name">Family</span>
          </a>
          <span className="tooltip">Family</span>
        </li>
        <li>
          <a>
            <i className="bx bx-chat"></i>
            <span className="links_name">Work</span>
          </a>
          <span className="tooltip">Wrok</span>
        </li>
        <li>
          <a>
            <i className="bx bx-pie-chart-alt-2"></i>
            <span className="links_name">Diet</span>
          </a>
          <span className="tooltip">Diet</span>
        </li>

        
      </ul>
    </div>
  );
}

export default Sidebar;
