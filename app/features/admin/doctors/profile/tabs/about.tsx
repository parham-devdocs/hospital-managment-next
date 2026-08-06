"use client";

import { useParams } from 'next/navigation';
import { Doctor } from '../../types';
import useGet from '@/app/shared/hooks/useFetch';

const About = () => {
  const { slug } = useParams();
  

const {data,error,isLoading}=useGet<Doctor>(`doctor/${slug}`)
  



// Loading state
  console.log(data?.bio)
  if (isLoading) {
    return (
      <div className='animate-pulse bg-white rounded-2xl border border-gray-100 shadow-sm p-6 leading-10'>
        <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
        <div className="h-4 bg-gray-200 rounded w-1/2"></div>
      </div>
    );
  }

  // Error state
  if (error || !data?.bio) {
    return (
      <div className='animate-fadeIn bg-white rounded-2xl border border-gray-100 shadow-sm p-6 leading-10'>
        <p className="text-gray-500">
          {error ? 'Error loading doctor information' : 'Doctor information not available'}
        </p>
      </div>
    );
  }

  return (
    <div className='animate-fadeIn bg-white rounded-2xl border border-gray-100 shadow-sm p-6 leading-10'>
      {data?.bio}
    </div>
  );
};

export default About;