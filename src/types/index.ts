// Tipos para la navegación
export interface NavItem {
  id: string;
  label: string;
  href: string;
}

// Tipos para los proyectos/actividades
export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
}

// Tipos para la información de contacto
export interface ContactInfo {
  email: string;
  phone: string;
  address: string;
  socialMedia: {
    facebook?: string;
    instagram?: string;
    twitter?: string;
  };
}

// Tipos para la información bancaria
export interface BankInfo {
  bankName: string;
  accountType: string;
  accountNumber: string;
  cbu: string;
  alias: string;
  cuit: string;
  accountHolder: string;
}

// Tipos para el formulario de contacto
export interface ContactForm {
  name: string;
  email: string;
  message: string;
}

// Tipos para el estado del menú móvil
export interface MenuState {
  isOpen: boolean;
}

// Tipos para las props de los componentes
export interface SectionProps {
  id: string;
  className?: string;
  children: React.ReactNode;
}

export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'accent';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}
