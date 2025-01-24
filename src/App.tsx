import React from 'react';
import { Card, Container, Row, Col, Badge } from 'react-bootstrap';
import {
  Phone,
  Mail,
  Globe,
  MapPin,
  Facebook,
  Instagram,
  Youtube,
  MessageCircle,
  Map,
  Building2,
  Sparkles,
  Award
} from 'lucide-react';

const businessData = {
  companyName: "TechVision Solutions",
  userName: "Sarah Anderson",
  role: "Senior Software Architect",
  tagline: "Transforming Ideas into Digital Reality",
  location: "San Francisco, CA",
  email: "sarah@techvision.com",
  website: "www.techvision.com",
  phone: "+1 (555) 123-4567",
  whatsapp: "+1 (555) 123-4567",
  googleMap: "https://goo.gl/maps/example",
  address: "123 Innovation Street, San Francisco, CA 94105",
  products: [
    {
      productName: "Cloud Solutions",
      productPrice: "$499/month",
      productType: "Enterprise",
      productImage: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=120",
      highlight: "Most Popular"
    },
    {
      productName: "AI Integration",
      productPrice: "$299/month",
      productType: "Business",
      productImage: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=120",
      highlight: "Best Value"
    }
  ],
  socialMedia: {
    facebook: "https://facebook.com/techvision",
    instagram: "https://instagram.com/techvision",
    youtube: "https://youtube.com/techvision",
    googleBusiness: "https://business.google.com/techvision"
  }
};

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-blue-50 to-emerald-50 py-2">
      <Container className="py-4">
        <Row className="justify-content-center">
          <Col xs={12} md={8} lg={6}>
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              {/* Header */}
              <div className="relative h-52 bg-gradient-to-r from-violet-600 via-blue-600 to-emerald-600 p-6">
                <div className="absolute top-0 left-0 w-full h-full">
                  <div className="absolute w-20 h-20 bg-white/10 rounded-full -top-10 -left-10"></div>
                  <div className="absolute w-16 h-16 bg-white/10 rounded-full top-20 right-10"></div>
                </div>
                <Card.Body className="absolute bottom-0 left-0 right-0 p-6 transform translate-y">
                  <Card className="border-0 shadow-lg backdrop-blur-lg bg-white/90">
                    <Card.Body>
                      <div className="d-flex align-items-center gap-2 mb-1">
                        <Sparkles className="w-5 h-5 text-violet-500" />
                        <h1 className="text-2xl font-bold bg-gradient-to-r from-violet-600 to-blue-600 bg-clip-text text-transparent m-0">
                          {businessData.companyName}
                        </h1>
                      </div>
                      <p className="text-gray-600 font-medium mb-0">{businessData.userName}</p>
                      <p className="text-sm text-emerald-600 font-medium">{businessData.role}</p>
                      <p className="text-xs text-gray-500 mt-1 mb-0">{businessData.tagline}</p>
                    </Card.Body>
                  </Card>
                </Card.Body>
              </div>

              <Card.Body className="">
                {/* Contact Information */}
                <div className="">
                  <ContactItem 
                    icon={<MapPin className="w-4 h-4 text-red-500" />} 
                    text={businessData.location} 
                    bgColor="hover:bg-red-50"
                  />
                  <ContactItem 
                    icon={<Mail className="w-4 h-4 text-blue-500" />} 
                    text={businessData.email} 
                    bgColor="hover:bg-blue-50"
                  />
                  <ContactItem 
                    icon={<Globe className="w-4 h-4 text-emerald-500" />} 
                    text={businessData.website} 
                    bgColor="hover:bg-emerald-50"
                  />
                  <ContactItem 
                    icon={<Phone className="w-4 h-4 text-violet-500" />} 
                    text={businessData.phone} 
                    bgColor="hover:bg-violet-50"
                  />
                  <ContactItem 
                    icon={<MessageCircle className="w-4 h-4 text-green-500" />} 
                    text={businessData.whatsapp} 
                    bgColor="hover:bg-green-50"
                  />
                  <ContactItem 
                    icon={<Map className="w-4 h-4 text-indigo-500" />} 
                    text="View on Google Maps" 
                    link={businessData.googleMap}
                    bgColor="hover:bg-indigo-50"
                  />
                  <ContactItem 
                    icon={<Building2 className="w-5 h-5 text-orange-500" />} 
                    text={businessData.address} 
                    bgColor="hover:bg-orange-50"
                  />
                </div>

                {/* Products Section */}
                <div className="mt-4">
                  <div className="d-flex align-items-center gap-2 mb-4">
                    <Award className="w-6 h-6 text-violet-500" />
                    <h2 className="text-xl font-semibold text-gray-800 mb-0">Our Products</h2>
                  </div>
                  <Row className="g-4">
                    {businessData.products.map((product, index) => (
                      <Col xs={12} key={index}>
                        <Card className="border hover:border-violet-200 transition-all duration-300">
                          <Card.Body className="position-relative">
                            {product.highlight && (
                              <Badge bg="primary" className="position-absolute top-0 end-0 translate-middle">
                                {product.highlight}
                              </Badge>
                            )}
                            <div className="d-flex align-items-center gap-4">
                              <img
                                src={product.productImage}
                                alt={product.productName}
                                className="w-16 h-16 rounded-lg object-cover shadow-md group-hover:scale-105 transition-transform duration-300"
                              />
                              <div>
                                <h3 className="font-medium text-gray-800 group-hover:text-violet-600 transition-colors">
                                  {product.productName}
                                </h3>
                                <p className="text-blue-600 font-medium mb-0">{product.productPrice}</p>
                                <p className="text-sm text-gray-600 mb-0">{product.productType}</p>
                              </div>
                            </div>
                          </Card.Body>
                        </Card>
                      </Col>
                    ))}
                  </Row>
                </div>

                {/* Social Media */}
                <div className="d-flex justify-content-center gap-4 mt-4 pt-6 border-top">
                  <SocialButton 
                    icon={<Facebook className="w-5 h-5" />} 
                    href={businessData.socialMedia.facebook} 
                    color="hover:bg-blue-100 text-blue-600 hover:scale-110" 
                  />
                  <SocialButton 
                    icon={<Instagram className="w-5 h-5" />} 
                    href={businessData.socialMedia.instagram} 
                    color="hover:bg-pink-100 text-pink-600 hover:scale-110" 
                  />
                  <SocialButton 
                    icon={<Youtube className="w-5 h-5" />} 
                    href={businessData.socialMedia.youtube} 
                    color="hover:bg-red-100 text-red-600 hover:scale-110" 
                  />
                </div>

                {/* Footer */}
                <div className="text-center text-sm text-gray-500 mt-4">
                  © {new Date().getFullYear()} {businessData.companyName}. All rights reserved.
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

const ContactItem = ({ 
  icon, 
  text, 
  link, 
  bgColor 
}: { 
  icon: React.ReactNode; 
  text: string; 
  link?: string; 
  bgColor: string;
}) => {
  const content = (
    <div className={`d-flex align-items-center gap-3 text-gray-700 p-3 rounded-lg ${bgColor} transition-all duration-300 hover:scale-[1.02]`}>
      {icon}
      <span className="font-medium">{text}</span>
    </div>
  );

  return link ? (
    <a href={link} target="_blank" rel="noopener noreferrer" className="text-decoration-none d-block">
      {content}
    </a>
  ) : (
    content
  );
};

const SocialButton = ({ 
  icon, 
  href, 
  color 
}: { 
  icon: React.ReactNode; 
  href: string; 
  color: string;
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={`p-3 rounded-full transition-all duration-300 ${color} shadow-sm hover:shadow-md`}
  >
    {icon}
  </a>
);

export default App;