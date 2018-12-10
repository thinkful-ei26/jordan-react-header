import React from 'react';
// import './index.js';
import './navigation-bar.css';

// The NavigationBar component goes here.  It should be the default export.
 export default function NavigationBar() {
     const links = [
            {text: 'Courses', href: 'http://www.thinkful.com/courses/', id: 1}, 
            {text: 'Mentorship', href: 'http://www.thinkful.com/mentorship/', id: 2}
            ];

    const link = links.map(link => (
        <li key={link.id}><a href={link.href}>{link.text}</a></li>
    ))

     return(<ul> {link} </ul>);
 }