"use client"

import { useState } from "react"
import {
  Building2,
  Users,
  FileText,
  CreditCard,
  BarChart3,
  Settings,
  Search,
  Plus,
  Bell,
  ChevronDown,
  TrendingUp,
  Package,
  Calendar,
  Filter,
  Download,
  Eye,
  Edit,
  MoreHorizontal,
  ArrowUpRight,
  Activity,
  DollarSign,
  ShoppingCart,
  Briefcase,
  Truck,
  Warehouse,
  AlertTriangle,
  MessageSquare,
  Users2,
  Target,
  Zap,
  Globe,
  Factory,
  Leaf,
  Fish,
  Pickaxe,
  Shirt,
  Home,
  GraduationCap,
  Heart,
  Plane,
  Calculator,
  Microscope,
  Monitor,
  HelpCircle,
  Shield,
  BookOpen,
  Store,
  Network,
  CheckCircle,
  Clock,
  AlertCircle,
  MessageCircle,
  BarChart2,
  MapPin,
  Route,
  PackageCheck,
  Boxes,
  FolderOpen,
} from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"

export default function CimalDashboard() {
  const [activeModule, setActiveModule] = useState("dashboard")

  const modules = [
    { id: "dashboard", name: "Dashboard", icon: BarChart3 },
    { id: "logistics", name: "Logística", icon: Truck },
    { id: "inventory", name: "Inventario", icon: Warehouse },
    { id: "products", name: "Productos", icon: Package },
    { id: "suppliers", name: "Proveedores", icon: Users },
    { id: "services", name: "Servicios", icon: Briefcase },
    { id: "purchases", name: "Compras", icon: ShoppingCart },
    { id: "projects", name: "Proyectos", icon: FolderOpen },
    { id: "contracts", name: "Contratos", icon: FileText },
    { id: "payments", name: "Pagos", icon: CreditCard },
    { id: "communication", name: "Comunicación", icon: MessageSquare },
    { id: "areas", name: "Áreas Internas", icon: Users2 },
    { id: "monitoring", name: "Monitoreo", icon: Activity },
    { id: "reports", name: "Reportes", icon: BarChart2 },
    { id: "support", name: "Soporte", icon: HelpCircle },
  ]

  const stats = [
    { title: "Ingresos Totales", value: "S/ 2,847,392", change: "+12.5%", icon: DollarSign, color: "text-emerald-600" },
    { title: "Servicios Activos", value: "89", change: "+15", icon: Briefcase, color: "text-blue-600" },
    { title: "Proveedores", value: "156", change: "+8", icon: Users, color: "text-purple-600" },
    { title: "Alertas de Stock", value: "12", change: "-3", icon: AlertTriangle, color: "text-orange-600" },
  ]

  const logisticsServices = [
    { name: "Gestión y Coordinación de Carga-Descarga", icon: Truck, status: "Activo", orders: 45 },
    { name: "Recojo a Domicilio - Paquetería", icon: MapPin, status: "Activo", orders: 128 },
    { name: "Servicio de Empaquetamiento", icon: Package, status: "Activo", orders: 67 },
    { name: "Almacenaje", icon: Warehouse, status: "Activo", orders: 234 },
    { name: "Gestión de Compras y Envíos", icon: ShoppingCart, status: "Activo", orders: 89 },
    { name: "Distribución de Mercadería", icon: Route, status: "Activo", orders: 156 },
    { name: "Sub Contrata de Servicios", icon: Network, status: "Activo", orders: 23 },
  ]

  const sectors = {
    primary: [
      { name: "Agricultura", icon: Leaf, clients: 45, revenue: "S/ 450,000" },
      { name: "Ganadería", icon: Users, clients: 23, revenue: "S/ 320,000" },
      { name: "Pesca", icon: Fish, clients: 12, revenue: "S/ 180,000" },
      { name: "Minería", icon: Pickaxe, clients: 8, revenue: "S/ 890,000" },
      { name: "Areneras", icon: Factory, clients: 15, revenue: "S/ 210,000" },
    ],
    secondary: [
      { name: "Industria Textil", icon: Shirt, clients: 34, revenue: "S/ 560,000" },
      { name: "Construcción", icon: Home, clients: 67, revenue: "S/ 1,200,000" },
      { name: "Producción Energética", icon: Zap, clients: 12, revenue: "S/ 780,000" },
      { name: "Industria Manufacturera", icon: Factory, clients: 89, revenue: "S/ 950,000" },
    ],
    tertiary: [
      { name: "Comercio", icon: Store, clients: 156, revenue: "S/ 670,000" },
      { name: "Transporte", icon: Truck, clients: 78, revenue: "S/ 540,000" },
      { name: "Educación", icon: GraduationCap, clients: 45, revenue: "S/ 320,000" },
      { name: "Salud", icon: Heart, clients: 23, revenue: "S/ 450,000" },
      { name: "Turismo", icon: Plane, clients: 34, revenue: "S/ 280,000" },
      { name: "Finanzas", icon: Calculator, clients: 12, revenue: "S/ 890,000" },
    ],
    quaternary: [
      { name: "Investigación Científica", icon: Microscope, clients: 8, revenue: "S/ 340,000" },
      { name: "Tecnologías de la Información", icon: Monitor, clients: 45, revenue: "S/ 780,000" },
      { name: "Consultoría", icon: HelpCircle, clients: 67, revenue: "S/ 560,000" },
      { name: "Industria Aeroespacial", icon: Plane, clients: 3, revenue: "S/ 1,200,000" },
    ],
    quinary: [
      { name: "Servicios Públicos", icon: Shield, clients: 23, revenue: "S/ 450,000" },
      { name: "Organizaciones sin Fines de Lucro", icon: Heart, clients: 34, revenue: "S/ 120,000" },
      { name: "Educación Gratuita", icon: BookOpen, clients: 56, revenue: "S/ 200,000" },
    ],
  }

  const internalAreas = [
    {
      name: "CEO",
      description: "Define estrategias, toma decisiones y supervisa el funcionamiento general",
      icon: Target,
      staff: 1,
    },
    {
      name: "Recursos Humanos",
      description: "Gestiona la contratación, capacitación y bienestar del personal",
      icon: Users,
      staff: 8,
    },
    {
      name: "Operaciones",
      description: "Coordina procesos internos para optimizar la eficiencia",
      icon: Activity,
      staff: 25,
    },
    {
      name: "Finanzas y Contabilidad",
      description: "Administra el presupuesto, ingresos, gastos y reportes financieros",
      icon: Calculator,
      staff: 12,
    },
    {
      name: "Tecnología",
      description: "Implementa herramientas digitales y mejora procesos",
      icon: Monitor,
      staff: 15,
    },
    {
      name: "Área Legal",
      description: "Garantizar el cumplimiento de las normativas y proteger los intereses",
      icon: Shield,
      staff: 6,
    },
  ]

  const inventoryAlerts = [
    { product: "Cascos de Seguridad", currentStock: 15, minStock: 50, status: "critical", sector: "Construcción" },
    { product: "Guantes Industriales", currentStock: 25, minStock: 100, status: "warning", sector: "Manufactura" },
    { product: "Equipos de Soldadura", currentStock: 3, minStock: 10, status: "critical", sector: "Construcción" },
    { product: "Herramientas Eléctricas", currentStock: 8, minStock: 20, status: "warning", sector: "Mantenimiento" },
  ]

  const recentActivities = [
    { type: "logistics", message: "Nueva orden de carga-descarga procesada", time: "Hace 5 min", icon: Truck },
    {
      type: "inventory",
      message: "Alerta: Stock bajo en Cascos de Seguridad",
      time: "Hace 15 min",
      icon: AlertTriangle,
    },
    { type: "payment", message: "Pago de S/ 45,000 procesado exitosamente", time: "Hace 30 min", icon: CheckCircle },
    { type: "communication", message: "Nueva propuesta de mejora recibida", time: "Hace 1 hora", icon: MessageCircle },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/20">
      {/* Header */}
      <header className="border-b border-slate-200/60 bg-white/80 backdrop-blur-xl sticky top-0 z-50">
        <div className="flex h-16 items-center justify-between px-6">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-3">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center">
                <Building2 className="h-5 w-5 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                  CIMAL Technology
                </h1>
                <p className="text-xs text-slate-500">Plataforma All in One</p>
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <Input
                placeholder="Buscar en toda la plataforma..."
                className="w-80 pl-10 bg-slate-50/50 border-slate-200/60 focus:bg-white transition-colors"
              />
            </div>
            <Button variant="ghost" size="sm" className="relative">
              <Bell className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 h-3 w-3 bg-red-500 rounded-full text-xs flex items-center justify-center text-white text-[10px]">
                {inventoryAlerts.filter((alert) => alert.status === "critical").length}
              </span>
            </Button>
            <Avatar className="h-8 w-8">
              <AvatarImage src="/placeholder.svg?height=32&width=32" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Fixed Sidebar */}
        <aside className="w-72 border-r border-slate-200/60 bg-white/60 backdrop-blur-xl fixed left-0 top-16 h-[calc(100vh-4rem)] overflow-y-auto">
          <div className="p-6">
            <nav className="space-y-2">
              {modules.map((module) => {
                const Icon = module.icon
                return (
                  <button
                    key={module.id}
                    onClick={() => setActiveModule(module.id)}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-left transition-all duration-200 ${
                      activeModule === module.id
                        ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/25"
                        : "text-slate-600 hover:bg-slate-100/80 hover:text-slate-900"
                    }`}
                  >
                    <Icon className="h-5 w-5 flex-shrink-0" />
                    <span className="font-medium">{module.name}</span>
                  </button>
                )
              })}
            </nav>

            <div className="mt-8 pt-6 border-t border-slate-200/60">
              <button className="w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-slate-600 hover:bg-slate-100/80 hover:text-slate-900 transition-all duration-200">
                <Settings className="h-5 w-5 flex-shrink-0" />
                <span className="font-medium">Configuración</span>
              </button>
            </div>
          </div>
        </aside>

        {/* Main Content with left margin to account for fixed sidebar */}
        <main className="flex-1 ml-72 p-8">
          {activeModule === "dashboard" && (
            <div className="space-y-8">
              {/* Header */}
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-3xl font-bold text-slate-900">Dashboard Ejecutivo</h2>
                  <p className="text-slate-600 mt-1">Plataforma All in One - Gestión Integral Empresarial</p>
                </div>
                <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-lg">
                  <Plus className="h-4 w-4 mr-2" />
                  Nuevo Servicio
                </Button>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, index) => {
                  const Icon = stat.icon
                  return (
                    <Card
                      key={index}
                      className="border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300"
                    >
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-sm font-medium text-slate-600">{stat.title}</p>
                            <p className="text-2xl font-bold text-slate-900 mt-1">{stat.value}</p>
                            <p className={`text-sm font-medium mt-1 ${stat.color}`}>{stat.change} vs mes anterior</p>
                          </div>
                          <div
                            className={`p-3 rounded-xl bg-gradient-to-br ${
                              stat.color.includes("emerald")
                                ? "from-emerald-500 to-emerald-600"
                                : stat.color.includes("blue")
                                  ? "from-blue-500 to-blue-600"
                                  : stat.color.includes("purple")
                                    ? "from-purple-500 to-purple-600"
                                    : "from-orange-500 to-orange-600"
                            }`}
                          >
                            <Icon className="h-6 w-6 text-white" />
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>

              {/* Logistics Services Overview */}
              <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Truck className="h-6 w-6 text-blue-600" />
                    <span>Servicios Exclusivos de Logística</span>
                  </CardTitle>
                  <CardDescription>Gestión integral de servicios logísticos - Todo en un solo lugar</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {logisticsServices.map((service, index) => {
                      const Icon = service.icon
                      return (
                        <div
                          key={index}
                          className="flex items-center space-x-3 p-4 bg-slate-50/50 rounded-lg hover:bg-slate-100/50 transition-colors"
                        >
                          <div className="p-2 bg-blue-100 rounded-lg">
                            <Icon className="h-5 w-5 text-blue-600" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold text-slate-900 text-sm">{service.name}</h4>
                            <div className="flex items-center justify-between mt-1">
                              <Badge variant="default" className="text-xs">
                                {service.status}
                              </Badge>
                              <span className="text-xs text-slate-600">{service.orders} órdenes</span>
                            </div>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </CardContent>
              </Card>

              {/* Inventory Alerts */}
              <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <AlertTriangle className="h-6 w-6 text-orange-600" />
                    <span>Alertas de Inventario</span>
                  </CardTitle>
                  <CardDescription>Control automático de stock - Alertas en tiempo real</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {inventoryAlerts.map((alert, index) => (
                      <div
                        key={index}
                        className={`flex items-center justify-between p-4 rounded-lg ${
                          alert.status === "critical"
                            ? "bg-red-50 border border-red-200"
                            : "bg-yellow-50 border border-yellow-200"
                        }`}
                      >
                        <div className="flex items-center space-x-3">
                          <div
                            className={`p-2 rounded-lg ${alert.status === "critical" ? "bg-red-100" : "bg-yellow-100"}`}
                          >
                            <AlertTriangle
                              className={`h-5 w-5 ${alert.status === "critical" ? "text-red-600" : "text-yellow-600"}`}
                            />
                          </div>
                          <div>
                            <h4 className="font-semibold text-slate-900">{alert.product}</h4>
                            <p className="text-sm text-slate-600">
                              Stock actual: {alert.currentStock} | Mínimo: {alert.minStock} | Sector: {alert.sector}
                            </p>
                          </div>
                        </div>
                        <Button size="sm" variant={alert.status === "critical" ? "destructive" : "default"}>
                          Reabastecer
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Charts and Analytics */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      Rendimiento Financiero
                      <Button variant="ghost" size="sm">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </CardTitle>
                    <CardDescription>Análisis de ingresos y gastos (últimos 6 meses)</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-64 bg-gradient-to-br from-slate-50 to-blue-50/50 rounded-lg flex items-center justify-center">
                      <div className="text-center">
                        <TrendingUp className="h-12 w-12 text-blue-500 mx-auto mb-2" />
                        <p className="text-slate-600">Gráfico de rendimiento financiero</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle>Proyectos Activos</CardTitle>
                    <CardDescription>Estado actual de proyectos en desarrollo</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-4 bg-slate-50/50 rounded-lg">
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="font-semibold text-slate-900">Construcción Torre Empresarial</h4>
                            <Badge variant="default">En Progreso</Badge>
                          </div>
                          <div className="flex items-center justify-between text-sm text-slate-600 mb-2">
                            <span>S/ 2,500,000</span>
                            <span>68% completado</span>
                          </div>
                          <div className="w-full bg-slate-200 rounded-full h-2">
                            <div
                              className="bg-gradient-to-r from-blue-500 to-indigo-500 h-2 rounded-full transition-all duration-300"
                              style={{ width: "68%" }}
                            ></div>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between p-4 bg-slate-50/50 rounded-lg">
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="font-semibold text-slate-900">Sistema de Gestión Logística</h4>
                            <Badge variant="secondary">Planificación</Badge>
                          </div>
                          <div className="flex items-center justify-between text-sm text-slate-600 mb-2">
                            <span>S/ 850,000</span>
                            <span>25% completado</span>
                          </div>
                          <div className="w-full bg-slate-200 rounded-full h-2">
                            <div
                              className="bg-gradient-to-r from-blue-500 to-indigo-500 h-2 rounded-full transition-all duration-300"
                              style={{ width: "25%" }}
                            ></div>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between p-4 bg-slate-50/50 rounded-lg">
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="font-semibold text-slate-900">Modernización de Infraestructura</h4>
                            <Badge variant="outline">Monitoreo</Badge>
                          </div>
                          <div className="flex items-center justify-between text-sm text-slate-600 mb-2">
                            <span>S/ 1,200,000</span>
                            <span>89% completado</span>
                          </div>
                          <div className="w-full bg-slate-200 rounded-full h-2">
                            <div
                              className="bg-gradient-to-r from-blue-500 to-indigo-500 h-2 rounded-full transition-all duration-300"
                              style={{ width: "89%" }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Recent Activity */}
              <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle>Actividad Reciente</CardTitle>
                  <CardDescription>Últimas acciones y notificaciones del sistema</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-4 p-4 bg-slate-50/50 rounded-lg">
                      <div className="p-2 bg-green-100 rounded-lg">
                        <Activity className="h-4 w-4 text-green-600" />
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-slate-900">Pago procesado exitosamente</p>
                        <p className="text-sm text-slate-600">
                          Factura #2025-001 por S/ 45,000 a Constructora Moderna S.A.C.
                        </p>
                        <p className="text-xs text-slate-500 mt-1">Hace 15 minutos</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4 p-4 bg-slate-50/50 rounded-lg">
                      <div className="p-2 bg-blue-100 rounded-lg">
                        <Users className="h-4 w-4 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-slate-900">Nuevo proveedor registrado</p>
                        <p className="text-sm text-slate-600">
                          Suministros Técnicos Avanzados E.I.R.L. ha sido añadido al sistema
                        </p>
                        <p className="text-xs text-slate-500 mt-1">Hace 2 horas</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4 p-4 bg-slate-50/50 rounded-lg">
                      <div className="p-2 bg-purple-100 rounded-lg">
                        <FileText className="h-4 w-4 text-purple-600" />
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-slate-900">Contrato actualizado</p>
                        <p className="text-sm text-slate-600">
                          Anexo 3 agregado al contrato del Proyecto Torre Empresarial
                        </p>
                        <p className="text-xs text-slate-500 mt-1">Ayer</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {activeModule === "logistics" && (
            <div className="space-y-8">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-3xl font-bold text-slate-900">Gestión Logística Integral</h2>
                  <p className="text-slate-600 mt-1">Servicios exclusivos de logística - Todo en un solo lugar</p>
                </div>
                <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-lg">
                  <Plus className="h-4 w-4 mr-2" />
                  Nuevo Servicio Logístico
                </Button>
              </div>

              {/* Logistics Services Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {logisticsServices.map((service, index) => {
                  const Icon = service.icon
                  return (
                    <Card
                      key={index}
                      className="border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300 group"
                    >
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-4">
                          <div className="p-3 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-xl">
                            <Icon className="h-6 w-6 text-white" />
                          </div>
                          <Badge variant="default">{service.status}</Badge>
                        </div>
                        <h3 className="font-semibold text-slate-900 mb-2">{service.name}</h3>
                        <div className="flex items-center justify-between text-sm text-slate-600">
                          <span>Órdenes activas:</span>
                          <span className="font-semibold text-blue-600">{service.orders}</span>
                        </div>
                        <div className="flex items-center space-x-2 mt-4">
                          <Button size="sm" className="flex-1">
                            <Eye className="h-4 w-4 mr-2" />
                            Ver Detalles
                          </Button>
                          <Button variant="outline" size="sm">
                            <Edit className="h-4 w-4" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>

              {/* Logistics Chain Process */}
              <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle>Cadena de Distribución</CardTitle>
                  <CardDescription>Proceso optimizado de envío y entrega</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {[
                      { step: 1, title: "Envío Lima - Huaraz", description: "Transporte principal", icon: Truck },
                      { step: 2, title: "Recojo en Agencia", description: "Coordinación local", icon: MapPin },
                      { step: 3, title: "Tiempo de Espera", description: "Optimización de tiempos", icon: Clock },
                      { step: 4, title: "Retorno a Domicilio", description: "Entrega final", icon: Home },
                      { step: 5, title: "Conexión Interagencias", description: "Red de distribución", icon: Network },
                      { step: 6, title: "Recojo en Provincia", description: "Cobertura nacional", icon: Globe },
                    ].map((process, index) => {
                      const Icon = process.icon
                      return (
                        <div key={index} className="flex items-center space-x-3 p-4 bg-slate-50/50 rounded-lg">
                          <div className="flex items-center justify-center w-8 h-8 bg-blue-600 text-white rounded-full text-sm font-bold">
                            {process.step}
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold text-slate-900 text-sm">{process.title}</h4>
                            <p className="text-xs text-slate-600">{process.description}</p>
                          </div>
                          <Icon className="h-5 w-5 text-blue-600" />
                        </div>
                      )
                    })}
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {activeModule === "inventory" && (
            <div className="space-y-8">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-3xl font-bold text-slate-900">Control de Inventario</h2>
                  <p className="text-slate-600 mt-1">Gestión automática de stock - Alertas en tiempo real</p>
                </div>
                <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-lg">
                  <Plus className="h-4 w-4 mr-2" />
                  Agregar Producto
                </Button>
              </div>

              {/* Inventory Stats */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <Card className="border-0 shadow-lg bg-gradient-to-br from-green-600 to-emerald-600 text-white">
                  <CardContent className="p-6 text-center">
                    <PackageCheck className="h-8 w-8 mx-auto mb-2 text-green-200" />
                    <p className="text-3xl font-bold">1,247</p>
                    <p className="text-green-100 text-sm">Productos en Stock</p>
                  </CardContent>
                </Card>
                <Card className="border-0 shadow-lg bg-gradient-to-br from-red-600 to-pink-600 text-white">
                  <CardContent className="p-6 text-center">
                    <AlertTriangle className="h-8 w-8 mx-auto mb-2 text-red-200" />
                    <p className="text-3xl font-bold">
                      {inventoryAlerts.filter((alert) => alert.status === "critical").length}
                    </p>
                    <p className="text-red-100 text-sm">Alertas Críticas</p>
                  </CardContent>
                </Card>
                <Card className="border-0 shadow-lg bg-gradient-to-br from-yellow-600 to-orange-600 text-white">
                  <CardContent className="p-6 text-center">
                    <AlertCircle className="h-8 w-8 mx-auto mb-2 text-yellow-200" />
                    <p className="text-3xl font-bold">
                      {inventoryAlerts.filter((alert) => alert.status === "warning").length}
                    </p>
                    <p className="text-yellow-100 text-sm">Advertencias</p>
                  </CardContent>
                </Card>
                <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-600 to-indigo-600 text-white">
                  <CardContent className="p-6 text-center">
                    <Boxes className="h-8 w-8 mx-auto mb-2 text-blue-200" />
                    <p className="text-3xl font-bold">S/ 2.4M</p>
                    <p className="text-blue-100 text-sm">Valor Total</p>
                  </CardContent>
                </Card>
              </div>

              {/* Inventory Alerts Detail */}
              <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>Alertas de Stock Automáticas</span>
                    <Button variant="outline" size="sm">
                      <Filter className="h-4 w-4 mr-2" />
                      Filtrar
                    </Button>
                  </CardTitle>
                  <CardDescription>
                    Sistema automático que advierte la falta de stock - Completamente gratis
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {inventoryAlerts.map((alert, index) => (
                      <div
                        key={index}
                        className={`flex items-center justify-between p-6 rounded-lg border-l-4 ${
                          alert.status === "critical"
                            ? "bg-red-50 border-l-red-500"
                            : "bg-yellow-50 border-l-yellow-500"
                        }`}
                      >
                        <div className="flex items-center space-x-4">
                          <div
                            className={`p-3 rounded-lg ${alert.status === "critical" ? "bg-red-100" : "bg-yellow-100"}`}
                          >
                            <AlertTriangle
                              className={`h-6 w-6 ${alert.status === "critical" ? "text-red-600" : "text-yellow-600"}`}
                            />
                          </div>
                          <div>
                            <h4 className="font-semibold text-slate-900 text-lg">{alert.product}</h4>
                            <p className="text-slate-600">Sector: {alert.sector}</p>
                            <div className="flex items-center space-x-4 mt-2">
                              <span className="text-sm text-slate-500">
                                Stock actual: <span className="font-semibold">{alert.currentStock}</span>
                              </span>
                              <span className="text-sm text-slate-500">
                                Stock mínimo: <span className="font-semibold">{alert.minStock}</span>
                              </span>
                            </div>
                            <div className="mt-2">
                              <Progress value={(alert.currentStock / alert.minStock) * 100} className="w-48 h-2" />
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Button size="sm" variant={alert.status === "critical" ? "destructive" : "default"}>
                            <ShoppingCart className="h-4 w-4 mr-2" />
                            Reabastecer
                          </Button>
                          <Button variant="outline" size="sm">
                            <Eye className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {activeModule === "services" && (
            <div className="space-y-8">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-3xl font-bold text-slate-900">Gestión de Servicios por Sectores</h2>
                  <p className="text-slate-600 mt-1">Servicios especializados para todos los sectores económicos</p>
                </div>
                <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-lg">
                  <Plus className="h-4 w-4 mr-2" />
                  Crear Servicio
                </Button>
              </div>

              <Tabs defaultValue="primary" className="space-y-6">
                <TabsList className="grid w-full grid-cols-5 bg-slate-100/80">
                  <TabsTrigger value="primary">Sector Primario</TabsTrigger>
                  <TabsTrigger value="secondary">Sector Secundario</TabsTrigger>
                  <TabsTrigger value="tertiary">Sector Terciario</TabsTrigger>
                  <TabsTrigger value="quaternary">Sector Cuarto</TabsTrigger>
                  <TabsTrigger value="quinary">Sector Quinto</TabsTrigger>
                </TabsList>

                {Object.entries(sectors).map(([sectorKey, sectorData]) => (
                  <TabsContent key={sectorKey} value={sectorKey} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {sectorData.map((sector, index) => {
                        const Icon = sector.icon
                        return (
                          <Card
                            key={index}
                            className="border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300"
                          >
                            <CardContent className="p-6">
                              <div className="flex items-center justify-between mb-4">
                                <div className="p-3 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-xl">
                                  <Icon className="h-6 w-6 text-white" />
                                </div>
                                <Badge variant="secondary">{sector.clients} clientes</Badge>
                              </div>
                              <h3 className="font-semibold text-slate-900 mb-2">{sector.name}</h3>
                              <div className="flex items-center justify-between text-sm">
                                <span className="text-slate-600">Ingresos:</span>
                                <span className="font-semibold text-green-600">{sector.revenue}</span>
                              </div>
                              <div className="flex items-center space-x-2 mt-4">
                                <Button size="sm" className="flex-1">
                                  <Eye className="h-4 w-4 mr-2" />
                                  Ver Servicios
                                </Button>
                                <Button variant="outline" size="sm">
                                  <Plus className="h-4 w-4" />
                                </Button>
                              </div>
                            </CardContent>
                          </Card>
                        )
                      })}
                    </div>
                  </TabsContent>
                ))}
              </Tabs>
            </div>
          )}

          {activeModule === "areas" && (
            <div className="space-y-8">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-3xl font-bold text-slate-900">Áreas Internas</h2>
                  <p className="text-slate-600 mt-1">Organigrama y funciones del equipo interno</p>
                </div>
                <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-lg">
                  <Plus className="h-4 w-4 mr-2" />
                  Agregar Área
                </Button>
              </div>

              {/* Internal Areas Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {internalAreas.map((area, index) => {
                  const Icon = area.icon
                  return (
                    <Card
                      key={index}
                      className="border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300"
                    >
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-4">
                          <div className="p-3 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl">
                            <Icon className="h-6 w-6 text-white" />
                          </div>
                          <Badge variant="outline">{area.staff} personas</Badge>
                        </div>
                        <h3 className="font-semibold text-slate-900 mb-2">{area.name}</h3>
                        <p className="text-sm text-slate-600 mb-4">{area.description}</p>
                        <div className="flex items-center space-x-2">
                          <Button size="sm" className="flex-1">
                            <Users className="h-4 w-4 mr-2" />
                            Ver Equipo
                          </Button>
                          <Button variant="outline" size="sm">
                            <Edit className="h-4 w-4" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>

              {/* Organizational Chart */}
              <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle>Organigrama Empresarial</CardTitle>
                  <CardDescription>Estructura organizacional y líneas de reporte</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col items-center space-y-6">
                    {/* CEO Level */}
                    <div className="flex items-center justify-center">
                      <div className="bg-gradient-to-br from-blue-600 to-indigo-600 text-white p-6 rounded-xl shadow-lg">
                        <div className="flex items-center space-x-3">
                          <Target className="h-6 w-6" />
                          <div>
                            <h3 className="font-bold">CEO</h3>
                            <p className="text-sm text-blue-100">Dirección Ejecutiva</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Department Level */}
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                      {internalAreas.slice(1).map((area, index) => {
                        const Icon = area.icon
                        return (
                          <div key={index} className="bg-slate-100 p-4 rounded-lg text-center">
                            <Icon className="h-5 w-5 mx-auto mb-2 text-slate-600" />
                            <h4 className="font-semibold text-sm text-slate-900">{area.name}</h4>
                            <p className="text-xs text-slate-600">{area.staff} personas</p>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {activeModule === "communication" && (
            <div className="space-y-8">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-3xl font-bold text-slate-900">Comunicación Interna</h2>
                  <p className="text-slate-600 mt-1">Real Time Debate, Networking y Feedback</p>
                </div>
                <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-lg">
                  <Plus className="h-4 w-4 mr-2" />
                  Nueva Comunicación
                </Button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Real Time Communication */}
                <Card className="lg:col-span-2 border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <MessageCircle className="h-6 w-6 text-blue-600" />
                      <span>Comunicación en Tiempo Real</span>
                    </CardTitle>
                    <CardDescription>Debate y networking interno</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4 max-h-96 overflow-y-auto">
                      {[
                        {
                          user: "María García",
                          area: "Operaciones",
                          message: "Propuesta de mejora para el proceso de carga-descarga",
                          time: "Hace 5 min",
                          type: "proposal",
                        },
                        {
                          user: "Carlos López",
                          area: "Logística",
                          message: "Confirmado: Nueva ruta Lima-Huaraz optimizada",
                          time: "Hace 10 min",
                          type: "update",
                        },
                        {
                          user: "Ana Rodríguez",
                          area: "Finanzas",
                          message: "Reporte de costos del Q1 disponible para revisión",
                          time: "Hace 15 min",
                          type: "report",
                        },
                        {
                          user: "Luis Mendoza",
                          area: "RRHH",
                          message: "Capacitación en nuevos protocolos programada para mañana",
                          time: "Hace 30 min",
                          type: "training",
                        },
                      ].map((comm, index) => (
                        <div key={index} className="flex items-start space-x-3 p-4 bg-slate-50/50 rounded-lg">
                          <Avatar className="h-8 w-8">
                            <AvatarFallback className="bg-gradient-to-br from-blue-500 to-indigo-500 text-white text-xs">
                              {comm.user
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-1">
                              <h4 className="font-semibold text-slate-900 text-sm">{comm.user}</h4>
                              <Badge variant="outline" className="text-xs">
                                {comm.area}
                              </Badge>
                            </div>
                            <p className="text-sm text-slate-700">{comm.message}</p>
                            <p className="text-xs text-slate-500 mt-1">{comm.time}</p>
                          </div>
                          <Button variant="ghost" size="sm">
                            <MessageCircle className="h-4 w-4" />
                          </Button>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Communication Tools */}
                <div className="space-y-6">
                  <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                    <CardHeader>
                      <CardTitle className="text-lg">Herramientas de Comunicación</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <Button className="w-full justify-start bg-transparent" variant="outline">
                        <MessageSquare className="h-4 w-4 mr-2" />
                        Chat en Tiempo Real
                      </Button>
                      <Button className="w-full justify-start bg-transparent" variant="outline">
                        <Network className="h-4 w-4 mr-2" />
                        Networking Interno
                      </Button>
                      <Button className="w-full justify-start bg-transparent" variant="outline">
                        <MessageCircle className="h-4 w-4 mr-2" />
                        Sistema de Feedback
                      </Button>
                      <Button className="w-full justify-start bg-transparent" variant="outline">
                        <FileText className="h-4 w-4 mr-2" />
                        Propuestas de Mejora
                      </Button>
                    </CardContent>
                  </Card>

                  <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                    <CardHeader>
                      <CardTitle className="text-lg">Estadísticas de Comunicación</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-slate-600">Mensajes hoy:</span>
                        <span className="font-semibold text-slate-900">47</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-slate-600">Propuestas activas:</span>
                        <span className="font-semibold text-blue-600">12</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-slate-600">Feedback pendiente:</span>
                        <span className="font-semibold text-orange-600">5</span>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          )}

          {activeModule === "monitoring" && (
            <div className="space-y-8">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-3xl font-bold text-slate-900">Monitoreo y Control</h2>
                  <p className="text-slate-600 mt-1">
                    Seguimiento en tiempo real - Progress Status & Compliance Levels
                  </p>
                </div>
                <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-lg">
                  <Plus className="h-4 w-4 mr-2" />
                  Nuevo Monitoreo
                </Button>
              </div>

              {/* Monitoring Dashboard */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card className="border-0 shadow-lg bg-gradient-to-br from-green-600 to-emerald-600 text-white">
                  <CardContent className="p-6 text-center">
                    <CheckCircle className="h-8 w-8 mx-auto mb-2 text-green-200" />
                    <p className="text-3xl font-bold">94%</p>
                    <p className="text-green-100 text-sm">Compliance Level</p>
                  </CardContent>
                </Card>
                <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-600 to-indigo-600 text-white">
                  <CardContent className="p-6 text-center">
                    <Activity className="h-8 w-8 mx-auto mb-2 text-blue-200" />
                    <p className="text-3xl font-bold">Real Time</p>
                    <p className="text-blue-100 text-sm">Information</p>
                  </CardContent>
                </Card>
                <Card className="border-0 shadow-lg bg-gradient-to-br from-purple-600 to-pink-600 text-white">
                  <CardContent className="p-6 text-center">
                    <TrendingUp className="h-8 w-8 mx-auto mb-2 text-purple-200" />
                    <p className="text-3xl font-bold">87%</p>
                    <p className="text-purple-100 text-sm">Progress Status</p>
                  </CardContent>
                </Card>
                <Card className="border-0 shadow-lg bg-gradient-to-br from-orange-600 to-red-600 text-white">
                  <CardContent className="p-6 text-center">
                    <Calculator className="h-8 w-8 mx-auto mb-2 text-orange-200" />
                    <p className="text-3xl font-bold">S/ 2.1M</p>
                    <p className="text-orange-100 text-sm">Centro de Costos</p>
                  </CardContent>
                </Card>
              </div>

              {/* Project Monitoring */}
              <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle>Seguimiento de Proyectos</CardTitle>
                  <CardDescription>
                    Monitoreo del ciclo de vida completo: Planificación → Ejecución → Control → Cierre
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {[
                      {
                        name: "Construcción Torre Empresarial",
                        phase: "Ejecución",
                        progress: 68,
                        compliance: 94,
                        budget: "S/ 2,500,000",
                        spent: "S/ 1,700,000",
                        status: "on-track",
                      },
                      {
                        name: "Sistema Logístico Integrado",
                        phase: "Monitoreo",
                        progress: 89,
                        compliance: 96,
                        budget: "S/ 850,000",
                        spent: "S/ 756,500",
                        status: "on-track",
                      },
                      {
                        name: "Modernización Infraestructura",
                        phase: "Control",
                        progress: 45,
                        compliance: 78,
                        budget: "S/ 1,200,000",
                        spent: "S/ 540,000",
                        status: "at-risk",
                      },
                    ].map((project, index) => (
                      <div key={index} className="p-6 bg-slate-50/50 rounded-lg">
                        <div className="flex items-center justify-between mb-4">
                          <div>
                            <h3 className="font-semibold text-slate-900">{project.name}</h3>
                            <div className="flex items-center space-x-4 mt-1">
                              <Badge variant={project.status === "on-track" ? "default" : "destructive"}>
                                {project.phase}
                              </Badge>
                              <span className="text-sm text-slate-600">
                                Gastado: {project.spent} de {project.budget}
                              </span>
                            </div>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Button variant="outline" size="sm">
                              <Eye className="h-4 w-4" />
                            </Button>
                            <Button variant="outline" size="sm">
                              <FileText className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-sm font-medium text-slate-600">Progress Status</span>
                              <span className="text-sm font-semibold text-slate-900">{project.progress}%</span>
                            </div>
                            <Progress value={project.progress} className="h-2" />
                          </div>
                          <div>
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-sm font-medium text-slate-600">Compliance Level</span>
                              <span className="text-sm font-semibold text-slate-900">{project.compliance}%</span>
                            </div>
                            <Progress value={project.compliance} className="h-2" />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {activeModule === "products" && (
            <div className="space-y-8">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-3xl font-bold text-slate-900">Gestión de Productos</h2>
                  <p className="text-slate-600 mt-1">Catálogo integral de productos y suministros</p>
                </div>
                <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-lg">
                  <Plus className="h-4 w-4 mr-2" />
                  Agregar Producto
                </Button>
              </div>

              <div className="flex items-center space-x-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                  <Input placeholder="Buscar productos por nombre, código o categoría..." className="pl-10" />
                </div>
                <Button variant="outline" className="flex items-center space-x-2 bg-transparent">
                  <Filter className="h-4 w-4" />
                  <span>Filtros</span>
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    name: "Casco de Seguridad Industrial",
                    category: "Seguridad",
                    price: "S/ 45.00",
                    stock: 150,
                  },
                  {
                    name: "Taladro Percutor Profesional",
                    category: "Herramientas",
                    price: "S/ 320.00",
                    stock: 25,
                  },
                  {
                    name: "Cemento Portland Tipo I",
                    category: "Construcción",
                    price: "S/ 28.50",
                    stock: 500,
                  },
                  {
                    name: "Guantes de Seguridad",
                    category: "Seguridad",
                    price: "S/ 15.00",
                    stock: 200,
                  },
                  {
                    name: "Nivel Láser Profesional",
                    category: "Herramientas",
                    price: "S/ 450.00",
                    stock: 12,
                  },
                  {
                    name: "Varilla de Construcción",
                    category: "Construcción",
                    price: "S/ 35.00",
                    stock: 300,
                  },
                ].map((product, index) => (
                  <Card
                    key={index}
                    className="border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300 group"
                  >
                    <CardContent className="p-0">
                      <div className="h-48 bg-gradient-to-br from-slate-100 to-slate-200 rounded-t-lg flex items-center justify-center">
                        <Package className="h-16 w-16 text-slate-400" />
                      </div>
                      <div className="p-6">
                        <div className="flex items-start justify-between mb-2">
                          <Badge variant="secondary" className="text-xs">
                            {product.category}
                          </Badge>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="opacity-0 group-hover:opacity-100 transition-opacity"
                          >
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </div>
                        <h3 className="font-semibold text-slate-900 mb-2">{product.name}</h3>
                        <div className="flex items-center justify-between mb-4">
                          <span className="text-lg font-bold text-blue-600">{product.price}</span>
                          <span className="text-sm text-slate-600">Stock: {product.stock}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Button size="sm" className="flex-1">
                            <ShoppingCart className="h-4 w-4 mr-2" />
                            Agregar
                          </Button>
                          <Button variant="outline" size="sm">
                            <Eye className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {activeModule === "suppliers" && (
            <div className="space-y-8">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-3xl font-bold text-slate-900">Red de Proveedores</h2>
                  <p className="text-slate-600 mt-1">Gestión integral de relaciones comerciales</p>
                </div>
                <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-lg">
                  <Plus className="h-4 w-4 mr-2" />
                  Nuevo Proveedor
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-600 to-indigo-600 text-white">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-blue-100">Total Proveedores</p>
                        <p className="text-3xl font-bold mt-1">156</p>
                      </div>
                      <Users className="h-8 w-8 text-blue-200" />
                    </div>
                  </CardContent>
                </Card>
                <Card className="border-0 shadow-lg bg-gradient-to-br from-emerald-600 to-teal-600 text-white">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-emerald-100">Proveedores Activos</p>
                        <p className="text-3xl font-bold mt-1">142</p>
                      </div>
                      <Activity className="h-8 w-8 text-emerald-200" />
                    </div>
                  </CardContent>
                </Card>
                <Card className="border-0 shadow-lg bg-gradient-to-br from-orange-600 to-red-600 text-white">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-orange-100">Evaluaciones Pendientes</p>
                        <p className="text-3xl font-bold mt-1">8</p>
                      </div>
                      <FileText className="h-8 w-8 text-orange-200" />
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Directorio de Proveedores</CardTitle>
                    <div className="flex items-center space-x-2">
                      <Button variant="outline" size="sm">
                        <Filter className="h-4 w-4 mr-2" />
                        Filtrar
                      </Button>
                      <Button variant="outline" size="sm">
                        <Download className="h-4 w-4 mr-2" />
                        Exportar
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      {
                        name: "Constructora Moderna S.A.C.",
                        ruc: "20547896321",
                        status: "Activo",
                        rating: 4.8,
                        initials: "CM",
                      },
                      {
                        name: "Suministros Industriales E.I.R.L.",
                        ruc: "10456789123",
                        status: "Activo",
                        rating: 4.6,
                        initials: "SI",
                      },
                      {
                        name: "Tecnología Avanzada S.R.L.",
                        ruc: "20987654321",
                        status: "Pendiente",
                        rating: 4.2,
                        initials: "TA",
                      },
                    ].map((supplier, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-6 bg-slate-50/50 rounded-lg hover:bg-slate-100/50 transition-colors"
                      >
                        <div className="flex items-center space-x-4">
                          <Avatar className="h-12 w-12">
                            <AvatarFallback className="bg-gradient-to-br from-blue-500 to-indigo-500 text-white font-semibold">
                              {supplier.initials}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <h3 className="font-semibold text-slate-900">{supplier.name}</h3>
                            <p className="text-sm text-slate-600">RUC: {supplier.ruc}</p>
                            <div className="flex items-center space-x-2 mt-1">
                              <Badge variant={supplier.status === "Activo" ? "default" : "secondary"}>
                                {supplier.status}
                              </Badge>
                              <div className="flex items-center space-x-1">
                                <span className="text-sm text-slate-600">Rating:</span>
                                <span className="text-sm font-semibold text-yellow-600">{supplier.rating}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Button variant="ghost" size="sm">
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {activeModule === "projects" && (
            <div className="space-y-8">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-3xl font-bold text-slate-900">Centro de Proyectos</h2>
                  <p className="text-slate-600 mt-1">Seguimiento integral del ciclo de vida de proyectos</p>
                </div>
                <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-lg">
                  <Plus className="h-4 w-4 mr-2" />
                  Iniciar Proyecto
                </Button>
              </div>

              <Tabs defaultValue="active" className="space-y-6">
                <TabsList className="grid w-full grid-cols-4 bg-slate-100/80">
                  <TabsTrigger value="active">Activos</TabsTrigger>
                  <TabsTrigger value="planning">Planificación</TabsTrigger>
                  <TabsTrigger value="monitoring">Monitoreo</TabsTrigger>
                  <TabsTrigger value="completed">Completados</TabsTrigger>
                </TabsList>

                <TabsContent value="active" className="space-y-6">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <CardTitle className="text-lg">Construcción Torre Empresarial</CardTitle>
                          <Badge variant="default">En Progreso</Badge>
                        </div>
                        <CardDescription>ID: P001 • Presupuesto: S/ 2,500,000</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div>
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-sm font-medium text-slate-600">Progreso General</span>
                              <span className="text-sm font-semibold text-slate-900">68%</span>
                            </div>
                            <Progress value={68} className="h-3" />
                          </div>
                          <div className="flex items-center justify-between pt-4 border-t border-slate-200">
                            <Button variant="outline" size="sm">
                              <Calendar className="h-4 w-4 mr-2" />
                              Cronograma
                            </Button>
                            <Button variant="outline" size="sm">
                              <FileText className="h-4 w-4 mr-2" />
                              Documentos
                            </Button>
                            <Button size="sm">
                              <ArrowUpRight className="h-4 w-4 mr-2" />
                              Ver Detalles
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <CardTitle className="text-lg">Sistema de Gestión Logística</CardTitle>
                          <Badge variant="secondary">Planificación</Badge>
                        </div>
                        <CardDescription>ID: P002 • Presupuesto: S/ 850,000</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div>
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-sm font-medium text-slate-600">Progreso General</span>
                              <span className="text-sm font-semibold text-slate-900">25%</span>
                            </div>
                            <Progress value={25} className="h-3" />
                          </div>
                          <div className="flex items-center justify-between pt-4 border-t border-slate-200">
                            <Button variant="outline" size="sm">
                              <Calendar className="h-4 w-4 mr-2" />
                              Cronograma
                            </Button>
                            <Button variant="outline" size="sm">
                              <FileText className="h-4 w-4 mr-2" />
                              Documentos
                            </Button>
                            <Button size="sm">
                              <ArrowUpRight className="h-4 w-4 mr-2" />
                              Ver Detalles
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-lg">Modernización de Infraestructura</CardTitle>
                        <Badge variant="outline">Monitoreo</Badge>
                      </div>
                      <CardDescription>ID: P003 • Presupuesto: S/ 1,200,000</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-sm font-medium text-slate-600">Progreso General</span>
                            <span className="text-sm font-semibold text-slate-900">89%</span>
                          </div>
                          <Progress value={89} className="h-3" />
                        </div>
                        <div className="flex items-center justify-between pt-4 border-t border-slate-200">
                          <Button variant="outline" size="sm">
                            <Calendar className="h-4 w-4 mr-2" />
                            Cronograma
                          </Button>
                          <Button variant="outline" size="sm">
                            <FileText className="h-4 w-4 mr-2" />
                            Documentos
                          </Button>
                          <Button size="sm">
                            <ArrowUpRight className="h-4 w-4 mr-2" />
                            Ver Detalles
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="planning">
                  <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                    <CardContent className="p-8 text-center">
                      <FolderOpen className="h-16 w-16 text-slate-400 mx-auto mb-4" />
                      <h3 className="text-xl font-semibold text-slate-900 mb-2">Proyectos en Planificación</h3>
                      <p className="text-slate-600">Los proyectos en fase de planificación aparecerán aquí</p>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="monitoring">
                  <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                    <CardContent className="p-8 text-center">
                      <Activity className="h-16 w-16 text-slate-400 mx-auto mb-4" />
                      <h3 className="text-xl font-semibold text-slate-900 mb-2">Proyectos en Monitoreo</h3>
                      <p className="text-slate-600">Los proyectos bajo monitoreo y control aparecerán aquí</p>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="completed">
                  <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                    <CardContent className="p-8 text-center">
                      <TrendingUp className="h-16 w-16 text-slate-400 mx-auto mb-4" />
                      <h3 className="text-xl font-semibold text-slate-900 mb-2">Proyectos Completados</h3>
                      <p className="text-slate-600">El historial de proyectos finalizados aparecerá aquí</p>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          )}

          {activeModule === "contracts" && (
            <div className="space-y-8">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-3xl font-bold text-slate-900">Gestión Contractual</h2>
                  <p className="text-slate-600 mt-1">Control integral de contratos y documentación legal</p>
                </div>
                <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-lg">
                  <Plus className="h-4 w-4 mr-2" />
                  Nuevo Contrato
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <Card className="border-0 shadow-lg bg-gradient-to-br from-green-600 to-emerald-600 text-white">
                  <CardContent className="p-6 text-center">
                    <FileText className="h-8 w-8 mx-auto mb-2 text-green-200" />
                    <p className="text-3xl font-bold">45</p>
                    <p className="text-green-100 text-sm">Contratos Activos</p>
                  </CardContent>
                </Card>
                <Card className="border-0 shadow-lg bg-gradient-to-br from-yellow-600 to-orange-600 text-white">
                  <CardContent className="p-6 text-center">
                    <Calendar className="h-8 w-8 mx-auto mb-2 text-yellow-200" />
                    <p className="text-3xl font-bold">8</p>
                    <p className="text-yellow-100 text-sm">Por Vencer</p>
                  </CardContent>
                </Card>
                <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-600 to-indigo-600 text-white">
                  <CardContent className="p-6 text-center">
                    <FileText className="h-8 w-8 mx-auto mb-2 text-blue-200" />
                    <p className="text-3xl font-bold">12</p>
                    <p className="text-blue-100 text-sm">En Revisión</p>
                  </CardContent>
                </Card>
                <Card className="border-0 shadow-lg bg-gradient-to-br from-purple-600 to-pink-600 text-white">
                  <CardContent className="p-6 text-center">
                    <FileText className="h-8 w-8 mx-auto mb-2 text-purple-200" />
                    <p className="text-3xl font-bold">156</p>
                    <p className="text-purple-100 text-sm">Total Documentos</p>
                  </CardContent>
                </Card>
              </div>

              <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle>Contratos Recientes</CardTitle>
                  <CardDescription>Últimos contratos registrados en el sistema</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      {
                        title: "Contrato de Construcción - Torre Empresarial",
                        client: "Inmobiliaria Premium S.A.C.",
                        status: "Activo",
                        value: "S/ 2,500,000",
                        date: "2025-01-15",
                        id: "C001",
                      },
                      {
                        title: "Servicios de Consultoría Técnica",
                        client: "Minera del Sur E.I.R.L.",
                        status: "En Revisión",
                        value: "S/ 450,000",
                        date: "2025-01-10",
                        id: "C002",
                      },
                      {
                        title: "Suministro de Equipos Industriales",
                        client: "Manufactura Avanzada S.A.",
                        status: "Por Vencer",
                        value: "S/ 850,000",
                        date: "2024-12-20",
                        id: "C003",
                      },
                    ].map((contract, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-6 bg-slate-50/50 rounded-lg hover:bg-slate-100/50 transition-colors"
                      >
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-2">
                            <h3 className="font-semibold text-slate-900">{contract.title}</h3>
                            <Badge
                              variant={
                                contract.status === "Activo"
                                  ? "default"
                                  : contract.status === "En Revisión"
                                    ? "secondary"
                                    : "destructive"
                              }
                            >
                              {contract.status}
                            </Badge>
                          </div>
                          <p className="text-sm text-slate-600 mb-1">Cliente: {contract.client}</p>
                          <div className="flex items-center space-x-4 text-sm text-slate-500">
                            <span>ID: {contract.id}</span>
                            <span>Valor: {contract.value}</span>
                            <span>Fecha: {contract.date}</span>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Button variant="ghost" size="sm">
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Download className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {activeModule === "payments" && (
            <div className="space-y-8">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-3xl font-bold text-slate-900">Centro de Pagos</h2>
                  <p className="text-slate-600 mt-1">Gestión integral de pagos y valorizaciones</p>
                </div>
                <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-lg">
                  <Plus className="h-4 w-4 mr-2" />
                  Registrar Pago
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="border-0 shadow-lg bg-gradient-to-br from-emerald-600 to-teal-600 text-white">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-emerald-100">Pagos del Mes</p>
                        <p className="text-3xl font-bold mt-1">S/ 847,392</p>
                        <p className="text-emerald-200 text-sm">+12.5% vs mes anterior</p>
                      </div>
                      <DollarSign className="h-8 w-8 text-emerald-200" />
                    </div>
                  </CardContent>
                </Card>
                <Card className="border-0 shadow-lg bg-gradient-to-br from-orange-600 to-red-600 text-white">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-orange-100">Pagos Pendientes</p>
                        <p className="text-3xl font-bold mt-1">S/ 156,780</p>
                        <p className="text-orange-200 text-sm">8 facturas pendientes</p>
                      </div>
                      <CreditCard className="h-8 w-8 text-orange-200" />
                    </div>
                  </CardContent>
                </Card>
                <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-600 to-indigo-600 text-white">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-blue-100">Próximos Vencimientos</p>
                        <p className="text-3xl font-bold mt-1">S/ 89,450</p>
                        <p className="text-blue-200 text-sm">Próximos 7 días</p>
                      </div>
                      <Calendar className="h-8 w-8 text-blue-200" />
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle>Registro de Pagos Recientes</CardTitle>
                  <CardDescription>Historial de transacciones y pagos procesados</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      {
                        supplier: "Constructora Moderna S.A.C.",
                        amount: "S/ 45,000",
                        date: "2025-01-20",
                        status: "Completado",
                        invoice: "F001-2025",
                      },
                      {
                        supplier: "Suministros Industriales E.I.R.L.",
                        amount: "S/ 12,500",
                        date: "2025-01-18",
                        status: "Procesando",
                        invoice: "F002-2025",
                      },
                      {
                        supplier: "Tecnología Avanzada S.R.L.",
                        amount: "S/ 8,750",
                        date: "2025-01-15",
                        status: "Completado",
                        invoice: "F003-2025",
                      },
                      {
                        supplier: "Logística Rápida E.I.R.L.",
                        amount: "S/ 23,200",
                        date: "2025-01-12",
                        status: "Pendiente",
                        invoice: "F004-2025",
                      },
                    ].map((payment, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-6 bg-slate-50/50 rounded-lg hover:bg-slate-100/50 transition-colors"
                      >
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-2">
                            <h3 className="font-semibold text-slate-900">{payment.supplier}</h3>
                            <Badge
                              variant={
                                payment.status === "Completado"
                                  ? "default"
                                  : payment.status === "Procesando"
                                    ? "secondary"
                                    : "destructive"
                              }
                            >
                              {payment.status}
                            </Badge>
                          </div>
                          <div className="flex items-center space-x-4 text-sm text-slate-600">
                            <span>Factura: {payment.invoice}</span>
                            <span>Fecha: {payment.date}</span>
                            <span className="font-semibold text-slate-900">{payment.amount}</span>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Button variant="ghost" size="sm">
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Download className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {activeModule === "purchases" && (
            <div className="space-y-8">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-3xl font-bold text-slate-900">Gestión de Compras</h2>
                  <p className="text-slate-600 mt-1">Control integral de órdenes de compra y adquisiciones</p>
                </div>
                <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-lg">
                  <Plus className="h-4 w-4 mr-2" />
                  Nueva Orden de Compra
                </Button>
              </div>

              {/* Purchase Categories */}
              <Tabs defaultValue="retailers" className="space-y-6">
                <TabsList className="grid w-full grid-cols-3 bg-slate-100/80">
                  <TabsTrigger value="retailers">Retailers</TabsTrigger>
                  <TabsTrigger value="wholesalers">Mayoristas</TabsTrigger>
                  <TabsTrigger value="distributors">Distribuidoras</TabsTrigger>
                </TabsList>

                <TabsContent value="retailers" className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                      { name: "Tiendas de Ropa", orders: 45, amount: "S/ 125,000", icon: Shirt },
                      { name: "Tiendas Pequeñas", orders: 78, amount: "S/ 89,500", icon: Store },
                      { name: "Emprendimientos", orders: 23, amount: "S/ 45,200", icon: Users },
                      { name: "Tiendas Especializadas", orders: 34, amount: "S/ 156,800", icon: Package },
                    ].map((category, index) => {
                      const Icon = category.icon
                      return (
                        <Card
                          key={index}
                          className="border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300"
                        >
                          <CardContent className="p-6">
                            <div className="flex items-center justify-between mb-4">
                              <div className="p-3 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-xl">
                                <Icon className="h-6 w-6 text-white" />
                              </div>
                              <Badge variant="secondary">{category.orders} órdenes</Badge>
                            </div>
                            <h3 className="font-semibold text-slate-900 mb-2">{category.name}</h3>
                            <p className="text-lg font-bold text-green-600">{category.amount}</p>
                          </CardContent>
                        </Card>
                      )
                    })}
                  </div>
                </TabsContent>

                <TabsContent value="wholesalers" className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                      {
                        name: "Compras por Mayor y Distribución Menor",
                        orders: 156,
                        amount: "S/ 890,000",
                        icon: Warehouse,
                      },
                      { name: "Negocios Digitales", orders: 89, amount: "S/ 456,000", icon: Monitor },
                      { name: "Ventas por Internet", orders: 67, amount: "S/ 234,500", icon: Globe },
                    ].map((category, index) => {
                      const Icon = category.icon
                      return (
                        <Card
                          key={index}
                          className="border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300"
                        >
                          <CardContent className="p-6">
                            <div className="flex items-center justify-between mb-4">
                              <div className="p-3 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl">
                                <Icon className="h-6 w-6 text-white" />
                              </div>
                              <Badge variant="secondary">{category.orders} órdenes</Badge>
                            </div>
                            <h3 className="font-semibold text-slate-900 mb-2">{category.name}</h3>
                            <p className="text-lg font-bold text-green-600">{category.amount}</p>
                          </CardContent>
                        </Card>
                      )
                    })}
                  </div>
                </TabsContent>

                <TabsContent value="distributors" className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                      {
                        name: "Compras por Mayor y Distribución a Gran Escala",
                        orders: 234,
                        amount: "S/ 1,250,000",
                        icon: Truck,
                      },
                      {
                        name: "Distribución Especializada a Clientes Específicos",
                        orders: 123,
                        amount: "S/ 678,900",
                        icon: Target,
                      },
                    ].map((category, index) => {
                      const Icon = category.icon
                      return (
                        <Card
                          key={index}
                          className="border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300"
                        >
                          <CardContent className="p-6">
                            <div className="flex items-center justify-between mb-4">
                              <div className="p-3 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl">
                                <Icon className="h-6 w-6 text-white" />
                              </div>
                              <Badge variant="secondary">{category.orders} órdenes</Badge>
                            </div>
                            <h3 className="font-semibold text-slate-900 mb-2">{category.name}</h3>
                            <p className="text-lg font-bold text-green-600">{category.amount}</p>
                          </CardContent>
                        </Card>
                      )
                    })}
                  </div>
                </TabsContent>
              </Tabs>

              {/* Recent Purchase Orders */}
              <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle>Órdenes de Compra Recientes</CardTitle>
                  <CardDescription>Últimas órdenes procesadas en el sistema</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      {
                        id: "OC001",
                        supplier: "Distribuidora Central S.A.C.",
                        amount: "S/ 45,000",
                        status: "Aprobada",
                        date: "2025-01-20",
                      },
                      {
                        id: "OC002",
                        supplier: "Mayorista Industrial E.I.R.L.",
                        amount: "S/ 23,500",
                        status: "Pendiente",
                        date: "2025-01-18",
                      },
                      {
                        id: "OC003",
                        supplier: "Suministros Globales S.R.L.",
                        amount: "S/ 67,800",
                        status: "En Proceso",
                        date: "2025-01-15",
                      },
                    ].map((order, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-6 bg-slate-50/50 rounded-lg hover:bg-slate-100/50 transition-colors"
                      >
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-2">
                            <h3 className="font-semibold text-slate-900">{order.supplier}</h3>
                            <Badge
                              variant={
                                order.status === "Aprobada"
                                  ? "default"
                                  : order.status === "Pendiente"
                                    ? "destructive"
                                    : "secondary"
                              }
                            >
                              {order.status}
                            </Badge>
                          </div>
                          <div className="flex items-center space-x-4 text-sm text-slate-600">
                            <span>ID: {order.id}</span>
                            <span>Monto: {order.amount}</span>
                            <span>Fecha: {order.date}</span>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Button variant="ghost" size="sm">
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {activeModule === "reports" && (
            <div className="space-y-8">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-3xl font-bold text-slate-900">Centro de Reportes</h2>
                  <p className="text-slate-600 mt-1">Generación y gestión de informes empresariales</p>
                </div>
                <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-lg">
                  <Plus className="h-4 w-4 mr-2" />
                  Generar Reporte
                </Button>
              </div>

              <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle>Reportes Generados Recientemente</CardTitle>
                  <CardDescription>
                    Acceda a sus reportes más recientes o genere nuevos informes personalizados.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                    {[
                      {
                        title: "Reporte Mensual de Ventas",
                        period: "Julio 2025",
                        generatedBy: "Juan Pérez",
                        date: "2025-07-23",
                      },
                      {
                        title: "Análisis de Costos de Proyecto X",
                        period: "Construcción Fase 1",
                        generatedBy: "Equipo de Finanzas",
                        date: "2025-07-20",
                      },
                      {
                        title: "Estado de Cuentas por Cobrar",
                        period: "Semanal",
                        generatedBy: "Contabilidad",
                        date: "2025-07-19",
                      },
                    ].map((report, index) => (
                      <Card key={index} className="border border-slate-200 hover:shadow-md transition-shadow">
                        <CardContent className="p-6">
                          <h3 className="font-semibold text-slate-900 mb-2">{report.title}</h3>
                          <div className="space-y-1 text-sm text-slate-600 mb-4">
                            <p>Período: {report.period}</p>
                            <p>Generado por: {report.generatedBy}</p>
                            <p className="text-xs text-slate-500">{report.date}</p>
                          </div>
                          <Button variant="outline" size="sm" className="w-full bg-transparent">
                            <Download className="h-4 w-4 mr-2" />
                            Descargar
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>

                  <div className="text-center">
                    <Button variant="outline" className="bg-blue-50 text-blue-600 border-blue-200 hover:bg-blue-100">
                      VER TODOS LOS REPORTES
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Report Categories */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { name: "Reportes Financieros", icon: DollarSign, count: 23, color: "from-green-500 to-emerald-500" },
                  { name: "Reportes de Proyectos", icon: FolderOpen, count: 18, color: "from-blue-500 to-indigo-500" },
                  { name: "Reportes de Inventario", icon: Package, count: 15, color: "from-purple-500 to-pink-500" },
                  { name: "Reportes de Proveedores", icon: Users, count: 12, color: "from-orange-500 to-red-500" },
                ].map((category, index) => {
                  const Icon = category.icon
                  return (
                    <Card
                      key={index}
                      className="border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300"
                    >
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-4">
                          <div className={`p-3 bg-gradient-to-br ${category.color} rounded-xl`}>
                            <Icon className="h-6 w-6 text-white" />
                          </div>
                          <Badge variant="secondary">{category.count} reportes</Badge>
                        </div>
                        <h3 className="font-semibold text-slate-900 mb-2">{category.name}</h3>
                        <Button size="sm" variant="outline" className="w-full bg-transparent">
                          Ver Reportes
                        </Button>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>
            </div>
          )}

          {activeModule === "support" && (
            <div className="space-y-8">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-3xl font-bold text-slate-900">Centro de Soporte</h2>
                  <p className="text-slate-600 mt-1">Recursos de ayuda y asistencia técnica</p>
                </div>
                <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-lg">
                  <Plus className="h-4 w-4 mr-2" />
                  Crear Ticket
                </Button>
              </div>

              <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle>Guías en Video</CardTitle>
                  <CardDescription>
                    Aprenda visualmente con nuestros tutoriales en video, desde lo básico hasta funcionalidades
                    avanzadas.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                      {
                        title: "Introducción a la Plataforma",
                        description: "Recorrido rápido por la interfaz y funciones principales.",
                        duration: "5:30",
                      },
                      {
                        title: "Gestión de Compras",
                        description: "Creación y seguimiento de órdenes de compra.",
                        duration: "8:45",
                      },
                      {
                        title: "Configuración de Inventario",
                        description: "Configurar alertas y gestionar stock de productos.",
                        duration: "6:20",
                      },
                      {
                        title: "Reportes Avanzados",
                        description: "Generar y personalizar reportes empresariales.",
                        duration: "10:15",
                      },
                    ].map((video, index) => (
                      <Card key={index} className="border border-slate-200 hover:shadow-md transition-shadow">
                        <CardContent className="p-0">
                          <div className="h-48 bg-gradient-to-br from-slate-200 to-slate-300 rounded-t-lg flex items-center justify-center">
                            <div className="w-16 h-16 bg-slate-400 rounded-full flex items-center justify-center">
                              <div className="w-0 h-0 border-l-[12px] border-l-white border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent ml-1"></div>
                            </div>
                          </div>
                          <div className="p-6">
                            <h3 className="font-semibold text-slate-900 mb-2">{video.title}</h3>
                            <p className="text-sm text-slate-600 mb-3">{video.description}</p>
                            <div className="flex items-center justify-between">
                              <span className="text-xs text-slate-500">Duración: {video.duration}</span>
                              <Button variant="link" className="text-blue-600 p-0 h-auto">
                                Ver Video
                              </Button>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Support Options */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                  <CardContent className="p-6 text-center">
                    <div className="p-3 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-xl w-fit mx-auto mb-4">
                      <MessageCircle className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="font-semibold text-slate-900 mb-2">Chat en Vivo</h3>
                    <p className="text-sm text-slate-600 mb-4">Asistencia inmediata con nuestro equipo de soporte</p>
                    <Button className="w-full">Iniciar Chat</Button>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                  <CardContent className="p-6 text-center">
                    <div className="p-3 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl w-fit mx-auto mb-4">
                      <FileText className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="font-semibold text-slate-900 mb-2">Base de Conocimientos</h3>
                    <p className="text-sm text-slate-600 mb-4">Artículos y guías detalladas para resolver dudas</p>
                    <Button variant="outline" className="w-full bg-transparent">
                      Explorar
                    </Button>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                  <CardContent className="p-6 text-center">
                    <div className="p-3 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl w-fit mx-auto mb-4">
                      <HelpCircle className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="font-semibold text-slate-900 mb-2">Tickets de Soporte</h3>
                    <p className="text-sm text-slate-600 mb-4">Cree un ticket para problemas específicos</p>
                    <Button variant="outline" className="w-full bg-transparent">
                      Crear Ticket
                    </Button>
                  </CardContent>
                </Card>
              </div>

              {/* FAQ Section */}
              <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle>Preguntas Frecuentes</CardTitle>
                  <CardDescription>Respuestas a las consultas más comunes de nuestros usuarios</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      {
                        question: "¿Cómo configuro las alertas de inventario?",
                        answer:
                          "Puede configurar las alertas desde el módulo de Inventario, estableciendo niveles mínimos para cada producto.",
                      },
                      {
                        question: "¿Puedo exportar los reportes a Excel?",
                        answer:
                          "Sí, todos los reportes pueden exportarse en formatos PDF, Excel y CSV desde el Centro de Reportes.",
                      },
                      {
                        question: "¿Cómo agrego nuevos proveedores al sistema?",
                        answer:
                          "Vaya al módulo de Proveedores y haga clic en 'Nuevo Proveedor' para registrar la información completa.",
                      },
                    ].map((faq, index) => (
                      <div key={index} className="p-4 bg-slate-50/50 rounded-lg">
                        <h4 className="font-semibold text-slate-900 mb-2">{faq.question}</h4>
                        <p className="text-sm text-slate-600">{faq.answer}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </main>
      </div>
    </div>
  )
}
