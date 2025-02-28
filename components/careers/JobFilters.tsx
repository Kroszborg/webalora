"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useRouter, useSearchParams } from "next/navigation";

const PREDEFINED_LOCATIONS = [
  "all",
  "London",
  "Remote",
  "Hybrid"
];

const PREDEFINED_TYPES = [
  "all",
  "Full-time",
  // "Part-time",
  "Contract",
  "Internship"
];

const PREDEFINED_DEPARTMENTS = [
  "all",
  "Technical Support",
  "Cloud Services",
  "Security",
  "Account Management",
  "Infrastructure",
  "Software Development",
  "DevOps",
  "Data Science",
  "IT Operations",
  "Project Management",
  "Quality Assurance",
  "UI/UX Design",
  "Network Engineering",
  "System Administration",
  "Business Analysis",
  "Product Management",
  "Sales Engineering",
  "Technical Writing",
  "Customer Success"
];

interface JobFiltersProps {
  locations: string[];
  types: string[];
  departments: string[];
}

export function JobFilters({ locations, types, departments }: JobFiltersProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  
  const currentLocation = searchParams.get('location') || 'all';
  const currentType = searchParams.get('type') || 'all';
  const currentDepartment = searchParams.get('department') || 'all';

  // Combine API data with predefined options
  const allLocations = Array.from(new Set([...PREDEFINED_LOCATIONS, ...locations]));
  const allTypes = Array.from(new Set([...PREDEFINED_TYPES, ...types]));
  const allDepartments = Array.from(new Set([...PREDEFINED_DEPARTMENTS, ...departments]));

  const updateFilters = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    
    if (value === 'all') {
      params.delete(key);
    } else {
      params.set(key, value);
    }
    
    router.push(`/careers?${params.toString()}`);
  };

  return (
    <div className="flex flex-wrap gap-4 mb-8">
      <Select
        value={currentLocation}
        onValueChange={(value) => updateFilters('location', value)}
      >
        <SelectTrigger className="w-full sm:w-[180px]">
          <SelectValue placeholder="Location" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Locations</SelectItem>
          {allLocations.filter(loc => loc !== 'all').map((location) => (
            <SelectItem key={location} value={location}>
              {location}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Select
        value={currentType}
        onValueChange={(value) => updateFilters('type', value)}
      >
        <SelectTrigger className="w-full sm:w-[180px]">
          <SelectValue placeholder="Employment Type" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Types</SelectItem>
          {allTypes.filter(type => type !== 'all').map((type) => (
            <SelectItem key={type} value={type}>
              {type}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Select
        value={currentDepartment}
        onValueChange={(value) => updateFilters('department', value)}
      >
        <SelectTrigger className="w-full sm:w-[180px]">
          <SelectValue placeholder="Department" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Departments</SelectItem>
          {allDepartments.filter(dept => dept !== 'all').map((dept) => (
            <SelectItem key={dept} value={dept}>
              {dept}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Button
        variant="outline"
        onClick={() => router.push('/careers')}
        className="w-full sm:w-auto"
      >
        Reset Filters
      </Button>
    </div>
  );
}
