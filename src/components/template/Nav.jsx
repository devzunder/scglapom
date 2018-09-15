import './Nav.css'
import React from 'react'
import { Link } from 'react-router-dom'

export default props =>
    <aside className="menu-area">
        <nav className="menu">
            {/* Refatorar em casa! */}
            <Link to="/">
                <i className="fa fa-home"></i> Início
            </Link>
            <Link to="/dashboard">
                <i className="fa fa-area-chart"></i> Dashboard
            </Link>
            <Link to="/inserir">
                <i className="fa fa-thermometer"></i> Inserir Medições
            </Link>
            <Link to="/dimensionamento">
                <i className="fa fa-calculator"></i> Dimensionar
            </Link>
        </nav>
    </aside>