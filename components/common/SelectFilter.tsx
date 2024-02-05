import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export function SelectFilter() {
  return (
    <Select>
      <SelectTrigger className="w-1/3">
        <SelectValue placeholder="Select a Category" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Categories</SelectLabel>
          <SelectItem value="TaiChi">TaiChi</SelectItem>
          <SelectItem value="Running">Running</SelectItem>
          <SelectItem value="Swing">Swing</SelectItem>
          <SelectItem value="Juggling">Juggling</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
