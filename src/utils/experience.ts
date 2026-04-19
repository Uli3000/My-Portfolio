export interface ExperienceEntry {
  title: string
  company: string
  description: string
  date: string
  current?: boolean
}

const experience: ExperienceEntry[] = [
  {
    title: "Desarrollador Web",
    company: "E-Sourcing",
    description: "Participo en el mantenimiento y evolución de una plataforma web orientada a empresas del sector construcción y licitaciones, que facilita la gestión de proyectos, subastas y contratos. Desarrollo nuevas funcionalidades y plantillas TPL integradas con PHP y Javascript, mejorando la validación y presentación de datos para los clientes. Colaboré en la migración del sistema de PHP 7 a PHP 8, garantizando compatibilidad y estabilidad del código base.",
    date: "Jun 2025 — Presente",
    current: true,
  },
  {
    title: "Practicante, Desarrollador de Software",
    company: "Reso Sistemas",
    description: "Desarrollé un sistema de pick up escolar compuesto por dos aplicaciones multiplataforma en .NET MAUI, una para que los padres notifiquen su llegada a la escuela, y otra para que los administradores monitoreen en tiempo real la recogida de estudiantes. Implementé un sistema de geocercas configurable que permite visualizar la proximidad de los padres y facilita identificar qué alumnos están próximos a ser recogidos. Construí una API backend con .NET y MySQL que incorpora autenticación, encriptación de contraseñas y validación en servidor.",
    date: "Sep 2024 — Dic 2024",
  },
]

export default experience