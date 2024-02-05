'use client';
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { Input } from '../ui/input';
import { ClassificationData } from '@/types';

interface SearchFilterProps {
  data: ClassificationData[];
  setData: Dispatch<SetStateAction<ClassificationData[]>>;
}

const SearchFilter = ({ data, setData }: SearchFilterProps) => {
  const [searchQuery, setSearchQuery] = useState<string>('');

  function handleSearch(e: React.ChangeEvent<HTMLInputElement>) {
    setSearchQuery(e.target.value);
  }

  useEffect(() => {
    let tempData = data;
    tempData = data.filter(item =>
      item.name.trim().toLowerCase().includes(searchQuery.toLowerCase().trim())
    );
    setData(tempData);
  }, [searchQuery, data, setData]);

  return <Input placeholder="Search by a name" onChange={handleSearch} />;
};

export default SearchFilter;
