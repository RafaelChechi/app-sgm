const nav = [
  {
    _name: "CSidebarNav",
    _children: [
      {
        _name: "CSidebarNavItem",
        name: "Dashboard",
        to: "/dashboard",
        icon: "cil-speedometer",
      },
      {
        _name: "CSidebarNavTitle",
        _children: ["Cadastro"],
      },
      {
        _name: "CSidebarNavItem",
        name: "Projetos",
        to: "/cadastro/projetos",
        icon: "cil-drop",
        requiresAuth: ["projetos"],
      },
      {
        _name: "CSidebarNavItem",
        name: "Funcionários",
        to: "/cadastro/funcionarios",
        icon: "cil-pencil",
        requiresAuth: ["funcionarios"],
      },
    ],
  },
];

export default nav;
