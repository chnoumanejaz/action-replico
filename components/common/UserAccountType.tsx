import { IoDiamondOutline } from 'react-icons/io5';
import { Badge } from '../ui/badge';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '../ui/tooltip';
import { Button } from '../ui/button';

const UserAccountType = () => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline" className="px-2 bg-transparent">
            <IoDiamondOutline className="h-4 w-4 mr-2" />
            Diamond
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Account type</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default UserAccountType;
