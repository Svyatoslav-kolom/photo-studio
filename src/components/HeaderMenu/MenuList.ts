interface MenuItem {
  name: string;
  link: string;
}

export const menuList: MenuItem[] = [
  { name: 'О НАС', link: '/about' },
  { name: 'УСЛУГИ', link: '/services' },
  { name: 'ПОРТФОЛИО', link: '/portfolio' },
  { name: 'ЦЕНЫ', link: '/price' },
  { name: 'СЕРТИФИКАТ', link: '/sertificat' },
  { name: 'КОНТАКТЫ', link: '/contact' }
];