import Image from 'next/image';
import { Shield, Flame, Zap, Award, CheckCircle, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { StaticImageData } from 'next/image';

// Define a type for the product props for better type safety and reusability.
export type Product = {
  id: number;
  name: string;
  category: string;
  type: string;
  image: string | StaticImageData;
  dimensions: string;
  fireRating: string;
  integrityRating: string;
  radiationRating: string;
  insulationRating: string;
  productStandards: string;
  orientations: string;
};

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps): JSX.Element {
  // Enhanced feature badges with more relevant fire safety icons
  const features = [
    { icon: Award, text: 'Certified', color: 'text-amber-600' },
    { icon: Flame, text: 'Fire Rated', color: 'text-red-600' },
    { icon: CheckCircle, text: 'Tested', color: 'text-green-600' }
  ];

  return (
    <motion.div
      whileHover={{ y: -10, boxShadow: "0 25px 50px -12px rgba(99, 102, 241, 0.25)" }}
      transition={{ type: "spring", stiffness: 300, damping: 15 }}
    >
      <Card className="overflow-hidden bg-white/90 backdrop-blur-lg border border-indigo-300/50 rounded-3xl transition-all duration-500 group shadow-xl relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-16 h-16 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-br-full"></div>
        <div className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-tr from-purple-500/10 to-pink-500/10 rounded-tl-full"></div>
      <div className="aspect-video relative overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/10 to-purple-500/10"></div>
        <Image
          src={product.image}
          alt={product.name}
          width={400}
          height={300}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
        
        {/* Enhanced Overlay Content */}
        <div className="absolute bottom-4 left-4 right-4">
          <div className="bg-white/90 backdrop-blur-lg border border-indigo-200/50 rounded-xl p-3 shadow-lg">
            <span className="text-sm font-bold text-indigo-600 uppercase tracking-wide">{product.category}</span>
          </div>
        </div>
      </div>
      <CardContent className="p-5">
        <h3 className="font-bold text-xl text-foreground mb-3 group-hover:text-sphere-blue-primary transition-colors duration-300">
          {product.name}
        </h3>

        <div className="space-y-4">
          {/* Feature Icons */}
          <div className="flex justify-center gap-3 mb-5">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="text-center group cursor-default"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
              >
                <div className="bg-white/20 backdrop-blur-sm rounded-full p-2 mb-1 border border-white/30 group-hover:bg-white/30 transition-all duration-300">
                  <feature.icon className={`h-5 w-5 ${feature.color}`} />
                </div>
                <div className="text-xs font-semibold text-gray-700 group-hover:text-gray-900 transition-colors duration-300">{feature.text}</div>
              </motion.div>
            ))}
          </div>
          
          <div className="flex justify-between items-center pb-2 border-b border-indigo-200/30">
            <span className="text-slate-600 text-sm font-medium">Type:</span>
            <span className="font-bold text-indigo-600">{product.type}</span>
          </div>
          
          <div className="flex justify-between items-center py-2 border-b border-indigo-200/30 last:border-b-0">
            <span className="text-slate-600 text-sm font-medium">Standards:</span>
            <span className="font-semibold text-slate-700 text-xs max-w-[50%] truncate" title="{product.productStandards}">{product.productStandards}</span>
          </div>
          
          <div className="flex justify-between items-center py-2 border-b border-indigo-200/30 last:border-b-0">
            <span className="text-slate-600 text-sm font-medium">Orientation:</span>
            <span className="font-semibold text-slate-700">{product.orientations}</span>
          </div>
          
          <div className="flex justify-between items-center py-2 border-b border-indigo-200/30 last:border-b-0">
            <span className="text-slate-600 text-sm font-medium">Fire Rating:</span>
            <span className="font-bold text-indigo-600">{product.fireRating}</span>
          </div>
          
          <div className="flex justify-between items-center py-2 border-b border-indigo-200/30 last:border-b-0">
            <span className="text-slate-600 text-sm font-medium">Integrity:</span>
            <span className="font-bold text-green-600">{product.integrityRating}</span>
          </div>
          
          {product.insulationRating !== 'Not applicable' && product.insulationRating && (
            <div className="flex justify-between items-center py-2 border-b border-indigo-200/30 last:border-b-0">
              <span className="text-slate-600 text-sm font-medium">Insulation:</span>
              <span className="font-bold text-blue-600">{product.insulationRating}</span>
            </div>
          )}
        </div>

        <div className="mt-6 pt-4 border-t border-indigo-200/30 flex gap-2">
          <Button
            variant="outline"
            size="sm"
            className="flex-1 bg-gradient-to-r from-sphere-blue-primary/10 to-purple-500/10 text-sphere-blue-primary border border-sphere-blue-primary/30 hover:bg-gradient-to-r hover:from-sphere-blue-primary/20 hover:to-purple-500/20 hover:border-sphere-blue-primary/50 transition-all duration-300 font-semibold"
          >
            Learn More
          </Button>
          <Button
            variant="default"
            size="sm"
            className="flex-1 bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 font-semibold shadow-md"
          >
            Get Quote
          </Button>
        </div>
      </CardContent>
    </Card>
    </motion.div>
  );
}