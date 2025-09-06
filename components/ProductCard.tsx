import Image from 'next/image';
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
  return (
    <Card className="overflow-hidden bg-gradient-to-b from-gray-800 to-gray-900 border border-gray-700 hover:border-fire-red/50 transition-all duration-300 group shadow-lg hover:shadow-xl">
      <div className="aspect-video relative overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          width={400}
          height={300}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-2 right-2 bg-fire-red text-foreground text-xs font-bold px-2 py-1 rounded-full">
          {product.category}
        </div>
      </div>
      <CardContent className="p-5">
        <h3 className="font-bold text-xl text-foreground mb-3 group-hover:text-fire-red transition-colors duration-300">
          {product.name}
        </h3>

        <div className="space-y-3">
          <div className="flex justify-between items-center pb-2 border-b border-gray-700">
            <span className="text-muted-foreground text-sm">Type:</span>
            <span className="font-medium text-fire-red">{product.type}</span>
          </div>
          
          <div className="flex justify-between items-center">
            <span className="text-muted-foreground text-sm">Standards:</span>
            <span className="font-medium text-xs text-right max-w-[50%] text-foreground">{product.productStandards}</span>
          </div>
          
          <div className="flex justify-between items-center">
            <span className="text-muted-foreground text-sm">Orientation:</span>
            <span className="font-medium text-foreground">{product.orientations}</span>
          </div>
          
          <div className="flex justify-between items-center">
            <span className="text-muted-foreground text-sm">Fire Rating:</span>
            <span className="font-medium text-foreground">{product.fireRating}</span>
          </div>
          
          <div className="flex justify-between items-center">
            <span className="text-muted-foreground text-sm">Integrity:</span>
            <span className="font-medium text-foreground">{product.integrityRating}</span>
          </div>
          
          {product.insulationRating !== 'Not applicable' && product.insulationRating && (
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground text-sm">Insulation:</span>
              <span className="font-medium text-foreground">{product.insulationRating}</span>
            </div>
          )}
        </div>

        <div className="mt-5 pt-4 border-t border-gray-700">
          <Button 
            variant="outline" 
            size="sm" 
            className="w-full text-foreground border-gray-600 hover:bg-fire-red hover:border-fire-red hover:text-foreground transition-all duration-300 font-semibold"
          >
            View Technical Specifications
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}