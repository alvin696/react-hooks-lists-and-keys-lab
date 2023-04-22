import React from 'react';

function NavBar() {
  const links = [
    { id: 'home', text: 'home' },
    { id: 'about', text: 'about' },
    { id: 'projects', text: 'projects' },
  ];

  return (
    <nav>
      {links.map((link) => (
        <a key={link.id} href={`#${link.id}`}>
          {link.text}
        </a>
      ))}
    </nav>
  );
}

export default NavBar;
