import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface BookFiltersProps {
  currentFilter: string;
  onFilterChange: (filter: string) => void;
}

export function BookFilters({
  currentFilter,
  onFilterChange,
}: BookFiltersProps) {
  return (
    <div>
      <Select value={currentFilter} onValueChange={onFilterChange}>
        <SelectTrigger>
          <SelectValue placeholder="Filter books" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Books</SelectItem>
          <SelectItem value="free-ebooks">Free eBooks</SelectItem>
          <SelectItem value="paid-ebooks">Paid eBooks</SelectItem>
          <SelectItem value="ebooks">All eBooks</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
