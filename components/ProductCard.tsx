import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

// Define a type for the product props for better type safety and reusability.
export type Product = {
  id: number;
  name: string;
  category: string;
  type: string;
  image: string;
  dimensions: string;
  fireRating: string;
  integrityRating: string;
  radiationRating: string;
  productStandards: string;
};

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps): JSX.Element {
  return (
    <Card className="overflow-hidden bg-gray-800 border-gray-700 hover:border-gray-600 transition-all duration-300 group">
      <div className="aspect-video relative overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          width={400}
          height={300}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <CardContent className="p-4">
        <h3 className="font-semibold text-lg text-white mb-3">{product.name}</h3>

        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-gray-400">Curtain Types:</span>
            <span className="font-medium">{product.category}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-400">Product Standards:</span>
            <span className="font-medium text-xs">{product.productStandards}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-400">Dimensions:</span>
            <span className="font-medium text-xs">{product.dimensions}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-400">Integrity Rating:</span>
            <span className="font-medium">{product.integrityRating}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-400">Radiation Rating:</span>
            <span className="font-medium text-xs">{product.radiationRating}</span>
          </div>
        </div>

        <div className="mt-4 pt-4 border-t border-gray-700">
          <Button variant="outline" size="sm" className="w-full text-gray-300 border-gray-600 hover:bg-gray-700">
            View Details
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}