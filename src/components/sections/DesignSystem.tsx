import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Heart, Activity, Shield, Plus } from 'lucide-react';

const DesignSystem = () => {
  const brandTokens = {
    gradients: {
      primary: 'bg-gradient-to-r from-[#26652C] to-[#4EC989]',
      secondary: 'bg-gradient-to-r from-[#8FD5CA] to-[#BBE2BB]',
      surface: 'bg-gradient-to-b from-[#FFF8F0] to-[#F5F9F9]',
      hover: 'bg-gradient-to-r from-[#1A5B5D] to-[#3B9A69]'
    },
    colors: {
      primary: {
        main: '#26652C',      // Deep Green - Primary brand color
        secondary: '#8FD5CA',  // Sage Green - Secondary interactions
        accent: '#EAD0AD',    // Cream - Accent elements
        background: '#FFF8F0' // Off White - Background
      },
      supporting: {
        peach: '#FFB69E',     // Accent color for alerts/highlights
        lime: '#86C34E',      // Success states
        turquoise: '#4EC989', // Progress indicators
        mint: '#BBE2BB'       // Subtle backgrounds
      }
    },
    typography: {
      heading: {
        h1: {
          size: '48px',
          weight: '700',
          lineHeight: '56px',
          letterSpacing: '-0.02em',
          font: '"Plus Jakarta Sans", serif'
        },
        h2: {
          size: '40px',
          weight: '700',
          lineHeight: '48px',
          letterSpacing: '-0.01em',
          font: '"Plus Jakarta Sans", serif'
        },
        h3: {
          size: '32px',
          weight: '600',
          lineHeight: '40px',
          font: '"Plus Jakarta Sans", serif'
        }
      },
      body: {
        large: {
          size: '18px',
          lineHeight: '28px',
          font: 'Inter, sans-serif'
        },
        regular: {
          size: '16px',
          lineHeight: '24px',
          font: 'Inter, sans-serif'
        },
        small: {
          size: '14px',
          lineHeight: '20px',
          font: 'Inter, sans-serif'
        }
      }
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-8 space-y-16">
      {/* Brand Identity */}
      <section>
        <h2 className="text-3xl font-bold text-[#26652C] mb-8">Brand Identity</h2>
        
        {/* Logo Usage */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Logo Usage</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="font-medium mb-4">Primary Logo</h3>
              <div className="bg-[#FFF8F0] p-8 rounded-lg flex items-center justify-center">
                <img src="/api/placeholder/200/80" alt="Ninva Logo" className="h-12" />
              </div>
            </div>
            <div>
              <h3 className="font-medium mb-4">Logo Guidelines</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Minimum clear space: Equal to logo height</li>
                <li>• Minimum size: 24px height</li>
                <li>• Use SVG format when possible</li>
                <li>• Avoid stretching or modifying proportions</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Color System */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Color System</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-8">
              {/* Primary Colors */}
              <div>
                <h3 className="font-medium mb-4">Primary Colors</h3>
                <div className="space-y-4">
                  {Object.entries(brandTokens.colors.primary).map(([name, color]) => (
                    <div key={name} className="flex items-center gap-4">
                      <div 
                        className="w-16 h-16 rounded-lg"
                        style={{ backgroundColor: color }}
                      />
                      <div>
                        <p className="font-medium capitalize">{name}</p>
                        <p className="text-sm text-gray-500">{color}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Supporting Colors */}
              <div>
                <h3 className="font-medium mb-4">Supporting Colors</h3>
                <div className="space-y-4">
                  {Object.entries(brandTokens.colors.supporting).map(([name, color]) => (
                    <div key={name} className="flex items-center gap-4">
                      <div 
                        className="w-16 h-16 rounded-lg"
                        style={{ backgroundColor: color }}
                      />
                      <div>
                        <p className="font-medium capitalize">{name}</p>
                        <p className="text-sm text-gray-500">{color}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Typography */}
        <Card>
          <CardHeader>
            <CardTitle>Typography System</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-8">
              {/* Headings */}
              <div>
                <h3 className="font-medium mb-4">Headings</h3>
                <div className="space-y-6">
                  {Object.entries(brandTokens.typography.heading).map(([level, styles]) => (
                    <div key={level}>
                      <div style={{
                        fontFamily: styles.font,
                        fontSize: styles.size,
                        lineHeight: styles.lineHeight,
                        fontWeight: styles.weight
                      }}>
                        {level.toUpperCase()} - The quick brown fox
                      </div>
                      <p className="text-sm text-gray-500 mt-1">
                        {styles.size} / {styles.lineHeight} / {styles.weight}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Body Text */}
              <div>
                <h3 className="font-medium mb-4">Body Text</h3>
                <div className="space-y-6">
                  {Object.entries(brandTokens.typography.body).map(([size, styles]) => (
                    <div key={size}>
                      <p style={{
                        fontFamily: styles.font,
                        fontSize: styles.size,
                        lineHeight: styles.lineHeight
                      }}>
                        {size.charAt(0).toUpperCase() + size.slice(1)} - The quick brown fox jumps over the lazy dog
                      </p>
                      <p className="text-sm text-gray-500 mt-1">
                        {styles.size} / {styles.lineHeight}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Gradient System */}
      <section>
        <h2 className="text-3xl font-bold text-[#26652C] mb-8">Gradient System</h2>
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Gradient Patterns</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-6">
              {Object.entries(brandTokens.gradients).map(([name, gradient]) => (
                <div key={name} className="space-y-2">
                  <div className={`h-24 rounded-lg ${gradient}`}></div>
                  <p className="font-medium capitalize">{name}</p>
                  <p className="text-sm text-gray-500">Used for {name === 'primary' ? 'main CTAs and important elements' : 
                    name === 'secondary' ? 'supporting elements and cards' :
                    name === 'surface' ? 'page backgrounds and sections' : 
                    'interactive hover states'}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Authentication Components */}
      <section>
        <h2 className="text-3xl font-bold text-[#26652C] mb-8">Authentication Components</h2>
        
        {/* Login Form */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Login Form</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="max-w-md">
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Email</label>
                  <input 
                    type="email" 
                    placeholder="Enter your email"
                    className="w-full p-2 border rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Password</label>
                  <input 
                    type="password" 
                    placeholder="Enter your password"
                    className="w-full p-2 border rounded-lg"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span className="text-sm">Remember me</span>
                  </label>
                  <a href="#" className="text-sm text-[#26652C]">Forgot password?</a>
                </div>
                <Button className={`w-full ${brandTokens.gradients.primary}`}>
                  Sign In
                </Button>
              </form>
            </div>
          </CardContent>
        </Card>

        {/* Sign Up Form */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Sign Up Form</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="max-w-md">
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">First Name</label>
                    <input 
                      type="text" 
                      placeholder="First name"
                      className="w-full p-2 border rounded-lg"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Last Name</label>
                    <input 
                      type="text" 
                      placeholder="Last name"
                      className="w-full p-2 border rounded-lg"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Email</label>
                  <input 
                    type="email" 
                    placeholder="Enter your email"
                    className="w-full p-2 border rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Password</label>
                  <input 
                    type="password" 
                    placeholder="Create a password"
                    className="w-full p-2 border rounded-lg"
                  />
                </div>
                <div>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span className="text-sm">I agree to the Terms and Privacy Policy</span>
                  </label>
                </div>
                <Button className={`w-full ${brandTokens.gradients.primary}`}>
                  Create Account
                </Button>
              </form>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Header & Footer */}
      <section>
        <h2 className="text-3xl font-bold text-[#26652C] mb-8">Header & Footer</h2>
        
        {/* Header */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Header Variations</CardTitle>
          </CardHeader>
          <CardContent>
            {/* Simple Header */}
            <div className="mb-8">
              <h3 className="font-medium mb-4">Simple Header</h3>
              <div className="bg-white p-4 rounded-lg">
                <div className="flex justify-between items-center">
                  <img src="/api/placeholder/120/40" alt="Logo" className="h-8" />
                  <nav className="hidden md:flex space-x-6">
                    <a href="#" className="text-gray-600 hover:text-[#26652C]">Home</a>
                    <a href="#" className="text-gray-600 hover:text-[#26652C]">Features</a>
                    <a href="#" className="text-gray-600 hover:text-[#26652C]">About</a>
                    <a href="#" className="text-gray-600 hover:text-[#26652C]">Contact</a>
                  </nav>
                  <div className="flex items-center space-x-4">
                    <Button variant="outline">Sign In</Button>
                    <Button className={brandTokens.gradients.primary}>Sign Up</Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Full Header */}
            <div>
              <h3 className="font-medium mb-4">Full Header with Dropdown</h3>
              <div className="bg-white p-4 rounded-lg">
                <div className="flex justify-between items-center">
                  <img src="/api/placeholder/120/40" alt="Logo" className="h-8" />
                  <nav className="hidden md:flex space-x-6">
                    <div className="relative group">
                      <button className="text-gray-600 hover:text-[#26652C]">Products</button>
                      <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg hidden group-hover:block">
                        <div className="p-2">
                          <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded">Product 1</a>
                          <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded">Product 2</a>
                          <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded">Product 3</a>
                        </div>
                      </div>
                    </div>
                    <a href="#" className="text-gray-600 hover:text-[#26652C]">Solutions</a>
                    <a href="#" className="text-gray-600 hover:text-[#26652C]">Resources</a>
                    <a href="#" className="text-gray-600 hover:text-[#26652C]">Enterprise</a>
                  </nav>
                  <div className="flex items-center space-x-4">
                    <Button variant="outline">Sign In</Button>
                    <Button className={brandTokens.gradients.primary}>Get Started</Button>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <Card>
          <CardHeader>
            <CardTitle>Footer</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-white rounded-lg p-8">
              <div className="grid grid-cols-4 gap-8 mb-8">
                <div>
                  <img src="/api/placeholder/120/40" alt="Logo" className="h-8 mb-6" />
                  <p className="text-gray-600 text-sm">Empowering healthcare through advanced technology and intuitive design.</p>
                </div>
                {['Product', 'Company', 'Resources', 'Legal'].map((section) => (
                  <div key={section}>
                    <h3 className="font-semibold mb-4">{section}</h3>
                    <ul className="space-y-2">
                      {[1, 2, 3].map((item) => (
                        <li key={item}>
                          <a href="#" className="text-gray-600 hover:text-[#26652C] text-sm">
                            {section} Link {item}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <div className="border-t pt-8 flex justify-between items-center">
                <p className="text-sm text-gray-600">© 2024 Ninva Health. All rights reserved.</p>
                <div className="flex space-x-6">
                  <a href="#" className="text-gray-600 hover:text-[#26652C]">Twitter</a>
                  <a href="#" className="text-gray-600 hover:text-[#26652C]">LinkedIn</a>
                  <a href="#" className="text-gray-600 hover:text-[#26652C]">Instagram</a>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Component Examples */}
      <section>
        <h2 className="text-3xl font-bold text-[#26652C] mb-8">Component Examples</h2>

        {/* Button System */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Button System</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-8">
              {/* Primary Buttons */}
              <div>
                <h3 className="font-medium mb-4">Primary Buttons</h3>
                <div className="flex gap-4">
                  <Button className="bg-[#26652C] hover:bg-[#26652C]/90">
                    Primary Button
                  </Button>
                  <Button className="bg-[#26652C] hover:bg-[#26652C]/90" disabled>
                    Disabled
                  </Button>
                  <Button className="bg-[#26652C] hover:bg-[#26652C]/90">
                    <Heart className="w-4 h-4 mr-2" />
                    With Icon
                  </Button>
                </div>
              </div>

              {/* Secondary Buttons */}
              <div>
                <h3 className="font-medium mb-4">Secondary Buttons</h3>
                <div className="flex gap-4">
                  <Button variant="outline" className="border-[#26652C] text-[#26652C]">
                    Secondary Button
                  </Button>
                  <Button variant="outline" className="border-[#26652C] text-[#26652C]" disabled>
                    Disabled
                  </Button>
                  <Button variant="outline" className="border-[#26652C] text-[#26652C]">
                    <Plus className="w-4 h-4 mr-2" />
                    With Icon
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Card Examples */}
        <Card>
          <CardHeader>
            <CardTitle>Card System</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-3 gap-6">
              {/* Standard Card */}
              <Card className="bg-white">
                <CardContent className="p-6">
                  <Heart className="w-8 h-8 text-[#26652C] mb-4" />
                  <h3 className="font-medium mb-2">Standard Card</h3>
                  <p className="text-gray-600">Basic card layout for content display</p>
                </CardContent>
              </Card>

              {/* Feature Card */}
              <Card className="bg-[#FFF8F0]">
                <CardContent className="p-6">
                  <Activity className="w-8 h-8 text-[#26652C] mb-4" />
                  <h3 className="font-medium mb-2">Feature Card</h3>
                  <p className="text-gray-600">Highlighted card for important features</p>
                </CardContent>
              </Card>

              {/* Interactive Card */}
              <Card className="bg-white hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-6">
                  <Shield className="w-8 h-8 text-[#26652C] mb-4" />
                  <h3 className="font-medium mb-2">Interactive Card</h3>
                  <p className="text-gray-600">Card with hover and click states</p>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
};

export default DesignSystem;
