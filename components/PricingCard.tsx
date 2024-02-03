import Link from 'next/link';
import { MdDone } from 'react-icons/md';
import { SubscriptionPlan } from './sections/PricingSection';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from './ui/card';

interface PricingCardProps {
  plan: SubscriptionPlan;
}

const PricingCard = ({ plan }: PricingCardProps) => {
  const { icon: Icon } = plan;
  return (
    <Card
      className={`md:w-1/2 w-full ${
        plan.type === 'gold' ? 'bg-primary/15' : 'scale-90'
      }`}>
      <CardHeader className="flex items-center flex-col">
        <Icon className={`w-16 h-16 mb-2 p-2 border rounded-lg `} />
        {plan.type === 'gold' && <Badge>🔥 Popular</Badge>}
        <h3 className="text-2xl font-semibold tracking-wide">
          {plan.packageName}
        </h3>

        <CardDescription>{plan.packageSportingSentence}</CardDescription>
        <p className="text-5xl font-light relative pt-4">
          {plan.price}{' '}
          <span className="absolute ml-2 bottom-0 text-nowrap text-sm font-thin">
            PKR/month
          </span>{' '}
        </p>
      </CardHeader>
      <CardContent className="flex flex-col items-center pt-6 border-t">
        <ul className="space-y-4">
          {plan.benefits.map(benefit => (
            <li key={benefit.benefitId} className="flex gap-3">
              <MdDone className="p-1 rounded-full border border-primary bg-primary text-white min-h-5 min-w-5 md:min-h-6 md:min-w-6" />
              <p>{benefit.benefitName}</p>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter className={`pt-4 border-t`}>
        <Button
          asChild
          size="lg"
          variant={plan.type === 'freemium' ? 'secondary' : 'default'}
          className="w-full">
          <Link href={plan.linkPath}>
            {plan.packageName === 'Freemium'
              ? 'Signup for free'
              : 'Go with ' + plan.packageName}
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PricingCard;
