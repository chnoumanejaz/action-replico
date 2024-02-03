import { TFeatures } from '@/types';
import { Button } from './ui/button';
import { Card, CardContent, CardFooter, CardHeader } from './ui/card';

import { IoOpenOutline } from 'react-icons/io5';

interface FeatureCardProps {
  feature: TFeatures;
}

const FeatureCard = ({ feature }: FeatureCardProps) => {
  const {
    description: featureDescription,
    name: featureName,
    icon: Icon,
  } = feature;

  return (
    <Card className="md:w-1/2 w-full justify-between flex flex-col">
      <CardHeader>
        <Icon className="h-10 w-10 p-1.5 mb-1 rounded border" />
        <h3 className="text-xl font-medium">{featureName}</h3>
      </CardHeader>
      <CardContent>{featureDescription}</CardContent>
      <CardFooter>
        <Button className="w-full">
          Explore Now
          <IoOpenOutline className="h-4 w-4 ml-2" />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default FeatureCard;
