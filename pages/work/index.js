import React from 'react';

import './work.css';
import Nav from '../../components/nav';

export default function Work() {
  return (
    <div>
      <Nav />
      <div className="container">
        <header>
          <img className="Work-HeaderImage" src="/work/work.jpg" />
        </header>

        <div className="ProjectPills">
          <div className="ProjectPills-Item ProjectPills-Item_active">All</div>
          <div className="ProjectPills-Item">Robotics</div>
          <div className="ProjectPills-Item">Development</div>
          <div className="ProjectPills-Item">Farming</div>
        </div>

        <div className="ProjectGrid">
          <div>
            <img className="ProjectGrid-ItemImage" src="/work/project-1.jpg" />
            <div className="ProjectGrid-ItemTitle">Harvey.one</div>
            <div className="ProjectGrid-ItemSubtitle">Robotics</div>
          </div>
          <div>
            <img className="ProjectGrid-ItemImage" src="/work/project-2.jpg" />
            <div className="ProjectGrid-ItemTitle">CNHI Konfigurator</div>
            <div className="ProjectGrid-ItemSubtitle">Development</div>
          </div>
          <div>
            <img className="ProjectGrid-ItemImage" src="/work/project-3.jpg" />
            <div className="ProjectGrid-ItemTitle">Indoor Farming</div>
            <div className="ProjectGrid-ItemSubtitle">Farming</div>
          </div>

          <div>
            <img className="ProjectGrid-ItemImage" src="/work/project-1.jpg" />
            <div className="ProjectGrid-ItemTitle">Harvey.one</div>
            <div className="ProjectGrid-ItemSubtitle">Robotics</div>
          </div>
          <div>
            <img className="ProjectGrid-ItemImage" src="/work/project-2.jpg" />
            <div className="ProjectGrid-ItemTitle">CNHI Konfigurator</div>
            <div className="ProjectGrid-ItemSubtitle">Development</div>
          </div>
          <div>
            <img className="ProjectGrid-ItemImage" src="/work/project-3.jpg" />
            <div className="ProjectGrid-ItemTitle">Indoor Farming</div>
            <div className="ProjectGrid-ItemSubtitle">Farming</div>
          </div>
        </div>


        <br />
        <br />


      </div>
    </div>
  );
}
