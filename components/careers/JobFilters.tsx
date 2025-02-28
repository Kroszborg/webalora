"use client";

import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface JobFiltersProps {
  onFilter: (location: string, type: string, department: string) => void;
  selectedLocation: string;
  selectedType: string;
  selectedDepartment: string;
}

export function JobFilters({
  onFilter,
  selectedLocation,
  selectedType,
  selectedDepartment,
}: JobFiltersProps) {
  // Keep the predefined options
  const locations = ["all", "London", "Remote", "Hybrid"];
  const types = ["all", "Full-time", "Part-time", "Contract"];
  const departments = [
    "all",
    "Technical Support",
    "Cloud Services",
    "Security",
    "Account Management",
    "Infrastructure",
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
      <Select
        value={selectedLocation}
        onValueChange={(value) =>
          onFilter(value, selectedType, selectedDepartment)
        }
      >
        <SelectTrigger>
          <SelectValue placeholder="All Locations" />
        </SelectTrigger>
        <SelectContent>
          {locations.map((location) => (
            <SelectItem key={location} value={location}>
              {location === "all" ? "All Locations" : location}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Select
        value={selectedType}
        onValueChange={(value) =>
          onFilter(selectedLocation, value, selectedDepartment)
        }
      >
        <SelectTrigger>
          <SelectValue placeholder="All Job Types" />
        </SelectTrigger>
        <SelectContent>
          {types.map((type) => (
            <SelectItem key={type} value={type}>
              {type === "all" ? "All Job Types" : type}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Select
        value={selectedDepartment}
        onValueChange={(value) =>
          onFilter(selectedLocation, selectedType, value)
        }
      >
        <SelectTrigger>
          <SelectValue placeholder="All Departments" />
        </SelectTrigger>
        <SelectContent>
          {departments.map((department) => (
            <SelectItem key={department} value={department}>
              {department === "all" ? "All Departments" : department}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
