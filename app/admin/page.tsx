"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/hooks/use-toast"
import { Users, CheckCircle, Clock, XCircle, Search, Eye, Filter, Download, RefreshCw, DollarSign, Calendar, MapPin, Phone, Mail, Hash, Building2 } from "lucide-react"
import { ImageDisplay } from "@/components/ImageDisplay"

interface User {
  id: string
  name: string
  email: string
  country: string
  phoneNumber?: string
  isIEEEMember: boolean
  ieeeNumber?: string
  needsAccommodation: boolean
  paymentStatus: 'UNPAID' | 'PENDING' | 'APPROVED'
  receiptUrl?: string
  createdAt: string
}

export default function AdminPage() {
  const [users, setUsers] = useState<User[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState("")
  const [filterStatus, setFilterStatus] = useState<string>("all")
  const [sortBy, setSortBy] = useState<string>("newest")
  const [adminEmail, setAdminEmail] = useState("")
  const [adminPassword, setAdminPassword] = useState("")
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const { toast } = useToast()

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'APPROVED':
        return 'bg-green-100 text-green-800 border-green-200'
      case 'PENDING':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200'
      case 'UNPAID':
        return 'bg-red-100 text-red-800 border-red-200'
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200'
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'APPROVED':
        return <CheckCircle className="w-4 h-4" />
      case 'PENDING':
        return <Clock className="w-4 h-4" />
      case 'UNPAID':
        return <XCircle className="w-4 h-4" />
      default:
        return null
    }
  }

  const calculatePrice = (user: User) => {
    if (user.needsAccommodation) {
      return 450
    }
    return user.isIEEEMember ? 150 : 200
  }

  const handleLogin = () => {
    // For demo purposes, use hardcoded credentials
    if (adminEmail === "admin@wie-summit.com" && adminPassword === "admin123") {
      setIsAuthenticated(true)
      fetchUsers()
    } else {
      toast({
        title: "Authentication Failed",
        description: "Invalid admin credentials",
        variant: "destructive",
      })
    }
  }

  const fetchUsers = async () => {
    try {
      const response = await fetch('/api/admin/users', {
        headers: {
          'x-admin-email': adminEmail,
          'x-admin-password': adminPassword,
        },
      })

      if (response.ok) {
        const data = await response.json()
        setUsers(data)
      } else {
        toast({
          title: "Error",
          description: "Failed to fetch users",
          variant: "destructive",
        })
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Network error occurred",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  const approveUser = async (userId: string) => {
    try {
      const response = await fetch(`/api/admin/approve/${userId}`, {
        method: 'POST',
        headers: {
          'x-admin-email': adminEmail,
          'x-admin-password': adminPassword,
        },
      })

      if (response.ok) {
        toast({
          title: "Success",
          description: "User payment approved",
        })
        fetchUsers() // Refresh the list
      } else {
        toast({
          title: "Error",
          description: "Failed to approve user",
          variant: "destructive",
        })
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Network error occurred",
        variant: "destructive",
      })
    }
  }

  const filteredUsers = users.filter(user => {
    const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.country.toLowerCase().includes(searchTerm.toLowerCase())
    
    const matchesStatus = filterStatus === "all" || user.paymentStatus === filterStatus
    
    return matchesSearch && matchesStatus
  }).sort((a, b) => {
    if (sortBy === "newest") {
      return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    } else if (sortBy === "oldest") {
      return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
    } else if (sortBy === "name") {
      return a.name.localeCompare(b.name)
    } else if (sortBy === "amount") {
      return calculatePrice(b) - calculatePrice(a)
    }
    return 0
  })

  const stats = {
    total: users.length,
    unpaid: users.filter(u => u.paymentStatus === 'UNPAID').length,
    pending: users.filter(u => u.paymentStatus === 'PENDING').length,
    approved: users.filter(u => u.paymentStatus === 'APPROVED').length,
    totalRevenue: users.filter(u => u.paymentStatus === 'APPROVED').reduce((sum, u) => sum + calculatePrice(u), 0),
    ieeeMembers: users.filter(u => u.isIEEEMember).length,
    withAccommodation: users.filter(u => u.needsAccommodation).length,
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="text-2xl font-heading font-bold text-purple-800 text-center">
              Admin Login
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Admin Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={adminEmail}
                  onChange={(e) => setAdminEmail(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter password"
                  value={adminPassword}
                  onChange={(e) => setAdminPassword(e.target.value)}
                />
              </div>
              <Button onClick={handleLogin} className="w-full">
                Login
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container-custom">
        <div className="mb-8">
          <h1 className="text-3xl font-heading font-bold text-purple-800 mb-2">Admin Dashboard</h1>
          <p className="text-gray-600">Manage registrations and payments for IEEE WIE Summit 2025</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Registrations</p>
                  <p className="text-2xl font-bold text-purple-800">{stats.total}</p>
                </div>
                <Users className="h-8 w-8 text-purple-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Pending Approval</p>
                  <p className="text-2xl font-bold text-yellow-800">{stats.pending}</p>
                </div>
                <Clock className="h-8 w-8 text-yellow-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Approved</p>
                  <p className="text-2xl font-bold text-green-800">{stats.approved}</p>
                </div>
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Revenue</p>
                  <p className="text-2xl font-bold text-purple-800">${stats.totalRevenue}</p>
                </div>
                <DollarSign className="h-8 w-8 text-purple-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Filters and Search */}
        <Card className="mb-6">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <Label htmlFor="search" className="flex items-center mb-2">
                  <Search className="w-4 h-4 mr-2" />
                  Search Users
                </Label>
                <Input
                  id="search"
                  placeholder="Search by name, email, or country..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div className="md:w-48">
                <Label className="flex items-center mb-2">
                  <Filter className="w-4 h-4 mr-2" />
                  Filter by Status
                </Label>
                <Select value={filterStatus} onValueChange={setFilterStatus}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Status</SelectItem>
                    <SelectItem value="UNPAID">Unpaid</SelectItem>
                    <SelectItem value="PENDING">Pending</SelectItem>
                    <SelectItem value="APPROVED">Approved</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="md:w-48">
                <Label className="flex items-center mb-2">
                  <Calendar className="w-4 h-4 mr-2" />
                  Sort By
                </Label>
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="newest">Newest First</SelectItem>
                    <SelectItem value="oldest">Oldest First</SelectItem>
                    <SelectItem value="name">Name A-Z</SelectItem>
                    <SelectItem value="amount">Amount High-Low</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex items-end">
                <Button onClick={fetchUsers} variant="outline" className="flex items-center">
                  <RefreshCw className="w-4 h-4 mr-2" />
                  Refresh
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Users List */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>Registrations ({filteredUsers.length})</span>
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <span>IEEE Members: {stats.ieeeMembers}</span>
                <span>•</span>
                <span>With Accommodation: {stats.withAccommodation}</span>
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent>
            {isLoading ? (
              <div className="text-center py-8">
                <p>Loading users...</p>
              </div>
            ) : (
              <div className="space-y-4">
                {filteredUsers.map((user) => (
                  <div
                    key={user.id}
                    className="border rounded-lg p-6 hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <h3 className="text-lg font-semibold text-gray-900">{user.name}</h3>
                            <div className="flex items-center space-x-4 text-sm text-gray-600 mt-1">
                              <div className="flex items-center">
                                <Mail className="w-4 h-4 mr-1" />
                                {user.email}
                              </div>
                              <div className="flex items-center">
                                <MapPin className="w-4 h-4 mr-1" />
                                {user.country}
                              </div>
                              {user.phoneNumber && (
                                <div className="flex items-center">
                                  <Phone className="w-4 h-4 mr-1" />
                                  {user.phoneNumber}
                                </div>
                              )}
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-lg font-bold text-purple-800">
                              ${calculatePrice(user)} USD
                            </div>
                            <div className="text-sm text-gray-500">
                              {new Date(user.createdAt).toLocaleDateString()}
                            </div>
                          </div>
                        </div>

                        <div className="flex flex-wrap items-center gap-2 mb-3">
                          <Badge className={getStatusColor(user.paymentStatus)}>
                            <div className="flex items-center space-x-1">
                              {getStatusIcon(user.paymentStatus)}
                              <span>{user.paymentStatus}</span>
                            </div>
                          </Badge>
                          
                          {user.isIEEEMember && (
                            <Badge variant="outline" className="bg-blue-50 text-blue-800 border-blue-200">
                              <Hash className="w-3 h-3 mr-1" />
                              IEEE Member
                            </Badge>
                          )}
                          
                          {user.needsAccommodation && (
                            <Badge variant="outline" className="bg-yellow-50 text-yellow-800 border-yellow-200">
                              <Building2 className="w-3 h-3 mr-1" />
                              Accommodation
                            </Badge>
                          )}
                        </div>

                        {user.ieeeNumber && (
                          <div className="text-sm text-gray-600">
                            <strong>IEEE Number:</strong> {user.ieeeNumber}
                          </div>
                        )}
                      </div>

                      <div className="flex items-center space-x-2">
                        <ImageDisplay 
                          receiptUrl={user.receiptUrl || ''} 
                          alt={`Receipt for ${user.name}`}
                          className="w-20"
                        />
                        
                        {user.paymentStatus === 'PENDING' && (
                          <Button
                            size="sm"
                            onClick={() => approveUser(user.id)}
                            className="bg-green-600 hover:bg-green-700"
                          >
                            <CheckCircle className="w-4 h-4 mr-2" />
                            Approve
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
                
                {filteredUsers.length === 0 && (
                  <div className="text-center py-8">
                    <p className="text-gray-500">No users found matching your criteria</p>
                  </div>
                )}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}